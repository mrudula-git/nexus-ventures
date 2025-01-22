const Video = require('../models/Video');

// Upload Video
const uploadVideo = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ message: 'Please upload video files' });
    }

    const { title, description, duration } = req.body;
    const videoUrl = req.files.video[0].path;
    const thumbnailUrl = req.files.thumbnail[0].path;
    const logoUrl = req.files.logo ? req.files.logo[0].path : null;

    const video = new Video({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      logoUrl,
      duration,
      author: req.user.id
    });

    await video.save();

    res.status(201).json({
      message: 'Video uploaded successfully',
      video
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate('author', 'firstName lastName')
      .sort('-createdAt');

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate('author', 'firstName lastName');

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Increment views
    video.views += 1;
    await video.save();

    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Video
const updateVideo = async (req, res) => {
  try {
    let video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video or is admin
    if (video.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this video' });
    }

    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.files) {
      if (req.files.thumbnail) {
        updateData.thumbnailUrl = req.files.thumbnail[0].path;
      }
      if (req.files.logo) {
        updateData.logoUrl = req.files.logo[0].path;
      }
    }

    video = await Video.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({
      message: 'Video updated successfully',
      video
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Video
const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }

    // Check if user owns the video or is admin
    if (video.author.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this video' });
    }

    await video.remove();

    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get User Videos
const getUserVideos = async (req, res) => {
  try {
    const videos = await Video.find({ author: req.user.id })
      .sort('-createdAt');

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  uploadVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  getUserVideos
};

const express = require('express');
const router = express.Router();
const {
  uploadVideo,
  getAllVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
  getUserVideos
} = require('../controllers/videoController');
const { protect, authorize } = require('../middleware/auth');
const { uploadVideoFiles } = require('../middleware/upload');

// Public routes
router.get('/', getAllVideos);
router.get('/:id', getVideoById);

// Protected routes
router.use(protect); // All routes below this will be protected

router.post('/', uploadVideoFiles, uploadVideo);
router.get('/user/videos', getUserVideos);
router.put('/:id', uploadVideoFiles, updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router;

const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dest = 'uploads/';
    if (file.fieldname === 'video') {
      dest += 'videos/';
    } else if (file.fieldname === 'thumbnail') {
      dest += 'thumbnails/';
    } else if (file.fieldname === 'logo') {
      dest += 'logos/';
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'video') {
    if (!file.originalname.match(/\.(mp4|webm|ogg)$/)) {
      return cb(new Error('Please upload a valid video file'), false);
    }
  } else if (file.fieldname === 'thumbnail' || file.fieldname === 'logo') {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Please upload a valid image file'), false);
    }
  }
  cb(null, true);
};

// Create multer upload instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: file.fieldname === 'video' ? 100000000 : 5000000 // 100MB for videos, 5MB for images
  }
});

// Export upload middleware
exports.uploadVideo = upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 },
  { name: 'logo', maxCount: 1 }
]);

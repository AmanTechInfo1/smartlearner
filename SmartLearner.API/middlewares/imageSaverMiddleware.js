const multer = require("multer");
const imageSaverMiddleware = (req, res, next) => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/'); // Destination directory where files will be saved
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname); // Use the original filename for the uploaded file
        }
    });

    const upload = multer({ storage: storage }).single('image');
    upload(req, res, function (err) {
        if (err) {
            // Handle multer errors, e.g., file too large, invalid file type, etc.
            return res.status(400).json({ error: 'File upload failed.', details: err.message });
        }
        if (req.file) {
            req.body.image = req.file.originalname
        }else{
            req.body.image = ""
        }
        next();
    });
};
module.exports = { imageSaverMiddleware };

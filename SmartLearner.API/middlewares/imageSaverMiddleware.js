const multer = require("multer");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const imageSaverMiddleware = (req, res, next) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/'); // Destination directory where files will be saved
        },
        filename: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, `${uuidv4()}${ext}`);  // Use the original filename for the uploaded file
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
        } else {
            req.body.image = ""
        }
        next();
    });
};




const multipleimageSaverMiddleware = (req, res, next) => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/'); // Destination directory where files will be saved
        },
        filename: function (req, file, cb) {

            // cb(null, file.originalname); // Use the original filename for the uploaded file
            const ext = path.extname(file.originalname);
            cb(null, `${uuidv4()}${ext}`); // Use UUID to generate unique filenames with original extension
        }
    });




    const upload = multer({ storage: storage }).fields([
        { name: 'option1Image', maxCount: 1 },
        { name: 'option2Image', maxCount: 1 },
        { name: 'option3Image', maxCount: 1 },
        { name: 'option4Image', maxCount: 1 },
        { name: 'questionImage', maxCount: 1 }
    ]);
    upload(req, res, function (err) {
        try {
            if (err) {
                // Handle multer errors, e.g., file too large, invalid file type, etc.
                return res.status(400).json({ error: 'File upload failed.', details: err.message });
            }
            if (req.files.questionImage) {
                req.body.questionImage = req.files.questionImage[0].filename
            } else {
                req.body.questionImage = ""
            }

            if(req.files.option1Image){
                req.body.option1Image = req.files.option1Image[0].filename
            }else{
                req.body.option1Image = ""
            }
            if(req.files.option2Image){
                req.body.option2Image = req.files.option2Image[0].filename
            }else{
                req.body.option2Image = ""
            }
            if(req.files.option3Image){
                req.body.option3Image = req.files.option3Image[0].filename
            }else{
                req.body.option3Image = ""
            }
            if(req.files.option4Image){
                req.body.option4Image = req.files.option4Image[0].filename
            }else{
                req.body.option4Image = ""
            }
            next();
        }
        catch (err) {
            next(err);
        }
    });
};
module.exports = { imageSaverMiddleware, multipleimageSaverMiddleware };

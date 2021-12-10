const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');


const isS3Configured = process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.AWS_REGION && process.env.AWS_BUCKET;


const s3 = new aws.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

/*
    s3multerUpload is a multer instance preconfigured to upload one file directly to S3
    Just use it as: s3multerUpload.single(NAME_ATTRIBUTE)
    if no S3 config is present, use memory storage.
*/
const s3multerUpload = isS3Configured ?
        multer({
            storage: multerS3({
                s3: s3,
                bucket: process.env.AWS_BUCKET || 'config AWS vars',
                contentType: multerS3.AUTO_CONTENT_TYPE,
                key: (req, file, cb) => {
                    const fileExt = file.mimetype.split("/").pop();

                    cb(null, uuidv4() + '.' + fileExt);
                },
            })
        })
        :
        multer({ storage: multer.memoryStorage() });



const s3deleteFile = (key) => {
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: key
    };

    return new Promise((resolve, reject) => {
        s3.deleteObject(params, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

module.exports = {
    s3multerUpload,
    s3deleteFile
};
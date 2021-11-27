const aws = require('aws-sdk');

const s3 = new aws.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// file: valid object from multer-s3 req.file
const s3deleteFile = (file) => {
    const params = {
        Bucket: file.bucket,
        Key: file.key
    };

    s3.deleteObject(params, (err, data) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    s3,
    s3deleteFile
};
const aws = require("aws-sdk");
require("dotenv").config();
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

module.exports = {
  upload: function (req, res) {
    const s3 = new aws.S3();
    const fileName = req.query["file-name"];
    const fileType = req.query["file-type"];
    const s3Params = {
      Bucket: S3_BUCKET_NAME,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read",
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  },

  delete: function (req, res) {
    const s3 = new aws.S3();
    let S3params = { Bucket: S3_BUCKET_NAME, Key: req.params.key };
    return new Promise((resolve, reject) => {
      s3.deleteObject(S3params, function (err, data) {
        if (err) console.log(err);
        else {
          console.log("Successfully deleted file from bucket");
          res.status(204).end();
        }
      });
    });
  },
};

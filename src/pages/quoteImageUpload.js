// pages/api/upload.js
import { IncomingForm } from 'formidable';
import fs from 'fs';
import AWS from 'aws-sdk';

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadFile = async (req, res) => {
  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error parsing the files' });
      return;
    }

    const fileContent = fs.readFileSync(files.file.path);
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: files.file.name,
      Body: fileContent,
      ContentType: files.file.type,
    };

    try {
      const data = await s3.upload(params).promise();
      res.status(200).json({ message: 'File uploaded successfully', data });
    } catch (uploadErr) {
      res.status(500).json({ error: 'Error uploading the file', uploadErr });
    }
  });
};

export default uploadFile;

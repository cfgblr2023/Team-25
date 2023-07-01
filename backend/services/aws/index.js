const aws = require('aws-sdk');


const ses = new aws.SES({
    signatureVersion: 'v4',
    region: 'ap-south-1',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
})

module.exports = ses;
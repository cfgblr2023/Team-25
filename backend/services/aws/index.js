const aws = require('aws-sdk');


const ses = new aws.SES({
    signatureVersion: 'v4',
    region: 'ap-south-1',
    accessKeyId: '',
    secretAccessKey: '',
})

module.exports = ses;
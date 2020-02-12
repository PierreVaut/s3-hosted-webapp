# S3 Hosted Webapp

The aim was to test the upload and deployment of a [React App](https://github.com/facebook/create-react-app) using AWS S3 Static Web Hosting.

### Build and Deployment

```yarn deploy```

Endpoint => http://s3-hosted-webapp-pierrevaut2020.s3-website-eu-west-1.amazonaws.com/

### Serverless backend

API Gateway will trigger the "cloudguruServerless" lambda function through lambda proxy.

API is only available on stage /prod with 'GET' method

### Troubleshooting

Check your AWS profile !
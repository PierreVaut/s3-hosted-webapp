# S3 Hosted Webapp

The aim was to test the upload and deployment of a [React App](https://github.com/facebook/create-react-app) using AWS S3 Static Web Hosting and AWS lambda back-end.

### Build and upload

```yarn deploy```

### Deployment

S3 Endpoint => http://s3-hosted-webapp-pierrevaut2020.s3-website-eu-west-1.amazonaws.com/

Route 53 Endpoint => http://randomwebsite.xyz/
(Tech engineer here, so no time to find a fancy domain name 😂)

### Serverless backend

API Gateway will trigger the "cloudguruServerless" lambda function through lambda proxy.

API is only available on stage /prod with 'GET' method.

### Usage plan

Quota: max 500 requests per week.

Throttling: max 1 request per second.

### Troubleshooting

Check your AWS profile before ruuning deploy script!
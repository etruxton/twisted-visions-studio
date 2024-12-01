# Twisted Visions Studio

This is a static website hosted on S3. Serves as an art gallery for a family member who makes sculptures out of chicken wire.

https://twistedvisionsstudio.com

## Development Commands

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployment Commands

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

### `aws configure`

When you run this command, you’ll be prompted to enter:

- Access Key ID: Your AWS access key.
- Secret Access Key: Your AWS secret key.
- Default Region: The AWS region for your services (e.g., us-east-1).
- Default Output Format: Format for AWS CLI output (e.g., json, table, or text).

### `aws s3 sync build/ s3://twistedvisionsstudio.com`

The `aws s3 sync` command is used to synchronize your local build/ directory with an S3 bucket. This uploads your static files to the bucket, making them available for hosting.

- Source Directory (build/): Path to the local directory containing your built project files.
- Destination Bucket (s3://twistedvisionsstudio.com): The S3 bucket where your files will be uploaded.
- This command ensures that only new or updated files are uploaded to reduce unnecessary data transfer.

### `aws s3 sync build/ s3://twistedvisionsstudio.com --delete`

The `--delete` flag in the `aws s3 sync` command removes files in the S3 bucket that no longer exist in your local build/ directory. Use this flag to ensure your S3 bucket mirrors the current state of your project.

**Important**: This will delete any files in the S3 bucket that are not in your local `build/` directory. Use with caution!

### `aws cloudfront create-invalidation --distribution-id E2JBNOY4U9BCHB --paths "/*"`

After uploading new files to S3, use the `aws cloudfront create-invalidation` command to invalidate cached files in CloudFront. This ensures that users see the latest version of your website.

- `--distribution-id`: The ID of your CloudFront distribution.
- `--paths "/*"`: Specifies which paths to invalidate. The /* pattern invalidates all cached files, forcing CloudFront to fetch the latest versions from your S3 bucket.

#### By following these steps, your latest changes will be live on your website.

## Informational Domain Management

Domain https://twistedvisionsstudio.com is hosted on CloudFlare.

https://twistedvisionsstudio.com is a CNAME for our CloudFront Distribution domain name: https://d3vr3c09xvq0un.cloudfront.net

We also have a CNAME for the public cert inside of AWS that is used for domain verification.

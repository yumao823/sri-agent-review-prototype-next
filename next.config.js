/* eslint-disable camelcase */
const path = require('path')

module.exports = {
  images: {
    domains: [
      `${process.env.aws_user_files_s3_bucket}.s3.${process.env.aws_user_files_s3_bucket_region}.amazonaws.com`,
    ],
  },
  webpack: (config) => {
    /**
     * Missing typescript loader when importing from sibling packages in a mono-repo
     * This fixes the error: Module parse failed: Unexpected token (5:7). You may need an appropriate loader to handle this file type
     * RCA: To fix issue with typescript loader not working when importing from sibling packages in this package when running yarn build
     * Fix: Add sibling package paths into the rule.include array (which contains the paths to apply the loader on)
     */
    // Find rules that includes current directory
    const rulesWithCurrentDir = config.module.rules.filter((rule) => rule.include && rule.include.includes(__dirname))
    // Prepare the sibling package paths that we want to include
    const apiPath = path.resolve(`${__dirname}../../api`)
    const leaderAutowebPath = path.resolve(`${__dirname}../../leader-autoweb`)
    const commonPath = path.resolve(`${__dirname}../../common`)
    const siblingPackagePaths = [apiPath, leaderAutowebPath, commonPath]
    // Push sibling package paths
    rulesWithCurrentDir.forEach((ruleWithCurrentDir) => ruleWithCurrentDir.include.push(...siblingPackagePaths))

    return config
  },
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
    DEPLOYMENT_ENV: process.env.DEPLOYMENT_ENV,
    npm_package_version: process.env.npm_package_version,
    aws_project_region: process.env.aws_project_region,
    aws_appsync_graphqlEndpoint: process.env.aws_appsync_graphqlEndpoint,
    aws_appsync_region: process.env.aws_appsync_region,
    aws_appsync_authenticationType: process.env.aws_appsync_authenticationType,
    aws_appsync_apiKey: process.env.aws_appsync_apiKey,
    aws_cognito_identity_pool_id: process.env.aws_cognito_identity_pool_id,
    aws_cognito_region: process.env.aws_cognito_region,
    aws_user_pools_id: process.env.aws_user_pools_id,
    aws_user_pools_web_client_id: process.env.aws_user_pools_web_client_id,
    aws_user_files_s3_bucket: process.env.aws_user_files_s3_bucket,
    aws_user_files_s3_bucket_region: process.env.aws_user_files_s3_bucket_region,
    AWS_SES_ACCESS_KEY: process.env.AWS_SES_ACCESS_KEY,
    AWS_SES_SECRET_KEY: process.env.AWS_SES_SECRET_KEY,
    AWS_SES_REGION: process.env.AWS_SES_REGION,
    aws_cloud_logic_custom_stripe_endpoint: process.env.aws_cloud_logic_custom_stripe_endpoint,
    aws_cloud_logic_custom_mailgen_endpoint: process.env.aws_cloud_logic_custom_mailgen_endpoint,
    aws_cloud_logic_custom_twilio_endpoint: process.env.aws_cloud_logic_custom_twilio_endpoint,
    aws_cloud_logic_custom_rapyd_endpoint: process.env.aws_cloud_logic_custom_rapyd_endpoint,
    aws_cloud_logic_custom_sunsso_endpoint: process.env.aws_cloud_logic_custom_sunsso_endpoint,
    aws_cloud_logic_custom_pushNotification_endpoint: process.env.aws_cloud_logic_custom_pushNotification_endpoint,
    stripe_public_key: process.env.stripe_public_key,
    ecoprop_secret: process.env.ecoprop_secret,
    ecoprop_key: process.env.ecoprop_key,
    google_map_key: process.env.google_map_key,
    aws_cloud_logic_custom_fetch_api_endpoint: process.env.aws_cloud_logic_custom_fetch_api_endpoint,
    aws_cloud_logic_custom_mail_endpoint: process.env.aws_cloud_logic_custom_mail_endpoint,
    AUTOWEB_ID: process.env.AUTOWEB_ID,
  },
}

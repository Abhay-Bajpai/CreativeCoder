#!/bin/bash

# GitHub Pages deployment script
echo "🚀 Starting GitHub Pages deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi
echo "✅ Build completed"

# Ensure the dist directory exists
if [ ! -d "dist" ]; then
  echo "❌ The build didn't generate a dist folder. Please check the build configuration."
  exit 1
fi

# Run the node deployment script
echo "🚀 Deploying to GitHub Pages using gh-pages..."
node deploy.js

echo "🎉 Deployment process completed!"
echo "ℹ️ Check the output above for any errors or success messages."
echo "ℹ️ If successful, your website should be available at https://Abhay-Bajpai.github.io/portfolio/"
echo ""
echo "📋 Next steps:"
echo "1. Visit your repository on GitHub: https://github.com/Abhay-Bajpai/portfolio"
echo "2. Go to Settings > Pages to verify the deployment"
echo "3. Make sure the source is set to the gh-pages branch"
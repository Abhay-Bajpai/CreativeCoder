#!/usr/bin/env node
// deploy.js - GitHub Pages Deployment Script
import ghpages from 'gh-pages';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

// Configuration - Replace these values with your information
const GITHUB_REPO = 'https://github.com/Abhay-Bajpai/portfolio.git'; // Your GitHub repository URL
const GITHUB_USERNAME = 'Abhay-Bajpai'; // Your GitHub username
const GITHUB_EMAIL = 'abhayofc59@gmail.com'; // Your GitHub email
const REPO_NAME = 'portfolio'; // Repository name on GitHub

async function main() {
  console.log('🚀 Starting GitHub Pages deployment process...');
  
  try {
    // 1. Build the project
    console.log('📦 Building the project...');
    await execAsync('npm run build');
    console.log('✅ Build completed');
    
    // 2. Prepare the dist directory for GitHub Pages
    console.log('🔧 Preparing files for GitHub Pages...');
    
    // Create an index.html file in the root that redirects to the public folder
    const distPublicPath = path.resolve('dist/public');
    const distPath = path.resolve('dist');
    
    // Copy all files from dist/public to dist root for GitHub Pages
    try {
      const files = await fs.readdir(distPublicPath);
      for (const file of files) {
        const srcPath = path.join(distPublicPath, file);
        const destPath = path.join(distPath, file);
        await fs.copyFile(srcPath, file);
        console.log(`Copied: ${file}`);
      }
      console.log('✅ Files prepared for GitHub Pages');
    } catch (err) {
      console.error('⚠️ Error copying files:', err);
      
      // If dist/public doesn't exist, we'll need a different approach
      console.log('⚠️ Could not find build output in expected location.');
      console.log('📋 Using alternative deployment method...');
      
      // Create a GitHub Pages compatible static version of the site
      await createStaticSite();
    }
    
    // 3. Deploy to GitHub Pages
    console.log('🚀 Deploying to GitHub Pages...');
    
    const publishOptions = {
      branch: 'gh-pages',
      message: 'Auto-deploy from Replit [ci skip]',
      dotfiles: true,
    };
    
    // Add GitHub credentials if provided
    if (GITHUB_USERNAME && GITHUB_EMAIL) {
      publishOptions.user = {
        name: GITHUB_USERNAME,
        email: GITHUB_EMAIL
      };
      
      if (GITHUB_REPO) {
        publishOptions.repo = GITHUB_REPO;
      }
    }
    
    ghpages.publish('dist', publishOptions, (err) => {
      if (err) {
        console.error('❌ Deployment failed:', err);
        return;
      }
      
      console.log('');
      console.log('🎉 Successfully deployed to GitHub Pages!');
      
      if (GITHUB_USERNAME && REPO_NAME) {
        console.log(`🌐 Your website will be available at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/`);
      } else {
        console.log('ℹ️ Check your GitHub repository settings to find your deployment URL.');
        console.log('ℹ️ If this is your first deploy, it may take a few minutes for the site to be available.');
      }
      
      console.log('');
      console.log('📋 Next steps:');
      console.log('1. In your GitHub repository, go to Settings > Pages');
      console.log('2. Ensure the source is set to "gh-pages" branch');
      console.log('3. Check "Enforce HTTPS" for better security');
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Deployment process failed:', error);
    console.error(error);
  }
}

// Create a static version of the website for GitHub Pages
async function createStaticSite() {
  console.log('🔨 Creating a static version of your portfolio...');
  
  // Create a simple static site in the dist folder
  const distPath = path.resolve('dist');
  
  try {
    // Make sure dist directory exists
    await fs.mkdir(distPath, { recursive: true });
    
    // Create an index.html file that redirects to your GitHub Pages deployment
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abhay Bajpai - Portfolio</title>
  <style>
    body, html {
      height: 100%;
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: linear-gradient(to bottom, #1a1a2e, #16213e);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 20px;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(to right, #8b5cf6, #d8b4fe);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      color: #d1d5db;
    }
    
    .btn {
      display: inline-block;
      background: #8b5cf6;
      color: white;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      margin: 0 10px 20px 10px;
    }
    
    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.5);
    }
    
    .social {
      margin-top: 40px;
    }
    
    .social a {
      display: inline-block;
      margin: 0 15px;
      color: #d1d5db;
      transition: color 0.3s ease;
    }
    
    .social a:hover {
      color: #8b5cf6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Abhay Bajpai</h1>
    <p>Aspiring Software Developer & AI/ML Explorer</p>
    <p>My portfolio website is hosted on GitHub Pages. Click the button below to visit:</p>
    
    <a href="https://${GITHUB_USERNAME || 'username'}.github.io/${REPO_NAME || 'portfolio'}/" class="btn">View Portfolio</a>
    
    <div class="social">
      <a href="https://github.com/Abhay-Bajpai" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/abhay-bajpai-" target="_blank">LinkedIn</a>
      <a href="mailto:abhayofc59@gmail.com">Email</a>
    </div>
  </div>
</body>
</html>`;
    
    await fs.writeFile(path.join(distPath, 'index.html'), html);
    console.log('✅ Created static site for GitHub Pages');
  } catch (err) {
    console.error('Error creating static site:', err);
  }
}

main();
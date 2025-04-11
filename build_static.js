#!/usr/bin/env node
// build_static.js - Static build script for GitHub Pages
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function main() {
  console.log('🚀 Starting static build process for GitHub Pages...');
  
  try {
    // 1. Build the project
    console.log('📦 Building the project with Vite...');
    await execAsync('npm run build');
    console.log('✅ Build completed');
    
    // 2. Create index.html for GitHub Pages
    console.log('📝 Creating static HTML files...');
    const distPath = path.resolve('dist');
    const publicPath = path.resolve('dist/public');
    
    // Ensure dist directory exists
    await fs.mkdir(distPath, { recursive: true });
    
    if (await directoryExists(publicPath)) {
      console.log('📂 Copying files from dist/public to dist...');
      try {
        const files = await fs.readdir(publicPath);
        for (const file of files) {
          const srcPath = path.join(publicPath, file);
          const destPath = path.join(distPath, file);
          
          // Check if it's a directory
          const stats = await fs.stat(srcPath);
          if (stats.isDirectory()) {
            console.log(`📁 Copying directory: ${file}`);
            await copyDirectory(srcPath, destPath);
          } else {
            console.log(`📄 Copying file: ${file}`);
            await fs.copyFile(srcPath, destPath);
          }
        }
        console.log('✅ Files prepared for GitHub Pages');
      } catch (err) {
        console.error('⚠️ Error copying files:', err);
      }
    } else {
      console.log('⚠️ dist/public directory not found, using alternative approach');
      await createStaticRedirect();
    }
    
    console.log('🎉 Static build completed successfully!');
    console.log('📋 Next step: Deploy using the deploy.js script or GitHub Actions');
    
  } catch (error) {
    console.error('❌ Build process failed:', error);
    console.error(error);
  }
}

async function directoryExists(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch (err) {
    return false;
  }
}

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  
  const entries = await fs.readdir(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function createStaticRedirect() {
  console.log('🔨 Creating a static GitHub Pages redirect...');
  
  const distPath = path.resolve('dist');
  
  // Create an index.html file for GitHub Pages
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="refresh" content="0;url=https://abhay-bajpai.github.io/portfolio/">
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
    
    .loader {
      border: 5px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top: 5px solid #8b5cf6;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
      margin: 20px auto;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Abhay Bajpai</h1>
    <p>Redirecting to portfolio website...</p>
    <div class="loader"></div>
    <p>If you are not redirected automatically, <a href="https://abhay-bajpai.github.io/portfolio/" style="color: #8b5cf6;">click here</a>.</p>
  </div>
</body>
</html>`;
  
  await fs.writeFile(path.join(distPath, 'index.html'), html);
  console.log('✅ Created static redirect page for GitHub Pages');
}

main();
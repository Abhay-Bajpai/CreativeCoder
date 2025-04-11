# Portfolio Deployment Guide

This document explains how to deploy your portfolio to GitHub Pages.

## 📋 Prerequisites

Before you begin, make sure you have:

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## 🚀 Deployment Options

You have three options to deploy your portfolio:

### Option 1: Using the Deployment Script (Recommended)

1. Run the deployment script:
   ```bash
   ./deploy_portfolio.sh
   ```

2. Follow the prompts in the terminal.

3. The script will:
   - Build your portfolio
   - Set up a GitHub repository (if needed)
   - Deploy to GitHub Pages

### Option 2: Manual Deployment

1. Create a GitHub repository named `portfolio` at https://github.com/new

2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Abhay-Bajpai/portfolio.git
   git push -u origin main
   ```

3. Deploy to GitHub Pages using the deploy.js script:
   ```bash
   node deploy.js
   ```

### Option 3: GitHub Actions (Automated CI/CD)

This repository includes a GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically deploys your portfolio when you push changes to the `main` branch.

To use it:

1. Push your code to GitHub as described in Option 2.
2. Go to your repository on GitHub.
3. Navigate to the "Actions" tab.
4. The workflow will run automatically on each push to the main branch.

## 📝 Configuration

The deployment is configured for the following:

- GitHub Username: `Abhay-Bajpai`
- Repository Name: `portfolio`
- Deployment URL: `https://abhay-bajpai.github.io/portfolio/`

If you need to change these settings, edit the following files:

- `deploy.js`: Update the GitHub username, repository, and email.
- `public/CNAME`: If you have a custom domain.
- `.github/workflows/deploy.yml`: If you're using GitHub Actions.

## 🔍 Troubleshooting

If you encounter issues during deployment:

1. **Build fails**: Check your code for errors and make sure all dependencies are installed.
2. **Deployment fails**: Verify your GitHub credentials and repository settings.
3. **Page not showing after deployment**: It may take a few minutes for GitHub Pages to update. Also check that the source in GitHub Pages settings is set to the `gh-pages` branch.

## 🎉 After Deployment

After successful deployment:

1. Your portfolio will be available at `https://abhay-bajpai.github.io/portfolio/`
2. To use a custom domain, add it in your GitHub repository settings under Pages.
3. Make sure to update links in your portfolio to use relative paths (e.g., `/assets/image.png` instead of absolute paths).

## 🔄 Updating Your Portfolio

To update your portfolio after making changes:

1. Push your changes to GitHub
2. Run the deployment script again OR let GitHub Actions deploy it automatically

## 📱 Testing Your Deployment

After deployment, test your portfolio on multiple devices and browsers to ensure it displays correctly.

---

If you have any questions or need help with the deployment process, feel free to reach out!
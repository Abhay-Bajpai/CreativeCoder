#!/bin/bash
# Portfolio Deployment Script for GitHub Pages

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${PURPLE}===========================================================${NC}"
echo -e "${PURPLE}          PORTFOLIO DEPLOYMENT TO GITHUB PAGES             ${NC}"
echo -e "${PURPLE}===========================================================${NC}"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}Error: Git is not installed.${NC}"
    echo "Please install Git and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed.${NC}"
    echo "Please install Node.js and try again."
    exit 1
fi

# Step 1: Set up GitHub repository
echo -e "${BLUE}Step 1: Setting up GitHub repository${NC}"
echo -e "${CYAN}This script will deploy your portfolio to GitHub Pages.${NC}"
echo ""

# Configuration settings
GITHUB_USERNAME="Abhay-Bajpai"
REPO_NAME="portfolio"
GITHUB_EMAIL="abhayofc59@gmail.com"

echo -e "GitHub Username: ${GREEN}$GITHUB_USERNAME${NC}"
echo -e "Repository Name: ${GREEN}$REPO_NAME${NC}"
echo -e "GitHub Email: ${GREEN}$GITHUB_EMAIL${NC}"
echo ""

# If repository doesn't exist locally, guide user on creating it
if [ ! -d .git ]; then
    echo -e "${YELLOW}No Git repository found in the current directory.${NC}"
    echo -e "You will need to create a GitHub repository and push your code to it."
    echo ""
    echo -e "${CYAN}Steps to create a new GitHub repository:${NC}"
    echo "1. Go to https://github.com/new"
    echo "2. Name your repository: $REPO_NAME"
    echo "3. Make it public"
    echo "4. Don't add any files (no README, .gitignore, or license)"
    echo "5. Click 'Create repository'"
    echo ""
    echo -e "${CYAN}After creating the repository, run these commands:${NC}"
    echo "git init"
    echo "git add ."
    echo "git commit -m \"Initial commit\""
    echo "git branch -M main"
    echo "git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    echo "git push -u origin main"
    echo ""
    echo -e "${YELLOW}Would you like to initialize the repository now? (y/n)${NC}"
    read -r answer
    if [[ $answer =~ ^[Yy]$ ]]; then
        git init
        git config user.name "$GITHUB_USERNAME"
        git config user.email "$GITHUB_EMAIL"
        git add .
        git commit -m "Initial commit"
        git branch -M main
        echo -e "${GREEN}Git repository initialized locally.${NC}"
        echo -e "${YELLOW}Please create the GitHub repository manually and run:${NC}"
        echo "git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
        echo "git push -u origin main"
        echo ""
        echo -e "${YELLOW}After pushing to GitHub, run this script again to deploy.${NC}"
        exit 0
    else
        echo -e "${YELLOW}Please set up your GitHub repository manually and run this script again.${NC}"
        exit 0
    fi
fi

# Step 2: Build the portfolio
echo -e "${BLUE}Step 2: Building the portfolio${NC}"
echo -e "${CYAN}This will create a production build of your portfolio.${NC}"
echo ""

npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Please fix the errors and try again.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully!${NC}"
echo ""

# Step 3: Prepare files for GitHub Pages
echo -e "${BLUE}Step 3: Preparing files for GitHub Pages${NC}"
echo ""

# Copy public files to dist if they exist
if [ -d "public" ]; then
    echo -e "${CYAN}Copying public files to dist directory...${NC}"
    mkdir -p dist
    cp -r public/* dist/ 2>/dev/null || :
    echo -e "${GREEN}✓ Public files copied${NC}"
else
    echo -e "${YELLOW}No public directory found. Skipping copy.${NC}"
fi

echo ""

# Step 4: Deploy to GitHub Pages
echo -e "${BLUE}Step 4: Deploying to GitHub Pages${NC}"
echo -e "${CYAN}Using gh-pages to deploy the portfolio...${NC}"
echo ""

node deploy.js
if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed. Please check the error message above.${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Deployment completed!${NC}"
echo ""

# Step 5: Final instructions
echo -e "${BLUE}Step 5: Finishing up${NC}"
echo -e "${CYAN}Your portfolio has been deployed to GitHub Pages. Follow these steps to complete the setup:${NC}"
echo ""
echo -e "1. Go to your GitHub repository: ${GREEN}https://github.com/$GITHUB_USERNAME/$REPO_NAME${NC}"
echo -e "2. Navigate to Settings > Pages"
echo -e "3. Ensure source is set to 'gh-pages' branch"
echo -e "4. Wait a few minutes for GitHub Pages to build your site"
echo -e "5. Your portfolio will be available at: ${GREEN}https://$GITHUB_USERNAME.github.io/$REPO_NAME/${NC}"
echo ""
echo -e "${PURPLE}===========================================================${NC}"
echo -e "${GREEN}            DEPLOYMENT PROCESS COMPLETED!                   ${NC}"
echo -e "${PURPLE}===========================================================${NC}"
# Wanderlust Web Project Installation Guide

This guide will walk you through the installation process for the Wanderlust web project. Follow the steps below to set up the project locally on your machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (version 18 recommended)
- MongoDB
- Nodemon (installed globally)

## Installation Steps

1. Clone the Wanderlust repository from GitHub:

   ```
   git clone https://github.com/gawandeabhishek/Wanderlust-Major-Project.git
   ```

2. Set up the database:
   - Create a `.env` file in the root directory of the project.
   - Add the following line to the `.env` file:

     ```
     ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
     ```

3. Set up Cloudinary:
   - Go to [Cloudinary](https://cloudinary.com/) and sign up for a free account.
   - Once logged in, obtain your Cloudinary `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET`.
   - Add these values to the `.env` file:



4. Set the secret for your Cloudinary storage:
   - Add a `SECRET` key to your `.env` file and set it to a secure value:

     ```
     SECRET=your_cloudinary_secret
     ```

5. Install project dependencies using npm:

   ```
   npm install
   ```

6. Run the application using Nodemon:

   ```
   nodemon app.js
   ```

7. Access the project:
   - Once the server is running, you can access the project at [http://localhost:8080](http://localhost:8080).

That's it! You have successfully installed and set up the Wanderlust web project on your local machine. If you encounter any issues during the installation process, feel free to reach out for assistance. Happy traveling! 🌍✈️

## 🚀 Deployment

### GitHub Repository
The project is set up with Git and ready to be pushed to GitHub:

1. Create a new repository on GitHub
2. Run these commands in your project directory:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Hosting Platforms
Since this is a Node.js application with MongoDB, you can deploy it to platforms that support Node.js:

#### Option 1: Railway (Recommended)
1. Sign up at [Railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables in Railway dashboard
4. Deploy automatically

#### Option 2: Render
1. Sign up at [Render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build command: `npm install`
5. Set start command: `node app.js`
6. Add environment variables

#### Option 3: Heroku
1. Sign up at [Heroku.com](https://heroku.com)
2. Install Heroku CLI
3. Run: `heroku create your-app-name`
4. Set environment variables: `heroku config:set KEY=VALUE`
5. Deploy: `git push heroku main`

### Environment Variables Required
Make sure to set these environment variables in your deployment platform:
- `ATLASDB_URL`: Your MongoDB Atlas connection string
- `SECRET`: Session secret key
- `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET`: For Cloudinary (optional, uses local storage by default)

### Database Setup
- Use MongoDB Atlas for production database
- The app will automatically connect using the `ATLASDB_URL` environment variable

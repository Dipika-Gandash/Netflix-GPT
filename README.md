🎬 Netflix-AI (Netflix Clone with AI Movie Search)

Netflix-AI is a fully responsive Netflix-inspired web application built using React.
The app allows users to authenticate, browse movies, watch trailers in the background, and get AI-powered movie recommendations using the Gemini API.


📌 About the Project

: Movie data is fetched from TMDB API

: User authentication is handled using Firebase Authentication

: Home page includes a Netflix-style video background with trailer playback

: Movies are displayed in multiple sections similar to Netflix

: AI Search feature recommends movies using Google Gemini API

: Gemini results are then searched on TMDB to show real movie data

: Application-wide state is managed using Redux

✨ Features

🔐 Authentication

 Sign In / Sign Up using Firebase

Secure authentication flow

Logout functionality

User data stored and managed in Redux

🎥 Netflix-Style UI

Full-screen video background with YouTube trailers

Gradient overlays for cinematic effect

Sticky transparent header

Clean and modern UI inspired by Netflix


🎞️ Movie Browsing

Fetches movies from TMDB API

Displays movie lists in horizontal scrollable rows

Optimized rendering using reusable components

🤖 AI Movie Search

AI-powered recommendations using Gemini API

User input → Gemini suggests movies

Suggested movies are searched on TMDB

Duplicate searches prevented

Proper loading and error handling

📱 Fully Responsive

Works smoothly on mobile, tablet, and desktop

Mobile-level UI optimized

Background video and layout do not break on small screens

Responsive text and spacing adjustments

🌍 Multi-Language Support

Language switching using Redux

Dynamically updates UI text based on selected language

🛠️ Tech Stack

Frontend

React.js

Tailwind CSS

Redux Toolkit

React Router

Backend

Node.js

Express.js (used as a proxy for Gemini API)

APIs & Services

Firebase Authentication

TMDB API

Google Gemini API

YouTube Embed API (for trailers)

🧠 State Management

Centralized state management using Redux

Separate slices for:

User authentication

Movies and trailers

Gemini AI search results

App configuration (language)



## Gemini API Proxy (Backend)

To securely integrate the Gemini API, a custom backend proxy was built using Node.js and Express.

Why this proxy is used:

Prevents exposing Gemini API keys on the frontend

Handles AI requests securely

Avoids CORS issues

Acts as a middleware between frontend and Gemini API

How it works:

Frontend sends user prompt to the proxy server

Proxy forwards the request to Gemini API

Gemini returns movie recommendations

Proxy sends the response back to the frontend

Frontend fetches movie details from TMDB

🔗 https://github.com/Dipika-Gandash/movie-recommendation-api


📸 Screenshots

## Screenshots
 ### Home Pgae
 ![Home Page](assets/ScreenShot_HomePage.png)

 ### AI Search Page
 ![Ai Search Page](assets/ScreenShot_AiSearchPage.png)

 ### Sign In Page (Mobile View)
 ![Sign In Page](assets/ScreenShot_SignInPage.png)

 ### Sign Up Page (Mobile View)
 ![Sign Up Page](assets/ScreenShot_SignUpPage.png)

 

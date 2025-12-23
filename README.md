### 🎬 Netflix-AI (Netflix Clone with AI Movie Search)

Netflix-AI is a fully responsive Netflix-inspired web application built using React.
The app allows users to authenticate, browse movies, watch trailers in the background, and get AI-powered movie recommendations using the Gemini API.


## 📌 About the Project

: Movie data is fetched from TMDB API

: User authentication is handled using Firebase Authentication

: Home page includes a Netflix-style video background with trailer playback

: Movies are displayed in multiple sections similar to Netflix

: AI Search feature recommends movies using Google Gemini API

: Gemini results are then searched on TMDB to show real movie data

: Application-wide state is managed using Redux

## ✨ Features

# 🔐 Authentication

1.Sign In / Sign Up using Firebase

2.Secure authentication flow

3.Logout functionality

4.User data stored and managed in Redux

# 🎥 Netflix-Style UI

1.Full-screen video background with YouTube trailers

2.Gradient overlays for cinematic effect

3.Sticky transparent header

4.Clean and modern UI inspired by Netflix


# 🎞️ Movie Browsing

1.Fetches movies from TMDB API

2.Displays movie lists in horizontal scrollable rows

3.Optimized rendering using reusable components

# 🤖 AI Movie Search

1.AI-powered recommendations using Gemini API

2.User input → Gemini suggests movies

3.Suggested movies are searched on TMDB

4.Duplicate searches prevented

5.Proper loading and error handling

# 📱 Fully Responsive

1.Works smoothly on mobile, tablet, and desktop

2.Mobile-level UI optimized

3.Background video and layout do not break on small screens

4.Responsive text and spacing adjustments

# 🌍 Multi-Language Support

1.Language switching using Redux on AI search Page

2.Dynamically updates UI text based on selected language

## 🛠️ Tech Stack

# Frontend

1.React.js

2.Tailwind CSS

3.Redux Toolkit

4.React Router

 # Backend

1.Node.js

2.Express.js (used as a proxy for Gemini API)

# APIs & Services

1.Firebase Authentication

2.TMDB API

3.Google Gemini API

4.YouTube Embed API (for trailers)

## 🧠 State Management

1.Centralized state management using Redux

2.Separate slices for:

  a.User authentication

  b.Movies and trailers

  c.Gemini AI search results

  d.App configuration (language)


## Gemini API Proxy (Backend)

1.To securely integrate the Gemini API, a custom backend proxy was built using Node.js and Express.

2.Why this proxy is used:

   --> Prevents exposing Gemini API keys on the frontend

   --> Handles AI requests securely

  --> Avoids CORS issues

  -->Acts as a middleware between frontend and Gemini API

3. How it works:

  --> Frontend sends user prompt to the proxy server

  --> Proxy forwards the request to Gemini API

  --> Gemini returns movie recommendations

  --> Proxy sends the response back to the frontend

  --> Frontend fetches movie details from TMDB

🔗 https://github.com/Dipika-Gandash/movie-recommendation-api


## Screenshots
 ### Home Pgae
 ![Home Page](src/assets/ScreenShot_HomePage.png)

 ### AI Search Page
 ![Ai Search Page](src/assets/ScreenShot_AiSearchPage.png)

 ### Sign In Page (Mobile View)
 ![Sign In Page](src/assets/ScreenShot_SignInPage.png)

 ### Sign Up Page (Mobile View)
 ![Sign Up Page](src/assets/ScreenShot_SignUpPage.png)

 

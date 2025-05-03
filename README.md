# Spotify-Advanced-2.0

An enhanced, reimagined version of the Spotify web app — built for the Level Up: Vibe Coding Hackathon 2025.
This project introduces innovative features to improve discoverability, interactivity, and personalization for music lovers.
“Reimagining the everyday music experience, one feature at a time.”


📝 Introduction

Spotify is one of the most popular music streaming services globally, but even the best platforms have room for improvement. The goal of Spotify Advanced 2.0 is to enhance the existing Spotify experience with innovative features that make it easier to find music, interact with friends, and personalize your listening experience in a way that Spotify doesn't currently offer.
This app introduces new functionalities that enhance discoverability, provide social features, and offer a more personalized experience.

🎯 Key Features
1. Lyric-Based Song Search
Current Issue: Users often remember lyrics from a song but forget the title. Searching for songs using only lyrics can be difficult, and existing options like Genius Integration are limited.
Feature Enhancement: Users can now search for songs by typing partial lyrics, making it easier to discover songs even if the user only remembers a few words.

2. Group Listening Rooms
Current Issue: Although Spotify has Group Sessions, it only works for Premium users and lacks more robust social features.
Feature Enhancement: Create rooms where users can join, share songs, and listen to music together in real-time. The ability to sync playback across multiple devices and offer features like chat and event creation makes it more interactive.

3. Listener’s Pick Mode
Current Issue: Spotify allows users to listen to personalized playlists, but there is no feature that lets users control the music based on their favorite artists for a set duration.
Feature Enhancement: Users can now select specific artists and listen only to their music for a chosen duration. This feature offers more control over the listening experience and caters to fan-driven playlists.

4. Mood-Based Chatbot
Current Issue: While Spotify offers personalized playlists and mixes based on listening history, it does not provide music recommendations based on the user's mood.
Feature Enhancement: Powered by OpenAI API, the chatbot can recommend music based on user moods. Simply type something like “I’m feeling chill,” and the chatbot will respond with songs that match that vibe.

6. Spotify Wrapped Dashboard
Current Issue: The Spotify Wrapped feature is only available at the end of the year and doesn't offer an interactive, real-time experience.
Feature Enhancement: The Wrapped Dashboard now tracks your listening stats throughout the year, offering charts and visuals (powered by Recharts) to show your top artists, songs, and genres, similar to the existing Wrapped feature but continuously updated.

🛠️ Tech Stack
The following tech stack will be used to build and deploy the project:
Frontend: React, Tailwind CSS, React Router
Charts: Recharts (for visualizing Wrapped dashboard data)
AI Integration: OpenAI API (for the mood-based chatbot)
Version Control: Git + GitHub
Deployment: Vercel (for hosting the frontend app)
(Optional) Firebase or similar for real-time data sync in the group listening feature

🧪 How Features Will Be Built

1. Lyric-Based Song Search
I'll start by mocking song data containing song titles and lyrics. This data will be hardcoded in JSON files.
The search bar will accept input from the user, and using JavaScript’s string matching or fuzzy search libraries (like fuse.js), I'll match user input with lyrics from the mock data.For the final version, if time permits, I’ll integrate a public lyrics API (like Genius API) to get real song data for dynamic searching.

2. Group Listening Rooms
While real-time sync would require a backend, I’ll start with a mock room UI:
I'll create rooms that users can join or leave. Each room will have a list of tracks.
A synchronized music player will simulate multiple users listening to the same song at once. I'll use React state management to handle playlist changes in each room.Later, if I have more time, I could integrate Firebase or Socket.IO for real-time synchronization, enabling a true group listening experience.

3. Listener’s Pick Mode
This feature will allow users to pick their favorite artists and generate a playlist based on their selection:
I'll start with a list of artists (mock data) that the user can choose from.
After making selections, a filtered playlist will be displayed, showing only tracks from the chosen artists.
The playlist will be generated dynamically using JavaScript functions, ensuring the user gets only the songs they want.

4. Mood-Based Chatbot
The chatbot will interact with the user to recommend songs based on their mood:
Using OpenAI API, the chatbot will process simple user inputs (e.g., "I'm feeling energetic" or "I want to relax") and return a list of song suggestions.
In the event OpenAI API is not used, I can simulate this by creating a rule-based system where keywords (like "chill", "happy", "sad") map to predefined song recommendations.The chatbot’s interface will be powered by React, providing an intuitive, user-friendly experience.

5. Spotify Wrapped Dashboard
To create the Wrapped-style dashboard:
Mock data will be used to represent the user’s listening habits, such as the top artists, songs, and total listening time.
Using Recharts, I’ll build interactive charts (e.g., bar charts, pie charts) to visualize data like top artists or songs.
The dashboard will be responsive and will display the most significant statistics in an engaging way. For personalization, if time allows, I'll integrate dynamic data (based on user history) to simulate real user statistics. 

  


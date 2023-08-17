## MyMovies App

MyMovies is a React application that allows users to search for movies and manage their watched movie list. The app retrieves movie data from the OMDB API and provides features to search for movies, view movie details, and track watched movies along with user ratings.

## Features

Search for Movies: Users can search for movies by entering keywords.
Movie List: Displays a list of movies based on the search query.
Movie Details: View detailed information about a selected movie.
Watched List: Tracks movies that the user has watched along with user ratings.
Interactive UI: Provides an intuitive user interface with buttons for adding movies to the watched list, rating movies, and deleting movies from the watched list.

## Dependencies

React: JavaScript library for building user interfaces.
StarRating: Custom component for displaying star ratings.
OMDB API: Fetches movie data for search and details.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Obtain an OMDB API key from [OMDB API](https://www.omdbapi.com) and replace the `KEY` constant in the  
   `App.js` file with your API key.
5. Run `npm start` to start the development server and open the app in your browser.

## How It Works

1. Enter a search query in the search bar to search for movies.
2. Click on a movie to view its details, including title, year, runtime, IMDb rating, and plot.
3. If the movie is not in the watched list, you can rate it using the star rating component and add it to the watched list.
4. View your watched movie list, which displays movies you have watched along with their ratings and runtime.
5. Delete movies from the watched list by clicking the delete button.

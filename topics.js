const newsTopics = [
    "Latest Movies",
    "Upcoming Releases",
    "Movie Reviews",
    "Box Office",
    "Film Festivals",
    "Movie Trailers",
    "Director Interviews",
    "Actor Interviews",
    "Film Awards",
    "Oscar Winners",
    "Cinematography",
    "Screenwriting",
    "Film Production",
    "Independent Films",
    "Hollywood News",
    "Bollywood News",
    "Film Industry Trends",
    "Movie Ratings",
    "Film History",
    "Classic Films",
    "International Cinema",
    "Genre Films",
    "Action Movies",
    "Comedy Movies",
    "Drama Movies",
    "Horror Movies",
    "Sci-Fi Movies",
    "Romantic Movies",
    "Documentaries",
    "Animated Films",
    "Film Music",
    "Soundtracks",
    "Movie Adaptations",
    "Film Controversies",
    "Film Criticism",
    "Streaming Releases",
    "Movie Trivia",
    "Behind the Scenes",
    "Film Technology",
    "Virtual Reality Films",
    "Film Awards Predictions",
    "Film Director Spotlights",
    "Movie Industry Insights"
];

function random() {
    // Generate a random index within the bounds of the newsTopics array
    const x = Math.floor(Math.random() * newsTopics.length);
    
    // Get the random topic from the array
    const randomTopic = newsTopics[x];
    
    // Fetch news based on the random topic
    fetchNews(randomTopic);
}

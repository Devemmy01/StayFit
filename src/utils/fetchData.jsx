// exerciseOptions object containing API headers for exercise API
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
  }
};

// youtubeOptions object containing API headers for YouTube API
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// fetchData function to fetch data from an API endpoint
export const fetchData = async (url, options) => {
  // Fetching data from the specified URL using the provided options
  const response = await fetch(url, options);
  // Parsing the response data as JSON
  const data = await response.json();

  // Returning the fetched data
  return data;
}

const API_ID = process.env.REACT_APP_EDAMAM_APP_ID;
const API_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;

export const fetchRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
  );
  const data = await response.json();
  
  return data.hits;
};

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  
    headers: {
    'X-RapidAPI-Key': 'ae5f1b45e2msh5a9dfe4bf232cfbp1f681djsn1fdc6bde5f0c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, hedheya normalement tji haka ch tprotecti l api key mteek ama for some reasons ma habtch tkhdem so m just gonna put the API key here toul w khw
  
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

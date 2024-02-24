export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "cef2cae494mshcd36a5bdf6d59c2p1a94e3jsn3ae67154a50b",
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, hedheya normalement tji haka ch tprotecti l api key mteek ama for some reasons ma habtch tkhdem so m just gonna put the API key here toul w khw
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

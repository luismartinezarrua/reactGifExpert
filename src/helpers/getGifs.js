export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=l5lOC98lQDU7N5niJSXpVp6IGD0ndnQH&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};

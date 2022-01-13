const getGifs = async(category) => {
  const apiKey = 'DA3aTg2kFBpDarVx81ZWLUQkRSN282V1';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
}

export default getGifs;
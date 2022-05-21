const baseUrl = `api.themoviedb.org/3/discover/movie?api_key=6bda0b3280639dd97af52ffe1139761f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&year=2020&with_watch_monetization_types=free`;
const protocol = process.env.REACT_APP_API_PROTOCOL || 'https';
const apiKey= '6bda0b3280639dd97af52ffe1139761f'
const fetcher = async (route, options = {}) => {

  let url = new URL(`${protocol}://${baseUrl}/${route}`)
  const method = options.method || 'get'

  if(method === 'get') {
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]))
  }

  console.log('fetching ....', url)

  const response = await fetch(url, {
    headers: {
      //'Authorization': `Bearer ${auth.getToken()}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options
  });

  return await response.json()
}

export default fetcher;

const baseUrl = 'https://api.themoviedb.org/2/movie/popular?api_key=50328312d31518afa81ebf391e136977&language=en-US&page=${next}';
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

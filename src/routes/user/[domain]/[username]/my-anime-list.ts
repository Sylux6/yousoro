function getHeaders(): Headers {
  return new Headers({
    'X-MAL-CLIENT-ID': '30ee48ff3cd2a401d7771c121a8ea14e',
    'x-cors-api-key': 'temp_5ff3cda4e820a05cd14c2b545a08e39d',
    'x-requested-with': 'XMLHttpRequest',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'Access-Control-Allow-Origin': 'https://api.myanimelist.net',
    // 'Access-Control-Allow-Headers': '*'
  });
}

export async function authenticate() {
  return fetch(
    'https://proxy.cors.sh/https://api.myanimelist.net/v2/users/sylux6/animelist?status=watching',
    {
      method: 'GET',
      headers: getHeaders(),
    }
  ).then((result) => result.json());
}

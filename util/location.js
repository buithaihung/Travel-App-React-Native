// const GOOGLE_API_KEY = "AIzaSyBXU9a9sOPmAB4XRkvElouT5WYcMDgeU2k";
const ACCESS_TOKEN =
  "pk.eyJ1IjoiYnVpdGhhaWh1bmcwMjA4IiwiYSI6ImNsY21zZHZpcjFkdm0zb21tZXg2Y2t0bWcifQ.xhZCuJhg9IaqscOa_nNbDQ";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l-embassy+f74e4e(${lng},${lat})/${lng},${lat},14.0,0/400x200?access_token=${ACCESS_TOKEN}`;
  // const imagePreviewUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/105.8421,21.0094,12.87,0/300x200?access_token=pk.eyJ1IjoiYnVpdGhhaWh1bmcwMjA4IiwiYSI6ImNsY21zZHZpcjFkdm0zb21tZXg2Y2t0bWcifQ.xhZCuJhg9IaqscOa_nNbDQ'
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${ACCESS_TOKEN}`
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();
  const address = data.features[0].place_name;
  return address;
}

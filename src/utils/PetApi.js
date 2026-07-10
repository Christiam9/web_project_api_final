const API_KEY =
  "live_yPrwY3H7H8LSFYVIue0RUe85IJOPUGqzPn2Z63tHk0LgTWXbjGpu7ydUvaZiRoAn";
const BASE_URL = "https://api.thedogapi.com/v1";

export function getDogs() {
  return fetch(
    `${BASE_URL}/images/search?limit=9&has_breeds=true&include_breeds=true`,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    },
  ).then((res) => {
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return res.json();
  });
}

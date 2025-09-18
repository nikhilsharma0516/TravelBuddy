import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

async function CallData(ne, sw) {
  console.log(ne, sw, "in call data");
  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "b3da8c1a89mshd615eae6092baa2p1d4fc3jsn8a9780dbd6df",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log(response,"call data");
    return response;
  } catch (err) {
    console.log(err);
  }
}
export default CallData;

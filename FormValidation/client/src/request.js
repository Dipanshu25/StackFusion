import axios from "axios";

export async function addUser(payload) {
  let response = await axios
    .post("http://localhost:5009/post", payload)
    .then((response) => response.data)
    .catch((error) => error.response.data);
  return response;
}

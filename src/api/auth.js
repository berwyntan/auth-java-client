import axios from "axios";

export const apiLogin = async (data) => {
  try {
    const response = await axios.post("http://43.206.121.97:80/auth", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      },
      withCredentials: true,
    });
    //   console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

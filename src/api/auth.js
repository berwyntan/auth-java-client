import axios from "axios";

export const apiLogin = async (data) => {
  try {
    const response = await axios.post(import.meta.env.VITE_SERVER, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      // withCredentials: true,
    });
    //   console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

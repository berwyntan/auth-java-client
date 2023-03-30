import axios from "axios";

export const apiLogin = async (data) => {
  try {
    const response = await axios.post("http://127.0.0.1:8080/auth", data, {
      headers: {
        "Content-Type": "application/json",
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

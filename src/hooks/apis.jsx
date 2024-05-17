import { axiosInstance } from "../lib/axiosConfig";

const apiLogin = import.meta.env.VITE_API_SIGNIN;
const apiTalents = import.meta.env.VITE_API_TALENT;

export const userLogin = async (email, password) => {
  try {
    const res = await axiosInstance.post(apiLogin, {
      email,
      password,
    });
    console.log("Full Response:", res); // Log the full response
    console.log("Response data:", res.data.data);

    // Ensure the response contains the necessary data
    if (
      res.data &&
      res.data.data &&
      res.data.data.token &&
      res.data.data.userId &&
      res.data.data.username
    ) {
      return res.data.data;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (err) {
    console.error("Error during login request:", err);
    throw err;
  }
};

export const getTalents = (
  sortBy,
  skillsetNames,
  positionNames,
  levelNames,
  talentAvailability,
  experience,
  pageNumber,
  pageSize
) => {
  const url = `${talents}?sortBy=${sortBy}&skillset=${skillsetNames}&position=${positionNames}&level=${levelNames}&availability=${talentAvailability}&experience=${experience}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return instance
    .get(url)
    .then((response) => {
      console.log(url);
      return response;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

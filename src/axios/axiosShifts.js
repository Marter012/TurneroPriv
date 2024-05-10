import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getShifts = async (category) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/getShifts`, {
      category,
    });
    return response?.data?.shifts;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

export const createShift = async (
  category,
  date,
  schedule,
  name,
  price,
  location,
  phone,
  activity
) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/addShifts`, {
      category,
      date,
      schedule,
      name,
      price,
      location,
      phone,
      activity,
    });
    return { response: response };
  } catch (error) {
    console.log(error);
    return error.response.data.errors.errors[0].msg;
  }
};

export const updateStateShifts = async (code) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/cancelShifts`, {
      code,
    });
    return { response: response };
  } catch (error) {
    return error.response.data?.errors?.errors[0].msg;
  }
};

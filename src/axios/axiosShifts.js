import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getShifts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/authShifts/getShifts`);
    return response?.data?.shifts;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

export const createShift = async (
  date,
  schedule,
  name,
  price,
  location,
  phone,
  activity
) => {
  try {
    const response = await axios.post(`${BASE_URL}/authShifts/addShifts`, {
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
    const response = await axios.post(`${BASE_URL}/authShifts/cancelShifts`, {
      code,
    });
    return { response: response };
  } catch (error) {
    console.log(error);
    return error.response.data?.errors?.errors[0].msg;
  }
};

export const updateShifts = async (
  code,
  date,
  schedule,
  name,
  price,
  location,
  phone,
  activity
) => {
  try {
    const response = await axios.post(`${BASE_URL}/authShifts/updateShifts`, {
      code,
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
    return error.response.data?.errors?.errors[0].msg;
  }
};

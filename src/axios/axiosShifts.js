import axios from "axios";
import { BASE_URL } from "../utils/constants";
import dayjs from "dayjs";

export const getShifts = async (category, date) => {
  const formatDate = dayjs(date).format("YYYY-MM-DD");
  try {
    const response = await axios.post(`${BASE_URL}/auth/getShifts`, {
      category,
      date: formatDate,
      state : true
    });
    return { response: response };
  } catch (error) {
    return error.response.data?.errors?.errors[0].msg;
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

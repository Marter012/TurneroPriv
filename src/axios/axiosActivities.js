import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getActivities = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/authActivities/getActivities`
    );
    return response?.data?.activities;
  } catch (error) {
    console.log(error);
    return error?.response?.data;
  }
};

export const createActivities = async (name, cost, finalPrice, netIncome) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/authActivities/addActivity`,
      {
        name,
        cost,
        finalPrice,
        netIncome,
      }
    );
    return { response: response };
  } catch (error) {
    console.log(error);
    return error.response.data.errors.errors[0].msg;
  }
};

export const cancelActivities = async (code) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/authActivities/cancelActivity`,
      {
        code,
      }
    );
    return { response: response };
  } catch (error) {
    console.log(error);
    return error.response.data?.errors?.errors[0].msg;
  }
};

export const updateActivity = async (
  code,
  name,
  cost,
  finalPrice,
  netIncome
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/authActivities/updateActivity`,
      {
        code,
        name,
        cost,
        finalPrice,
        netIncome,
      }
    );
    return { response: response };
  } catch (error) {
    console.log(error);
    return error.response.data?.errors?.errors[0].msg;
  }
};

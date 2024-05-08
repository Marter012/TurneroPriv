import { getShifts } from "../../axios/axiosShifts";
import dayjs from "dayjs";

export const useShiftsForDay = async (selectDay,) => {
    const ho = async () => {
        const response = await getShifts("shifts");
        const formatDate = dayjs(selectDay).format("YYYY-MM-DD");
        console.log(
          response?.response.data.shifts.filter((item) => item.date === formatDate)
        );    
        return await response?.response.data.shifts.filter((item) => item.date === formatDate)    
      };
      await ho();
};

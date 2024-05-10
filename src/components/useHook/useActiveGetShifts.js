import { useDispatch, useSelector } from "react-redux";
import { getShifts } from "../../axios/axiosShifts";
import { useEffect } from "react";
import { addShifts, addShiftsDay } from "../../redux/Shifts/ShiftsSlice";
import dayjs from "dayjs";

export const useActiveGetShifts = (selectDay, setlett) => {
  const dispatch = useDispatch();
  const activeGetShifts = useSelector((state) => state.getShifts.hidden);
  const selectedDay = useSelector((state) => state.selectDay.day);
  console.log("entro en useative");

  useEffect(() => {
    console.log("entro en useeffe");

    const ho = async () => {
      const response = await getShifts("shifts");
      if (selectDay !== undefined) {
        const formatDate = dayjs(selectDay).format("YYYY-MM-DD");
        dispatch(
          addShiftsDay(
            response.filter(
              (item) => item.date === formatDate && item.state === true
            )
          )
        );
        setlett(response);
        console.log(response);
        return;
      }
      dispatch(addShifts(response.filter((item) => item.state === true)));
      console.log(response.filter((item) => item.state === true));
      return;
    };
    ho();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGetShifts, selectDay, selectedDay]);
};

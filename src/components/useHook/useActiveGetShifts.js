import { useDispatch, useSelector } from "react-redux";
import { getShifts } from "../../axios/axiosShifts";
import { useEffect } from "react";
import { addShifts, addShiftsDay } from "../../redux/Shifts/ShiftsSlice";
import dayjs from "dayjs";

export const useActiveGetShifts = (selectDay, setlett) => {
  const hidden = useSelector((state) => state.selectedShifts.hidden);
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const selectedDay = useSelector((state) => state.selectDay.day);
  const dispatch = useDispatch();
  useEffect(() => {
    const ho = async () => {
      const response = await getShifts("shifts");
      if (selectDay !== undefined) {
        const formatDate = dayjs(selectDay).format("YYYY-MM-DD");
        dispatch(
          addShiftsDay(response.filter((item) => item.date === formatDate))
        );
        setlett(response);
        return;
      }
      dispatch(addShifts(response));

      return;
    };
    ho();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay, selectedNav, hidden]);
};

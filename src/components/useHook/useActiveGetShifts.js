import { useDispatch, useSelector } from "react-redux";
import { getShifts } from "../../axios/axiosShifts";
import { useEffect } from "react";
import { addShifts } from "../../redux/Shifts/ShiftsSlice";

export const useActiveGetShifts = () => {
  const activeUpdate = useSelector((state) => state.selectedShifts.hidden);
  const selectedNav = useSelector((state) => state.selectedShifts.selected);
  const selectedDay = useSelector((state) => state.selectDay.day);
  const dispatch = useDispatch();

  useEffect(() => {
    const ho = async () => {
      console.log("hola");
      const response = await getShifts("shifts");
      console.log("hola 2");
      console.log(response);
      dispatch(addShifts(response?.response.data.shifts));
      console.log("hola 3");
      return;
    };
    ho();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay, selectedNav, activeUpdate]);
};

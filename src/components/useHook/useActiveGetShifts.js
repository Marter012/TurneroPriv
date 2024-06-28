import { useDispatch, useSelector } from "react-redux";
import { getShifts } from "../../axios/axiosShifts";
import { useEffect } from "react";
import { addShifts } from "../../redux/Shifts/ShiftsSlice";

export const useActiveGetShifts = (selectDay, setListShifts) => {
  const dispatch = useDispatch();
  const activeGet = useSelector((state) => state.shifts.activator);
  useEffect(() => {
    const active = async () => {
      const response = await getShifts();
      if (response.msg) return [];
      setListShifts(response.filter((item) => item.state === true));
      dispatch(addShifts(response.filter((item) => item.state === true)));
      return;
    };
    active();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectDay, activeGet]);
};

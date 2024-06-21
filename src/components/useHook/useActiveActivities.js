import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../../axios/axiosActivities";
import { updateActivities } from "../../redux/Activities/ActivitiesSlice";

export const useActiveGetActivities = (activeUse, setListActivities) => {
  const dispatch = useDispatch();
  console.log(activeUse);
  useEffect(() => {
    const active = async () => {
      const response = await getActivities();
      if (response.msg) return [];
      setListActivities(response?.filter((item) => item.state === true));
      dispatch(
        updateActivities(response?.filter((item) => item.state === true))
      );
      return;
    };
    active();
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUse]);
};

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BoxTableActivities, ContainerTable } from "./TableActivitiesStyles";
import TableActivitiesColumns from "./Acivities/TableActivitiesColumns";
import TableActivitiesRows from "./Acivities/TableActivitiesRows";

const TableActivities = () => {
  const shifts = useSelector((state) => state.shifts.listShifts);
  const [listShifts, setListShifts] = useState(shifts);

  return (
    <ContainerTable>
      <TableActivitiesColumns/>
      <BoxTableActivities>
        {listShifts.map((item) => {
          return <TableActivitiesRows {...item} />;
        })}
      </BoxTableActivities>
    </ContainerTable>
  );
};

export default TableActivities;

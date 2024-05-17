import React, { useState } from "react";
import { BoxColumns, BoxRows, ContainerTableShifts } from "../TableBalanceStyles";
import TableShiftsColumns from "./TableShiftsColumns";
import TableShiftsRows from "./TableShiftsRows";
import { useSelector } from "react-redux";
import TableDataShifts from "./TableDataShifts";

const TableShifts = () => {
  const shifts = useSelector((state) => state.shifts.listShifts);
  const [listShifts, setListShifts] = useState(shifts)
  return (
    <ContainerTableShifts>
      <BoxColumns>
        <TableShiftsColumns />
      </BoxColumns>
      <BoxRows>
        {listShifts.map((item) => {
          return <TableShiftsRows {...item} />;
        })}
      </BoxRows>
      <TableDataShifts setListShifts={setListShifts} listShifts={listShifts} />
    </ContainerTableShifts>
  );
};

export default TableShifts;

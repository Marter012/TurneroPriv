import React from "react";
import { ContainerTable } from "./TableBalanceStyles";
import TableShifts from "./Shifts/TableShifts";

const TableBalance = () => {
  return (
    <ContainerTable>
      <TableShifts />
    </ContainerTable>
  );
};

export default TableBalance;

// import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
// import { ContainerTable } from "./TableBalanceStyles";

// const TableBalance = () => {
//   const shifts = useSelector((state) => state.shifts.listShifts);
//   console.log(shifts, 2);
//   const defaultRows = shifts.map((item) => {
//     return {
//       id: item.price,
//       date: item.date,
//       schedule: item.schedule,
//       name: item.name,
//       price: `$ ${item.price}`,
//     };
//   });
//   return (
//     <ContainerTable>
//       <DataGrid
//         sx={{ backgroundColor: "white" }}
//         rows={defaultRows}
//         columns={columns}
//         hideFooter
//       />
//     </ContainerTable>
//   );
// };

// export default TableBalance;

// const columns = [
//   { field: "date", headerName: "Fecha", width: 130, editable: true },
//   {
//     field: "name",
//     headerName: "Nombre",
//     width: 130,
//     editable: true,
//   },
//   {
//     field: "schedule",
//     headerName: "Horario",
//     width: 130,
//     editable: true,
//   },
//   {
//     field: "price",
//     headerName: "Price",
//     width: 130,
//   },
// ];

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BoxTableActivities, ContainerTable } from "./TableActivitiesStyles";
import TableActivitiesColumns from "./Acivities/TableActivitiesColumns";
import TableActivitiesRows from "./Acivities/TableActivitiesRows";
import { useActiveGetActivities } from "../useHook/useActiveActivities";

const TableActivities = () => {
  const activeUse = useSelector((state) => state.activities.activeUse);
  const activities = useSelector((state) => state.activities.listActivities);
  const [listActivities, setListActivities] = useState([...activities]);
  useActiveGetActivities(activeUse, setListActivities);
  if (listActivities?.msg) {
    setListActivities([]);
  }
  listActivities.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <>
      <ContainerTable>
        <TableActivitiesColumns />
        <BoxTableActivities>
          {listActivities.length === 0 ? (
            <p className="txt">No hay actividades cargadas.</p>
          ) : (
            listActivities?.map((item) => {
              return (
                <>
                  <TableActivitiesRows key={item.code} {...item} />;
                </>
              );
            })
          )}
        </BoxTableActivities>
      </ContainerTable>
    </>
  );
};

export default TableActivities;

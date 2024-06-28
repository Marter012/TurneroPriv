import React from "react";
import { WrapperBalance } from "./BalanceStyles";
import TableActivities from "../../components/Table/TableActivities";

import { useSelector } from "react-redux";
import CardActivities from "../../components/Cards/CardActivities/CardActivities";
import CardUpdateActivity from "../../components/Cards/CardActivities/CardUpdateActivity";

const Balance = () => {
  const toggleActivities = useSelector((state) => state.activities.stateCard);
  const toggleUpdateActivity = useSelector(
    (state) => state.activities.stateCardUpdate
  );

  return (
    <WrapperBalance>
      {toggleActivities && (
        <CardActivities toggleActivities={toggleActivities} />
      )}
      {toggleUpdateActivity && (
        <CardUpdateActivity toggleUpdateActivity={toggleUpdateActivity} />
      )}
      <TableActivities />
    </WrapperBalance>
  );
};

export default Balance;

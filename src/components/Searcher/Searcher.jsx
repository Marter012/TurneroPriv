import React, { useEffect, useState } from "react";
import { ContainerCustomers, ContainerSearcher } from "./SearcherStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomer } from "../../redux/Customers/CustomersSlice";
import { ButtonStyles } from "../IU/Button/ButtonStyles";

const Searcher = () => {
  const [customer, setCustomer] = useState("");
  const [animationOn, setAnimationOn] = useState(false);
  const shifts = useSelector((state) => state.shifts.listShifts);
  const dispatch = useDispatch();
  useEffect(() => {
    setCustomer("");
    dispatch(selectCustomer({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedCustomer = (customerSelected) => {
    setCustomer(customerSelected.name);
    dispatch(selectCustomer(customerSelected));
  };
  const cleenCustomer = () => {
    setCustomer("");
    dispatch(selectCustomer({}));
  };

  let hash = {};
  const shiftsFilter = shifts.filter((o) =>
    hash[o.phone] ? false : (hash[o.phone] = true)
  );
  return (
    <ContainerSearcher>
      <input
        onBlur={() => setAnimationOn(!animationOn)}
        onClick={() => setAnimationOn(!animationOn)}
        value={customer.toUpperCase()}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <ContainerCustomers $animationOn={animationOn}>
        {shifts.length === 0 ? (
          <p>No hay clientes para la fecha seleccionada</p>
        ) : (
          shiftsFilter.map((item) => {
            return (
              <button key={item.code} onClick={() => selectedCustomer(item)}>
                {item.name}
              </button>
            );
          })
        )}
      </ContainerCustomers>
      <ButtonStyles
        $s_position="absolute"
        $s_rigth="-20px"
        $bg_color="red"
        $s_padding="5px 10px 5px 10px"
        $s_border_radius="20px"
        onClick={() => cleenCustomer()}
      >
        X
      </ButtonStyles>
    </ContainerSearcher>
  );
};

export default Searcher;

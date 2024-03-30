import styled from "styled-components";

export const ShiftsCard = styled.div`
  width: 600px;
  height: 100px;
  background-color: rgb(250, 250, 250, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
`;

export const ShiftsCardTop = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 1.2rem;
  margin: 10px;

  h2 {
    width: 40%;
    font-size: 1.4rem ;
    color: black;
    margin: 0;
  }
  p {
    font-weight: 600;
    margin: 0;
  }
`;

export const ShiftsCardBottom = styled(ShiftsCardTop)`
  width: 95%;
  p {
    font-size: 1rem;
    margin: 0%;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
  }
`;

import styled from "styled-components";

export const ContainerTable = styled.div`
  width: 80vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 250, 250, 0.8);
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
`;

export const ContainerTableActivitiesColumns = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 15%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font-size: 1.3rem;
  font-weight: 600;
  p {
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 150px 150px 150px 150px 150px !important;
  }
`;

export const ContainerTableActivitiesRows = styled(ContainerTableActivitiesColumns)`
  background-color: rgb(0, 0, 0, 0.4);
  min-height: 40px;
  position: relative;

  padding-top: 5px;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 1.2rem;
  font-weight: 400;

  p {
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: 768px) {
  width: 800px;
    
  }
`;

export const ContainerTableActivitiesColumn = styled.div`
  ${({ orderTable }) => {
    switch (orderTable) {
      case "one":
        return `
            grid-column: 1;
            text-align: center;
        `;
      case "two":
        return `
            grid-column: 2;
        `;
      case "three":
        return `
            grid-column: 3;
        `;
      case "four":
        return `
            grid-column: 4;
        `;
      case "five":
        return `
            grid-column: 5;
        `;
      default:
        break;
    }
  }}
`;

export const BoxTableActivities = styled.div`
  width: 800px;
  height: 85%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

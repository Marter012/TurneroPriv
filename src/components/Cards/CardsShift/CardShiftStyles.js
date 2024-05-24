import styled from "styled-components";

export const ContainerCardShift = styled.div`
  position: absolute;
  width: 60vw;
  height: 30vh;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  transition-duration: 1s;
  z-index: 11;

  div {
    height: 100%;
    width: 100%;
    .one {
      p {
        font-size: 2.5rem;
      }
    }
    .two {
      h2 {
        font-size: 2.5rem;
      }
    }
    .tree {
      p {
        font-size: 2rem;
      }
    }
    .four {
      p {
        font-size: 2rem;
      }
    }
    .five {
      display: flex;
      grid-column: 1/3;
      grid-row: 5;
      margin-top: 10px;
      span {
        font-size: 1.5rem;
        margin: 0;
        padding: 0px 20px 0px 20px;
        color: white;
        background-color: rgb(0, 0, 0, 0.7);
        border-radius: 10px;
      }
    }
    .six {
      font-size: 2rem;
    }
  }
  button:nth-child(7) {
    width: 50px;
    height: 50px;
    font-size: 1.7rem;
    right: -50px;
  }
  button:nth-child(8) {
    width: 50px;
    height: 50px;
    font-size: 1.7rem;
    right: -50px;
  }
  button:nth-child(9) {
    display: none;
  }

  @media (max-width: 780px) {
    height: 80vh;
    grid-template-columns: 100%;
    grid-template-rows: min-content;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      border-bottom: 1px solid black;
      :nth-child(6) {
        border: none;
      }
    }
    button:nth-child(7) {
      right: 0%;
      top: -50px;
    }
    button:nth-child(8) {
      top: -50px;
      left: 0%;
    }
  }
  @media (max-width: 460px) {
    height: 50vh;
    div {
      .one,
      .two,
      .tree,
      .four,
      .five,
      .six {
        font-size: 1.5rem;
        p,
        h2,
        span {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

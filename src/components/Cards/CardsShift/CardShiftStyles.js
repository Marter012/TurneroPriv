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
      gap: 10px;
      span {
        font-size: 1.7rem;
        margin: 0;
        padding: 0px 20px 0px 20px;
        background-color: #ea90ff;
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
    height: 80%;
    width: 80%;
    grid-template-columns: 100%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .one,
      .two,
      .tree,
      .four,
      .five,
      .six {
        border-left: none;
        border-bottom: 1px solid black;
      }
      .five {
        width: 100%;
        padding-bottom: 10px;
        span {
          width: 100%;
          border-radius: 0;
          padding: 0;
          background-color: rgb(0, 0, 0, 0.5);
        }
      }
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

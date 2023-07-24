import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* z-index: 0; */
  padding-top: 12%;
  font-size: 112px;
  font-weight: 600;
  @media (max-width: 1000px) {
    /* height: auto; */
    flex-direction: column;
    justify-content: center;

    font-size: 90px;
  }
`;

export const ArrowDown = styled.div`
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
  /* margin-top: 30px; */
  text-align: center;
`;

export const ProfileImage = styled.img`
  height: 50vh;
  border-radius: 50%;
  margin-top: -100px;
  border: "1px #000 solid";
  @media (max-width: 1000px) {
    /* height: auto; */
    height: 0;
  }
`;

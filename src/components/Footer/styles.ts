import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 126.656%;
  margin-left: -10vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  color: #fff;
  background-color: #000;
  margin-top: 40px;
  font-size: 24px;
  font-weight: 600;
  gap: 24px;
  @media (max-width: 1000px) {
  }
`;

export const Number = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
export const Wrap = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;

export const ContactIcon = styled.img`
  width: 50px;
  border-radius: 50%;
  /* -webkit-filter: invert(100%); /* Safari/Chrome */
  /* filter: invert(100%); */
`;

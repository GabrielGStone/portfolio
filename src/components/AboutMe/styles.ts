import styled from "styled-components";

export const Container = styled.div`
  margin: 64px 0;
  @media (max-width: 1000px) {
  }
`;

export const About = styled.div`
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Topic = styled.h4`
  margin: 24px 0 16px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 22px;
    margin-bottom: 32px;
  }
`;

export const Image = styled.img`
  width: 300px;
`;

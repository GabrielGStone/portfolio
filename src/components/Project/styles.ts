import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #000;
  gap: 8px;
  padding: 16px;
  margin-top: 48px;
  min-height: 600px;
  @media (max-width: 1000px) {
  }
`;
export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #000;
`;

export const ProjectImg = styled.img`
  height: 400px;
  width: auto;
  @media (max-width: 1000px) {
  }
`;

export const ProjectText = styled.span`
  display: flex;
  align-items: center;
  font-size: 22px;
  width: 50%;
`;

export const ProjectTitle = styled.h3`
  margin-bottom: 24px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: #000;
  @media (max-width: 1000px) {
    /* width: 0; */
  }
`;

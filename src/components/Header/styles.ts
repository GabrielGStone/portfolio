import styled from "styled-components";

interface ContainerProps {
  padding: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  padding: ${({ padding }) => padding};
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.2s ease-out;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  @media (max-width: 1000px) {
  }
`;

export const StyledComponent = styled.div`
  position: sticky;
  top: 0;
  padding: 24px 10%;
  scroll-margin-top: 24px;

  @media (prefers-reduced-motion: no-preference) {
    transition: padding 0.2s ease-out;
  }

  &:hover {
    padding: 14px 10%;
  }
`;

export const SiteLogo = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface navProps {
  isActive: boolean;
}

export const NavButtons = styled.div<navProps>`
  cursor: pointer;
  padding: 15px 20px;
  font-size: 16px;
  color: ${({ isActive }) => (isActive ? "#0D47A1" : "#000")};
`;

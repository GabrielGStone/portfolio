import { useEffect, useState } from "react";
import { Container, NavButtons, NavContainer, SiteLogo } from "./styles";

const Header = () => {
  const [padding, setPadding] = useState("24px 10%");
  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 120) {
        setPadding("10px 10%");
      } else {
        setPadding("24px 10%");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    setIsActive(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container padding={padding}>
      <SiteLogo>
        {/* <img src="a" alt="logo" /> */}
        StoneDev
      </SiteLogo>
      <NavContainer>
        <NavButtons
          isActive={isActive === "Home"}
          onClick={() => handleNavClick("Home")}
        >
          Home
        </NavButtons>
        <NavButtons
          isActive={isActive === "About"}
          onClick={() => handleNavClick("About")}
        >
          About me
        </NavButtons>
        <NavButtons
          isActive={isActive === "Projects"}
          onClick={() => handleNavClick("Projects")}
        >
          Projects
        </NavButtons>
        <NavButtons
          isActive={isActive === "Contact"}
          onClick={() => handleNavClick("Contact")}
        >
          Contact
        </NavButtons>
      </NavContainer>
    </Container>
  );
};

export default Header;

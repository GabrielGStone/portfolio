import { useEffect, useState } from "react";
import { Container, ArrowDown } from "./styles";

const Hello = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <span style={{ marginBottom: "100px" }}>Hello, I'm Gabriel</span>
        {screenWidth < 1000 && (
          <ArrowDown onClick={() => handleNavClick("About")}>⬇</ArrowDown>
        )}
      </Container>
      ;
    </>
  );
};

export default Hello;

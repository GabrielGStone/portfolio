import { Container, Wrap, ContactIcon, Number } from "./styles";

const Footer = () => {
  return (
    <Container>
      Contact:
      <Number>number: (+55) 41 99926-1291</Number>
      <Wrap>
        <a
          href=" https://www.linkedin.com/in/gabriel-rocha-3800b5239/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon src="" alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/gabriel__stone/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon src="../../assets/insta.svg" alt="instagram" />
        </a>
      </Wrap>
    </Container>
  );
};

export default Footer;

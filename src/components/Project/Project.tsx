import { FC } from "react";

import {
  Container,
  ProjectImg,
  VerticalLine,
  ProjectText,
  ProjectTitle,
  ProjectLink,
} from "./styles";

interface projectProps {
  title?: string;
  image?: string;
  link?: string;
  text?: string;
}

const Project: FC<projectProps> = ({ image, link, text, title }) => {
  return (
    <Container>
      <ProjectLink href={link} target="_blank" rel="noreferrer">
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImg src={image} alt={title} />
      </ProjectLink>
      <VerticalLine />
      <ProjectText>{text}</ProjectText>
    </Container>
  );
};

export default Project;

import { images } from "./constants";
import { Container, Title, Topic, Image, Wrap, About } from "./styles";

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>

      <About style={{ display: "flex", justifyContent: "space-between" }}>
        <Wrap>
          <Topic>Professional:</Topic> My name is Gabriel, and I'm 24 years old.
          I studied systems engineering at UTFPR. Currently, I have nearly one
          year of experience working with React and TypeScript. I'm proficient
          in HTML, CSS, JavaScript, Redux, styled-components, and Material UI. I
          have experience working in squads within an Agile methodology, where
          we complete two-week sprints, conduct daily stand-up meetings, and
          utilize other Agile techniques.
          <Topic>ASD:</Topic> I'm also on the autism spectrum and have been
          diagnosed with Autism Spectrum Disorder (ASD). While I don't know
          everything about the subject, my personal experience with ASD has
          given me unique insights into the challenges and strengths that come
          with being on the spectrum. I believe that my attention to detail,
          focus, and analytical thinking are some of my greatest strengths that
          <Topic>Interests:</Topic> When I'm not working, I enjoy playing games
          such as Starcraft 2, World of Warcraft, LoL, and TFT. I find that
          games can be a great way to exercise cognitive skills, such as
          problem-solving, strategic thinking, and decision-making. Playing
          games can also help with stress relief and provide an opportunity for
          social interaction and community building. Additionally, I like to
          stay active by practicing jiu-jitsu, which I've been doing for eight
          months, and indoor bouldering, which I've been doing for five years.
          These activities help me stay sharp both mentally and physically.
          Thanks for taking the time to get to know me better. If you have any
          questions or would like to chat more, feel free to reach out!
        </Wrap>
        <div style={{ width: "300px" }}>
          <Image src={images.bjj} alt="bjj" />
          <Image src={images.boulder} alt="boulder" />
        </div>
      </About>
    </Container>
  );
};

export default AboutMe;

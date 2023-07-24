import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hello from "../../components/Hello/Hello";
import Layout from "../../components/Layout/Layout";
import Project from "../../components/Project/Project";
import { texts } from "./constants";
import { Id } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Id id="Home" />
        <Hello />
        <Id id="About" />
        <AboutMe />
        <Id id="Projects" />
        <h2 style={{ marginTop: "64px" }}>Projects</h2>
        {texts.map(({ title, link, text, image }) => {
          return (
            <Project
              title={title}
              link={link}
              text={text}
              image={image}
            ></Project>
          );
        })}
        <Id id="Contact" />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;

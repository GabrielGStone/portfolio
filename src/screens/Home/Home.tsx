import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hello from "../../components/Hello/Hello";
import Layout from "../../components/Layout/Layout";
import Project from "../../components/Project/Project";
import { images, texts } from "./constants";
import { Id } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <Layout>
        <Id id="Home" />
        <Hello />
        {/* <ViewComponent> */}
        <Id id="About" />

        <AboutMe />
        {/* </ViewComponent> */}
        {/* <ViewComponent> */}
        <Id id="Projects" />

        <h2 style={{ marginTop: "56px" }}>Projects</h2>
        {/* </ViewComponent>
        <ViewComponent> */}
        <Project
          title={texts.tryndaTitle}
          link={texts.tryndaLink}
          text={texts.tryndaText}
          image={images.tryndaImage}
        ></Project>
        {/* </ViewComponent> */}
        {/* <ViewComponent> */}
        <Project
          title={texts.todoTitle}
          link={texts.todoLink}
          text={texts.todoText}
          image={images.todoImage}
        ></Project>
        {/* </ViewComponent> */}
        {/* <ViewComponent> */}
        <Id id="Contact" />

        <Footer />
        {/* </ViewComponent> */}
      </Layout>
    </>
  );
};

export default Home;

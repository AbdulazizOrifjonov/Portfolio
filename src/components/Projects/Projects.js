import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import TechHouseImg from "../../Assets/Projects/a/Techhouse.png";
import UZUMImg from "../../Assets/Projects/a/UZUM.png";
import MiniImg from "../../Assets/Projects/a/Mini.png";
import AssasixImg from "../../Assets/Projects/a/Assaxiy.png";
import ImageCopyImg from "../../Assets/Projects/a/imagecopy.png";
import Img from "../../Assets/Projects/a/Algoritm.png";
import { useLanguage } from "../../i18n/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.heading")}
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.subheading")}
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TechHouseImg}
              isBlog={false}
              title="Tech House"
              description="E-commerce web app with product listing, search, favorites and cart features. Responsive UI and clean component structure."
              ghLink="https://github.com/AbdulazizLegend/Tech-House"
              demoLink="https://tech-house-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UZUMImg}
              isBlog={false}
              title="UZUM Clone"
              description="Uzum-inspired marketplace UI with modern layout, responsive design, and reusable components."
              ghLink="https://github.com/AbdulazizOrifjonov/uzum-uz-uz"
              demoLink="https://uzum-uz-uz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MiniImg}
              isBlog={false}
              title="Mini Project"
              description="Small React project focused on UI/UX and component-based structure. Fast, clean and responsive."
              ghLink="https://github.com/AbdulazizOrifjonov/GOLD-EXPERT"
              demoLink="https://website-exam-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AssasixImg}
              isBlog={false}
              title="Assasix"
              description="Frontend web project built with a modern UI and responsive layout. Optimized structure and smooth user experience."
              ghLink="https://github.com/AbdulazizOrifjonov/Asaxiy"
              demoLink="https://asaxiy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageCopyImg}
              isBlog={false}
              title="Website"
              description="UI-focused project/demo page showcasing layout and visual components."
              ghLink="https://github.com/YOUR_USERNAME/image-copy"
              demoLink="https://YOUR_DEMO_LINK"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Img}
              isBlog={false}
              title="AlgoritmEdu"
              description="UI-focused project/demo page showcasing layout and visual components."
              ghLink="https://algoritmedu.uz/"
              demoLink="https://algoritmedu.uz/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
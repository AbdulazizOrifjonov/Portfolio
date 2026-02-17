import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../i18n/LanguageContext"; // <-- yo‘lni moslang

function AboutCard() {
  const { t } = useLanguage();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.intro1")}{" "}
            <span className="purple">{t("aboutCard.name")}</span>{" "}
            {t("aboutCard.intro2")}{" "}
            <span className="purple">{t("aboutCard.location")}</span>.
            <br />
            {t("aboutCard.line1a")}{" "}
            <span className="purple">{t("aboutCard.role")}</span>{" "}
            {t("aboutCard.line1b")}
            <br />
            {t("aboutCard.line2")}
            <br />
            <br />
            {t("aboutCard.hobbiesTitle")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activities.a1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activities.a2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activities.a3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t("aboutCard.quote")}"
          </p>
          <footer className="blockquote-footer">{t("aboutCard.footer")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
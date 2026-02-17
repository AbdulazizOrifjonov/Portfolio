import Typewriter from "typewriter-effect";
import { useLanguage } from "../../i18n/LanguageContext";

function Type() {
  const { t } = useLanguage();
  return (
    <Typewriter
      options={{
        strings: t("typewriter"),
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

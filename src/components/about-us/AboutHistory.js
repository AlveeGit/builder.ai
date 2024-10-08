import { AboutHistoryData } from "../../cms/aboutUs/AboutUsData";
import Feature from "../Feature";

const AboutHistory = () => {
  return (
    <div className="relative">
      <Feature
        title={AboutHistoryData.title}
        paragraph={AboutHistoryData.paragraph}
        secondaryParagraph={AboutHistoryData.secondaryParagraph}
        image={AboutHistoryData.image}
        imagePosition="left"
      />
    </div>
  );
};
export default AboutHistory;

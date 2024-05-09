import UM1 from "../../assets/UM1.png";
import UM2 from "../../assets/UM2.png";
import UM3 from "../../assets/UM3.png";
import Lunnagram1 from "../../assets/Lunnagram1.png";
import Lunnagram2 from "../../assets/Lunnagram2.png";
import Lunnagram3 from "../../assets/Lunnagram3.png";
import RC1 from "../../assets/RC1.png";
import RC2 from "../../assets/RC2.png";
import RC3 from "../../assets/RC3.png";

const useProjects = () => {
  const projects = [
    {
      tags: ["Mobile Dev", "Design"],
      projectName: "Universal Mindfulness",
      projectDetails:
        "Universal mindfulness aim is to empower you to develop the appropriate emotional intelligence skills so you can fulfil your potential.",
      imgs: [UM1, UM2, UM3],
    },
    {
      tags: ["Mobile Dev", "Design"],
      projectName: "Lunnagram",
      projectDetails:
        "Lunnagram is an electronic press kit for the artist lunna showcasing his catalogue of music and his background.",
      imgs: [Lunnagram1, Lunnagram2, Lunnagram3],
    },
    {
      tags: ["Web Dev", "Design"],
      projectName: "Royal Covener",
      projectDetails:
        "The royal Convener is an all event global company, Built with the Mandate to bring excellence, Beauty and Uniqueness to every event.",
      imgs: [RC1, RC2, RC3],
    },
  ];
  return projects;
};

export default useProjects;

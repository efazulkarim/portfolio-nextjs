import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Strings from "@/constants/strings";

const socialLinks = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: <FontAwesomeIcon icon={faGithub} />,
    text: Strings.githubUsername,
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    text: Strings.linkedInUsername,
  },
  {
    name: Strings.instagram,
    url: Strings.instagramLink,
    icon: <FontAwesomeIcon icon={faInstagram} />,
    text: Strings.instagramUsername,
  },
];

export default socialLinks;

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/abuzareal",
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/abuzart",
  },
  {
    name: "twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/abuzareal",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/abuzareal",
  },
];

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a key={index} href={item.url} target="_blank" className={iconStyles}>
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;

import Link from "next/link";

import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/gurokirta"}
        className="hover:text-accent transition-all duration-300 text-white
      "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/guramkirtadze/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-white
      "
      >
        <RiLinkedinFill />
      </Link>
    </div>
  );
};

export default Socials;

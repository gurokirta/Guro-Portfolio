import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinFill,
  RiFile2Fill,
  RiFile3Fill,
  RiFile4Fill,
  RiFileExcel2Fill,
} from "react-icons/ri";

import { AiFillFileText } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/gurokirta"}
        target="_blank"
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
      <Link
        href={
          "https://drive.google.com/drive/folders/1osDPeXEpCGg9lp6qH_Zo5uIkQVxKkpwN"
        }
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-white
      "
      >
        <AiFillFileText />
      </Link>
    </div>
  );
};

export default Socials;

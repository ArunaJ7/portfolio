// links
import Link from "next/link";

// icons
import {
  RiLinkedinFill, 
  RiGithubFill, 
  RiStackOverflowFill, 
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.linkedin.com/in/aruna-jayaweera'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinFill />
    </Link>
    <Link href={'https://github.com/ArunaJ7'} className="hover:text-accent transition-all duration-300">
      <RiGithubFill />
    </Link>
    <Link href={'https://stackoverflow.com/users/23456727/aruna-jayaweera'} className="hover:text-accent transition-all duration-300">
      <RiStackOverflowFill />
    </Link>
  </div>
  )
};

export default Socials;

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, InstagramIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1.2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 bg-glossy px-32 py-2 font-medium flex items-center justify-between z-10 pb-0 drop-shadow-md">
      {/* LEFT SIDE */}
      <nav className="flex-1/3">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/page" title="Public Skating" className="mx-4" />
        <CustomLink href="/page" title="Hockey" className="mx-4" />
        <CustomLink href="/page" title="Groups" className="ml-4" />
      </nav>

      <div className="left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      {/* RIGHT SIDE */}
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://Github.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://instagram.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <InstagramIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;

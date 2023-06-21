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
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      {/* LEFT SIDE */}
      <nav className="flex-1/3">
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/page" title="Page" className="mx-4" />
        <CustomLink href="/page" title="Page" className="mx-4" />
        <CustomLink href="/page" title="Page" className="ml-4" />
      </nav>

      <Logo className="absolute top-2 flex-1/3" />

      {/* RIGHT SIDE */}
      <nav className="flex items-center justify-center flex-wrap flex-1/3">
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

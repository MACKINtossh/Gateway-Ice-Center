import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import helmet from "../public/images/landingPage/helmet.png";

const Footer = () => {
  return (
    <footer className=" border-t-1.5 border-solid border-dark font-medium text-lg">
      <Layout className="py-4 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          <Image src={helmet} alt="helemt" className="w-10 h-auto -mb-2"></Image>
        </div>
        <Link href="/">Our Sponsors</Link>
      </Layout>
    </footer>
  );
};
export default Footer;

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gatewayBear from "../public/images/landingPage/gateway-bear.jpg";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-25 h-20 text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1.35, repeat: Infinity },
        }}
      >
        <div className="w-full">
          <Image
            src={gatewayBear}
            alt="athletes"
            className="w-full h-auto rounded-full"
          ></Image>
        </div>
      </MotionLink>
    </div>
  );
};

export default Logo;

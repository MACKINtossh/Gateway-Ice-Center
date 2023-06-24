import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import figureSkater from "../public/images/landingPage/figure-skater-1.png";
import figureSkater2 from "../public/images/landingPage/figure-skater-3.png";
import AnimatedNumbers from "@/components/AnimatedNumbers";

const skating = () => {
  return (
    <>
      <Head>
        <title>Public Skating</title>
        <meta name="public skating" content="public skating" />
      </Head>

      <main>
        <Layout className="pt-10 bg-gradient-to-b from-glossy to-light">
          <AnimatedText
            text="Skate at Gateway"
            className="mb-16 text-4xl font-extrabold leading-none tracking-tight text-gatewayBlue md:text-5xl lg:text-6xl dark:text-white"
          />
          <div className="grid w-full grid-cols-9 gap-10">
            {/* LEFT */}
            <div className="col-span-4 flex flex-col items-start bg-light jusify-start px-5 rounded-2xl">
              <h2 className="mb-4 text-lg font-bold uppercase text-gatewayBlue underline pt-5">
                Public Skate
              </h2>
              <p className="font-semibold my-4 text-lg leading-7 text-dark/85">
                Looking for afforadable family fun? Look no farther than Gateway
                Ice Center! Bring your family and friends to experience the
                Cenral Valleys' premier ice skating and hockey facilities!
              </p>

              <p className="my-2 font-semibold text-gatewayBlue">
                * Fresno residents with proof of I.D Recieve 10% discount on
                general admissions *
              </p>

              <p className="font-semibold my-4 text-lg leading-7 text-dark/85">
                While skating can be enjoyable and health for the heart, there
                can be a learning curve for beginners. For young children, we
                offer the ability to rent a skating aid during our public
                sessions to assist the learning process and keep the experience
                fun and exciting for all!
              </p>

              <p className="my-2 font-semibold text-gatewayBlue">
                Please see below for information on our prices and session
                times. All times are subject to change. Please contact us with
                any questions.
              </p>
            </div>

            {/* MIDDLE */}
            <div className="flex flex-col col-span-2 relative ">
              <div className="absolute z-10 bottom-10 left-0">
                <Image
                  src={figureSkater}
                  alt="figureSkater"
                  className="w-full"
                />
              </div>
              <div className="z-8 right-0">
                <Image src={figureSkater2} alt="figureSkater" className="" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-3 flex flex-col items-end justify-between right-0">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years in Service
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={100000} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Customers
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  1 Million
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Reasons to Come!
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default skating;

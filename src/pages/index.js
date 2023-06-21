import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import figureSkater from "../public/images/landingPage/figure-skater-2.png";
import hockeyPlayer from "../public/images/landingPage/hockey-player-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gateway Ice Center</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/3">
              {/* <Image
                src={figureSkater}
                alt="athletes"
                className="w-full h-auto rounded-md"
              ></Image> */}
              <Image
                src={hockeyPlayer}
                alt="athletes"
                className="w-full h-auto"
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turn Your Dreams into Reality!"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                At Gateway Ice Center in where passion becomes skill, and
                friends become family!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center text-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Download Our Calendar
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import ProjectsBtn from "../components/ProjectsBtn";
import ParticlesContainer from "../components/ParticlesContainer";
import Head from "next/head";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Head>
        <link rel="icon" href="/favicon.jpg" sizes="280x280" />
        <title>N.M Ambition</title>
        <meta
          name="description"
          content="EVERYONE AND THEIR AMBITION."
          key="desc"
        />
        <meta property="og:N.M Ambition" content="EVERYONE AND THEIR AMBITION." />
        <meta
          property="og:N.M Ambition"
          content="EVERYONE AND THEIR AMBITION."
        />
        <meta property="og:N.M Ambition" content="./logo.png" />
      </Head>

      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className=" text-center flex flex-col justify-center xl:items-end xl:pt-40 xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 "
          >
            לוקחים רעיונות לתוך <br />{" "}
            <span className="text-accent">המציאות הדיגיטלית</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-center  max-w-sm xl:max-w-xl mx-auto xl:mx-12 mb-10 xl:mb-16 "
          >
            יש לכם עסק אבל אין לכם אתר ? <br />
            יש לכם רעיון לתוכנה ולא יודעים מאיפה להתחיל ?<br />
            <strong className="text-white text-xl">
              אז הגעתם למקום הנכון !
            </strong>
            <br />
            צרו איתנו קשר הסבר ראשוני ויעוץ חינם ללא התחיבות
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />{" "}
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[650px] max-h-[700px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

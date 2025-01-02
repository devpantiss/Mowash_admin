import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import Heading from "../../components/common/Heading";
import { Link } from "react-router-dom";

const Impact2 = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Observed entry:", entries[0]);
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.unobserve(entries[0].target); // Stop observing once counters start
          console.log("Section in view: counter started");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px", // Trigger earlier when scrolling into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsWithImages = [
    {
      id: 1,
      value: 3000,
      label: "Trained and Assisted in Wash & Green Skills",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735823819/Sanitation_ssgedy.mp4",
      unit: "+",
    },
    {
      id: 2,
      value: 80,
      label: "Tons of Waste Treated",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735819984/ac_fsd12j.mp4",
      unit: "+",
    },
    {
      id: 3,
      value: 5000,
      label: "Youth connected to a network of WASH & climate change",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222160/health_1_ko85fg.mp4",
    },
    {
      id: 4,
      value: 16,
      label: "SHG, FPO, Cooperative created on Wash & Green Enterprises",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735819053/New_02_ebyv2d.mp4",
    },
    {
      id: 5,
      value: 1500,
      label: "Twinpit Toilets Constructed",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735819460/Twin_Pit_1_ovjl5b.mp4",
    },
    {
      id: 6,
      value: 38,
      label: "EV in Wash Manufactured",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735820609/EV_u5jgzy.mp4",
      unit: "+",
    },
    {
      id: 7,
      value: 200,
      label: "Portable Water Supply",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735821550/Water_Tanker_gdsgoe.mp4",
    },
    {
      id: 8,
      value: 12,
      label: "Lost Water Body Rejuvenated",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222753/reclamation_ux6few.mp4",
    },
    {
      id: 9,
      value: 200,
      label: "FSTP Waste Treated",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735822175/fstp_njjsbe.mp4",
      unit: "Tonnes",
    },
    {
      id: 10,
      value: 43,
      label: "Aquaculture Sites created",
      videoUrl:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735818849/Fish_01_ogvue4.mp4",
      // videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735282584/waterbody.44_afurrs.mp4",
    },
  ];

  const rowStructure = [2, 3, 2, 3, 2]; // Row structure as defined earlier

  const shouldHavePlus = (id) => [1, 2, 6].includes(id);

  const renderStatCard = (stat, index, isEvenRow) => {
    return isEvenRow ? (
      <div key={index}>
        <div className="flex flex-col md:flex-row ring-2 ring-white items-center bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 group2">
          {/* Video instead of background image */}
          <div className="h-44 w-full md:w-1/2">
            <video className="h-full w-full object-cover" autoPlay muted loop>
              <source src={stat.videoUrl} type="video/mp4" />
              {/* Fallback if video format isn't supported */}
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 text-center w-full md:w-1/2">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                className="text-4xl font-bold outline-text group-hover:outline-text-hover"
              />
            ) : (
              <span className="text-4xl font-bold">0</span>
            )}
            {/* {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover:outline-text-hover">
                +
              </span>
            )} */}
            {stat.unit && (
              <span className="text-4xl font-bold outline-text group-hover:outline-text-hover">
                {` ${stat.unit}`}
              </span>
            )}
            <p className="text-md mt-2">{stat.label}</p>
          </div>
        </div>
      </div>
    ) : (
      <div key={index}>
        <div className="flex flex-col md:flex-row-reverse ring-2 ring-white items-center bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600 group2">
          {/* Video instead of background image */}
          <div className="h-40 w-full md:w-1/2">
            <video className="h-full w-full object-cover" autoPlay muted loop>
              <source src={stat.videoUrl} type="video/mp4" />
              {/* Fallback if video format isn't supported */}
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 text-center w-full md:w-1/2">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                className="text-4xl font-bold outline-text group-hover2:outline-text-hover"
              />
            ) : (
              <span className="text-4xl font-bold">0</span>
            )}
            {/* {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover2:outline-text-hover">
                +
              </span>
            )} */}
            {stat.unit && (
              <span className="text-4xl font-bold outline-text group-hover2:outline-text-hover">
                {` ${stat.unit}`}
              </span>
            )}
            <p className="text-md mt-2">{stat.label}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderGrid = () => {
    let currentIndex = 0;
    return rowStructure.map((cardsInRow, rowIndex) => {
      const rowStats = statsWithImages.slice(
        currentIndex,
        currentIndex + cardsInRow
      );
      currentIndex += cardsInRow;

      const isEvenRow = rowIndex % 2 === 0;

      return (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 md:grid-cols-${cardsInRow} gap-4 mb-6`}
        >
          {rowStats.map((stat, index) =>
            renderStatCard(stat, index, isEvenRow)
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-blue-600 px-10">
      <section
        ref={sectionRef}
        className="py-10 container mx-auto items-center"
      >
        <Heading text="OUR IMPACT" color="text-white" bgColor="bg-white" />
        <div className="container mx-auto">{renderGrid()}</div>
        {/* Section with GIF and Button */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726054316/Web_designer_with_idea_frjboi.gif"
            alt="Advanced Dashboard GIF"
            className="w-80 h-80 lg:block hidden"
          />
          {/* View Advanced Dashboard Button */}
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md ring-2 ring-white bg-blue-600 hover:bg-white text-white hover:text-blue-600 hover:ring-1 hover:ring-blue-600"
          >
            View Advanced Dashboard
          </Link>
          {/* GIF */}
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726054125/Web_Design_Layout_traglx.gif"
            alt="Advanced Dashboard GIF"
            className="w-80 h-80 lg:block hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Impact2;

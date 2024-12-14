import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

const Impact = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Add logs for debugging to check if the observer is triggeblue
        console.log("Observed entry:", entries[0]);
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.unobserve(entries[0].target); // Stop observing once counters start
          console.log("Section in view: counter started");
        }
      },
      {
        threshold: 0.1, // Lower threshold for mobile
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
      value: 8000,
      label: "Trained and Assisted in Wash & Green Skills",
      imageUrl:
        "https://i.postimg.cc/zfDGSS5s/ash-edmonds-0a-WZd-K8n-K2-I-unsplash.jpg", // Replace with actual image path
    },
    {
      id: 2,
      value: 70,
      label: "Tons of Waste Treated",
      imageUrl:
        "https://i.postimg.cc/k4p3SWXv/ash-edmonds-XZ0x-N0hmpi4-unsplash.jpg", // Replace with actual image path
    },
    {
      id: 3,
      value: 5000,
      label: "Youth connected to a network of WASH & climate change",
      imageUrl:
        "https://i.postimg.cc/7Z9x6G7m/pawel-czerwinski-z7prq6-Bt-PE4-unsplash.jpg", // Replace with actual image path
    },
    {
      id: 4,
      value: 25,
      label: "SHG, FPO, Cooperative created on Wash & Green Enterprises",
      imageUrl: "https://i.postimg.cc/Pfvr4qs5/pexels-billelmoula-540518.jpg", // Replace with actual image path
    },
    {
      id: 5,
      value: 1500,
      label: "Twinpit Toilets Constructed",
      imageUrl:
        "https://i.postimg.cc/13rzqYx0/pexels-cmonphotography-1809644.jpg", // Replace with actual image path
    },
    {
      id: 6,
      value: 38,
      label: "EV in Wash Manufactured",
      imageUrl:
        "https://i.postimg.cc/kX8Gngfp/pexels-d-ng-nhan-324384-1529881.jpg", // Replace with actual image path
    },
    {
      id: 7,
      value: 26,
      label: "Abandoned Mines Reclamated",
      imageUrl:
        "https://i.postimg.cc/G28rqXf5/pexels-francesco-ungaro-998641.jpg", // Replace with actual image path
    },
    {
      id: 8,
      value: 43,
      label: "Lost Water Body Rejuvenated",
      imageUrl: "https://i.postimg.cc/brnyNmHt/pexels-luis-ruiz-991422.jpg", // Replace with actual image path
    },
    {
      id: 9,
      value: 8000,
      label: "Portable Water Supply",
      imageUrl:
        "https://i.postimg.cc/J4brfdhw/pexels-seatizen-co-170969-557782.jpg", // Replace with actual image path
    },
    {
      id: 10,
      value: 48,
      label: "Aquaculture Sites created in Mining periphery",
      imageUrl:
        "https://i.postimg.cc/J4brfdhw/pexels-seatizen-co-170969-557782.jpg", // Replace with actual image path
    },
  ];

  const rowStructure = [2, 3, 2, 3, 2]; // Row structure as defined earlier

  const shouldHavePlus = (id) => [1, 2, 6].includes(id);

  const renderStatCard = (stat, index, isEvenRow) => {
    return isEvenRow ? (
      <div key={index}>
        <div className="flex flex-col md:flex-row-reverse items-center text-blue-600 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white border hover:border hover:border-white hover:bg-blue-600 group2">
          {/* Video instead of background image */}
          {/* <div className="h-44 w-full md:w-1/2">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="https://res.cloudinary.com/du3i8e0se/video/upload/v1725774824/New_Project_-_Made_with_Clipchamp_kmplxn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          <div className="p-4 text-center w-full">
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
            {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover:outline-text-hover">
                +
              </span>
            )}
            <p className="text-md mt-2">{stat.label}</p>
          </div>
        </div>
      </div>
    ) : (
      <div key={index}>
        <div className="flex flex-col md:flex-row-reverse items-center text-blue-600 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-white hover:border hover:border-white hover:bg-blue-600 group2">
          {/* Video instead of background image */}
          {/* <div className="h-40 w-full md:w-1/2">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="https://res.cloudinary.com/du3i8e0se/video/upload/v1725774824/New_Project_-_Made_with_Clipchamp_kmplxn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}

          <div className="p-4 text-center w-full">
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
            {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover2:outline-text-hover">
                +
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
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733733378/OrgCoral_Ofc-01_Concept-06-removebg-preview_w5rfsj.png"
            alt="Advanced Dashboard GIF"
            className="w-48 h-40 lg:block hidden"
          />
          {/* View Advanced Dashboard Button */}
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md border border-white bg-blue-600 hover:bg-white text-white hover:text-blue-600 hover:ring-1 hover:ring-blue-600 animate-spin-slow"
          >
            View Advanced Dashboard
          </Link>
          {/* GIF */}
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733733378/OrgCoral_Ofc-01_Concept-06-removebg-preview_w5rfsj.png"
            alt="Advanced Dashboard GIF"
            className="w-48 h-40 lg:block hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Impact;
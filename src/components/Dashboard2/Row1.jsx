import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaHome, FaUser, FaUsers } from "react-icons/fa";

const cardData = [
  {
    title: "Households Surveyed",
    value: "13025",
    subText: "Total Households Benefitted",
    subValue: "650",
    icon: "faHome",
    icon: <FaHome size={32} className="text-3xl text-teal-200" />,
  },
  {
    title: "Enumerators Involved",
    value: "40",
    subText: "Households Covered",
    subValue: "800",
    icon: "faUser",
    icon: <FaUser size={32} className="text-3xl text-teal-200" />,
  },
  {
    title: "Population Surveyed",
    value: "42983",
    subText: "Govt.",
    subValue: "0",
    additionalText: "Private",
    additionalValue: "3500",
    icon: "faUsers",
    icon: <FaUsers size={32} className="text-3xl text-teal-200" />,
  },
];

// Reusable Card Component
const Card = ({ card }) => {
  const { ref: valueRef, inView: valueInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: subValueRef, inView: subValueInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: additionalValueRef, inView: additionalValueInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <article
      className="relative p-8 rounded-2xl bg-gradient-to-tr from-gray-900 to-teal-900 border border-teal-200 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] focus:ring-2 focus:ring-teal-200 focus:outline-none w-full max-w-md mx-auto overflow-hidden"
      aria-labelledby={`card-title-${card.title.toLowerCase().replace(/\s/g, '-')}`}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-teal-200 opacity-5"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3
            id={`card-title-${card.title.toLowerCase().replace(/\s/g, '-')}`}
            className="text-2xl font-bold tracking-tight mb-4"
          >
            {card.title}
          </h3>
          <div className="p-3 bg-teal-200 rounded-full bg-opacity-20">
            {card.icon}
          </div>
        </div>
        <p
          className="text-4xl font-semibold mb-6 animate-fade-in"
          ref={valueRef}
        >
          {valueInView ? (
            <CountUp
              start={0}
              end={parseInt(card.value)}
              duration={2.5}
              separator=","
            />
          ) : (
            "0"
          )}
        </p>

        <hr className="border-teal-200/30 my-6" />

        {/* <h4 className="text-lg font-semibold tracking-tight mb-2">
          {card.subText}
        </h4>
        <p
          className="text-2xl font-semibold animate-fade-in"
          ref={subValueRef}
        >
          {subValueInView ? (
            <CountUp
              start={0}
              end={parseInt(card.subValue)}
              duration={2.5}
              separator=","
            />
          ) : (
            "0"
          )}
        </p> */}

        {/* {card.additionalText && (
          <>
            <hr className="border-teal-200/30 my-6" />
            <h4 className="text-lg font-semibold tracking-tight mb-2">
              {card.additionalText}
            </h4>
            <p
              className="text-2xl font-semibold animate-fade-in"
              ref={additionalValueRef}
            >
              {additionalValueInView ? (
                <CountUp
                  start={0}
                  end={parseInt(card.additionalValue)}
                  duration={2.5}
                  separator=","
                />
              ) : (
                "0"
              )}
            </p>
          </>
        )} */}
      </div>
    </article>
  );
};

const Row1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Row1;
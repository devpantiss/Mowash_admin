import React from "react";
import Slider from "react-slick";
import CustomActiveShapePieChart from "./CustomActiveShapePieChart";
import { FaFaucet, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";

// Data for pie charts
const totalHouseholds = 13025;

// Toilets at Home
const noToiletHouseholds = 5210;
const toiletsAtHomeData = [
  noToiletHouseholds,
  totalHouseholds - noToiletHouseholds,
];

// Drainage Connectivity
const drainageHouseholds = 2605;
const drainageData = [totalHouseholds - drainageHouseholds, drainageHouseholds];

// Bathrooms
const bathroomHouseholds = 3256;
const bathroomData = [totalHouseholds - bathroomHouseholds, bathroomHouseholds];

// Public Toilets
const publicToiletHouseholds = 651;
const publicToiletData = [
  totalHouseholds - publicToiletHouseholds,
  publicToiletHouseholds,
];

// Open Defecation
const openDefecationHouseholds = 4559;
const openDefecationData = [
  openDefecationHouseholds,
  totalHouseholds - openDefecationHouseholds,
];

// Combined data for charts and initiatives
const dashboardData = [
  {
    category: "Toilets at Home",
    chartData: toiletsAtHomeData,
    labels: ["Need Toilets", "Have Toilets"],
    initiatives: [
      "Construct toilets for ~5,210 no-toilet households via SBM-G.",
      "Prioritize SC/ST and kutcha areas.",
      "Ensure water access (JJM) for flush/pit toilets.",
    ],
  },
  {
    category: "Drainage Connectivity",
    chartData: drainageData,
    labels: ["Need Drainage", "Connected"],
    initiatives: [
      "Develop septic tanks/open drains for ~10,420 households.",
      "Integrate with wastewater treatment.",
      "Pilot rural drainage systems in flood-prone areas.",
    ],
  },
  {
    category: "Bathrooms",
    chartData: bathroomData,
    labels: ["Need Bathrooms", "Covered"],
    initiatives: [
      "Include bathrooms in PMAY-G houses for ~9,769 households.",
      "Link with JJM water supply.",
      "Promote low-cost bathing spaces for kutcha households.",
    ],
  },
  {
    category: "Public Toilets",
    chartData: publicToiletData,
    labels: ["Need CSCs", "Covered"],
    initiatives: [
      "Build CSCs for ~5,210 no-toilet households.",
      "Ensure maintenance of CSCs.",
      "Deploy mobile toilets in cyclone-affected areas.",
    ],
  },
  {
    category: "Open Defecation",
    chartData: openDefecationData,
    labels: ["Practice Open Defecation", "Do Not"],
    initiatives: [
      "Conduct behavior change campaigns (SBM-G) to reduce open defecation",
      "Target ~4,559 households practicing open defecation.",
      "Engage local communities for sustained ODF status.",
    ],
  },
];

// Reusable Initiative Card Component
const InitiativeCard = ({ category, initiatives }) => (
  <article
    className="relative p-8 rounded-2xl bg-gradient-to-tr from-gray-900 to-teal-900 border border-teal-200 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(153,246,228,0.5)] focus:ring-2 focus:ring-teal-200 focus:outline-none w-full min-h-[250px] overflow-auto"
    aria-labelledby={`${category}-initiatives`}
  >
    <div className="absolute inset-0 bg-teal-200 opacity-5"></div>
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <h3
          id={`${category}-initiatives`}
          className="text-3xl font-bold tracking-tight mb-4 animate-fade-in"
        >
          {category}
        </h3>
        <div className="p-3 bg-teal-200 rounded-full bg-opacity-20">
          <FaFaucet className="text-3xl text-teal-200" aria-hidden="true" />
        </div>
      </div>
      <ul className="text-base font-medium space-y-2 animate-fade-in">
        {initiatives.map((initiative, idx) => (
          <li key={idx} className="flex items-start">
            <span
              className="inline-block w-2 h-2 rounded-full bg-teal-200 mr-2 mt-2"
              aria-hidden="true"
            ></span>
            <span>{initiative}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

// Reusable Chart-Card Pair Component
const ChartCardPair = ({ item }) => (
  <div
    className="flex flex-col w-full min-h-[600px] rounded-2xl border border-teal-200 bg-transparent p-6 hover:shadow-2xl transition-shadow justify-between"
    aria-labelledby={`${item.category}-chart`}
  >
    <div className="w-full shadow-md rounded-2xl overflow-hidden">
      <CustomActiveShapePieChart
        data={item.chartData}
        labels={item.labels}
        title={item.category}
      />
    </div>
    <div className="w-full mt-6">
      <InitiativeCard category={item.category} initiatives={item.initiatives} />
    </div>
  </div>
);

// Custom Arrow Components
const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} slick-prev`}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FaArrowLeft className="text-2xl text-gray-900" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} slick-next`}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FaArrowRight className="text-2xl text-gray-900" />
  </button>
);

const Row10 = () => {
  // Carousel settings
  const settings = {
    dots: false, // Hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: true, // Pause on hover
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="p-8 bg-transparent text-white relative">
      <section aria-labelledby="sanitation-heading">
        <h1
          id="sanitation-heading"
          className="text-4xl font-bold mb-8 text-center text-white underline"
        >
          Sanitation & Water Access Initiatives
        </h1>

        {/* Carousel Section */}
        <div className="mx-auto relative lg:px-16">
          <Slider {...settings}>
            {dashboardData.map((item, index) => (
              <div key={index} className="px-4 py-4">
                <ChartCardPair item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Custom CSS for carousel arrows (dots removed) */}
      <style jsx>{`
        .slick-prev,
        .slick-next {
          width: 48px;
          height: 48px;
          background: #99f6e4; /* teal-200 */
          border-radius: 50%;
          z-index: 10;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          display: flex !important;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .slick-prev {
          left: -72px;
        }
        .slick-next {
          right: -72px;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background: #5eead4; /* teal-300 */
          transform: translateY(-50%) scale(1.1);
        }
        .slick-prev:focus,
        .slick-next:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(153, 246, 228, 0.5);
        }
        .slick-prev:before,
        .slick-next:before {
          content: none; /* Remove default arrows */
        }
        @media (max-width: 1280px) {
          .slick-prev {
            left: -56px;
          }
          .slick-next {
            right: -56px;
          }
        }
        @media (max-width: 640px) {
          .slick-prev {
            left: 10px;
          }
          .slick-next {
            right: 10px;
          }
          .slick-prev svg,
          .slick-next svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Row10;

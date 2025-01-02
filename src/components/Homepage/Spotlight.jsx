import React from "react";
import Heading from "../common/Heading";
import { MdEventAvailable, MdCampaign } from "react-icons/md";
import { SiStorybook, SiGooglepodcasts } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import { FaAward } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";


const Spotlight = () => {
    const categoryIcons = {
        Events: <MdEventAvailable className="inline-block mr-2 text-xl" />,
        Stories: <SiStorybook className="inline-block mr-2 text-xl" />,
        Campaigns: <MdCampaign className="inline-block mr-2 text-xl" />,
        Podcasts: <SiGooglepodcasts className="inline-block mr-2 text-xl" />,
        News: <HiNewspaper className="inline-block mr-2 text-xl" />,
        Reports: <HiDocumentReport className="inline-block mr-2 text-xl" />,
        Awards: <FaAward className="inline-block mr-2 text-xl" />,
        Blogs: <FaBlog className="inline-block mr-2 text-xl" />,
    };  

    const newsItems = [
        {
            category: "Events",
            title: "PAGA 1.0",
            description: "PAGA 1.0 2022, organized by PANTISS and UNICEF, focuses on accelerating climate change adaptation through the convergence of Just Transition and Circular Economy.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.35.28_PM_oqfhdm.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Stories",
            title: "Stepping Forward: Chappal-Making Unit Empowering Communities",
            description: "Discover the journey of establishing a chappal-making unit under the WASH Enterprise, fostering livelihood opportunities while promoting hygiene and sustainability in rural communities.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.45.13_PM_pa9cwy.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Campaigns",
            title: "Youth4Water+: Empowering Odisha’s Water Warriors",
            description: "Join the Youth4Water+ campaign in Odisha to inspire, engage, and empower young changemakers in addressing water challenges. Together, let’s promote sustainable water practices and create a cleaner, healthier future for all.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.07.22_PM_owip2i.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Podcasts",
            title: "UN Career Spotlight: With Anwesha Dutta",
            description: "Discover the inspiring journey of Anwesha Dutta, WASH Officer at UNICEF, as she shares her experiences, challenges, and insights from her impactful career in the United Nations. Tune in to learn about her role in transforming communities through WASH initiatives and her advice for aspiring change-makers.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813452/WhatsApp_Image_2025-01-02_at_3.08.19_PM_hypjdv.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "News",
            title: "Sato Toilets Transform Thuamulrampur: A Step Towards Hygiene and Dignity",
            description: "Under the MoWash Model Village initiative, the construction of Sato toilets in Thuamulrampur marks a significant stride toward improving sanitation in rural Odisha. This effort aims to enhance hygiene, reduce open defecation, and ensure dignity for the local community.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.12.29_PM_tluhtr.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Reports",
            title: "The WASH Guardians: Odisha Report",
            description: "Explore detailed insights into Odisha's WASH initiatives, highlighting key achievements, challenges, and progress in ensuring clean water, sanitation, and hygiene for communities across the state.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.40.14_PM_qj7fgo.jpg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Awards",
            title:
              "Listed on India Book of Records for Largest Hand Washing at one Place",
            description:
              "Recognized by the India Book of Records for organizing the largest handwashing event at a single location, promoting hygiene awareness and emphasizing the importance of handwashing as a cornerstone of public health",
            imageUrl:
              "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735191971/Awards_bbpnu5.jpg",
            linkText: "View More",
          },
        {
            category: "Blogs",
            title: "Safety and Dignity for Safai Karmacharis",
            description: "Explore stories, initiatives, and insights focused on empowering Safai Karmacharis with safer work environments, proper safety gear, and the dignity they deserve in their essential roles.",
            imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735813266/WhatsApp_Image_2025-01-02_at_3.42.45_PM_fayqmg.jpg", // Replace with the actual image path
            linkText: "View More",
        },
    ];

    return (
        <div className="bg-blue-600 px-10">
            <section className="container mx-auto py-10">
                <Heading text="SPOTLIGHT" color="text-white" bgColor="bg-[white]" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="group ring-1 ring-blue-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-white hover:bg-blue-600 transition-all duration-300"
                        >
                            {/* Content Section */}
                            <div className="p-6 transition-all duration-300 group-hover:bg-blue-600">
                                <p className="text-2xl font-bold flex justify-start items-center uppercase text-blue-600 group-hover:text-white mb-2 transition-all duration-300">
                                    {categoryIcons[item.category]}{item.category}
                                </p>
                                <h2 className="text-lg font-semibold mb-4 text-blue-600 group-hover:text-white transition-all duration-300">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 group-hover:text-white mb-6 transition-all duration-300">
                                    {item.description}
                                </p>
                                <a href="#" className="text-sm font-semibold text-gray-900 group-hover:text-white hover:underline transition-all duration-300">
                                    {item.linkText} →
                                </a>
                            </div>

                            {/* Image Section */}
                            <div className="h-48 relative bg-cover bg-center" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                                <div
                                    className="absolute top-0 left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white group-hover:border-t-blue-600 transition-all duration-300"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Spotlight;

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
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/Untitled-1024-%C3%97-768-px.png", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Stories",
            title: "Elevating Mining Expertise: Skill Development in Sukinda-Danagadi Chromite Region, Jajpur District",
            description: "A review of evidence, bottlenecks and opportunities to meeting sustainable development Goals for mining workers.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-6.48.36-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Campaigns",
            title: "India Book of Record",
            description: "In a remarkable display of collective hygiene, 5000 youths came together to wash their hands simultaneously on Global Handwashing Day.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/Untitled-1024-%C3%97-768-px-1.png", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Podcasts",
            title: "Youth in action for forest fire in niyamgiri hill",
            description: "A Story of Hope: Indigenous Communities Leading the Way in Forest Fire Prevention",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-5.28.26-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "News",
            title: "Youth in action for forest fire in niyamgiri hill",
            description: "A Story of Hope: Indigenous Communities Leading the Way in Forest Fire Prevention",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-5.28.26-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Reports",
            title: "Youth in action for forest fire in niyamgiri hill",
            description: "A Story of Hope: Indigenous Communities Leading the Way in Forest Fire Prevention",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-5.28.26-PM.jpeg", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Awards",
            title: "PAGA 1.0",
            description: "PAGA 1.0 2022, organized by PANTISS and UNICEF, focuses on accelerating climate change adaptation through the convergence of Just Transition and Circular Economy.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/Untitled-1024-%C3%97-768-px.png", // Replace with the actual image path
            linkText: "View More",
        },
        {
            category: "Blogs",
            title: "Elevating Mining Expertise: Skill Development in Sukinda-Danagadi Chromite Region, Jajpur District",
            description: "A review of evidence, bottlenecks and opportunities to meeting sustainable development Goals for mining workers.",
            imageUrl: "https://pantiss.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-06-28-at-6.48.36-PM.jpeg", // Replace with the actual image path
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

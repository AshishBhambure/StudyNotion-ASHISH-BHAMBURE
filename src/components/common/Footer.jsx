import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { FooterLink2 } from "../../data/footer-links";

const Footer = () => {
  const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
  const Sections = {
    Company: ["About", "Careers", "Affiliates"],
    Resources: ["Articles", "Blog", "Chart Sheet", "Code challenges", "Docs", "Projects", "Videos", "Workspaces"],
    Plans: ["Paid memberships", "For students", "Business solutions"],
    Community: ["Forums", "Chapters", "Events"],
  };

  const renderLinks = (title, items) => (
    <div className="mb-7 lg:w-[30%]">
      <h1 className="text-richblack-50 font-semibold text-[16px]">{title}</h1>
      <div className="flex flex-col gap-2 mt-2">
        {items.map((item, i) => (
          <Link
            key={i}
            to={`/${item.toLowerCase().split(" ").join("-")}`}
            className="text-[14px] hover:text-richblack-50 transition-all duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-richblack-800 text-richblack-400 text-sm">
      <div className="w-11/12 max-w-maxContent mx-auto py-14 border-b border-richblack-700">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-[50%] flex flex-wrap gap-3">
            <div className="mb-7 lg:w-[30%]">
              <img src={Logo} alt="Logo" className="object-contain mb-3" />
              {renderLinks("Company", Sections.Company)}
              <div className="flex gap-3 text-lg mt-3">
                <FaFacebook /> <FaGoogle /> <FaTwitter /> <FaYoutube />
              </div>
            </div>
            {renderLinks("Resources", Sections.Resources)}
            {renderLinks("Plans", Sections.Plans)}
            {renderLinks("Community", Sections.Community)}
          </div>

          <div className="lg:w-[50%] flex flex-wrap gap-3">
            {FooterLink2.map((section, i) => (
              <div key={i} className="mb-7 lg:w-[30%]">
                <h1 className="text-richblack-50 font-semibold text-[16px]">{section.title}</h1>
                <div className="flex flex-col gap-2 mt-2">
                  {section.links.map((link, j) => (
                    <Link
                      key={j}
                      to={link.link}
                      className="text-[14px] hover:text-richblack-50 transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 max-w-maxContent mx-auto py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="flex gap-3">
          {BottomFooter.map((item, i) => (
            <Link
              key={i}
              to={`/${item.toLowerCase().split(" ").join("-")}`}
              className={`px-3 ${i < BottomFooter.length - 1 ? "border-r border-richblack-700" : ""} hover:text-richblack-50`}
            >
              {item}
            </Link>
          ))}
        </div>
        <a
          href="https://github.com/AshishBhambure"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Project By Ashish Bhambure
        </a>
      </div>
    </div>
  );
};

export default Footer;

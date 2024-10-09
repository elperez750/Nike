import React from "react";
import { footerLogo } from "../assets/images";
import { instagram, facebook, twitter } from "../assets/icons";

const Footer = () => {
  const PRODUCTS = ["Air Force 1", "Air Max 1", "Air Max 97", "Air Max 270", "Nike Cortez", "Nike React"];
  const HELP = ["Order Status", "Shipping and Delivery", "Returns", "Payment Options", "Contact Us"];
  const COMPANY = ["About Nike", "News", "Careers", "Investors", "Sustainability"];
  const QUICK_LINKS = ["Find a Store", "Become a Member", "Sign Up for Email", "Send Us Feedback"];

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 xl:col-span-1">
            <img src={footerLogo} alt="footer-logo" className="w-36 mb-6" />
            <p className="text-gray-400 max-w-sm mb-8">
              Get shoes ready for the new term at your nearest Nike store. Find your
              perfect Size in Store. Get Rewards.
            </p>
            <div className="flex gap-4 mb-8">
              {[instagram, facebook, twitter].map((icon, index) => (
                <button key={index} className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                  <img src={icon} alt={`social-icon-${index}`} className="w-6 h-6" />
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-sm">© Copyright. All rights reserved.</p>
          </div>

          {[
            { title: "Products", items: PRODUCTS },
            { title: "Help", items: HELP },
            { title: "Company", items: COMPANY },
            { title: "Quick Links", items: QUICK_LINKS },
          ].map((section, index) => (
            <div key={index} className="col-span-1">
              <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="hover:text-coral-red cursor-pointer transition-colors text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
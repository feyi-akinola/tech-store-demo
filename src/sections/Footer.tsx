interface FooterSection {
  title: string;
  links: string[];
}

const Footer = () => {
  const footerSections: FooterSection[] = [
    {
      title: "Shop",
      links: [
        "Laptops",
        "Smartphones",
        "Tablets",
        "Headphones & Audio",
        "Gaming",
        "Accessories",
      ],
    },
    {
      title: "Support",
      links: [
        "Track Your Order",
        "Returns & Refunds",
        "Shipping Information",
        "Warranty & Repairs",
        "FAQs",
        "Contact Support",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Blog",
        "Press & Media",
        "Sustainability",
        "Affiliate Program",
      ],
    },
    {
      title: "Connect With Us",
      links: [
        "Facebook",
        "Instagram",
        "X (Twitter)",
        "YouTube",
        "LinkedIn",
        "TikTok",
      ],
    },
  ];

  const endLinks: string[] = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Settings",
    "Accessibility",
    "Sitemap",
  ];

  return (
    <footer className="w-full mx-auto bg-blue-100 flex flex-col items-center
      justify-center gap-6 p-10">
      <div
        id="footer-sections"
        className="w-full grid grid-cols-2 md:grid-cols-4 mx-auto">
        {
          footerSections.map((section, index) => (
            <div key={index} className="h-full mb-8 flex flex-col gap-4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
              <ul className="flex flex-col gap-1 md:gap-2">
                {
                  section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="hover:text-blue-500 transition-colors
                        duration-300 text-base md:text-lg">
                      {link}
                    </a>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>

      <div className="flex gap-4">
        {
          endLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="italic text-sm text-black/50 hover:text-blue-500
                transition-colors duration-300">
              {link}
            </a>
          ))
        }
      </div>

      <p className="text-sm text-black/50">
        &copy; 2025 Tech Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
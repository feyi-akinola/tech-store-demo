import Categories from "./Categories";
import Selector from "../components/Selectors";
import { useState } from "react";

const BottomBanner = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("USA");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");

  const links: string[] = [
    "Promotions",
    "Stores",
    "Our Contacts",
    "Delivery & Return",
    "Outlet",
    "Blog",
  ];
  
  const selectors: Record<string, any> = {
    "country": {
      "title": "Country",
      "selectedOption": selectedCountry,
      "options": [
        "USA",
        "UK",
        "Canada",
        "Australia",
        "Japan",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Portugal",
        "Greece",
      ],
    },
    "currency": {
      "title": "Currency",
      "selectedOption": selectedCurrency,
      "options": [
        "USD",
        "EUR",
        "GBP",
        "CAD",
        "AUD",
        "JPY",
      ],
    },
  };
  
  const iconButtons: Record<string, any>[] = [
    {
      "title": "Account",
      "icon": "👤",
      "hasBadge": false,
      "badgeContent": 0,
    },
    {
      "title": "Wishlist",
      "icon": "💖",
      "hasBadge": true,
      "badgeContent": 1,
    },
    {
      "title": "Cart",
      "icon": "🛒",
      "hasBadge": true,
      "badgeContent": 2,
    },
  ];

  return (
    <div
      id="bottom-banner"
      className="w-full flex items-center justify-between bg-blue-100/70 px-24
        font-medium py-2"
    >
        <div id="categories" className="flex items-center gap-8">
          <Categories />

          {
            links.map((link, index) => (
              <p
                key={index}
                className="cursor-pointer hover:text-blue-400 transition-colors
                  duration-200"
              >
                {link}
              </p>
            ))
          }
        </div>

        <div className="flex gap-12">
          <div id="selectors" className="flex items-center gap-8">
            <Selector 
              text={selectedCountry}
              options={selectors.country.options}
              onSelect={(option: string) => setSelectedCountry(option)}
            />
            <Selector 
              text={selectedCurrency} 
              options={selectors.currency.options}
              onSelect={(option: string) => setSelectedCurrency(option)}
            />
          </div>

          <div id="icon-buttons" className="flex items-center gap-4">
            {
              iconButtons.map((iconButton: Record<string, any>, index: number) => (
                <div 
                  key={index}
                  className="relative w-10 h-10 rounded-full bg-white flex
                    items-center justify-center"
                >
                  <p
                    className="w-10 h-10 rounded-full bg-white flex items-center
                      justify-center"
                  >
                    {iconButton.icon}
                  </p>
                  <span
                    className="absolute w-5 h-5 rounded-full bg-white flex
                      items-center justify-center -top-2 -right-2 text-xs ring-1
                      ring-gray-300"
                  >
                    {iconButton.badgeContent}
                  </span>
                </div>
              ))
            }

            <p id="cart-total" className="font-bold text-blue-500 text-lg">
              $0.00
            </p>
          </div>
        </div>

    </div>
  );
};

export default BottomBanner;
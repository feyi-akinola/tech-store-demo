import { useState } from "react";
import Categories from "./Categories";
import Selector from "../components/Selectors";

// Icons
import AccountIcon from "../assets/svg/account.svg?react";
import WishlistIcon from "../assets/svg/heart.svg?react";
import CartIcon from "../assets/svg/cart.svg?react";

interface IconButton {
  title: string,
  icon: any,
  hasBadge: boolean,
  badgeContent: number | null,
}

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
  
  const iconButtons: IconButton[] = [
    {
      title: "Account",
      icon: <AccountIcon
        className="w-4.5 h-4.5 fill-black/80 group-hover:fill-blue-500
          group-hover:scale-115 transition-all duration-300"/>,
      hasBadge: false,
      badgeContent: null,
    },
    {
      title: "Wishlist",
      icon: <WishlistIcon
        className="w-4.5 h-4.5 fill-black/80 group-hover:fill-red-600
          group-hover:scale-115 transition-all duration-300"/>,
      hasBadge: true,
      badgeContent: 1,
    },
    {
      title: "Cart",
      icon: <CartIcon
        className="w-4.5 h-4.5 fill-black/80 group-hover:fill-green-600
          group-hover:scale-115 transition-all duration-300"/>,
      hasBadge: true,
      badgeContent: 2,
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
              iconButtons.map((iconButton: IconButton, index: number) => (
                <div 
                  key={index}
                  className="relative w-12 h-12 rounded-full bg-white flex
                    items-center justify-center group cursor-pointer"
                >
                  {iconButton.icon}
                  {
                    iconButton.hasBadge && (
                      <div
                        className="absolute w-6 h-6 rounded-full bg-red-500 flex
                          items-center justify-center -top-3 -right-2"
                      >
                        <p className="text-white text-xs font-bold">
                          {iconButton.badgeContent}
                        </p>
                    </div>
                    )
                  }
                </div>
              ))
            }

            <p id="cart-total" className="font-bold text-blue-500 text-xl">
              $9.95
            </p>
          </div>
        </div>
    </div>
  );
};

export default BottomBanner;
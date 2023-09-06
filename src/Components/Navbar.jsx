import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../Constants";

const Navbar = () => {
  const [navHidden, setNavHidden] = useState(false);

  function handleNavBar() {
    if (navHidden) setNavHidden(false);
    else setNavHidden(true);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className={`${navHidden ? "" : `hidden`} md:block`}>
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul
          className={`flex-1 flex justify-center items-center gap-16 transition-all duration-200 max-md:gap-4  md:translate-x-0 md:duration-0 md:static
        ${navHidden ? `translate-x-[500px] fixed` : `translate-x-0 `}
        `}
        >
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg max-md:text-sm text-slate-gray hover:underline"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-md:block" onClick={handleNavBar}>
          <img
            src={navHidden ? hamburger : close}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

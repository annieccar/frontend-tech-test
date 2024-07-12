import { useEffect, useState } from 'react';

import { RiMenu3Fill } from 'react-icons/ri';

function Header({ headerData }): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    window.innerWidth <= 640 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between top-0">
        <img src={headerData.logo.url} className="w-24 md:w-32" />
        {!isMobile ? (
          <div className="flex gap-10 mr-5">
            {headerData.menuItems.map((item) => (
              <div className="text-white md:text-xl font-semibold hover:text-facebook hover:cursor-pointer">
                {item.name.toUpperCase()}{' '}
              </div>
            ))}
            <div className="text-white font-semibold md:text-xl hover:text-facebook hover:cursor-pointer">
              CONTACT
            </div>
          </div>
        ) : (
          <RiMenu3Fill className="text-white text-3xl" onClick={() => handleMenu()} />
        )}
      </div>
      {menuOpen ? (
        <div
          onClick={() => handleMenu()}
          className="text-white z-30 fixed inset-0 bg-black opacity-70"
        >
          <div className="h-full flex flex-col items-end mr-10 mt-20 gap-10">
            {headerData.menuItems.map((item) => (
              <div className="text-white text-2xl  font-semibold ">{item.name.toUpperCase()} </div>
            ))}
            <div className="text-white text-2xl font-semibold ">CONTACT</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
export default Header;

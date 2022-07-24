import React from 'react';

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-8 z-10 hidden h-[10vh] items-center justify-center bg-transparent text-white lg:flex ">
      <div className="mx-auto flex w-11/12 justify-between">
        <div className="flex select-none flex-col items-center justify-center gap-2">
          <p className="font-Melodrama text-[6rem] font-bold uppercase leading-none">AE</p>
          <div className="flex gap-2 font-Melodrama text-2xl lowercase">
            <p className="font-black">Argo</p>
            <p>Energy</p>
          </div>
        </div>

        {/* <div>Menu</div> */}
      </div>
    </header>
  );
};

export default Header;

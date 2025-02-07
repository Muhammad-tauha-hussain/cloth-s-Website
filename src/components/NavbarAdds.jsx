import React, { useEffect, useState } from 'react';
import bannerLog from '../../public/bannerLog.png';
import bannerLogo1 from '../../public/bannerLogo1.png';
import bannerLogo2 from '../../public/bannerlogo2.png';
import bannerLogo3 from '../../public/bannerLogo3.png';
import bannerLogo4 from '../../public/bannerlogo4.png';

const NavbarAdds = () => {
  const logos = [bannerLog, bannerLogo1, bannerLogo2, bannerLogo3, bannerLogo4];
  // const [offSet, setOffSet] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOffSet((prevOffSet) => (prevOffSet - 1 + logos.length) % logos.length); // ensures positive offset value
  //   }, 1000); // Adjust the time for how quickly the images move

  //   return () => clearInterval(interval);
  // }, [logos.length]);

  return (
    <div className="bg-black py-10 px-5 w-full">
      <div className="flex items-center justify-center overflow-hidden">
        <div
          className="flex gap-1 justify-center items-center space-x-8 transition-transform duration-1000"
          // style={{
          //   transform: `translateX(${offSet * -100}%)`, // Moves the images by -100% each time
          // }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-16 h-8 md:w-32"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarAdds;

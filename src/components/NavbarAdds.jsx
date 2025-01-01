import React from 'react';
import bannerLog from '../../public/bannerLog.png'
import bannerLogo1 from '../../public/bannerLogo1.png'
import bannerLogo2 from '../../public/bannerlogo2.png'
import bannerLogo3 from '../../public/bannerLogo3.png'
import bannerLogo4 from '../../public/bannerlogo4.png'
const NavbarAdds = () => {
  const logos = [bannerLog,bannerLogo1,bannerLogo2,bannerLogo3,bannerLogo4];

  return (
    <div className="bg-black py-10 px-5 w-full">
      <div className="flex items-center justify-center flex-wrap">
        <div className="flex gap-10 flex-wrap justify-center items-center space-x-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarAdds;

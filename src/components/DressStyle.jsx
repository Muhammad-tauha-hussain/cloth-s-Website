import React from 'react';

const dressStyles = [
  {
    title: 'Casual',
    imgSrc: '/casual.png',
    alt: 'Casual Style',
  },
  {
    title: 'Formal',
    imgSrc: '/formal.png',
    alt: 'Formal Style',
  },
  {
    title: 'Party',
    imgSrc: '/party.png',
    alt: 'Party Style',
  },
  {
    title: 'Gym',
    imgSrc: '/gym.png',
    alt: 'Gym Style',
  },
];

const DressStyle = () => {
  return (
    <div className="w-[80%] mx-auto bg-gray-100 p-6 rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Browse by Dress Style
      </h1>

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dressStyles.slice(0, 2).map((style, index) => (
          <div
            key={index}
            className={`${
              index === 1 ? 'col-span-2' : 'col-span-1'
            } bg-white flex items-stretch rounded-2xl shadow-lg h-[200px]`}
          >
            <div className="flex-1 relative">
              <img
                src={style.imgSrc}
                alt={style.alt}
                className="object-cover w-full h-full rounded-l-2xl"
              />
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <h1 className="text-gray-800 text-2xl font-bold">{style.title}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {dressStyles.slice(2).map((style, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'col-span-2' : 'col-span-1'
            } bg-transparent flex items-stretch rounded-2xl shadow-lg h-[200px]`}
          >
            <div className="flex-1 relative">
              <img
                src={style.imgSrc}
                alt={style.alt}
                className="object-cover w-full h-full rounded-l-2xl"
              />
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <h1 className="text-gray-800 text-2xl font-bold">{style.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressStyle;

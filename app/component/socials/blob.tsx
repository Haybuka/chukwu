import React from 'react';

const AvatarBlob = () => {
  return (
    <div className="absolute w-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FF0066"
          d="M67.8,-19.3C76.3,4.3,63.9,37.5,41.9,52.2C20,66.9,-11.5,63,-33.9,46.6C-56.4,30.3,-69.9,1.6,-62.7,-20C-55.5,-41.7,-27.8,-56.4,0.9,-56.7C29.6,-57,59.2,-42.9,67.8,-19.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default AvatarBlob;

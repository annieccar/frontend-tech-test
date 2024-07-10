import React from 'react';

function Ad({ adData }: any) {
  return (
    <a href={adData[0].redirectionTarget} target="blank">
      <img src={adData[0].image[0].image.url} alt={adData[0].image[0].image.description} />
    </a>
  );
}

export default Ad;

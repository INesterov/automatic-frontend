import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = (): JSX.Element => {
  return (
    <ContentLoader
      speed={4}
      width="100%"
      height={70}
      backgroundColor="#E7E7FC"
      foregroundColor="#9A9CFC"
    >
      <rect x="0" y="0" rx="8" ry="8" width="100%" height="70" />
    </ContentLoader>
  );
};

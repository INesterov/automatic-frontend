import React from 'react';
import ContentLoader from 'react-content-loader';
import { Container } from './styled';

export const Skeleton = (): JSX.Element => {
  return (
    <Container>
      <ContentLoader
        speed={3}
        width="100%"
        height={56}
        backgroundColor="#E7E7FC"
        foregroundColor="#9A9CFC"
      >
        <rect x="0" y="0" rx="8" ry="8" width="100%" height="16" />
        <rect x="0" y="40" rx="8" ry="8" width="100%" height="16" />
      </ContentLoader>
    </Container>
  );
};

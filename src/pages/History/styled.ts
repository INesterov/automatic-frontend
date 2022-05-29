import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 48px;
  border-bottom: 1px solid #DCDCF5;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 16px;
  height: 100%;
`;

export const Item = styled.div`
  border-bottom: 1px solid #DCDCF5;
  padding-bottom: 4px;
  margin-bottom: 4px;
`;
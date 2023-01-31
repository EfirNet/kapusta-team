import styled from 'styled-components';

export const BoxPadding = styled.div`
  padding-top: 35px;
  padding-bottom: 52px;
  @media screen and (min-width: 768px) {
    padding: 30px 0 80px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 30px 0 85px 0;
  }
`;

export const ChartBox = styled.div`
  position: relative;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    border-radius: 30px;
    height: 422px;
    padding: 20px 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 130px;
  }
`;

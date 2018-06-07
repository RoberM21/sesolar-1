import styled from 'styled-components';

export const SliderMainContainer = styled.div`
  float: left;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const EmpyProgressContainer = styled.div`
  float: left;
  width: 100%;
  height: 18px;
  border-radius: 100px;
  background-color: #f2f2f2;
`;

export const ProgressContainer = styled.div`
  float: left;
  width: 100%;
  border-radius: 100px;
  height: 18px;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress}%;
  float: left;
  height: 18px;
  border-radius: 100px;
  background-color: #3866c1;
  margin-top: -17px;
  transition: all .25s;
`;

export const Indicator = styled.span`
  width: 33px;
  height: 33px;
  border-radius: 100%;
  background: #3866c1;
  float: left;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.22);
  position: relative;
  margin-top: -25px;
  margin-left: ${(props) => props.last ? '-33px' : '-17px'};
`;

export const DotsSection = styled.div`
  width: 100%;
  height: 18px;
  position: relative;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
`;

export const DarkDot = styled.span`
  float: left;
  height: 6px;
  width: 6px;
  background: ${(props) => props.over ? '#ffffff' : '#ababab'};
  border-radius: 100%;
  position: relative;
`;

export const DotItem = styled.span`
  float: left;
  height: 100%;
  padding: 6px 0;
  width: 22px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  float: left;
  width: 100%;
  background: white;
`;

export const AmountSelected = styled.div`
  float: left;
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.2px;
  color: #494949;
  margin-top: 15px;;
`;

export const AmountsSection = styled.div`
  float: left;
  width: 100%;
  margin-top: 11px;
  display: flex;
  justify-content: space-between;
`;

export const AmountItem = styled.div`
  float: left;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #adadad;
`;

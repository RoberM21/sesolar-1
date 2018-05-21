import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const styles = {
  dropDownMenuStyle: {
    float: 'left',
    width: '123px',
    textAlign: 'left',
    border: 'solid 1px #cac5c5',
    borderRadius: '4px',
    height: 43,
  },
  dropDownMenuStylePeriods: {
    float: 'left',
    width: '147px',
    textAlign: 'left',
    border: 'solid 1px #cac5c5',
    borderRadius: '4px',
    height: 43,
  },
  dropDownMenuUnderline: {
    display: 'none',
  },
  dropDownMenuLabel: {
    fontFamily: 'Avenir',
    fontSize: '16px',
    fontWeight: '400',
    color: '#555555',
    paddingLeft: 16,
    height: 43,
    lineHeight: '47px',
  },
  dropDownMenuIcon: {
    fill: '#cac5c5',
    right: 0,
    top: 0,
    padding: 8,
    width: 40,
    height: 43,
  },
};

export const Container = styled.div`
  margin-left: 160px;
  margin-top: 2%;
`;

export const ImageContainer = styled.div`
  width: 256px;
  height: 160px;
  display: flex;
`;
export const DistributorImage = styled.img`
  display: block;
  max-height: 124px;
  width: auto;
  height: auto;
  max-width: 156px;
  margin: 0 auto;
`;

export const DashedBox = styled.div`
  height: 153px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #979797;
  flex-direction: column;
  width: 264px;
  cursor: pointer;
`;

export const GreenSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #456bae;
  display: block;
  margin-top: 8px;
  cursor: pointer;
`;

export const InputForms = styled.article`
  width: 58%;
  vertical-align: top;
  margin-top: 20px;
  padding: 24px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-image-slice: 1;
  display: inline-flex;
  justify-content: space-between;
`;

export const StepContainer = styled.div`
  width: 100%;
  padding: 1% 0 1% 15px;
  float: left;
`;

export const Step = styled.div`
  width: 24px;
  height: 24px;
  background-color: #456bae;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: white;
  float: left;
  border-radius: 50%;
  margin-right: 16px;
`;

export const Text = styled.div`
  float: left;
  font-size: 16px;
  font-weight: 800;
  color: #555555;
`;

export const ContainerInfo = styled.div`
`;

export const Instructions = styled.div`
  width: 58%;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #494949;
`;

export const DatePickerSection = styled.div`
  margin-top: 22px;
  float: left;
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const ButtonsSection = styled.div`
  width: 100%;
  margin-top: 45px;
  padding-bottom: 100px;
  text-align: right;
  padding-left: 37%;
`;


export const StyledFlatButton = styled(FlatButton)`
  margin-right: 8px;
  float: left;
`;

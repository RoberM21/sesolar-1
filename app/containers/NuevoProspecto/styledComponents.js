import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const FormContainer = styled.div`
  width: 100%;
  height: 100% !important;
  margin-left: 160px;
  float: left;
`;

export const Container = styled.div`
  width: 45%;
`;

export const StepContainer = styled.div`
  padding-left: 16px;
  float: left;
  margin-top: 34px;
`;

export const StepNumber = styled.span`
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

export const StepDescription = styled.span`
  float: left;
  font-size: 16px;
  font-weight: 800;
  color: #555555;
`;

export const PersonalDataContainer = styled.div`
  width: 100%;
  float: left;
  background-color: white;
  padding: 12px 24px 32px 56px;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  margin-top: 16px;
`;

export const TextQuestion = styled.div`
  width: 40%;
  float: left;
  margin-top: 11px;
  font-size: 17px;
  letter-spacing: 0.7px;
  font-weight: 500;
  color: #555555;
`;

export const Text = styled.div`
  width: 5%;
  float: left;
  padding-top: 12px;
  color: #555555;
`;

export const ContainerQuestion = styled.div`
  width: 100%;
`;

export const ContainerSwitch = styled.div`
  margin-right: 5px;
  float: left;
`;

export const NewClient = styled.button`
  margin-top: 14px;
  color: #3865c1;
  font-size: 17px;
  letter-spacing: 0.7px;
  cursor: pointer;
  font-weight: 500;
  outline: none;
`;

export const ListClient = styled.div`
  list-style-type: circle;
`;

export const Empty = styled.div`
`;

export const ActionButton = styled(FlatButton)`
  display: flex;
  border-radius: 26px !important;
  width: 152px;
  color: #3865c1 !important;
  &:hover ${ActionButton}{
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07); !important;
  }
`;

export const Btns = styled.div`
  margin-top: 30px;
  padding-bottom: 20px;
  margin-left: 40%;
`;

export const TextProgress = styled.div`
  width: 100%;
  float: left;
  padding-top: 12px;
  margin-top: 20px;
  color: #555555;
`;

export const Styles = {
  buttonStyle: {
    borderRadius: '26px',
  },
  rootStyle: {
    backgroundColor: '#F3F3F3',
    boxShadow: 'none',
    display: 'flex',
    width: '152px',
    float: 'right',
  },
  FilterButton: {
    fontSize: '12px',
    lineHeight: '24px',
    width: '80%',
    fontWeight: '500',
    height: '32px',
    display: 'inline-block',
    position: 'relative',
    backgroundColor: 'transparent',
    transition: 'all 0.25s',
    cursor: 'auto',
    borderRadius: '26px',
    border: '1px solid #3865c1',
    overflow: 'visible',
    paddingLeft: '16px',
    verticalAlign: 'top',
    marginTop: '2px',
  },
  LabelFilter: {
    top: '-12px',
    color: '#3865c1',
  },
  IconSelect: {
    fill: '#3865c1',
    top: '-8px',
  },
  color: {
    color: '#3865c1',
  },
};


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

export const InputForms = styled.article`
  width: 100%;
  vertical-align: top;
  margin-top: 20px;
  padding: 12px;
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

export const DistributorImage = styled.img`
  display: block;
  max-height: 124px;
  width: auto;
  height: auto;
  max-width: 156px;
  margin: 0 auto;
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

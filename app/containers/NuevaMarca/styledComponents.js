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


export const ButtonsSection = styled.div`
  width: 100%;
  margin-top: 32px;
  padding-bottom: 40px;
  text-align: left;
  padding-left: 35%;
`;


export const StyledFlatButton = styled(FlatButton)`
  margin-right: 8px;
`;

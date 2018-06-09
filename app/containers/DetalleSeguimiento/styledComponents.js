import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin-left: 15%;
  margin-top: 2%;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const ContainerClient = styled.div`
  margin: 0 30px 0 70px !important;
  background: green;
  padding: 20px;
  display: flex;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12);
  border-style: solid;
  border-width: 1px;
  border-image-source: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-image-source: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-image-source: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0));
  border-image-slice: 1;
`;

export const StepContainer = styled.div`
  width: 100%;
  float: left;
  padding-left: 30px;
  margin-bottom: 10px;
  margin-top: 15px;
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

export const Text = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  height: 15px;
  text-align: center;
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: inherit;
`;

export const DivContainer = styled.div`
  min-width: 90%; 
`;

export const TextProgress = styled.div`
  width: 100%;
  float: left;
  color: #555555;
  margin-bottom: 10px;
`;

export const Information = styled.div`
  padding-left: 10%;
`;


export const InputForms = styled.article`
  width: 100%;
  vertical-align: top;
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


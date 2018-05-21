import styled from 'styled-components';

export const styles = {
  dialogStyle: {
    width: '608px',
    maxWidth: '798px',
  },
  dialogBodyStyle: {
    padding: '0',
    border: 'none',
  },
  closeIcon: {
    position: 'fixed',
    top: '16px',
    right: '16px',
    cursor: 'pointer',
  },
  checkIconSize: {
    width: 18,
    height: 18,
  },
  titleStyle: {
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '0.7px',
    color: '#494949',
    padding: '24px 32px 20px',
  },
  saveButton: {
    width: '150px',
    boxShadow: 'none',
  },
  saveButtonStyle: {
    borderRadius: '26px',
  },
  saveLabelStyle: {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '400',
    color: '#fff',
  },
  cancelButton: {
    width: '150px',
  },
  cancelLabel: {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: '500',
    color: '#456bae',
  },
  dropDownMenuStyle: {
    float: 'left',
    width: '123px',
    textAlign: 'left',
    border: 'solid 1px #cac5c5',
    borderRadius: '4px',
    height: 47,
  },
  dropDownMenuStylePeriods: {
    float: 'left',
    width: '147px',
    textAlign: 'left',
    border: 'solid 1px #cac5c5',
    borderRadius: '4px',
    height: 47,
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
    height: 47,
    lineHeight: '47px',
  },
  dropDownMenuIcon: {
    fill: '#cac5c5',
    right: 0,
    top: 0,
    padding: 8,
    width: 40,
    height: 47,
  },
  inputStyle: {
    padding: '16px',
    height: 40,
    color: 'rgb(85, 85, 85)',
  },
  hintStyles: {
    bottom: '6px',
    paddingLeft: '16px',
    color: '#9e9e9e',
    fontWeight: '400',
  },
  rootStyle: {
    width: '100%',
    border: '1px solid #cac5c5',
    borderRadius: '4px',
    height: '40px',
    marginTop: '32px',
    marginBottom: '24px',
  },
};

export const MainContainer = styled.div`
  float: left;
  width: 100%;
  padding: 0 32px;
  height: 78px;
  display: flex;
  align-items: center;
`;

export const Instructions = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  color: #494949;
`;

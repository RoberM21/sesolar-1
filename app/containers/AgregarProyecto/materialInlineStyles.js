const blueColor = '#456bae';
const greyColor = 'rgb(171, 171, 171)';
const whiteColor = '#ffffff';

export const textFieldStyles = {
  rootStyle: {
    fontFamily: 'Roboto',
    height: 40,
    width: '58%',
    border: `1px solid ${greyColor}`,
    borderRadius: '4px',
    marginTop: 32,
  },
  rootStylePhone: {
    height: 43,
    width: '25%',
    border: `1px solid ${greyColor}`,
    borderRadius: '4px',
    marginTop: 24,
    marginLeft: '3%',
  },
  rootStyleFocusedPhone: {
    height: 43,
    width: '25%',
    border: `1px solid ${blueColor}`,
    borderRadius: '4px',
    marginTop: 24,
    marginLeft: '3%',
  },
  rootStyleFocused: {
    height: 40,
    width: '58%',
    border: `1px solid ${blueColor}`,
    borderRadius: '4px',
    marginTop: 32,
  },
  inputStyle: {
    fontFamily: 'Roboto',
    padding: '16px',
    color: '#00b74f',
    textShadow: '0px 0px 0px #000',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  hintStyle: {
    fontFamily: 'Roboto',
    marginLeft: 16,
    bottom: 6,
  },
  floatingLabelStyle: {
    fontFamily: 'Roboto',
    color: '#456bae',
  },
  focusedTextField: {
    top: 0,
  },
  defaultTextField: {
    fontFamily: 'Roboto',
    top: 10,
    left: 16,
  },
};

export const flatButtonStyles = {
  labelStyle: {
    color: blueColor,
    textTransform: 'none',
    fontSize: '15px',
    fontWeight: '400',
  },
  style: {
    marginRight: '8px',
    width: '150px',
  },
};

export const raisedButtonStyles = {
  buttonStyle: {
    borderRadius: '26px',
    float: 'left',
  },
  labelStyle: {
    padding: '0 49px',
    textTransform: 'none',
    fontWeight: '400',
    fontSize: '15px',
  },
  labelColor: whiteColor,
  backgroundColor: blueColor,
};

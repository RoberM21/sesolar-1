const blueColor = '#456bae';
// const greyColor = 'rgb(171, 171, 171)';

export const textFieldStyles = {
  rootStyle: {
    fontSize: '16px',
    lineHeigh: '24px',
    width: '50%',
    height: '40px',
    fontFamily: 'Avenir',
    cursor: 'none',
    border: '1px solid rgba(171, 171, 171, 0.31)',
    borderRadius: '50px',
    marginTop: '15px',
  },
  rootStyleFocused: {
    height: 40,
    width: '100%',
    border: `1px solid ${blueColor}`,
    borderRadius: '4px',
    marginTop: 32,
  },
  inputStyle: {
    padding: '16px',
    color: '#00b74f',
    textShadow: '0px 0px 0px #000',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
  hintStyle: {
    fontFamily: 'Avenir',
    marginLeft: 16,
    bottom: 6,
  },
  floatingLabelStyle: {
    fontFamily: 'Avenir',
    color: '#456bae',
  },
  focusedTextField: {
    top: 0,
  },
  defaultTextField: {
    fontFamily: 'Avenir',
    top: 10,
    left: 10,
  },
  BarStyle: {
    height: '8px',
    borderRadius: '100px',
  },
};

const blueColor = '#456bae';
const greyColor = 'rgb(171, 171, 171)';

export const textFieldStyles = {
  rootStyle: {
    fontFamily: 'Roboto',
    height: 40,
    width: '100%',
    border: `1px solid ${greyColor}`,
    borderRadius: '4px',
    marginTop: 32,
  },
  rootStyleFocused: {
    height: 40,
    width: '100%',
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
    left: 10,
  },
};
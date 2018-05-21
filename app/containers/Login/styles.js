const blueColor = '#456bae';
const greyColor = '#cac5c5';
const styles = {
  textfield: {
    correo: {
      float: 'left',
      width: '60%',
      height: '100%',
      marginBottom: '10px',
      border: `1px solid ${greyColor}`,
      borderRadius: '4px',
      inputStyle: {
        height: '28px',
        fontSize: '16px',
        paddingLeft: '8px',
        marginTop: '0',
      },
      labelStyle: {
        top: '3px',
        marginLeft: '5px',
        color: '#9e9e9e',
      },
      labelStyleFocused: {
        top: '3px',
        marginLeft: '5px',
        color: `${blueColor}`,
      },
      errorStyle: {
        top: '5px',
        marginBottom: '-12px',
        marginLeft: '5px',
      },
    },
    correoFocused: {
      float: 'left',
      width: '60%',
      height: '100%',
      marginBottom: '10px',
      border: `1px solid ${blueColor}`,
      borderRadius: '4px',
    },
    password: {
      marginBottom: '10px',
      inputStyle: {
        border: `1px solid ${greyColor}`,
        borderRadius: '4px',
        height: '28px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: 'monospace',
        paddingLeft: '8px',
      },
      inputStyleFocused: {
        border: `1px solid ${blueColor}`,
        borderRadius: '4px',
        height: '28px',
        bottom: '-18px',
        fontSize: '25px',
        fontFamily: 'monospace',
        paddingLeft: '8px',
      },
      label: {
        top: '34px',
        marginLeft: '5px',
        color: '#9e9e9e',
      },
      labelStyleFocused: {
        top: '34px',
        marginLeft: '5px',
        color: `${blueColor}`,
      },
      errorStyle: {
        top: '20px',
        bottom: '0',
        marginLeft: '5px',
      },
    },
  },
  div: {
    logo: {
      height: '35%',
    },
  },
};
export default styles;

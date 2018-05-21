/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FullPageLoader from 'components/FullPageLoader';
import SessionForm from 'components/SessionForm';
import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import { TextField } from 'material-ui';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import makeSelectLogin from './selectors';
import { EjemploCorreo, Link } from './styledComponents';
import * as Actions from './actions';
import messages from './messages';
import styles from './styles';
import config from '../../config';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    emailFocused: false,
    passwordFocused: false,
  }

  updateCorreo = (event) => {
    const { validateCorreoAction } = this.props;
    const { value } = event.target;
    const { emptyField } = messages.error;
    if (!value) {
      validateCorreoAction({ errorTextCorreo: emptyField, texto: value });
    } else {
      validateCorreoAction({ errorTextCorreo: '', texto: value });
    }
  }

  updatePassword = (event) => {
    const { validatePasswordAction } = this.props;
    const { value } = event.target;
    const { emptyField } = messages.error;
    if (!value) {
      validatePasswordAction({ errorTextPass: emptyField, texto: value });
    } else {
      validatePasswordAction({ errorTextPass: '', texto: value });
    }
  }

  validateNumeric(expression) {
    const regEx = /^[0-9\s]+$/i;
    return regEx.test(expression);
  }

  validateLength(value) {
    return value.length > 4;
  }

  handleRecuperarPass = () => {
    const { validateCorreoAction, validatePasswordAction } = this.props;
    validateCorreoAction({ errorTextCorreo: '', texto: '' });
    validatePasswordAction({ errorTextPass: '', texto: '' });
    browserHistory.push('recuperar-contrasena');
  }

  handleOnPressButton = () => {
    const { validateCorreoAction, validatePasswordAction, loginAction } = this.props;
    const { textoCorreo, textoPass, errorTextCorreo, errorTextPass } = this.props.login;
    if (!textoCorreo) {
      validateCorreoAction({ errorTextCorreo: messages.error.emptyField, texto: '' });
    }
    if (!textoPass) {
      validatePasswordAction({ errorTextPass: messages.error.emptyField, texto: '' });
    }

    if (!errorTextCorreo && !errorTextPass) {
      loginAction(textoCorreo, textoPass);
    }
  }

  handleRequestCloseSnackBar = () => {
    const { setSnackbarState } = this.props;
    setSnackbarState(false, '');
  }

  handleKeyPress = (target) => {
    const { textoPass, loading } = this.props.login;
    if (target.charCode === 13 && textoPass.length >= 8 && textoPass.length <= 30 && !loading) {
      this.handleOnPressButton();
    }
  };

  render() {
    const {
      errorTextCorreo,
      errorTextPass,
      snackbar,
      textoCorreo,
      textoPass,
      loading,
    } = this.props.login;

    const contenido = (
      <div>
        <div>
          <TextField
            floatingLabelText="Correo electrónico"
            floatingLabelStyle={
              this.state.emailFocused ?
              styles.textfield.correo.labelStyleFocused :
              styles.textfield.correo.labelStyle
            }
            style={this.state.emailFocused ? styles.textfield.correoFocused : styles.textfield.correo}
            errorText={errorTextCorreo}
            onChange={this.updateCorreo}
            errorStyle={styles.textfield.correo.errorStyle}
            inputStyle={styles.textfield.correo.inputStyle}
            underlineShow={false}
            onFocus={() => this.setState({ emailFocused: true })}
            onBlur={() => this.setState({ emailFocused: false })}
          />
          <EjemploCorreo className={'desc'}>{config.emailDomain}</EjemploCorreo>
        </div>
        <TextField
          floatingLabelText="Ingresa tu contraseña"
          floatingLabelStyle={this.state.passwordFocused ? styles.textfield.password.labelStyleFocused : styles.textfield.password.label}
          type="password"
          fullWidth
          onChange={this.updatePassword}
          style={styles.textfield.password}
          errorText={errorTextPass}
          errorStyle={styles.textfield.password.errorStyle}
          underlineShow={false}
          maxLength={30}
          inputStyle={this.state.passwordFocused ? styles.textfield.password.inputStyleFocused : styles.textfield.password.inputStyle}
          onKeyPress={(target) => this.handleKeyPress(target)}
          onFocus={() => this.setState({ passwordFocused: true })}
          onBlur={() => this.setState({ passwordFocused: false })}
        />
        <Link onClick={this.handleRecuperarPass}>Olvidé mi contraseña</Link>
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
        {loading && <FullPageLoader />}
      </div>
    );

    return (
      <SessionForm
        titulo="Ingresa a tu cuenta"
        contenido={contenido}
        labelButton="Ingresar"
        onPressButton={this.handleOnPressButton}
        buttonDisabled={!textoCorreo || textoPass.length < 8}
        paso={1}
      />
    );
  }
}

Login.propTypes = {
  login: PropTypes.object.isRequired,
  errorTextCorreo: PropTypes.string,
  errorTextPass: PropTypes.string,
  textoCorreo: PropTypes.string,
  textoPass: PropTypes.string,
  validatePasswordAction: PropTypes.func,
  validateCorreoAction: PropTypes.func,
  loginAction: PropTypes.func,
  setSnackbarState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(Actions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

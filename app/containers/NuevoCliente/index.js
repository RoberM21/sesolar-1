/*
 *
 * NuevoCliente
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  getCelphone,
  ALPHANUMERIC,
} from 'utils/regex';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectNuevoCliente from './selectors';
import messages from './messages';
import {
  FormContainer,
  StepContainer,
  StepNumber,
  StepDescription,
  PersonalDataContainer,
  EmailContainer,
  ButtonsSection,
  StyledFlatButton,
  Container,
} from './styledComponents';
import {
  textFieldStyles,
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';
import {
  getClientRequest,
  hideError,
} from './actions';

export class NuevoCliente extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    clientName: '',
    companyContact: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(hideError());
  }

  handleCreteUser = () => {
    const { dispatch } = this.props;
    const {
      clientName,
      address,
      contactName,
      companyName,
      phone,
      email,
    } = this.state;
    const cellphone = phone.replace(/\D/g, '');
    const body = {
      clientName,
      address,
      contactName,
      companyName,
      phone: cellphone,
      email,
    };
    dispatch(getClientRequest(body));
  }
  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'phone') {
      this.setState({ [name]: getCelphone(value) });
    } else if (name === 'email') {
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: value.replace(ALPHANUMERIC, '') });
    }
  }
  render() {
    const {
      NuevoCliente: {
        snackbar,
      },
    } = this.props;
    const {
      address,
      addressFocused,
      clientName,
      clientNameFocused,
      contactName,
      companyContactFocused,
      companyName,
      companyNameFocused,
      phone,
      phoneFocused,
      email,
      emailFocused,
    } = this.state;
    const disabledBtn =
      !clientName ||
      !contactName ||
      !companyName ||
      !phone ||
      !address ||
      !email;
    return (
      <div>
        <Helmet
          title="Nuevo Cliente"
          meta={[
            { name: 'description', content: 'Description of NuevoCliente' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <FormContainer>
          <Container>
            <StepContainer>
              <StepNumber>
                1
              </StepNumber>
              <StepDescription>
                Datos cliente
              </StepDescription>
            </StepContainer>
            <PersonalDataContainer>
              <TextField
                name="clientName"
                style={
                  clientNameFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={clientName}
                onChange={this.handleOnChange}
                autoFocus
                onFocus={() => this.setState({ clientNameFocused: true })}
                onBlur={() => this.setState({ clientNameFocused: false })}
                floatingLabelStyle={
                  clientNameFocused || clientName
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.clientName}
                maxLength="100"
              />
              <TextField
                name="companyName"
                style={
                  companyNameFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={companyName}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyNameFocused: true })}
                onBlur={() => this.setState({ companyNameFocused: false })}
                floatingLabelStyle={
                  companyNameFocused || companyName
                  ? textFieldStyles.focusedTextField : textFieldStyles.defaultTextField}
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.companyName}
                maxLength="100"
              />
              <TextField
                name="contactName"
                style={
                  companyContactFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={contactName}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyContactFocused: true })}
                onBlur={() => this.setState({ companyContactFocused: false })}
                floatingLabelStyle={
                  companyContactFocused || contactName
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.company}
                maxLength="100"
              />
              <TextField
                name="address"
                style={
                  addressFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={address}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ addressFocused: true })}
                onBlur={() => this.setState({ addressFocused: false })}
                floatingLabelStyle={
                  addressFocused || address
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.address}
                maxLength="100"
              />
              <TextField
                name="phone"
                style={
                  phoneFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={phone}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ phoneFocused: true })}
                onBlur={() => this.setState({ phoneFocused: false })}
                floatingLabelStyle={
                  phoneFocused || phone
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.phone}
                maxLength="20"
              />
            </PersonalDataContainer>
            <StepContainer>
              <StepNumber>
                2
              </StepNumber>
              <StepDescription>
                Correo electrónico
              </StepDescription>
            </StepContainer>
            <EmailContainer>
              <TextField
                name="email"
                style={
                  emailFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={email}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ emailFocused: true })}
                onBlur={() => this.setState({ emailFocused: false })}
                floatingLabelStyle={
                  emailFocused || email
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.email}
                type="email"
              />
            </EmailContainer>
          </Container>
        </FormContainer>
        <ButtonsSection>
          <StyledFlatButton
            label={'Cancelar'}
            labelStyle={flatButtonStyles.labelStyle}
            style={flatButtonStyles.style}
            onClick={browserHistory.goBack}
          />
          <RaisedButton
            label={'Guardar'}
            labelStyle={raisedButtonStyles.labelStyle}
            labelColor={raisedButtonStyles.labelColor}
            backgroundColor={raisedButtonStyles.backgroundColor}
            style={raisedButtonStyles.buttonStyle}
            buttonStyle={raisedButtonStyles.buttonStyle}
            onClick={this.handleCreteUser}
            disabled={disabledBtn}
          />
        </ButtonsSection>
        <Snackbar
          open={snackbar.open}
          message={snackbar.text}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestCloseSnackBar}
        />
      </div>
    );
  }
}

NuevoCliente.propTypes = {
  NuevoCliente: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NuevoCliente: makeSelectNuevoCliente(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoCliente);

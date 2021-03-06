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
    ClientName: '',
    CompanyContact: '',
    CompanyName: '',
    CompanyAddress: '',
    Email: '',
    Phone: '',
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(hideError());
  }

  handleCreteUser = () => {
    const { dispatch } = this.props;
    const {
      ClientName,
      CompanyAddress,
      CompanyContact,
      CompanyName,
      Phone,
      Email,
    } = this.state;
    const phone = Phone.replace(/\D/g, '');
    const body = {
      ClientName,
      CompanyAddress,
      CompanyContact,
      CompanyName,
      Phone: phone,
      Email,
    };
    dispatch(getClientRequest(body));
  }
  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'Phone') {
      this.setState({ [name]: getCelphone(value) });
    } else if (name === 'Email') {
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
      CompanyAddress,
      companyAddressFocused,
      ClientName,
      clientNameFocused,
      CompanyContact,
      companyContactFocused,
      CompanyName,
      companyNameFocused,
      Phone,
      phoneFocused,
      Email,
      emailFocused,
    } = this.state;
    const disabledBtn =
      !ClientName ||
      !CompanyContact ||
      !CompanyName ||
      !Phone ||
      !CompanyAddress ||
      !Email;
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
                name="ClientName"
                style={
                  clientNameFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={ClientName}
                onChange={this.handleOnChange}
                autoFocus
                onFocus={() => this.setState({ clientNameFocused: true })}
                onBlur={() => this.setState({ clientNameFocused: false })}
                floatingLabelStyle={
                  clientNameFocused || ClientName
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.clientName}
                maxLength="100"
              />
              <TextField
                name="CompanyName"
                style={
                  companyNameFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={CompanyName}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyNameFocused: true })}
                onBlur={() => this.setState({ companyNameFocused: false })}
                floatingLabelStyle={
                  companyNameFocused || CompanyName
                  ? textFieldStyles.focusedTextField : textFieldStyles.defaultTextField}
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.companyName}
                maxLength="100"
              />
              <TextField
                name="CompanyContact"
                style={
                  companyContactFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={CompanyContact}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyContactFocused: true })}
                onBlur={() => this.setState({ companyContactFocused: false })}
                floatingLabelStyle={
                  companyContactFocused || CompanyContact
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.company}
                maxLength="100"
              />
              <TextField
                name="CompanyAddress"
                style={
                  companyAddressFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={CompanyAddress}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyAddressFocused: true })}
                onBlur={() => this.setState({ companyAddressFocused: false })}
                floatingLabelStyle={
                  companyAddressFocused || CompanyAddress
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.address}
                maxLength="100"
              />
              <TextField
                name="Phone"
                style={
                  phoneFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={Phone}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ phoneFocused: true })}
                onBlur={() => this.setState({ phoneFocused: false })}
                floatingLabelStyle={
                  phoneFocused || Phone
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
                name="Email"
                style={
                  emailFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={Email}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ emailFocused: true })}
                onBlur={() => this.setState({ emailFocused: false })}
                floatingLabelStyle={
                  emailFocused || Email
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

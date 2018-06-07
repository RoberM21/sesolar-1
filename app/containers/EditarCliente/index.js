/*
 *
 * EditarCliente
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  getCelphone,
  ALPHANUMERIC,
} from 'utils/regex';
import Subheader from 'components/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { createStructuredSelector } from 'reselect';
import makeSelectEditarCliente from './selectors';
import messages from './messages';
import {
  textFieldStyles,
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';
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
  getClientRequest,
} from './actions';

export class EditarCliente extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    user: {},
  }

  componentWillMount() {
    const { location: { state: { user } } } = this.props;
    this.setState({
      clientName: user.clientName,
      contactName: user.contactName,
      companyName: user.companyName,
      address: user.address,
      email: user.email,
      phone: getCelphone(user.phone),
      id: user.id,
    });
  }

  handleEditUser = () => {
    const { dispatch } = this.props;
    const {
      clientName,
      address,
      contactName,
      companyName,
      phone,
      email,
      id,
    } = this.state;
    const cellphone = phone.replace(/\D/g, '');
    const body = {
      clientName,
      address,
      contactName,
      companyName,
      phone: cellphone,
      email,
      id,
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
      EditarCliente: {
        snackbar,
      },
    } = this.props;
    const {
      address,
      companyAddressFocused,
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
      !clientName.trim() ||
      !contactName.trim() ||
      !companyName.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !email.trim();
    return (
      <div>
        <Helmet
          title="Editar Cliente"
          meta={[
            { name: 'description', content: 'Description of EditarCliente' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <FormContainer>
          <Container>
            <StepContainer>
              <StepNumber>1</StepNumber>
              <StepDescription>Datos cliente</StepDescription>
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
                  companyAddressFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={address}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ companyAddressFocused: true })}
                onBlur={() => this.setState({ companyAddressFocused: false })}
                floatingLabelStyle={
                  companyAddressFocused || address
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
            label={'Editar'}
            labelStyle={raisedButtonStyles.labelStyle}
            labelColor={raisedButtonStyles.labelColor}
            backgroundColor={raisedButtonStyles.backgroundColor}
            style={raisedButtonStyles.buttonStyle}
            buttonStyle={raisedButtonStyles.buttonStyle}
            onClick={this.handleEditUser}
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

EditarCliente.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object,
  EditarCliente: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  EditarCliente: makeSelectEditarCliente(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarCliente);

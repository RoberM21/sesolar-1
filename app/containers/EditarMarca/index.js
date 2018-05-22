/*
 *
 * EditarMarca
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { ALPHANUMERIC } from 'utils/regex';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'components/Subheader';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { createStructuredSelector } from 'reselect';
import makeSelectEditarMarca from './selectors';
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
  ButtonsSection,
  StyledFlatButton,
  Container,
} from './styledComponents';
import { getEditRequest } from './actions';

export class EditarMarca extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    nameFocused: false,
  }

  componentWillMount() {
    const { location: { state: { marca } } } = this.props;
    this.setState({ name: marca.name, id: marca.id });
  }

  handleEditBrand = () => {
    const { name, id } = this.state;
    const body = { name, id };
    const { dispatch } = this.props;
    dispatch(getEditRequest(body));
  }
  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value.replace(ALPHANUMERIC, '') });
  }

  render() {
    const { snackbar } = this.props.EditarMarca;
    const {
      nameFocused,
      name,
    } = this.state;
    const disabledBtn = !name.trim();
    return (
      <div>
        <Helmet
          title="Editar Marca"
          meta={[
            { name: 'description', content: 'Description of EditarMarca' },
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
                Datos marca
              </StepDescription>
            </StepContainer>
            <PersonalDataContainer>
              <TextField
                name="name"
                style={
                  nameFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={name}
                onChange={this.handleOnChange}
                autoFocus
                onFocus={() => this.setState({ nameFocused: true })}
                onBlur={() => this.setState({ nameFocused: false })}
                floatingLabelStyle={
                  nameFocused || name
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.name}
                maxLength="100"
              />
            </PersonalDataContainer>
          </Container>
        </FormContainer>
        <ButtonsSection>
          <StyledFlatButton
            label={messages.cancel}
            labelStyle={flatButtonStyles.labelStyle}
            style={flatButtonStyles.style}
            onClick={browserHistory.goBack}
          />
          <RaisedButton
            label={messages.edit}
            labelStyle={raisedButtonStyles.labelStyle}
            labelColor={raisedButtonStyles.labelColor}
            backgroundColor={raisedButtonStyles.backgroundColor}
            style={raisedButtonStyles.buttonStyle}
            buttonStyle={raisedButtonStyles.buttonStyle}
            onClick={this.handleEditBrand}
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

EditarMarca.propTypes = {
  EditarMarca: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EditarMarca: makeSelectEditarMarca(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarMarca);

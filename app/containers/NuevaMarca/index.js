/*
 *
 * NuevaMarca
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import { ALPHANUMERIC } from 'utils/regex';
import Subheader from 'components/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import { createStructuredSelector } from 'reselect';
import makeSelectNuevaMarca from './selectors';
import messages from './messages';
import {
  FormContainer,
  Container,
  StepContainer,
  StepNumber,
  StepDescription,
  PersonalDataContainer,
  ButtonsSection,
  StyledFlatButton,
} from './styledComponents';
import {
  textFieldStyles,
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';
import { getBrandRequest } from './actions';

export class NuevaMarca extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    nameFocused: false,
  }

  handleOpenDialog = () => {
    browserHistory.push('/marcas/nueva');
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value.replace(ALPHANUMERIC, '') });
  }

  handleCreteBrand = () => {
    const { name } = this.state;
    const { dispatch } = this.props;
    dispatch(getBrandRequest(name));
  }

  render() {
    const {
      NuevaMarca: {
        snackbar,
      },
    } = this.props;
    const { name, nameFocused } = this.state;
    const disabledBtn = !name;
    return (
      <div>
        <Helmet
          title="Marcas"
          meta={[
            { name: 'description', content: 'Description of Marcas' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenDialog}
          handleLeftIconClick={() => browserHistory.push('/home')}
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
            label={messages.save}
            labelStyle={raisedButtonStyles.labelStyle}
            labelColor={raisedButtonStyles.labelColor}
            backgroundColor={raisedButtonStyles.backgroundColor}
            style={raisedButtonStyles.buttonStyle}
            buttonStyle={raisedButtonStyles.buttonStyle}
            onClick={this.handleCreteBrand}
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

NuevaMarca.propTypes = {
  NuevaMarca: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NuevaMarca: makeSelectNuevaMarca(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevaMarca);

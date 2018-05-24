/*
 *
 * NuevoProducto
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { ALPHANUMERIC, ONLY_NUMBER } from 'utils/regex';
import Subheader from 'components/Subheader';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import { createStructuredSelector } from 'reselect';
import makeSelectNuevoProducto from './selectors';
import messages from './messages';
import {
  FormContainer,
  Container,
  StepContainer,
  StepNumber,
  StepDescription,
  PersonalDataContainer,
  styles,
  ButtonsSection,
  StyledFlatButton,
} from './styledComponents';
import {
  textFieldStyles,
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';
import {
  setSnackbarState,
  getProductRequest,
} from './actions';

export class NuevoProducto extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    description: '',
    cost: '',
    brandId: '',
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  }

  handleCreteUser = () => {
    const { dispatch } = this.props;
    const {
      name,
      description,
      cost,
      brandId,
    } = this.state;
    const amount = cost.replace(/\D/g, '');
    const body = {
      name,
      description,
      cost: amount,
      brandId,
    };
    dispatch(getProductRequest(body));
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'cost') {
      if (value === '$ ') {
        this.setState({ [name]: '' });
      } else {
        this.setState({
          [name]: '$ '.concat(value.replace(ONLY_NUMBER, '')),
        });
      }
    } else {
      this.setState({ [name]: value.replace(ALPHANUMERIC, '') });
    }
  }

  render() {
    const {
      name,
      nameFocused,
      description,
      descriptionFocused,
      brandId,
      costFocused,
      cost,
    } = this.state;
    const {
      brands,
      snackbar,
    } = this.props.NuevoProducto;
    const disabledBtn =
      !name ||
      !description ||
      !brandId ||
      !cost;
    return (
      <div>
        <Helmet
          title="Nuevo Producto"
          meta={[
            { name: 'description', content: 'Description of NuevoProducto' },
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
                Datos producto
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
              <TextField
                name="description"
                style={
                  descriptionFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={description}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ descriptionFocused: true })}
                onBlur={() => this.setState({ descriptionFocused: false })}
                floatingLabelStyle={
                  descriptionFocused || description
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.description}
                maxLength="100"
              />
              <SelectField
                name="brandId"
                onChange={(e, index, value) => this.setState({ brandId: value })}
                floatingLabelText={messages.brand}
                floatingLabelStyle={styles.Floating2}
                value={brandId}
                selectedMenuItemStyle={styles.color}
                inputStyle={styles.select}
                style={styles.Input}
                underlineShow={false}
                autoWidth
              >
                {
                  brands.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item.id}
                      primaryText={item.name}
                    />
                  ))
                }
              </SelectField>
            </PersonalDataContainer>
            <StepContainer>
              <StepNumber>
                2
              </StepNumber>
              <StepDescription>
                Costo
              </StepDescription>
            </StepContainer>
            <PersonalDataContainer>
              <TextField
                name="cost"
                style={
                  costFocused
                  ? textFieldStyles.rootStyleFocused
                  : textFieldStyles.rootStyle
                }
                underlineShow={false}
                hintStyle={textFieldStyles.hintStyle}
                inputStyle={textFieldStyles.inputStyle}
                value={cost}
                onChange={this.handleOnChange}
                onFocus={() => this.setState({ costFocused: true })}
                onBlur={() => this.setState({ costFocused: false })}
                floatingLabelStyle={
                  costFocused || cost
                  ? textFieldStyles.focusedTextField
                  : textFieldStyles.defaultTextField
                }
                floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
                floatingLabelText={messages.cost}
                maxLength="13"
              />
            </PersonalDataContainer>
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

NuevoProducto.propTypes = {
  NuevoProducto: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NuevoProducto: makeSelectNuevoProducto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoProducto);

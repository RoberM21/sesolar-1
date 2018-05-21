/**
*
* SessionForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
import { isEmpty } from 'lodash';
import logo from 'components/Icons/logo.png';
import Description from './Description';
import {
  Container, Form,
  Titulo, Logo,
  Content, DivButton,
  ActionButton, ImgLogo,
} from './styledComponents';
import {
  raisedButtonStyles,
  flatButtonStyles,
} from './materialInlineStyles';


class SessionForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  validateForm = () => {
    const { onPressButton, paso } = this.props;
    onPressButton(paso);
  }

  render() {
    const { titulo, contenido, labelButton, description, buttonDisabled, previousStep, paso } = this.props;
    const desc = !isEmpty(description) && <Description description={description} />;
    return (
      <Container>
        <Form>
          <Logo >
            <ImgLogo src={logo} />
          </Logo>
          <Titulo className={'title'}>{titulo}</Titulo>
          {desc}
          <Content>
            {contenido}
          </Content>
          <DivButton>
            { paso !== 1 &&
              (<ActionButton
                primary
                style={flatButtonStyles.style}
                label="Anterior"
                onClick={previousStep}
              />)
            }
            <RaisedButton
              label={labelButton}
              labelStyle={raisedButtonStyles.labelStyle}
              labelColor={raisedButtonStyles.labelColor}
              backgroundColor={raisedButtonStyles.backgroundColor}
              style={raisedButtonStyles.buttonStyle}
              buttonStyle={raisedButtonStyles.buttonStyle}
              onClick={this.validateForm}
              disabled={buttonDisabled}
            />
          </DivButton>
        </Form>
      </Container>
    );
  }
}

SessionForm.propTypes = {
  titulo: PropTypes.string,
  contenido: PropTypes.node,
  labelButton: PropTypes.string,
  onPressButton: PropTypes.func,
  paso: PropTypes.number,
  description: PropTypes.string,
  buttonDisabled: PropTypes.bool,
  previousStep: PropTypes.func,
};

export default SessionForm;

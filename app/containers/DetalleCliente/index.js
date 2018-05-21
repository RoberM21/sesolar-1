/*
 *
 * DetalleCliente
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getCelphone } from 'utils/regex';
import Subheader from 'components/Subheader';
import TextField from 'material-ui/TextField';
import { createStructuredSelector } from 'reselect';
import makeSelectDetalleCliente from './selectors';
import messages from './messages';
import {
  Container,
  Text,
  StepContainer,
  Step,
  Left,
  Right,
} from './styledComponents';
import { textFieldStyles } from './materialInlineStyles';

export class DetalleCliente extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    user: {},
  }
  componentWillMount() {
    const { location: { state: { user } } } = this.props;
    this.setState({
      ClientName: user.ClientName,
      CompanyContact: user.CompanyContact,
      CompanyName: user.CompanyName,
      CompanyAddress: user.CompanyAddress,
      Email: user.Email,
      Phone: getCelphone(user.Phone),
      id: user.id,
    });
  }
  render() {
    const {
      ClientName,
      CompanyContact,
      Phone,
      CompanyName,
      CompanyAddress,
      Email,
    } = this.state;
    return (
      <div>
        <Helmet
          title="Detalle Cliente"
          meta={[
            { name: 'description', content: 'Description of DetalleCliente' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <StepContainer>
          <Step>1</Step>
          <Text>{messages.infoClient}</Text>
        </StepContainer>
        <Container>
          <Left>
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={ClientName}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.clientName}
            />
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={CompanyContact}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.companyContact}
            />
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={getCelphone(Phone)}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.phone}
            />
          </Left>
          <Right>
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={CompanyName}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.companyName}
            />
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={CompanyAddress}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.companyAddress}
            />
            <TextField
              style={textFieldStyles.rootStyle}
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={Email}
              floatingLabelStyle={textFieldStyles.defaultTextField}
              disabled
              floatingLabelText={messages.email}
            />
          </Right>
        </Container>
        <StepContainer>
          <Step>2</Step>
          <Text>{messages.work}</Text>
        </StepContainer>
      </div>
    );
  }
}

DetalleCliente.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  DetalleCliente: makeSelectDetalleCliente(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalleCliente);

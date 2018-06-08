/**
 * Step1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Switch from '@material-ui/core/Switch';
import { browserHistory } from 'react-router';
import {
  FormContainer,
  Container,
  StepContainer,
  StepNumber,
  StepDescription,
  PersonalDataContainer,
  Text,
  TextQuestion,
  ContainerQuestion,
  ContainerSwitch,
  NewClient,
  Styles,
} from '../styledComponents';

import messages from '../messages';

export class Step1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    checked: false,
    clientId: 'Selecciona un cliente',
  }

  handleOnChange = (name) => (e) => {
    const { onClickClient } = this.props;
    this.setState({ clientId: 'Selecciona un cliente' });
    this.setState({ [name]: e.target.checked });
    onClickClient(this.state);
  }

  handleChange = (e, index, value) => {
    const { onClickClient } = this.props;
    this.setState({ clientId: value });
    this.state.clientId = value;
    onClickClient(this.state);
  };

  handleRedirect = () => {
    const status = 'seguimiento';
    browserHistory.push({
      pathname: '/clientes/nuevo',
      state: { status },
    });
  }

  render() {
    const {
      checked,
      clientId,
    } = this.state;
    const { clients } = this.props;
    return (
      <FormContainer>
        <Container>
          <StepContainer>
            <StepNumber>
              1
            </StepNumber>
            <StepDescription>
              Cliente
            </StepDescription>
          </StepContainer>
          <PersonalDataContainer>
            <TextQuestion>{messages.question}</TextQuestion>
            <ContainerQuestion>
              <Text>{messages.no}</Text>
              <ContainerSwitch>
                <Switch
                  checked={checked}
                  onChange={this.handleOnChange('checked')}
                  color="primary"
                />
              </ContainerSwitch>
              <Text>{messages.yes}</Text>
              {
                checked ? <NewClient onClick={this.handleRedirect}>{messages.create}</NewClient> : null
              }
            </ContainerQuestion>
            {
              !checked ?
                <SelectField
                  onChange={this.handleChange}
                  onKeyPress={this.handleChange}
                  value={clientId}
                  underlineShow={false}
                  labelStyle={Styles.LabelFilter}
                  iconStyle={Styles.IconSelect}
                  style={Styles.FilterButton}
                  selectedMenuItemStyle={Styles.color}
                >
                  <MenuItem
                    key={0}
                    disabled
                    value="Selecciona un cliente"
                    primaryText="Selecciona un cliente"
                  />
                  {clients.map((client, index) =>
                    <MenuItem
                      key={index + 1}
                      value={client.id}
                      primaryText={client.clientName}
                    />
                  )}
                </SelectField>
              : null
            }
          </PersonalDataContainer>
        </Container>
      </FormContainer>
    );
  }
}

Step1.propTypes = {
  clients: PropTypes.array,
  onClickClient: PropTypes.func,
};

export default Step1;

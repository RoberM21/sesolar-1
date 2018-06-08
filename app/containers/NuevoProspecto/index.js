/*
 *
 * NuevoProspecto
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
// import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectNuevoProspecto from './selectors';
import messages from './messages';
import {
  Empty,
  ActionButton,
  Styles,
  FormContainer,
  Container,
  Btns,
} from './styledComponents';
import {
  getClientsRequest,
  getProspectRequest,
} from './actions';
import Step1 from './privateComponents/Step1';
import Step2 from './privateComponents/Step2';

export class NuevoProspecto extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    currentStep: 1,
    checked: false,
    comentary: '',
    porcentage: '',
    number: 1,
    imagenOne: '',
    imagenTwo: '',
    imagenThree: '',
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getClientsRequest());
  }

  handleDataClient = (data) => {
    this.setState({ checked: data.checked, clientId: data.clientId });
  }
  handleClickAmount = (amount) => {
    this.setState({ porcentage: amount });
  }
  handleComentary = (comentary) => {
    this.setState({ comentary });
  }
  handleUploadImages = (image) => {
    if (image.imagenOne) {
      this.setState({ imagenOne: image.imagenOne });
    } else if (image.imagenTwo) {
      this.setState({ imagenTwo: image.imagenTwo });
    } else if (image.imagenThree) {
      this.setState({ imagenThree: image.imagenThree });
    }
  }
  handleSaveProspecting = () => {
    const { dispatch } = this.props;
    const {
      clientId,
      comentary,
      porcentage,
      number,
      imagenOne,
      imagenTwo,
      imagenThree,
    } = this.state;
    const body = {
      clientId,
      tracing: [
        {
          comentary,
          number,
          porcentage,
          img: [
            imagenOne,
            imagenTwo,
            imagenThree,
          ],
        },
      ],
    };
    dispatch(getProspectRequest(body));
  }
  switchComponent = (newStep) => () => {
    if (newStep < 3) {
      this.setState({
        currentStep: newStep,
      });
    }
  }

  render() {
    const { NuevoProspecto: {
      snackbar,
      clients,
      porcentages,
    } } = this.props;
    const {
      currentStep,
      clientId,
      comentary,
      porcentage,
    } = this.state;
    const previous = currentStep > 1 ? (
      <ActionButton
        primary
        label={messages.back}
        onClick={this.switchComponent(currentStep - 1)}
      />
      ) : (
        <Empty />
      );

    const next = currentStep === 1 ? (
      <RaisedButton
        label={messages.next}
        primary
        disabled={clientId === 'Selecciona un cliente' || !clientId}
        buttonStyle={Styles.buttonStyle}
        style={Styles.rootStyle}
        onClick={this.switchComponent(currentStep + 1)}
      />
    ) : (
      <RaisedButton
        label={'Guardar'}
        primary
        disabled={!porcentage || !comentary}
        buttonStyle={Styles.buttonStyle}
        style={Styles.rootStyle}
        onClick={this.handleSaveProspecting}
      />
    );
    let content;
    switch (currentStep) {
      case 1:
        content = (
          <Step1
            clients={clients}
            onClickClient={this.handleDataClient}
          />
        );
        break;
      case 2:
        content = (
          <Step2
            porcentages={porcentages}
            onClickComentary={this.handleComentary}
            onClickAmount={this.handleClickAmount}
            uploadImages={this.handleUploadImages}
          />
        );
        break;
      case 3:
        content = '';
        break;
      default:
        content = '';
    }

    return (
      <div>
        <Helmet
          title="Nuevo prospecto"
          meta={[
            { name: 'description', content: 'Description of NuevoProspecto' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        {content}
        <FormContainer>
          <Container>
            <Btns>
              {previous}
              {next}
            </Btns>
          </Container>
        </FormContainer>
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

NuevoProspecto.propTypes = {
  NuevoProspecto: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NuevoProspecto: makeSelectNuevoProspecto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NuevoProspecto);

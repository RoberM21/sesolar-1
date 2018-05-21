/*
 *
 * MainLayout
 *
 */

import React, { PropTypes } from 'react';
import IdleTimer from 'react-idle-timer';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createStructuredSelector } from 'reselect';
import TopBar from 'components/TopBar';
import makeSelectMainLayout from './selectors';
import messages from './messages';
import {
  styles,
  MainContainer,
  Instructions,
} from './styledComponents';

export class MainLayout extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    showModal: false,
  }
  onTimeout = () => {
    browserHistory.replace('/');
  }

  render() {
    const { showModal } = this.state;
    let selectedItem = messages.menuOptions.sesolar;
    if (window.location.pathname.toString().includes('clientes')) {
      selectedItem = messages.menuOptions.clients;
    }
    if (window.location.pathname.toString().includes('marcas')) {
      selectedItem = messages.menuOptions.brands;
    }
    if (window.location.pathname.toString().includes('productos')) {
      selectedItem = messages.menuOptions.products;
    }
    if (window.location.pathname.toString().includes('cotizaciones')) {
      selectedItem = messages.menuOptions.cotizaciones;
    }
    if (window.location.pathname.toString().includes('proyectos')) {
      selectedItem = messages.menuOptions.proyects;
    }
    if (window.location.pathname.toString().includes('inventario')) {
      selectedItem = messages.menuOptions.inventary;
    }

    const actions = [
      <FlatButton
        label={messages.buttons.cancel}
        labelStyle={styles.cancelLabel}
        style={styles.cancelButton}
        onClick={this.onTimeout}
      />,
      <RaisedButton
        label={messages.close}
        backgroundColor={'#456bae'}
        labelColor={'#fff'}
        style={styles.saveButton}
        buttonStyle={styles.saveButtonStyle}
        labelStyle={styles.saveLabelStyle}
        onClick={this.onTimeout}
      />,
    ];
    return (
      <div>
        <TopBar
          selectedItem={selectedItem}
        />
        <IdleTimer
          element={document}
          idleAction={() => { this.setState({ showModal: true }); localStorage.removeItem('user'); }}
          timeout={900000}
          format="MM-DD-YYYY HH:MM:ss.SSS"
        >
          <div>
            {this.props.children}
          </div>
        </IdleTimer>
        <Dialog
          open={showModal}
          contentStyle={styles.dialogStyle}
          bodyStyle={styles.dialogBodyStyle}
          autoScrollBodyContent
          actions={actions}
          title={messages.modalTitle}
          titleStyle={styles.titleStyle}
        >
          <CloseIcon
            color={'#ABABAB'}
            style={styles.closeIcon}
            onClick={() => this.setState({ showModal: false })}
          />
          <MainContainer>
            <Instructions>{messages.relogin}</Instructions>
          </MainContainer>
        </Dialog>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  MainLayout: makeSelectMainLayout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

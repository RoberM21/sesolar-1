/*
 *
 * Cotizaciones
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectCotizaciones from './selectors';
import messages from './messages';

export class Cotizaciones extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOpenDialog = () => {
    browserHistory.push('/cotizaciones/nueva');
  }
  render() {
    return (
      <div>
        <Helmet
          title="Cotizaciones"
          meta={[
            { name: 'description', content: 'Description of Cotizaciones' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenDialog}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
      </div>
    );
  }
}

Cotizaciones.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Cotizaciones: makeSelectCotizaciones(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cotizaciones);

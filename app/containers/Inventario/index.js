/*
 *
 * Inventario
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectInventario from './selectors';
import messages from './messages';

export class Inventario extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOpenDialog = () => {
    browserHistory.push('/inventario/agregar');
  }
  render() {
    return (
      <div>
        <Helmet
          title="Inventario"
          meta={[
            { name: 'description', content: 'Description of Inventario' },
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

Inventario.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Inventario: makeSelectInventario(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventario);

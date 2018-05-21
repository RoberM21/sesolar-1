/*
 *
 * Productos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectProductos from './selectors';
import messages from './messages';

export class Productos extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleOpenDialog = () => {
    browserHistory.push('/productos/nuevo');
  }
  render() {
    return (
      <div>
        <Helmet
          title="Productos"
          meta={[
            { name: 'description', content: 'Description of Productos' },
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

Productos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Productos: makeSelectProductos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Productos);

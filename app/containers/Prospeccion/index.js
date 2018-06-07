/*
 *
 * Prospeccion
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectProspeccion from './selectors';
import messages from './messages';

export class Prospeccion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOpenDialog = () => {
    browserHistory.push('/prospeccion/nuevo');
  }
  render() {
    return (
      <div>
        <Helmet
          title="Prospeccion"
          meta={[
            { name: 'description', content: 'Description of Prospeccion' },
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

Prospeccion.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Prospeccion: makeSelectProspeccion(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Prospeccion);

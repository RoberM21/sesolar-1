/*
 *
 * Proyectos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectProyectos from './selectors';
import messages from './messages';

export class Proyectos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Proyectos"
          meta={[
            { name: 'description', content: 'Description of Proyectos' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
      </div>
    );
  }
}

Proyectos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Proyectos: makeSelectProyectos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Proyectos);

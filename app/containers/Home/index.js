/*
 *
 * Home
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Sesolar from 'components/Icons/sesolar.png';
import { createStructuredSelector } from 'reselect';
import makeSelectHome from './selectors';
import messages from './messages';
import {
  Container,
  Welcome,
  ImgSesolar,
} from './styledComponents';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Inicio"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <Container>
          <Welcome>{messages.welcome}</Welcome>
          <ImgSesolar src={Sesolar} />
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

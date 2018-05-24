/*
 *
 * EditarProducto
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectEditarProducto from './selectors';
import messages from './messages';

export class EditarProducto extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="EditarProducto"
          meta={[
            { name: 'description', content: 'Description of EditarProducto' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
      </div>
    );
  }
}

EditarProducto.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EditarProducto: makeSelectEditarProducto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarProducto);

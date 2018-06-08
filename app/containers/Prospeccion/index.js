/*
 *
 * Prospeccion
 *
 */

import React, { PropTypes } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import Subheader from 'components/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import FullPageLoader from 'components/FullPageLoader';
import Empty from 'components/Icons/empty.svg';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreHorIcon from 'material-ui/svg-icons/navigation/more-horiz';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from 'material-ui/Table';
import { createStructuredSelector } from 'reselect';
import makeSelectProspeccion from './selectors';
import {
  MainDivStyled,
  LoaderContainer,
  ProspectsContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
} from './styledComponents';
import {
  IconButtonStyles,
  IconMenuStyles,
} from './materialInlineStyles';
import messages from './messages';
import {
  getProspectingsRequest,
} from './actions';
import { styles } from './styles';
Moment.locale('es');
export class Prospeccion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProspectingsRequest());
  }
  handleOpenDialog = () => {
    browserHistory.push('/prospeccion/nuevo');
  }
  render() {
    const {
      Prospeccion: {
        prospectings,
        loading,
        snackbar,
        loadingProspects,
        subLoading,
      },
    } = this.props;
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
        {!loadingProspects ? (
          <ProspectsContainer>
            {
              prospectings.length > 0 ?
                <MainDivStyled>
                  { !subLoading ?
                    <Table>
                      <TableHeader
                        enableSelectAll={false}
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                      >
                        <TableRow style={styles.TableHeaderHeight}>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.client}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.date}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.porcentage}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledButtons} />
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        { map(prospectings, (item, index) =>
                          <TableRow key={`prospecting-${index}`} style={styles.RowHeight}>
                            <TableRowColumn style={styles.CellStyle}>{item.client.clientName}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyle}>{Moment(item.created).format('LL')}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyle}>{item.tracing[0].porcentage}</TableRowColumn>
                            <TableRowColumn style={styles.ButtonCellStyle}>
                              <IconMenu
                                style={IconMenuStyles}
                                iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                              >
                                <MenuItem
                                  primaryText={messages.buttons.edit}
                                />
                                <MenuItem
                                  primaryText={messages.buttons.delete}
                                />
                              </IconMenu>
                            </TableRowColumn>
                          </TableRow>
                          )
                        }
                      </TableBody>
                    </Table> : <CircularProgress style={{ textAlign: 'center', margin: '16px auto', display: 'block' }} size={80} thickness={5} />
                  }
                </MainDivStyled>
              : <ContainerEmpty>
                <MessageEmpty>{messages.empty}</MessageEmpty>
                <ImgEmpty src={Empty} />
              </ContainerEmpty>
            }
            <Snackbar
              open={snackbar.open}
              message={snackbar.text}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestCloseSnackBar}
            />
          </ProspectsContainer>)
        :
          <LoaderContainer>
            <FullPageLoader />
          </LoaderContainer>
        }
        {
          loading && <FullPageLoader />
        }
      </div>
    );
  }
}

Prospeccion.propTypes = {
  Prospeccion: PropTypes.object,
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

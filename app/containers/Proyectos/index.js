/*
 *
 * Proyectos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import { map } from 'lodash';
import Subheader from 'components/Subheader';
import Empty from 'components/Icons/empty.svg';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from 'material-ui/Table';
import FullPageLoader from 'components/FullPageLoader';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import MoreHorIcon from 'material-ui/svg-icons/navigation/more-horiz';
import { createStructuredSelector } from 'reselect';
import makeSelectProyectos from './selectors';
import messages from './messages';
import {
  UsersContainer,
  MainDivStyled,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
  LoaderContainer,
  StyledFlatButton,
  DialogTitleContainer,
  DialogTitle,
  StyledClosedIcon,
  FormContainer,
} from './styledComponents';
import {
  flatButtonStyles,
  raisedButtonStyles,
  dialogStyles,
  closeIconStyle,
  IconButtonStyles,
  IconMenuStyles,
} from './materialInlineStyles';
import { styles } from './styles';
import {
  getDeleteRequest,
  openDeleteDialog,
} from './actions';
export class Proyectos extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleDelete = () => {
    const { brandId } = this.state;
    const { dispatch } = this.props;
    dispatch(getDeleteRequest(brandId));
  }

  handleEdit = (marca) => () => {
    browserHistory.push({
      pathname: `/proyectos/${marca.id}/editar`,
      state: { marca },
    });
  }

  handleOpenDeleteDialog = (id) => {
    const { Proyectos: { showDeleteModal }, dispatch } = this.props;
    this.setState({ brandId: id });
    dispatch(openDeleteDialog(!showDeleteModal));
  }
  render() {
    const {
      Proyectos: {
        projects,
        snackbar,
        loading,
        subLoading,
        loadingProject,
        showDeleteModal,
      },
    } = this.props;
    const deleteActions = (
      [
        <StyledFlatButton
          label={messages.dialogButtons.noButtonLabel}
          labelStyle={flatButtonStyles.labelStyle}
          style={flatButtonStyles.style}
          onClick={this.handleOpenDeleteDialog}
        />,
        <RaisedButton
          label={messages.dialogButtons.yesButtonLabel}
          labelStyle={raisedButtonStyles.labelStyle}
          labelColor={raisedButtonStyles.labelColor}
          backgroundColor={raisedButtonStyles.backgroundColor}
          style={raisedButtonStyles.buttonStyle}
          buttonStyle={raisedButtonStyles.buttonStyle}
          onClick={this.handleDelete}
        />,
      ]
    );
    const deleteDialog = (
      <Dialog
        modal
        actions={deleteActions}
        open={showDeleteModal}
        contentStyle={dialogStyles.smallContentStyle}
      >
        <DialogTitleContainer>
          <DialogTitle>{messages.dialogTitle}</DialogTitle>
          <StyledClosedIcon onClick={this.handleOpenDeleteDialog} style={closeIconStyle} />
        </DialogTitleContainer>
        <FormContainer>
          {messages.dialogMessage}
        </FormContainer>
      </Dialog>
    );
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
        { !loadingProject ? (
          <UsersContainer>
            {
              projects.length > 0 ?
                <MainDivStyled>
                  { !subLoading ?
                    <Table>
                      <TableHeader
                        enableSelectAll={false}
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                      >
                        <TableRow style={styles.TableHeaderHeight}>
                          <TableHeaderColumn style={styles.TableHeaderStyledOne}>
                            {messages.table.name}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.client}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.date}
                          </TableHeaderColumn>
                          <TableRowColumn style={styles.CellStyle}></TableRowColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        { map(projects, (item, index) =>
                          <TableRow key={`project-${index}`} style={styles.RowHeight}>
                            <TableRowColumn style={styles.CellStyleName}>{item.description}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyle}>{item.client.clientName}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyleCost}>{item.date}</TableRowColumn>
                            <TableRowColumn style={styles.ButtonCellStyle}>
                              <IconMenu
                                style={IconMenuStyles}
                                iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                              >
                                <MenuItem
                                  primaryText={messages.buttons.edit}
                                  onClick={this.handleEdit(item)}
                                />
                                <MenuItem
                                  primaryText={messages.buttons.delete}
                                  onClick={() => this.handleOpenDeleteDialog(item.id)}
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
            {deleteDialog}
            <Snackbar
              open={snackbar.open}
              message={snackbar.text}
              autoHideDuration={4000}
              onRequestClose={this.handleRequestCloseSnackBar}
            />
          </UsersContainer>)
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

Proyectos.propTypes = {
  Proyectos: PropTypes.object,
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

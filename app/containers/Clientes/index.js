/*
 *
 * Clientes
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import FullPageLoader from 'components/FullPageLoader';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Subheader from 'components/Subheader';
import UserItem from 'components/UserItem';
import imageDefault from 'components/Icons/profile.svg';
import Empty from 'components/Icons/empty.svg';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import { createStructuredSelector } from 'reselect';
import {
  flatButtonStyles,
  raisedButtonStyles,
  dialogStyles,
  closeIconStyle,
} from './materialInlineStyles';
import makeSelectClientes from './selectors';
import messages from './messages';
import {
  MainDivStyled,
  LoaderContainer,
  StyledFlatButton,
  DialogTitleContainer,
  DialogTitle,
  StyledClosedIcon,
  FormContainer,
  UsersContainer,
  MessageEmpty,
  ImgEmpty,
  ContainerEmpty,
} from './styledComponents';
import {
  openStoreDialog,
  SetLoadingAction,
  getDeleteRequest,
} from './actions';
import { styles } from './styles';

export class Clientes extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    selectedFilter: '',
    number: 1,
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(SetLoadingAction());
  }

  handleOpenDialog = () => {
    browserHistory.push('/clientes/nuevo');
  }

  handleAddProject = (userId) => {
    browserHistory.push(`/clientes/${userId}/agregar-proyecto`);
  }
  handleRedirectDetail = (user) => {
    browserHistory.push({
      pathname: `/clientes/${user.id}/detalle`,
      state: { user },
    });
  }

  handleChangeDropdownOption = (event, index, value) => this.setState({ selectedPlace: value });

  handleClickUpdate = (user) => {
    browserHistory.push({
      pathname: `/clientes/${user.id}/editar`,
      state: { user },
    });
  }

  handleDeleteUser = () => {
    const { userToDeleteId } = this.state;
    const { dispatch } = this.props;
    dispatch(getDeleteRequest(userToDeleteId));
  }
  handleOpenStoreDialog = (item) => {
    const { Clientes: { showStoreModal }, dispatch } = this.props;
    this.setState({ userToDeleteId: item.id });
    dispatch(openStoreDialog(!showStoreModal));
  }
  filter = () => {
    const { users } = this.props.Clientes;
    const filteredItems = [];
    users.forEach((user) => {
      filteredItems.push(
        <UserItem
          key={user.id}
          user={user}
          image={imageDefault}
          addProject={() => this.handleAddProject(user.id)}
          editClient={() => this.handleClickUpdate(user)}
          detailClient={() => this.handleRedirectDetail(user)}
          storeUser={() => this.handleOpenStoreDialog(user)}
        />
      );
    });
    return filteredItems;
  }
  render() {
    const { users, loading, showStoreModal, snackbar, loadingUsers, subLoading } = this.props.Clientes;
    const storeUserActions = (
      [
        <StyledFlatButton
          label={messages.dialogButtons.noButtonLabel}
          labelStyle={flatButtonStyles.labelStyle}
          style={flatButtonStyles.style}
          onClick={this.handleOpenStoreDialog}
        />,
        <RaisedButton
          label={messages.dialogButtons.yesButtonLabel}
          labelStyle={raisedButtonStyles.labelStyle}
          labelColor={raisedButtonStyles.labelColor}
          backgroundColor={raisedButtonStyles.backgroundColor}
          style={raisedButtonStyles.buttonStyle}
          buttonStyle={raisedButtonStyles.buttonStyle}
          onClick={this.handleDeleteUser}
        />,
      ]
    );
    const storeUserDialog = (
      <Dialog
        modal
        actions={storeUserActions}
        open={showStoreModal}
        contentStyle={dialogStyles.smallContentStyle}
      >
        <DialogTitleContainer>
          <DialogTitle>{messages.storeDialogTitle}</DialogTitle>
          <StyledClosedIcon onClick={this.handleOpenStoreDialog} style={closeIconStyle} />
        </DialogTitleContainer>
        <FormContainer>
          {messages.storeDialogMessage}
        </FormContainer>
      </Dialog>
    );
    return (
      <div>
        <Helmet
          title="Catálogo de Clientes"
          meta={[
            { name: 'description', content: 'Clientes' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenDialog}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
        {!loadingUsers ? (
          <UsersContainer>
            {
              users.length > 0 ?
                <MainDivStyled>
                  { !subLoading ?
                    <Table>
                      <TableHeader
                        enableSelectAll={false}
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                      >
                        <TableRow style={styles.TableHeaderHeight}>
                          <TableHeaderColumn style={styles.TableHeaderStyledImages} />
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.name}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.company}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.telephone}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.email}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyledButtons} />
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        {this.filter()}
                      </TableBody>
                    </Table> : <CircularProgress style={{ textAlign: 'center', margin: '16px auto', display: 'block' }} size={80} thickness={5} />
                  }
                </MainDivStyled>
              : <ContainerEmpty>
                <MessageEmpty>{messages.empty}</MessageEmpty>
                <ImgEmpty src={Empty} />
              </ContainerEmpty>
            }
            {storeUserDialog}
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

Clientes.propTypes = {
  Clientes: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Clientes: makeSelectClientes(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);

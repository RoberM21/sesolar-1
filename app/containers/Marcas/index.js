/*
 *
 * Marcas
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import Subheader from 'components/Subheader';
import FullPageLoader from 'components/FullPageLoader';
import RaisedButton from 'material-ui/RaisedButton';
import Empty from 'components/Icons/empty.svg';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import { createStructuredSelector } from 'reselect';
import makeSelectMarcas from './selectors';
import messages from './messages';
import {
  UsersContainer,
  MainDivStyled,
  ContainerEmpty,
  MessageEmpty,
  ImgEmpty,
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
} from './materialInlineStyles';
import { styles } from './styles';
import {
  setSnackbarState,
  setLoadingAction,
  getDeleteRequest,
  openDeleteDialog,
} from './actions';
export class Marcas extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(setLoadingAction());
  }

  handleOpenDialog = () => {
    browserHistory.push('/marcas/nueva');
  }
  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  }

  handleDeleteBrand = (id) => () => {
    const { dispatch } = this.props;
    dispatch(getDeleteRequest(id));
  }
  handleOpenDeleteDialog = (item) => {
    const { Marcas: { showDeleteModal }, dispatch } = this.props;
    this.setState({ userToDeleteId: item.id });
    dispatch(openDeleteDialog(!showDeleteModal));
  }
  render() {
    const {
      loadingBrands,
      brands,
      subLoading,
      snackbar,
      loading,
      showDeleteModal,
    } = this.props.Marcas;
    const deleteBrandActions = (
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
    const deleteBrandDialog = (
      <Dialog
        modal
        actions={deleteBrandActions}
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
          title="Marcas"
          meta={[
            { name: 'description', content: 'Description of Marcas' },
          ]}
        />
        <Subheader
          withRightButton
          title={messages.subHeaderTitle}
          buttonLabel={messages.subHeaderButtonLabel}
          handleRightButtonClick={this.handleOpenDialog}
          handleLeftIconClick={() => browserHistory.push('/home')}
        />
        {!loadingBrands ? (
          <UsersContainer>
            {
              brands.length > 0 ?
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
                            {messages.table.name}
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
            {deleteBrandDialog}
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

Marcas.propTypes = {
  Marcas: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Marcas: makeSelectMarcas(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Marcas);

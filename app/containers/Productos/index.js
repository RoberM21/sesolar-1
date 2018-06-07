/*
 *
 * Productos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import numeral from 'numeral';
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
import makeSelectProductos from './selectors';
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
  setSnackbarState,
  setLoadingAction,
} from './actions';
export class Productos extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(setLoadingAction());
  }

  handleOpenDialog = () => {
    browserHistory.push('/productos/nuevo');
  }

  handleRequestCloseSnackBar = () => {
    const { dispatch } = this.props;
    dispatch(setSnackbarState(false, ''));
  }

  handleDeleteProduct = () => {
    const { productId } = this.state;
    const { dispatch } = this.props;
    dispatch(getDeleteRequest(productId));
  }

  handleEditProduct = (product) => () => {
    browserHistory.push({
      pathname: `/productos/${product.id}/editar`,
      state: { product },
    });
  }

  handleOpenDeleteDialog = (id) => {
    const { Productos: { showDeleteModal }, dispatch } = this.props;
    this.setState({ productId: id });
    dispatch(openDeleteDialog(!showDeleteModal));
  }

  render() {
    const {
      Productos: {
        products,
        snackbar,
        loading,
        subLoading,
        loadingProducts,
        showDeleteModal,
      },
    } = this.props;
    const deleteProductActions = (
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
          onClick={this.handleDeleteProduct}
        />,
      ]
    );
    const deleteProductDialog = (
      <Dialog
        modal
        actions={deleteProductActions}
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
        {!loadingProducts ? (
          <UsersContainer>
            {
              products.length > 0 ?
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
                            {messages.table.description}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.cost}
                          </TableHeaderColumn>
                          <TableHeaderColumn style={styles.TableHeaderStyled}>
                            {messages.table.marca}
                          </TableHeaderColumn>
                          <TableRowColumn style={styles.CellStyle}></TableRowColumn>
                        </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}>
                        { map(products, (item, index) =>
                          <TableRow key={`product-${index}`} style={styles.RowHeight}>
                            <TableRowColumn style={styles.CellStyleName}>{item.productName}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyle}>{item.description}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyleCost}>{numeral(item.cost).format('$0,0.00')}</TableRowColumn>
                            <TableRowColumn style={styles.CellStyle}>{item.brand.name}</TableRowColumn>
                            <TableRowColumn style={styles.ButtonCellStyle}>
                              <IconMenu
                                style={IconMenuStyles}
                                iconButtonElement={<IconButton style={IconButtonStyles}><MoreHorIcon /></IconButton>}
                                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                              >
                                <MenuItem
                                  primaryText={messages.buttons.edit}
                                  onClick={this.handleEditProduct(item)}
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
            {deleteProductDialog}
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

Productos.propTypes = {
  Productos: PropTypes.object,
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

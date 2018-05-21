/*
 *
 * AgregarProyecto
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import moment from 'moment';
import Helmet from 'react-helmet';
import NumberFormat from 'react-number-format';
import { ALPHANUMERIC } from 'utils/regex';
import Subheader from 'components/Subheader';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import { createUrlForSrc } from 'utils/helper';
import { createStructuredSelector } from 'reselect';
import makeSelectAgregarProyecto from './selectors';
import messages from './messages';
import {
  Container,
  InputForms,
  DashedBox,
  DistributorImage,
  GreenSpan,
  StepContainer,
  Text,
  Step,
  ContainerInfo,
  Instructions,
  DatePickerSection,
  styles,
  ButtonsSection,
  StyledFlatButton,
} from './styledComponents';
import {
  textFieldStyles,
  flatButtonStyles,
  raisedButtonStyles,
} from './materialInlineStyles';

export class AgregarProyecto extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    urlImageOne: '',
    imageUrlOne: '',
    urlImageTwo: '',
    imageUrlTwo: '',
    urlImageThree: '',
    imageUrlThree: '',
    urlImageFour: '',
    imageUrlFour: '',
    urlImageFive: '',
    imageUrlFive: '',
    urlImageSix: '',
    imageUrlSix: '',
    monthSelected: moment().month(),
    daySelected: parseInt(moment().subtract('days').format('D'), 10),
    yearSelected: moment().year().toString(),
  }

  onUpload = (field) => {
    let file = {};
    switch (field) {
      case 'imageOne':
        file = this.fileFieldImageOne.files[0];
        break;
      case 'imageTwo':
        file = this.fileFieldImageTwo.files[0];
        break;
      case 'imageThree':
        file = this.fileFieldImageThree.files[0];
        break;
      case 'imageFour':
        file = this.fileFieldImageFour.files[0];
        break;
      case 'imageFive':
        file = this.fileFieldImageFive.files[0];
        break;
      case 'imageSix':
        file = this.fileFieldImageSix.files[0];
        break;
      default:
        break;
    }
    const reader = new FileReader();
    const fileType = file.type.split('/').pop();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const newImage = createUrlForSrc(reader.result, fileType, file.size);
      this.setState({
        snackbar: newImage.snackbar,
      });
      if (!newImage.snackbar.open) {
        switch (field) {
          case 'imageOne':
            this.setState({
              urlImageOne: reader.result,
              typeOne: fileType,
              fileNameOne: file.name,
              imageUrlOne: newImage.imageUrl,
            });
            break;
          case 'imageTwo':
            this.setState({
              urlImageTwo: reader.result,
              typeTwo: fileType,
              fileNameTwo: file.name,
              imageUrlTwo: newImage.imageUrl,
            });
            break;
          case 'imageThree':
            this.setState({
              urlImageThree: reader.result,
              typeThree: fileType,
              fileNameThree: file.name,
              imageUrlThree: newImage.imageUrl,
            });
            break;
          case 'imageFour':
            this.setState({
              urlImageFour: reader.result,
              typeFour: fileType,
              fileNameFour: file.name,
              imageUrlFour: newImage.imageUrl,
            });
            break;
          case 'imageFive':
            this.setState({
              urlImageFive: reader.result,
              typeFive: fileType,
              fileNameFive: file.name,
              imageUrlFive: newImage.imageUrl,
            });
            break;
          case 'imageSix':
            this.setState({
              urlImageSix: reader.result,
              typeSix: fileType,
              fileNameSix: file.name,
              imageUrlSix: newImage.imageUrl,
            });
            break;
          default:
            break;
        }
      }
    };
  }

  openFile = (field) => {
    switch (field) {
      case 'imageOne':
        this.fileFieldImageOne.click();
        break;
      case 'imageTwo':
        this.fileFieldImageTwo.click();
        break;
      case 'imageThree':
        this.fileFieldImageThree.click();
        break;
      case 'imageFour':
        this.fileFieldImageFour.click();
        break;
      case 'imageFive':
        this.fileFieldImageFive.click();
        break;
      case 'imageSix':
        this.fileFieldImageSix.click();
        break;
      default:
        break;
    }
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value.replace(ALPHANUMERIC, '') });
  }

  handleMonthSelected = (event, index, value) => {
    this.setState({ monthSelected: value });
  }

  handleDaySelected = (event, index, value) => {
    this.setState({ daySelected: value });
  }
  handleYearSelected = (event, index, value) => {
    this.setState({ yearSelected: value });
  }
  render() {
    const {
      urlImageOne,
      imageUrlOne,
      urlImageTwo,
      imageUrlTwo,
      urlImageThree,
      imageUrlThree,
      urlImageFour,
      imageUrlFour,
      urlImageFive,
      imageUrlFive,
      urlImageSix,
      imageUrlSix,
      descriptionFocused,
      description,
      yearSelected,
      monthSelected,
      daySelected,
      costFocused,
      cost,
    } = this.state;
    const {
      AgregarProyecto: {
        dialogMonthOptions,
        dialogDayOptions,
        dialogYearOptions,
        snackbar,
      },
    } = this.props;
    const days = dialogDayOptions.options;
    const date = `${yearSelected}-0${monthSelected + 1}`;
    const number = moment(date, 'YYYY-MM').daysInMonth();
    const daysArray = [];
    for (let i = 0; i < days.length; i += 1) {
      if (days[i] <= number) {
        daysArray.push(days[i]);
      }
    }
    const disabledBtn =
      !description ||
      !cost ||
      !urlImageOne;
    return (
      <div>
        <Helmet
          title="Agregar Proyecto"
          meta={[
            { name: 'description', content: 'Description of AgregarProyecto' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <Container>
          <StepContainer>
            <Step>1</Step>
            <Text>{messages.info}</Text>
          </StepContainer>
          <ContainerInfo>
            <TextField
              name="description"
              style={
                descriptionFocused
                ? textFieldStyles.rootStyleFocused
                : textFieldStyles.rootStyle
              }
              underlineShow={false}
              inputStyle={textFieldStyles.inputStyle}
              value={description}
              onChange={this.handleOnChange}
              onFocus={() => this.setState({ descriptionFocused: true })}
              onBlur={() => this.setState({ descriptionFocused: false })}
              floatingLabelStyle={
                descriptionFocused || description
                ? textFieldStyles.focusedTextField
                : textFieldStyles.defaultTextField
              }
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.description}
              maxLength="200"
            />
          </ContainerInfo>
          <ContainerInfo>
            <Instructions>Selecciona una fecha.</Instructions>
            <DatePickerSection>
              <DropDownMenu
                underlineStyle={styles.dropDownMenuUnderline}
                value={daySelected}
                onChange={this.handleDaySelected}
                style={styles.dropDownMenuStyle}
                iconStyle={styles.dropDownMenuIcon}
                labelStyle={styles.dropDownMenuLabel}
                autoWidth={false}
              >
                { map(daysArray, (item, index) =>
                  <MenuItem
                    key={`day-${index}`}
                    value={item}
                    primaryText={item}
                  />
                )}
              </DropDownMenu>
              <DropDownMenu
                value={monthSelected}
                onChange={this.handleMonthSelected}
                underlineStyle={styles.dropDownMenuUnderline}
                style={styles.dropDownMenuStylePeriods}
                iconStyle={styles.dropDownMenuIcon}
                labelStyle={styles.dropDownMenuLabel}
                autoWidth={false}
              >
                { map(dialogMonthOptions.options, (item, index) =>
                  <MenuItem
                    key={`month-${index}`}
                    value={item.value}
                    primaryText={item.label}
                  />
                )}
              </DropDownMenu>
              <DropDownMenu
                underlineStyle={styles.dropDownMenuUnderline}
                value={yearSelected}
                onChange={this.handleYearSelected}
                style={styles.dropDownMenuStyle}
                iconStyle={styles.dropDownMenuIcon}
                labelStyle={styles.dropDownMenuLabel}
                autoWidth={false}
              >
                { map(dialogYearOptions.options, (item, index) =>
                  <MenuItem
                    key={`year-${index}`}
                    value={item.label}
                    primaryText={item.label}
                  />
                )}
              </DropDownMenu>
            </DatePickerSection>
            <NumberFormat
              thousandSeparator
              prefix={'$'}
              customInput={TextField}
              name="cost"
              style={
                costFocused
                ? textFieldStyles.rootStyleFocusedPhone
                : textFieldStyles.rootStylePhone
              }
              underlineShow={false}
              inputStyle={textFieldStyles.inputStyle}
              value={cost}
              onChange={this.handleOnChange}
              onFocus={() => this.setState({ costFocused: true })}
              onBlur={() => this.setState({ costFocused: false })}
              floatingLabelStyle={
                costFocused || cost
                ? textFieldStyles.focusedTextField
                : textFieldStyles.defaultTextField
              }
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.cost}
            />
          </ContainerInfo>
          <StepContainer>
            <Step>2</Step>
            <Text>{messages.imagenes}</Text>
          </StepContainer>
          <InputForms>
            <DashedBox>
              {
                  urlImageOne
                  ? <DistributorImage src={imageUrlOne} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageOne')}
                ref={(c) => { this.fileFieldImageOne = c; }}
              />
              {
                !imageUrlOne &&
                <GreenSpan onClick={() => this.openFile('imageOne')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageOne
                ? <GreenSpan onClick={() => this.openFile('imageOne')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
            <DashedBox>
              {
                urlImageTwo
                  ? <DistributorImage src={imageUrlTwo} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageTwo')}
                ref={(c) => { this.fileFieldImageTwo = c; }}
              />
              {
                !imageUrlTwo &&
                <GreenSpan onClick={() => this.openFile('imageTwo')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageTwo
                ? <GreenSpan onClick={() => this.openFile('imageTwo')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
            <DashedBox>
              {
                urlImageThree
                  ? <DistributorImage src={imageUrlThree} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageThree')}
                ref={(c) => { this.fileFieldImageThree = c; }}
              />
              {
                !imageUrlThree &&
                <GreenSpan onClick={() => this.openFile('imageThree')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageThree
                ? <GreenSpan onClick={() => this.openFile('imageThree')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
          </InputForms>
          <InputForms>
            <DashedBox>
              {
                urlImageFour
                  ? <DistributorImage src={imageUrlFour} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageFour')}
                ref={(c) => { this.fileFieldImageFour = c; }}
              />
              {
                !imageUrlFour &&
                <GreenSpan onClick={() => this.openFile('imageFour')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageFour
                ? <GreenSpan onClick={() => this.openFile('imageFour')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
            <DashedBox>
              {
                urlImageFive
                  ? <DistributorImage src={imageUrlFive} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageFive')}
                ref={(c) => { this.fileFieldImageFive = c; }}
              />
              {
                !imageUrlFive &&
                <GreenSpan onClick={() => this.openFile('imageFive')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageFive
                ? <GreenSpan onClick={() => this.openFile('imageFive')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
            <DashedBox>
              {
                urlImageSix
                  ? <DistributorImage src={imageUrlSix} />
                  : <FileUpload color="#456bae" />
              }
              <input
                accept="image/x-png,image/gif,image/jpeg"
                hidden type="file" onChange={() => this.onUpload('imageSix')}
                ref={(c) => { this.fileFieldImageSix = c; }}
              />
              {
                !imageUrlSix &&
                <GreenSpan onClick={() => this.openFile('imageSix')}>
                  {messages.labels.imagen}
                </GreenSpan>
              }
              {
                urlImageSix
                ? <GreenSpan onClick={() => this.openFile('imageSix')}>
                  {messages.change}
                </GreenSpan>
                : null
              }
            </DashedBox>
          </InputForms>
          <ButtonsSection>
            <StyledFlatButton
              label={'Cancelar'}
              labelStyle={flatButtonStyles.labelStyle}
              style={flatButtonStyles.style}
              onClick={browserHistory.goBack}
            />
            <RaisedButton
              label={'Guardar'}
              labelStyle={raisedButtonStyles.labelStyle}
              labelColor={raisedButtonStyles.labelColor}
              backgroundColor={raisedButtonStyles.backgroundColor}
              style={raisedButtonStyles.buttonStyle}
              buttonStyle={raisedButtonStyles.buttonStyle}
              onClick={this.handleCreteUser}
              disabled={disabledBtn}
            />
          </ButtonsSection>
          <Snackbar
            open={snackbar.open}
            message={snackbar.text}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestCloseSnackBar}
          />
        </Container>
      </div>
    );
  }
}

AgregarProyecto.propTypes = {
  AgregarProyecto: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AgregarProyecto: makeSelectAgregarProyecto(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgregarProyecto);

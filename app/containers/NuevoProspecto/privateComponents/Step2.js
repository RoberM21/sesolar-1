/**
 * Step1
 *
 */

import React, { PropTypes } from 'react';
import { TextField } from 'material-ui';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import Slider from '../../../components/Slider';
import {
  FormContainer,
  Container,
  StepContainer,
  StepNumber,
  StepDescription,
  PersonalDataContainer,
  TextProgress,
  DashedBox,
  InputForms,
  DistributorImage,
  GreenSpan,
} from '../styledComponents';
import {
  textFieldStyles,
} from '../materialInlineStyles';
import messages from '../messages';

export class Step2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    numberFocused: false,
    number: 1,
    urlImageOne: '',
    imageUrlOne: '',
    urlImageTwo: '',
    imageUrlTwo: '',
    urlImageThree: '',
    imageUrlThree: '',
    commentary: '',
    porcentage: '',
  }

  onUpload = (field) => {
    const { uploadImages } = this.props;
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
      default:
        break;
    }
    const fileName = file.name;
    const fileType = file.type.split('/').pop();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      switch (field) {
        case 'imageOne':
          this.setState({
            urlImageOne: reader.result,
            typeOne: fileType,
            fileNameOne: fileName,
            imageUrlOne: reader.result,
          });
          uploadImages({ imagenOne: reader.result });
          break;
        case 'imageTwo':
          this.setState({
            urlImageTwo: reader.result,
            typeTwo: fileType,
            fileNameTwo: fileName,
            imageUrlTwo: reader.result,
          });
          uploadImages({ imagenTwo: reader.result });
          break;
        case 'imageThree':
          this.setState({
            urlImageThree: reader.result,
            typeThree: fileType,
            fileNameThree: fileName,
            imageUrlThree: reader.result,
          });
          uploadImages({ imagenThree: reader.result });
          break;
        default:
          break;
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
      default:
        break;
    }
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleComentary = (e) => {
    const { target: { value } } = e;
    const { onClickComentary } = this.props;
    this.setState({ commentary: value });
    onClickComentary(value);
  }

  handleOnAmountSelected = (amount) => {
    const { onClickAmount } = this.props;
    this.setState({ porcentage: amount });
    onClickAmount(amount);
  }
  render() {
    const {
      numberFocused,
      number,
      urlImageOne,
      imageUrlOne,
      urlImageTwo,
      imageUrlTwo,
      urlImageThree,
      imageUrlThree,
    } = this.state;
    const { porcentages } = this.props;
    return (
      <FormContainer>
        <Container>
          <StepContainer>
            <StepNumber>
              2
            </StepNumber>
            <StepDescription>
              Primer Seguimiento
            </StepDescription>
          </StepContainer>
          <PersonalDataContainer>
            <TextField
              name="number"
              style={
                numberFocused
                ? textFieldStyles.rootStyleFocused
                : textFieldStyles.rootStyle
              }
              disabled
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={number}
              onChange={this.handleOnChange}
              onFocus={() => this.setState({ numberFocused: true })}
              onBlur={() => this.setState({ numberFocused: false })}
              floatingLabelStyle={
                numberFocused || number
                ? textFieldStyles.focusedTextField
                : textFieldStyles.defaultTextField
              }
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.number}
              maxLength="2"
            />
            <TextProgress>{messages.progress}</TextProgress>
            <Slider
              amounts={porcentages}
              onAmountSelected={this.handleOnAmountSelected}
            />
            <TextField
              style={{
                textAlign: 'left',
                fontFamily: 'Roboto',
                marginTop: '20px',
              }}
              onChange={this.handleComentary}
              floatingLabelText="Comentarios"
              multiLine
              rows={4}
              fullWidth
            />
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
          </PersonalDataContainer>
        </Container>
      </FormContainer>
    );
  }
}

Step2.propTypes = {
  porcentages: PropTypes.array,
  onClickAmount: PropTypes.func,
  onClickComentary: PropTypes.func,
  uploadImages: PropTypes.func,
};

export default Step2;

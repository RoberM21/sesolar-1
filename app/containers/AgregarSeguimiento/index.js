/*
 *
 * AgregarSeguimiento
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import Slider from 'components/Slider';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectAgregarSeguimiento from './selectors';
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
  Styles,
} from './styledComponents';
import {
  textFieldStyles,
} from './materialInlineStyles';
import {
  updateProspectingsRequest,
} from './actions';
import messages from './messages';

export class AgregarSeguimiento extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    numberFocused: false,
    number: '',
    urlImageOne: '',
    imageUrlOne: '',
    urlImageTwo: '',
    imageUrlTwo: '',
    urlImageThree: '',
    imageUrlThree: '',
    comentary: '',
    porcentage: '',
    title: '',
  }

  componentWillMount() {
    const { state: { item } } = this.props.location;
    this.setState({
      number: item.tracing.length + 1,
    });
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
          this.handleUploadImages({ imagenOne: reader.result });
          break;
        case 'imageTwo':
          this.setState({
            urlImageTwo: reader.result,
            typeTwo: fileType,
            fileNameTwo: fileName,
            imageUrlTwo: reader.result,
          });
          this.handleUploadImages({ imagenTwo: reader.result });
          break;
        case 'imageThree':
          this.setState({
            urlImageThree: reader.result,
            typeThree: fileType,
            fileNameThree: fileName,
            imageUrlThree: reader.result,
          });
          this.handleUploadImages({ imagenThree: reader.result });
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

  handleUploadImages = (image) => {
    if (image.imagenOne) {
      this.setState({ imagenOne: image.imagenOne });
    } else if (image.imagenTwo) {
      this.setState({ imagenTwo: image.imagenTwo });
    } else if (image.imagenThree) {
      this.setState({ imagenThree: image.imagenThree });
    }
  }

  handleOnChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  }

  handleComentary = (e) => {
    const { target: { value } } = e;
    this.setState({ comentary: value });
  }

  handleOnAmountSelected = (amount) => {
    this.setState({ porcentage: amount });
  }

  handleSaveProspecting = () => {
    const { dispatch, params: { id } } = this.props;
    const {
      comentary,
      porcentage,
      number,
      imagenOne,
      imagenTwo,
      imagenThree,
    } = this.state;
    const body = {
      id,
      tracing: [
        {
          comentary,
          number,
          porcentage,
          img: [
            imagenOne,
            imagenTwo,
            imagenThree,
          ],
        },
      ],
    };
    dispatch(updateProspectingsRequest(body));
  }
  step = () => {
    const { state: { item } } = this.props.location;
    const { AgregarSeguimiento: { nameSeguimiento } } = this.props;
    const count = item.tracing.length;
    let title;
    for (let i = 0; i < nameSeguimiento.length; i += 1) {
      if (nameSeguimiento[i].value === count) {
        title = nameSeguimiento[i].name;
      } else if (nameSeguimiento[i].value === count && count >= 10) {
        title = nameSeguimiento[i].name;
      }
    }
    return title;
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
      porcentage,
      comentary,
    } = this.state;
    const { AgregarSeguimiento: {
      porcentages,
    } } = this.props;
    return (
      <div>
        <Helmet
          title="AgregarSeguimiento"
          meta={[
            { name: 'description', content: 'Description of AgregarSeguimiento' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <FormContainer>
          <Container>
            <StepContainer>
              <StepNumber>
                1
              </StepNumber>
              <StepDescription>
                {this.step()}
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
            <RaisedButton
              label={'Guardar'}
              primary
              disabled={!porcentage || !comentary}
              buttonStyle={Styles.buttonStyle}
              style={Styles.rootStyle}
              onClick={this.handleSaveProspecting}
            />
          </Container>
        </FormContainer>
      </div>
    );
  }
}

AgregarSeguimiento.propTypes = {
  AgregarSeguimiento: PropTypes.object,
  location: PropTypes.object,
  params: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AgregarSeguimiento: makeSelectAgregarSeguimiento(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgregarSeguimiento);


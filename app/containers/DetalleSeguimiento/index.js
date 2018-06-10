/*
 *
 * DetalleSeguimiento
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { map } from 'lodash';
import { getCelphone } from 'utils/regex';
import { TextField } from 'material-ui';
import Image from 'material-ui/svg-icons/image/image';
import LinearProgress from 'material-ui/LinearProgress';
import Subheader from 'components/Subheader';
import { createStructuredSelector } from 'reselect';
import makeSelectDetalleSeguimiento from './selectors';
import messages from './messages';
import {
  Container,
  ContainerClient,
  StepContainer,
  StepNumber,
  StepDescription,
  Text,
  DivContainer,
  TextProgress,
  Information,
  InputForms,
  DistributorImage,
  DashedBox,
} from './styledComponents';
import {
  textFieldStyles,
} from './materialInlineStyles';

export class DetalleSeguimiento extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    client: {},
  }
  componentWillMount() {
    const { location: { state: { item } } } = this.props;
    this.setState({ client: item.client, tracing: item.tracing });
  }
  changeTitle = (position) => {
    const { DetalleSeguimiento: {
        nameSeguimiento,
      },
    } = this.props;
    let title;
    for (let i = 0; i < nameSeguimiento.length; i += 1) {
      if (nameSeguimiento[i].value === position) {
        title = nameSeguimiento[i].name;
      } else if (nameSeguimiento[i].value === position && position >= 10) {
        title = nameSeguimiento[i].name;
      }
    }
    return title;
  }
  barColor = (status) => {
    if (status > 0 && status < 33) {
      return '#F44336';
    } else if (status > 33 && status < 66) {
      return '#ffc107';
    } else if (status > 66 && status <= 100) {
      return '#1dc064';
    } return '#bdbdbd';
  }
  handlePhoto = (name) => {
    const image = `http://localhost:8080/api/images/prospecting/download/${name}`;
    image.toString();
    return <DistributorImage src={image} />;
  }
  render() {
    const {
      client,
      tracing,
    } = this.state;
    return (
      <div>
        <Helmet
          title="DetalleSeguimiento"
          meta={[
            { name: 'description', content: 'Description of DetalleSeguimiento' },
          ]}
        />
        <Subheader
          title={messages.subHeaderTitle}
        />
        <Container>
          <StepContainer>
            <StepNumber>
              1
            </StepNumber>
            <StepDescription>
              {messages.client}
            </StepDescription>
          </StepContainer>
          <ContainerClient>
            <TextField
              name="name"
              style={textFieldStyles.rootStyle}
              disabled
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={client.clientName}
              floatingLabelStyle={textFieldStyles.focusedTextField}
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.clientName}
            />
            <TextField
              name="company"
              style={textFieldStyles.rootStyle}
              disabled
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={client.companyName}
              floatingLabelStyle={textFieldStyles.focusedTextField}
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.companyName}
            />
            <TextField
              name="phone"
              style={textFieldStyles.rootStyle}
              disabled
              underlineShow={false}
              hintStyle={textFieldStyles.hintStyle}
              inputStyle={textFieldStyles.inputStyle}
              value={getCelphone(client.phone)}
              floatingLabelStyle={textFieldStyles.focusedTextField}
              floatingLabelFocusStyle={textFieldStyles.floatingLabelStyle}
              floatingLabelText={messages.phone}
            />
          </ContainerClient>
          <StepContainer>
            <StepNumber>
              2
            </StepNumber>
            <StepDescription>
              {messages.tracing}
            </StepDescription>
          </StepContainer>
          { map(tracing, (item, index) =>
            <ContainerClient key={`tracing-${index}`}>
              <DivContainer>
                <StepContainer>
                  <StepNumber>
                    {index + 1}
                  </StepNumber>
                  <StepDescription>
                    {this.changeTitle(index)}
                  </StepDescription>
                </StepContainer>
                <Information>
                  <StepDescription>{messages.progress}</StepDescription>
                  <LinearProgress
                    mode="determinate"
                    value={item.porcentage}
                    color={this.barColor(item.porcentage)}
                    style={textFieldStyles.BarStyle}
                  />
                  <Text>{item.porcentage} %</Text>
                </Information>
                <Information>
                  <StepDescription>
                    {messages.comentary}
                  </StepDescription>
                  <TextProgress>{item.comentary}</TextProgress>
                </Information>
                <Information>
                  <StepDescription>{messages.imagenes}</StepDescription>
                  <InputForms>
                    <DashedBox>
                      {
                        item.img[0]
                        ? this.handlePhoto(item.img[0])
                        : <Image color="#456bae" />
                      }
                    </DashedBox>
                    <DashedBox>
                      {
                        item.img[1]
                          ? this.handlePhoto(item.img[1])
                          : <Image color="#456bae" />
                      }
                    </DashedBox>
                    <DashedBox>
                      {
                        item.img[2]
                          ? this.handlePhoto(item.img[2])
                          : <Image color="#456bae" />
                      }
                    </DashedBox>
                  </InputForms>
                </Information>
              </DivContainer>
            </ContainerClient>
          )}
        </Container>
      </div>
    );
  }
}

DetalleSeguimiento.propTypes = {
  location: PropTypes.object,
  DetalleSeguimiento: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DetalleSeguimiento: makeSelectDetalleSeguimiento(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalleSeguimiento);

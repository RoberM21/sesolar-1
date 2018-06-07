/**
*
* Slider
*
*/

import React, { PropTypes } from 'react';
import {
  MainContainer,
  SliderMainContainer,
  EmpyProgressContainer,
  DarkDot,
  ProgressContainer,
  Indicator,
  Progress,
  DotsSection,
  DotItem,
  AmountSelected,
  AmountsSection,
  AmountItem,
} from './styledComponents';

class Slider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    amountSelected: 0,
    progress: 0,
    amountIndexSelected: 0,
  }

  componentWillMount() {
    this.setState({ amountSelected: this.props.amounts[0] });
  }

  handleDotSelected = (amountSelected, progress, amountIndexSelected) => {
    const { onAmountSelected } = this.props;
    this.setState({ amountSelected, progress, amountIndexSelected });
    onAmountSelected(amountSelected);
  }

  render() {
    const { amounts } = this.props;
    return (
      <MainContainer>
        <AmountSelected>
          {this.state.amountSelected}
        </AmountSelected>
        <SliderMainContainer>
          <EmpyProgressContainer>
            <ProgressContainer>
              <DotsSection>
                {
                  amounts.map((amount, index) => (
                    <DotItem
                      key={index}
                      onClick={() => this.handleDotSelected(amount, (index / (amounts.length - 1)) * 100, index)}
                    >
                      <DarkDot
                        over={this.state.progress > ((index / (amounts.length - 1)) * 100)}
                      />
                    </DotItem>
                  ))
                }
              </DotsSection>
              <Progress progress={this.state.progress}>
              </Progress>
              <Indicator
                last={this.state.amountIndexSelected + 1 === amounts.length}
              />
            </ProgressContainer>
          </EmpyProgressContainer>
        </SliderMainContainer>
        <AmountsSection>
          {
            amounts.map((amount, index) => (
              <AmountItem key={index}>{amount}</AmountItem>
            ))
          }
        </AmountsSection>
      </MainContainer>
    );
  }
}

Slider.propTypes = {
  amounts: PropTypes.array,
  onAmountSelected: PropTypes.func,
};

export default Slider;

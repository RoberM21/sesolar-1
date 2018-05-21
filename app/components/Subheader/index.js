/**
*
* Subheader
*
*/

import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import {
  AlignRight,
  SubheaderContainer,
  SubheaderTitle,
  SubheaderButtonLabel,
  StyledArrowBackIcon,
  StyledAddIcon,
  StyledCloseIcon,
} from './styledComponents';

/**
 * Componente presentacional. Pinta un Subhedear con un titulo junto a un icono de una flecha izquierda.
 * Opcionalmente tambien puede pintar un botton y un label a la derecha del subheeader.
 *
 * @param  {String}     props.title           Titulo a mostrar en el subheader
 * @param  {String}     props.buttonLabel     Label del boton (en caso de de tener bandera prendida)
 * @param  {Bool}       props.withRightButton Bandera usada para indicar que se desea pintar un boton a la derecha.
 * @param  {Function}   props.handleRightButtonClick   Function mandada llamar al hacer click al icono derecho.
 * @param  {Function}   props.handleLeftIconClick   Function mandada llamar al hacer click al icono izquierdo.
 * @param  {Bool}       props.closeIcon   Bandera para indicar que el ícono de la izquierda debe ser de cerrar.
 * @param  {Bool}       props.showLeftIcon   Bandera para indicar que el ícono de la izquierda se muestre.
 * @return {React.Component}
 */
const grayColor = '#494949';
const blueColor = '#3865c1';
const Subheader = ({ title, buttonLabel, withRightButton, handleRightButtonClick, handleLeftIconClick, closeIcon, showLeftIcon }) =>
  <SubheaderContainer>
    {
      closeIcon ?
        showLeftIcon && <StyledCloseIcon
          onClick={handleLeftIconClick}
          color={grayColor}
        />
        :
          showLeftIcon && <StyledArrowBackIcon
            onClick={handleLeftIconClick}
            color={grayColor}
          />
    }
    <SubheaderTitle>{title}</SubheaderTitle>
    {withRightButton &&
      <AlignRight>
        <SubheaderButtonLabel onClick={handleRightButtonClick}>{buttonLabel}</SubheaderButtonLabel>
      </AlignRight>
    }
    {withRightButton &&
      <StyledAddIcon
        color={blueColor}
        onClick={handleRightButtonClick}
      />
    }
  </SubheaderContainer>;

Subheader.propTypes = {
  title: PropTypes.string,
  buttonLabel: PropTypes.string,
  withRightButton: PropTypes.bool,
  handleRightButtonClick: PropTypes.func,
  handleLeftIconClick: PropTypes.func,
  closeIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
};

Subheader.defaultProps = {
  withRightButton: false,
  handleLeftIconClick: () => { browserHistory.goBack(); },
  closeIcon: false,
  showLeftIcon: true,
};

export default Subheader;

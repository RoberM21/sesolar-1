/**
 * styledComponents
 *
 */

import styled from 'styled-components';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import AddIcon from 'material-ui/svg-icons/content/add-circle';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

export const AlignRight = styled.div`
  float: right;
  text-align: right;
  width: 50%;
`;

export const SubheaderContainer = styled.div`
  height: 75px;
  width: 100%;
  padding: 0 120px;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const SubheaderTitle = styled.span`
  padding-left: 16px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.7px;
  color: #494949;
  width: 50%;
`;

export const SubheaderButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #3865c1;
  padding-right: 10px;
  cursor: pointer;
`;

export const SubheaderLeftArrow = styled.div`
  width: 24px;
  height: 24px;
  background-color: #494949;
`;

export const SubheaderIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #3865c1;
`;

export const StyledArrowBackIcon = styled(ArrowBackIcon)`
  cursor: pointer;
`;

export const StyledAddIcon = styled(AddIcon)`
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

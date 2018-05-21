import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, #3561b90d, #3561b9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  height: 430px;
  width: 400px;
  background: #ffffff;
  padding: 40px 40px 10px 40px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.div`
  font-size: 22px;
  color: #555555;
  height: 17%;
`;

export const Logo = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  height: 50%;
`;

export const DivButton = styled.div`
  textAlign: right;
`;

export const ActionButton = styled(FlatButton)`
  display: flex;
  border-radius: 26px !important;
  &:hover ${ActionButton}{
    backgroundColor: #ffffff !important;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.07); !important;
  }
`;

export const ImgLogo = styled.img`
  width: 40%; 
`;

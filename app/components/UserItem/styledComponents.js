import styled from 'styled-components';

export const EditButton = styled.button`
  margin: 12px;
  cursor: pointer;
  transition: all .25s;
  border-radius: 25px;
  padding: 9px 29px;
  color: #1c884b;
  &:hover ${EditButton}{
    background: green;
    color: white;
    transition: all .25s;
    cursor: pointer;
  }
`;

export const LevelIcon = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: inline;
  object-fit: cover;
`;

export const Badge = styled.span`
  border-radius: 2px;
  padding: 3px 8px;
  background-color: #eaeaea;
`;

export const Cropper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

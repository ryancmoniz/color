import styled from 'styled-components';
import CopyButton from './CopyButton';

const Box = styled.div`
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -3.5px;
  &:hover ${CopyButton} {
    opacity: 1;
    transition: 0.3s;
  }
`;

export default Box;

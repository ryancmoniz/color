import styled from 'styled-components';

const CopyButton = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  text-align: center;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1rem;
  line-height: 30px;
  text-transform: uppercase;
  border: none;
  opacity: 0;
`;

export default CopyButton;

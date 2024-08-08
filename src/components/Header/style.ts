import styled from 'styled-components';

export const Wrap = styled.header`
  width: 100%;
  padding: 40px;

  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 0px 10px 0px ${(props) => props.theme.shadowColor};

  position: fixed;
  top: 0;
  left: 0;

  .theme-btn {
    border: 1px solid white;
    border-radius: 20px;
    padding: 6px 20px;

    color: #fff;

    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
  }
`;

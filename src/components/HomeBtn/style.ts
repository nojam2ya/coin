import styled from 'styled-components';

export const Wrap = styled.button`
  a {
    display: block;
    width: 50px;
    height: 50px;
    text-align: center;
    justify-content: center;
    align-items: center;

    font-size: 32px;
    line-height: 50px;
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
  }

  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
`;

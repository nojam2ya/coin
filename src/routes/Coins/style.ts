import styled from 'styled-components';

const COIN_WIDTH = 320;

export const CoinsList = styled.ul`
  display: flex;
  width: ${COIN_WIDTH * 2 + 20}px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;

export const Coin = styled.li`
  width: 320px;

  a {
    display: flex;
    align-items: center;
    padding: 14px 24px;
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.textColor};

    font-weight: 400;
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.textColor};

    transition: all 0.2s ease-in;

    img {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      object-fit: contain;
    }

    .text {
      flex-grow: 1;
    }
    .arrow {
      transition: all 0.2s ease-in;
    }
  }

  &:nth-child(n + 3) {
    margin-top: 10px;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.textColor};
      background-color: transparent;

      .arrow {
        transform: translateX(10px);
      }
    }
  }
`;

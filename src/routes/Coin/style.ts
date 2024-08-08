import styled from 'styled-components';

export const Wrap = styled.section`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 20px;

  article {
    flex-basis: calc(50% - 4px);
  }
`;

export const BoxInfo = styled.article`
  ul {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.textColor};
    border-radius: 8px;
    padding: 20px;

    font-size: 0.8rem;

    li {
      text-align: center;

      span {
        display: block;
      }

      .tit {
        border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        padding-bottom: 4px;
        margin-bottom: 8px;
        font-weight: 600;
      }

      .con {
        margin-top: 4px;
      }
    }
  }

  .info {
    li:nth-of-type(1) {
      flex-basis: 30%;
    }
    li:nth-of-type(2) {
      flex-basis: 40%;
    }
    li:nth-of-type(3) {
      flex-basis: 30%;
    }
  }

  .description {
    padding: 20px;
    font-size: 14px;
    line-height: 1.4;
  }

  .tickers {
    li:nth-of-type(1) {
      flex-basis: 30%;
    }
    li:nth-of-type(2) {
      flex-basis: 30%;
    }
  }
`;

export const BoxTab = styled.article`
  .content {
    padding: 20px;
    border-radius: 0 0 8px 8px;
    min-height: 220px;

    color: #000;
    font-size: 14px;
    line-height: 1.4;

    background-color: ${(props) => props.theme.textColor};
  }
`;

export const TabMenu = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    width: calc(50% - 2px);

    a {
      display: block;
      padding: 14px;
      border-radius: 8px 8px 0 0;

      text-align: center;
      font-size: 0.8rem;
      font-weight: 600;
      color: ${(props) => props.theme.bgColor};

      background-color: ${(props) => props.theme.shadowColor};

      &.active,
      &:hover {
        background-color: ${(props) => props.theme.textColor};
      }
    }
  }
`;

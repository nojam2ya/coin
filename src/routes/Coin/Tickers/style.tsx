import styled from 'styled-components';

export const WrapList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 26px;

  & + ul {
    border-top: 1px solid #d6d1d1;
  }

  li {
    flex-basis: 33%;
  }
`;

export const Title = styled.span`
  display: block;

  letter-spacing: -0.06em;
  font-weight: 600;
  text-align: center;
`;

export const Content = styled.span<{
  isMinus?: boolean;
  isDark?: boolean;
}>`
  display: block;
  font-weight: bold;

  color: ${(props) => (props.isMinus ? 'red' : 'green')};
  ${(props) =>
    props.isDark
      ? `text-shadow: -1px 0px white,
                      0px 1px white,
                      1px 0px white,
                      0px -1px white
        ;`
      : ''}
  text-align: center;
`;

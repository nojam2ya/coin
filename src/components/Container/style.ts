import styled from 'styled-components';
import { Wrap as HeaderWrap } from '@components/Header/style';

export const Wrap = styled.div`
  ${HeaderWrap} + div,
  ${HeaderWrap} + section,
  ${HeaderWrap} + ul {
    padding-top: calc(88px + 42px);
    padding-bottom: 42px;
  }
`;

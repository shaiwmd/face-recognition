import styled from 'styled-components/macro';
import { Particles as Component } from 'react-particles-js';

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: row-reverse;
  padding: 30px 15px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Particles = styled(Component)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

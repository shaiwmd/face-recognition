import Tilt from 'react-tilt';
import { Container } from './styles';
import Cloud from '../../icons/logo.png';

const Logo = props => (
  <Container className='ma4 mt0'>
    <Tilt
      className='Tilt br2 shadow-2'
      options={{ max: 55 }}
      style={{ height: 150, width: 150, backgroundColor: '#fff' }}
    >
      <div className='Tilt-inner pa3'>
        <img src={Cloud} />
      </div>
    </Tilt>
  </Container>
);

export default Logo;

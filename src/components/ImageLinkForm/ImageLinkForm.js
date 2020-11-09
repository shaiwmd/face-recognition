import { Container, Form } from './styles';
import { Center } from '../common';

const ImageLinkForm = props => (
  <Container>
    <p className='f3'>
      this magic cloud will detect faces in your picture. git it a
    </p>
    <Center>
      <Form className='pa4 br3 shadow-5'>
        <input type='text' className='f4 pa2 w-70' />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'>
          Detect
        </button>
      </Form>
    </Center>
  </Container>
);

export default ImageLinkForm;

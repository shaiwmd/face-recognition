import { Navigation, Logo, ImageLinkForm } from './components';
import { Header } from './components/common';

const App = () => (
  <div>
    <Header>
      <Navigation />
      <Logo />
    </Header>
    <ImageLinkForm />
    {/* <FaceRecognition /> */}
  </div>
);

export default App;

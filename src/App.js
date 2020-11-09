import { Navigation, Logo, ImageLinkForm, Rank } from './components';
import { Header, Particles } from './components/common';

const particlesOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
  },
};

const App = () => (
  <div>
    <Particles params={particlesOptions} />
    <Header>
      <Navigation />
      <Logo />
    </Header>
    <Rank />
    <ImageLinkForm />
    {/* <FaceRecognition /> */}
  </div>
);

export default App;

import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas con <GifGrid />', () => {
  //let wrapper = shallow(<GifGrid category="Goku" />);

  beforeEach(() => {
    
  });

  test('Debe renderizar el componente correctamente', () => {
    useFetchGifs.mockReturnValue({
      loanding: true,
      data: [],
    });
    const wrapper = shallow(<GifGrid category="Goku" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan las imágenes', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://domain.com/image.png',
      title: 'Mock image',
    }];

    useFetchGifs.mockReturnValue({
      loanding: false,
      data: gifs,
    });
    const wrapper = shallow(<GifGrid category="Goku" />);
    expect(wrapper).toMatchSnapshot();

    // No debería estar el párrafo de cargando.
    expect(wrapper.find('p').exists()).toBe(false);

    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas de <GifGritItem />', () => {
  const title = 'One Punch Man Preview GIF';
  const url = 'https://media2.giphy.com/media/arbHBoiUWUgmc/giphy.gif?cid=bce6e586dgm3omnh06gjms04coduyi97cr9db3c968kc7odu&rid=giphy.gif&ct=g';
  const className = 'animate__fadeIn';
  
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  
  test('Debe renderizar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe(title);
  });

  test('Debe tener la imagen igual al url y el alt igual al title', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener un div con la clase fadeIn de animate.css', () => {
    const div = wrapper.find('div');
    expect(div.hasClass(className)).toBe(true);
  });
});
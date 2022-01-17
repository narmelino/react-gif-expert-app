import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas de <GifExpertApp />', () => {
  test('Debe renderizar el componente correctamente sin lista de categorías.', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe renderizar el componente con una lista de categorías.', () => {
    const categories = ['Goku', 'One Punch']

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
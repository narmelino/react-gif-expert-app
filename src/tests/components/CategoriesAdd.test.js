import { shallow } from "enzyme";
import CategoriesAdd from '../../components/CategoriesAdd';

describe('Pruebas con CategoriesAdd', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<CategoriesAdd setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<CategoriesAdd setCategories={setCategories} />)
  });

  test('Debe renderizar correctamente en componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe cambiar el texto del input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo!';
    input.simulate('change', { target: { value } });
  });

  test('No debe postear la info en el submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Debe postear la info y limpiar el input', () => {
    // Simular que ingresa un valor
    const input = wrapper.find('input');
    const value = 'Hola mundo!';
    input.simulate('change', { target: { value } });

    // Simular que hizo el submit y que la funcion se haya llamado una vez
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).toHaveBeenCalled();

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Determina que setCategories se halla llamado con un argumento de tipo función.

    expect(input.prop('value').trim()).toBe('');
  });
});
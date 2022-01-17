import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from "../../hooks/useFetchGifs";

describe('Pruebas con el hook useFetchGifs', () => {
  test('Debe retornar el estado inicial.', () => {
    const category = 'Goku';
    const { result } = renderHook(() => useFetchGifs(category));
    const { loanding, data} = result.current;

    console.log(loanding, data);

    expect(loanding).toBe(true);
    expect(data).toEqual([]);
  });
});
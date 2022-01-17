import { renderHook } from '@testing-library/react-hooks';
import useFetchGifs from "../../hooks/useFetchGifs";

describe('Pruebas con el hook useFetchGifs', () => {
  test('Debe retornar el estado inicial.', async() => {
    const category = 'Goku';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    const { loanding, data} = result.current;

    await waitForNextUpdate();

    expect(loanding).toBe(true);
    expect(data).toEqual([]);
  });

  test('Debe retornar un arreglo de imágenes', async() => {
    const category = 'Goku';
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
    await waitForNextUpdate();
    
    const { loanding, data} = result.current;

    expect(loanding).toBe(false);
    expect(data.length).toBe(10);
  });
});
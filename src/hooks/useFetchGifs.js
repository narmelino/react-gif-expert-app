import { useEffect, useState } from "react";
import getGifs from '../utils/getGifs';

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loanding: true,
  })

  useEffect(() => {
    getGifs(category).then(gifs => {
      setState({
        data: gifs,
        loanding: false,
      });
    });
  }, [category]);

  return state;
}

export default useFetchGifs;
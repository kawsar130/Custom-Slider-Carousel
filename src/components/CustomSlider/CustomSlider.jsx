import { useEffect, useState } from 'react';
import axios from 'axios';
import SliderContents from './SliderContents/SliderContents';
import SliderSelection from './SliderSelection/SliderSelection';
import styles from './customSlider.module.css';

const baseURL = 'http://localhost:3000/data.json';

const CustomSlider = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({});
  const [error, setError] = useState(null);

  const handleSelect = (product) => {
    setSelected(product);
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setProducts(response.data);
        if (response.data.length) setSelected(response.data[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!products) return 'No Product Available';

  return (
    <section className={styles.customSliderContainer}>
      <SliderContents selected={selected} />
      <SliderSelection
        products={products}
        selected={selected}
        handleSelect={handleSelect}
      />
    </section>
  );
};
export default CustomSlider;

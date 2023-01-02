import styles from './sliderSelection.module.css';

const SliderSelection = ({ products, selected, handleSelect }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleSelect(product)}
            className={
              selected.id === product.id
                ? styles.itemComponentSelected
                : styles.itemComponent
            }
          >
            <p className={styles.itemText}>&#10054; {product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SliderSelection;

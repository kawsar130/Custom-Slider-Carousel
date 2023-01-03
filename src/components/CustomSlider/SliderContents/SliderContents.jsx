import styles from './sliderContents.module.css';

const SliderContents = ({ selected }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerShade}></div>
        <img
          src={selected.bannerImg}
          alt={selected.name}
          height="100%"
          width="100%"
        />
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.productImgContainer}>
          <img src={selected.productImg} alt={selected.name} width="100%" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{selected.name}</h1>
          <p className={styles.description}>
            {selected.description?.slice(0, 140)}..
          </p>
        </div>
      </div>
    </div>
  );
};
export default SliderContents;

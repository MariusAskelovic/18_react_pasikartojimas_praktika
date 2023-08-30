import css from './SingleProduct.module.css';
export default function SingleProduct(props) {
  console.log('props 000===', props);
  const { brand, description, images, price, rating, stock, thumbnail, title } =
    props;
  return (
    <li className={css.list}>
      <div className={css.column}>
        <img src={thumbnail ? thumbnail : ''} alt={`${brand} ${title}`} />
        <div className={css.alignRight}>
          <h3>
            {brand} <span>{title}</span>
          </h3>
          <p>
            Price: <span className={css.number}>{price}€</span>
          </p>
          <p>
            Rating: <span className={css.number}>{rating}</span>
          </p>
          <p>
            In Stock: <span className={css.number}>{stock}</span>
          </p>
        </div>
      </div>
      <div>
        <h5>{description}</h5>
        <div className={css.imagesRow}>
          {images.map((oneImg) => (
            <img key={oneImg} src={oneImg} alt='lektuvas' />
          ))}
        </div>
      </div>
    </li>
  );
}

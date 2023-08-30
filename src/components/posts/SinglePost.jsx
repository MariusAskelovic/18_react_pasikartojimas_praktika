import css from './SinglePost.module.css';
export default function SinglePost(props) {
  const { title, body, tags } = props.list;
  return (
    <li className={css.postBlock}>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className={css.tags}>
        {tags.map((obj) => (
          <p className={css.tag} key={obj}>
            {obj}
          </p>
        ))}
      </div>
    </li>
  );
}

import { useEffect, useState } from 'react';
import css from './PostsList.module.css';
import SinglePost from './SinglePost';

export default function PostsList() {
  const url = 'https://dummyjson.com/posts';
  const [postsArr, setPostsArr] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(({ posts }) => {
        // console.log(posts);
        setPostsArr(posts);
        console.log(postsArr);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);
  return (
    <ul className={css.unlisted}>
      {postsArr.map((obj) => (
        <SinglePost key={obj.id} list={obj} />
      ))}
    </ul>
  );
}

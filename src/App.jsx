import { Route, Routes } from 'react-router-dom';
import PostsList from './components/posts/PostsList';
import HomePage from './components/HomePage';
import Header from './layout/Header';
import ProductsList from './components/products/ProductsList';
import TodosList from './components/todos/TodosList';
import UsersList from './components/users/UsersList';

export default function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<PostsList />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/todos' element={<TodosList />} />
          <Route path='/users' element={<UsersList />} />
        </Routes>
      </div>
    </div>
  );
}

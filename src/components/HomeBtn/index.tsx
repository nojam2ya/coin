import { Link } from 'react-router-dom';
import { Wrap } from './style';

const HomeBtn = () => {
  return (
    <Wrap type="button">
      <Link to={`${import.meta.env.VITE_PUBLIC_URL}/`}>&larr;</Link>
    </Wrap>
  );
};

export default HomeBtn;

import { Link } from 'react-router-dom';
import { Wrap } from './style';

const HomeBtn = () => {
  return (
    <Wrap type="button">
      <Link to="/">&larr;</Link>
    </Wrap>
  );
};

export default HomeBtn;

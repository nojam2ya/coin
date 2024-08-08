import { IChildren } from '@src/interfaces';
import { Wrap } from './style';
import { useSetRecoilState } from 'recoil';
import { isDarkAtom } from '@src/atoms';

const Header = ({ children }: IChildren) => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toogleDarkAtom = () => setDarkAtom((prev) => !prev);

  return (
    <Wrap>
      {children}
      <button className="theme-btn" type="button" onClick={toogleDarkAtom}>
        toggle theme
      </button>
    </Wrap>
  );
};

export default Header;

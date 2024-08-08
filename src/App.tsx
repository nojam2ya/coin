import GlobalStyle from '@style/GlobalStyle';
import Routers from './Routers';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@src/style/theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '@src/atoms';

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;

import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Result from './components/Result';



function App() {

  const [theme, setTheme] = useState<boolean>(false)
  const [searchData, setSearchData] = useState<any|null>(null)


  return (
    <ThemeProvider theme={theme ?  darkTheme : lightTheme  }>
      <Wrapper>
          <Container>
            <Header theme={theme} setTheme={setTheme} />
            <Search setSearchData={setSearchData} />
            {searchData && <Result searchData={searchData} />}
          </Container>
      </Wrapper>
    </ThemeProvider>

  );
}

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  transition: background-color 0.5s ease-out;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 327px;
  @media (min-width: 768px) {
    max-width: 573px;
  }
  @media (min-width: 1024px) {
    max-width: 730px;
  }
`
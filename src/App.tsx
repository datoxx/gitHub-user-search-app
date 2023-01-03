import styled, {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import {  useState } from 'react';
import Header from './components/Header';



function App() {

  const [theme, setTheme] = useState<boolean>(false)


  return (
    <ThemeProvider theme={theme ?  darkTheme : lightTheme  }>
      <Wrapper>
          <Container>
            <Header theme={theme} setTheme={setTheme} />
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


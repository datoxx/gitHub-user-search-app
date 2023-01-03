import styled from 'styled-components';
import Moon from '../svg/Moon';
import Sun from "../svg/Sun";


interface HeaderProps {
    theme: boolean,
    setTheme: (prop:boolean) => void;
}

const Header = ({theme, setTheme}:HeaderProps) => {

    const handleThemeTogle = () => {
        setTheme(!theme)
    }

    return ( 
        <Container>
            <Title>devfinder</Title>
            <ThemeSwitcher onClick={handleThemeTogle}>
                <ThemeLabel>{ theme ? 'LIGHT' : 'DARK' }</ThemeLabel>
                { theme ? <Sun /> : <Moon /> } 
        </ThemeSwitcher>
      </Container>
     );
}
 
export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${props => props.theme.titleColor};
`


const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  &:hover {
    cursor: pointer;
    span {
      color: ${props => props.theme.toggleHover};
    }
    svg { 
      fill: ${props => props.theme.toggleHover};
    }
  }
`
const ThemeLabel = styled.span`
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: ${props => props.theme.toggleColor};

`
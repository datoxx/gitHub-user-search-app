import styled from 'styled-components';
import SearchIcon from '../assets/icon-search.svg';
import {  useEffect, useState } from 'react';
import axios from 'axios';

interface SearchProps {
  setSearchData: (e:any) => void,
}

const Search = ({setSearchData}:SearchProps) => {

  const [user, setUser] = useState<string>("datoxx")
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const data = await axios.get(`https://api.github.com/users/${user}`);
        setSearchData(data.data);
        console.log(data)
      } catch(e) {
        setError(true)
      }
    }
    fetchDate();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setUser(e.currentTarget.search.value)
      }


    return ( 
        <Form onSubmit={handleSubmit}>
            <label htmlFor="search">
                <img src={SearchIcon} alt="Search" />
                <SearchInput 
                    type='text' 
                    id="search" 
                    placeholder="Search GitHub username…"
                />
            </label>
            {error && <Span>No results</Span>}
            <Button type='submit'>Search</Button>
        </Form>
     );
}

 
export default Search;


const Form = styled.form`
  background-color: ${props => props.theme.componentBg};
  transition: background-color 0.5s ease-out;
  box-shadow: ${props => props.theme.componentHhadow};
  border-radius: 15px;
  display: flex;
  align-items: center;
  height: 60px; 
  padding: 0 7px 0 16px;
  margin: 36px 0 16px;
  gap: 8px; 
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px; 
    width: 100%;
  }

  img {
      width: 20px;
      height: 20px;
    }

  @media (min-width: 768px) {
    gap: 24px; 
    height: 69px; 
    margin: 36px 0 24px;
    padding: 0 10px 0 32px;
    img {
      width: 24px;
      height: 24px;
    }
    label {
      gap: 24px; 
  }
  }

`


const SearchInput = styled.input`
  all: unset;
  width: 100%;
  font-weight: 400; 
  caret-color: #0079FF;
  color: ${props => props.theme.inputColor};
  
  &::placeholder {
    font-size: 13px;
    line-height: 25px; 
    color: ${props => props.theme.placeholderColor};
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
      &::placeholder {
      font-size: 18px;
      line-height: 25px;
    }
  }
`

const Span = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  white-space: nowrap;
  color: #F74646;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }

`

const Button = styled.button`
  all: unset;
  background-color: #0079FF;
  transition: background-color 0.3s ease-in-out;
  padding: 12px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #60ABFF;
    
  }
  @media screen and (min-width: 768px) {
    padding: 13px 24px;
  }
`
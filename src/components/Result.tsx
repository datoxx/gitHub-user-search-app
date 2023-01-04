import styled from 'styled-components';
import Location from '../svg/Location';
import Website from '../svg/Website';
import Company from '../svg/Company';
import Twitter from '../svg/Twitter';

interface ResultProps {
    searchData: any,
}


const Result = ({searchData}: ResultProps) => {

    const formatDate = (value:string):string|null => {
        let date = new Date(value);
        const day = date.toLocaleString('default', { day: '2-digit' });
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.toLocaleString('default', { year: 'numeric' });
        return day + ' ' + month + ' ' + year;
    }
    

    return ( 
        <Container>
            <UserInfoContainer>
                { searchData.avatar_url && <img src={searchData.avatar_url} alt="avatar" />}
                 <UserName>
                    <div>
                        <Name>{searchData.name}</Name>
                        <Login>@{searchData.login}</Login>
                    </div>
                    <CreateTime>Joined {formatDate(searchData.created_at)}</CreateTime>
                </UserName>
            </UserInfoContainer>
            {searchData.bio && <Bio>{searchData.bio}</Bio>}
            <UserStatistics>
                <div>
                    <p>Repos</p>
                    <span>{searchData.public_repos}</span>
                </div>
                <div>
                    <p>Followers</p>
                    <span>{searchData.followers}</span>
                </div>
                <div>
                    <p>Following</p>
                    <span>{searchData.following}</span>
                </div>
            </UserStatistics>
            <ContactContainer>
                <div>
                     <Location />
                    <ContactText>{searchData.location ? searchData.location : 'Not Available'}</ContactText>
                </div>
                <div>
                     <Website />
                    <GitHubLInk href={searchData.html_url} target="_blank" rel="noreferrer">{searchData.html_url}</GitHubLInk>
                </div>
                <div>
                     <Twitter />
                    <ContactText>{searchData.twitter_username ? searchData.twitter_username : 'Not Available'}</ContactText>
                </div>
                <div>
                     <Company />
                    <ContactText>{searchData.company ? searchData.company : 'Not Available'}</ContactText>
                </div>
            </ContactContainer>
        </Container>
     );
}
 
export default Result;

const Container = styled.div`
  background-color: ${props => props.theme.componentBg};
  transition: background-color 0.5s ease-out;
  box-shadow: ${props => props.theme.componentHhadow};
  border-radius: 15px;
  padding: 32px 24px 48px 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px;
  }
  @media  (min-width: 1024px) {
    padding: 48px;
  }
`

const UserInfoContainer = styled.div`  
    display: flex;
    gap: 19px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
  }
`

const UserName = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.boldColor};

`

const Login = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #0079FF;
`
const CreateTime = styled.span`
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${props => props.theme.toggleColor};
`

const Bio = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${props => props.theme.placeholderColor};
    margin-top: 33px;
`

const UserStatistics = styled.div`
    background-color: ${props => props.theme.bgColor};
    transition: background-color 0.5s ease-out;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 19px 15px;
    margin-top: 23px;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 8px;
    }
    p {
        font-weight: 400;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        color: ${props => props.theme.placeholderColor};

    }
    span {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: ${props => props.theme.boldColor};
    }
`



const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 24px;
    div {
        display: flex;
        gap: 13px;
    }
`

const ContactText =  styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${props => props.theme.placeholderColor};

`
const GitHubLInk = styled.a`
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${props => props.theme.placeholderColor};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

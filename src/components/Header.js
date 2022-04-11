import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg"/>
          <span>HOME</span>
        </a>
        <a>
          <img src="./images/search-icon.svg"/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg"/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="./images/original-icon.svg"/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg"/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="./images/series-icon.svg"/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="./images/profile-img.png" />
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
  margin-left: 25px;


  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #FFF;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s; 
        transform: scaleX(0);
      }
    }

    @media screen and (max-width: 768px) {
      img {
        height: 10px;
      }

      span {
      font-size: 10px;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`
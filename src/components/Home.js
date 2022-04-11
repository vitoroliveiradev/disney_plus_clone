import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies"
import { useEffect } from "react";
import db from "../firebase";

const Home = () => {

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      console.log(snapshot);
    })
  }, [])

  return (
    <Container> 
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  position: relative;
  
  &:before {
    background: url("./images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

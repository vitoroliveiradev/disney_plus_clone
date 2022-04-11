import styled from "styled-components";

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-national.png" alt="" />
      </Wrap>
    </Container>
  )
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  grid-gap: 25px; 
  grid-template-columns: repeat(5, minmax(0, 1fr)) ;
`

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, .1);
  box-shadow: 
    rgb(0 0 0 / 69%) 8px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // wrap:hover
  &:hover {
    box-shadow: 
      rgb(0 0 0 / 80%) 0px 40px 50px -16px
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);
  }
`
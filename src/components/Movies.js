import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
        <Wrap>
          <img src="./images/slider-scale.jpg" alt="Image Content" />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies;

const Container = styled.div`
`

const Content = styled.div`
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr)); 
`

const Wrap = styled.div`
  max-width: 225px;
  min-height: 125px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, .1);
  box-shadow: 
    rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 
      rgb(0 0 0 / 80%) 0px 40px 50px -16px
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8);
  }

`
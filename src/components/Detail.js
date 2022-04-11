import styled from "styled-components";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img 
          src="./images/slider-badag.jpg" alt="Image Background" 
        />
      </Background>
      <ImageTitle>
        <img 
          src="" 
          alt="Aqui vai o título do filme" 
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" alt="Image Button" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" alt="Image Button" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" alt="Group Icon Image"/>
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 - 7m - Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        Assista filmes, séries e Originais exclusivos em até 4 telas ao mesmo tempo. As melhores histórias não acabam. Sempre há algo novo para descobrir. Originais Disney+ Clássicos de sempre. Séries icônicas. Assine agora. Baixe o que preferir. Experimente grátis.
      </Description>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: .8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 60px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, .3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, .2);
  cursor: pointer;
  
  span {
    font-size: 34px;
    color: #FFF;
  }
`

const GroupWatchButton = styled(AddButton)`
  background-color: #000;
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-top: 26px;;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
`
import styled from "styled-components";

import ContainerCard from "../globals/ContainerCard";
import Downloads from "./Downloads";

const Card = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  &.row-reverse {
    flex-direction: row-reverse;
  }
`

const CardTexts = styled.div`
  flex: 0 1 auto;
  height: 100%;
  padding: 0 3rem 0 0;
  width: 52%;
  z-index: 3;
  margin: -5% 0;
`

const CardImage = styled.div`
  margin: 0% -8% 0% 0%;
  overflow: hidden;
  position: relative;

  &.row-reverse {
    margin: 0% 0% 0% -5%;
  }

  img{
    width: 90%;
  }
`

const CardTitle = styled.h1`
  font-size: 3.0rem;
  line-height: 1.1;
  margin-bottom: .5rem;
`

const CardSubtitle = styled.h2`
  font-size: 1.59rem;
  font-weight: 400;
  margin: 0.75em 0 0.25em;
`

function Cards ({title, subtitle, image, row, lastCard}) {
    return (
        <ContainerCard>
            <Card className={row}>
              <CardTexts>
                  <CardTitle>{title}</CardTitle>
                  <CardSubtitle>{subtitle}</CardSubtitle>
              </CardTexts>
              <CardImage className={row}>
                  <img src={image} alt="TV" />
              </CardImage>
              {lastCard === 'yes' ? <Downloads /> : <></>}
            </Card>
        </ContainerCard>
    )
}

export default Cards
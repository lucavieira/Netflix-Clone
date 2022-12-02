import styled from "styled-components";

import Forms from "../globals/Forms";

const MainTexts = styled.div`
    color: #fff;

    padding: 75px 0px;

    font-family: 'Roboto';
    font-weight: 500;

    max-width: 950px;
    width: 100%;
    margin: 0 auto;

    text-align: center;
`

const Title = styled.h1`
    font-size: 3.1rem;

    margin: 0 auto;
    max-width: 640px;
`

const Subtitle = styled.h2`
    font-size: 1.6rem;
    font-weight: 400;

    margin: 1rem auto;
    max-width: 640px;
`

function Texts() {
    return(
        <MainTexts>
            <Title>Filmes, séries e muito mais. Sem limites.</Title>
            <Subtitle>Assista onde quiser. Cancele quando quiser.</Subtitle>
            <Forms />
        </MainTexts>
    )
}

export default Texts
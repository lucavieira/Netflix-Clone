import styled from "styled-components";

import plus from "../../images/plus.svg"

const FaqItems = styled.li`
    font-size: 1.6rem;
    font-weight: 400;
`

const FaqButton = styled.button`
    border: 0;
    margin-bottom: 1px;
    padding: 0.8em 2.2em 0.8em 1.2em;
    position: relative;
    width: 100%;

    background: #303030;
    color: #fff;

    cursor: pointer;

    text-align: left;

    font-size: 1.6rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FaqAnswer = styled.div`
    background: #303030;
    display: block;
    text-align: left;

    &.closed {
        max-height: 0;
        overflow: hidden;
    }
`

const Plus = styled.img`
    width: 6%;
`

const Span = styled.span`
    display: inline-block;
    padding: 1.2em;
`

const openAnswer = (id) => {
    document.getElementById(id).classList.toggle('closed')
}

function FaqItem ({title, answer}) {
    const id = Math.random(0, 1)
    return (
        <FaqItems>
            <FaqButton onClick={() => openAnswer(id)}>
                {title}
                <Plus src={plus} alt="Plus"></Plus>
            </FaqButton>
            <FaqAnswer className="answer closed" id={id}>
                <Span>
                    {answer}
                </Span>
            </FaqAnswer>
        </FaqItems>
    )
}

export default FaqItem
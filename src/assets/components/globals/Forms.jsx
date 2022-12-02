import styled from "styled-components";

import arrow_right from '../../images/arrow_right.svg'

const Form = styled.form`
    max-width: 950px;
    padding-top: 0.85rem;
`

const EmailTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 400;
    margin: 0 auto;
    padding-bottom: 20px;
`

const EmailContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailField = styled.input`
    min-width: 480px;
    min-height: 60px;

    transition: all .3s ease-out;
    
    outline: none;

    border: 0;
    border-bottom: 2px solid lightgray;
    border-radius: 0;

    appearance: none;

    padding-left: 15px;

    &:focus {
        border-bottom: 2px solid #0e0a0a;
    }

    &:focus + label {
        font-size: 13px;
        margin-top: 15px;
        font-weight: 700;
    }
`

const Button = styled.button`
    font-size: 1.6rem;

    min-width: 74px;
    min-height: 60px;

    background-color: #e50914;
    background-image: linear-gradient(180deg,#e50914,#db0510);
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    color: #fff;

    border: 0;
    border-radius: 2px;

    padding: 0 1.2em;

    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 20px;
        transform: translate(30%,30%);
        pointer-events: none;
        background-image: url(${arrow_right});
        background-repeat: no-repeat;
        background-size: 18px;
    }
`

const LabelFloat = styled.div`
    position: relative;
`

const Label = styled.label`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(5%, -70%);
    margin: 34px 0 0 10px;
    color: rgba(1, 1, 1, .6);
    transition: all .3s ease-out;
`

function Forms () {
    return(
        <Form>
            <EmailTitle>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</EmailTitle>
            <EmailContainer>
                <LabelFloat>
                    <EmailField placeholder=""/>
                    <Label>Email address</Label>
                </LabelFloat>
                <Button>Get Started</Button>
            </EmailContainer>
        </Form>
    )
}

export default Forms
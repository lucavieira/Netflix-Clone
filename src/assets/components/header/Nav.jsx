import styled from "styled-components";
import language from '../../images/language.svg'
import arrow_down from '../../images/arrow_down.svg'

const Menu = styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    gap: 32px;
`

const Select = styled.select`
    padding: 10px 28px;

    border: 1px solid #aaa;
    border-radius: 4px;

    appearance: none;

    background-color: rgba(0,0,0,.4);

    color: #fff;

    font-weight: 500;
    font-size: 14px;

    option {
        font-size: 14px;
        font-weight: 500;
    }
`

const Icons = styled.div`
    &:before{
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        transform: translate(40%, 70%);
        background-image: url(${language});
        background-repeat: no-repeat;
        background-size: 16px;
        pointer-events: none;
    }

    &:after {
        content: "";
        position: absolute;
        width: 14px;
        height: 20px;
        transform: translate(-170%, 55%);
        pointer-events: none;
        background-image: url(${arrow_down});
        background-repeat: no-repeat;
        background-size: 16px;
    }
`

const Button = styled.button`
    padding: 7px 17px;

    border: none;
    border-radius: 5px;

    background-color: #e50914;
    color: #fff;

    font-family: 'Roboto', sans-serif;

    font-size: 1rem;
    font-weight: 400;

    cursor: pointer;
`

function Nav() {
    return (
        <Menu>
            <li>
                <Icons>
                    <Select>
                        <option value="pt">Português</option>
                        <option value="en">Inglês</option>
                    </Select>
                </Icons>
            </li>
            <li>
                <Button>Sign In</Button>
            </li>
        </Menu>
    )
}

export default Nav
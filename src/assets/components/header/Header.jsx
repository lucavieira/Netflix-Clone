import styled from "styled-components";

import logo from '../../images/logo_netflix.svg'

import Background from './Background'
import Texts from './Texts'
import Logo from './Logo'
import Head from './Head'
import Nav from './Nav'

const Heading = styled.div`
    border-bottom: 8px solid #222;
    padding-bottom: 95px;
`

function Header () {
    return (
        <Heading>
            <Background />
            <Head>
            <Logo src={logo} alt="Logo Netflix" />
                <Nav />
            </Head>
            <Texts />
        </Heading>
    )
}

export default Header
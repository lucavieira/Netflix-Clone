import styled from 'styled-components'

import Cards from './Cards'

import tv from '../../images/tv.png'
import devices from '../../images/devices.png'
import kids from '../../images/kids.png'
import phone from '../../images/phone.jpg'
import Downloads from './Downloads'
import CardFaq from './CardFaq'

const Main = styled.main`
  width: 100%;

  background-color: #000;
  color: #fff;

  font-family: 'Roboto';
`

function Body () {
  return (
    <Main>
      <Cards 
        title="Enjoy on your TV."
        subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image={tv}
      />
      <Cards 
        title="Watch everywhere."
        subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        image={devices}
        row="row-reverse"
      />
      <Cards 
        title="Create profiles for kids."
        subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        image={kids}
      />
      <Cards 
        title="Download your shows to watch offline."
        subtitle="Available on all plans except Basic with ads."
        image={phone}
        row="row-reverse"
        lastCard="yes"
      />
      <CardFaq />
    </Main>
  )
}

export default Body
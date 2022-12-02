import styled from "styled-components";

import downloadImage from '../../images/download_image.png'
import downloadIcon from '../../images/download_icon.gif'

const Download = styled.div`
  align-items: center;
  background: #000;
  border: 2px solid hsla(0,0%,100%,.25);
  border-radius: 0.75em;
  box-shadow: 0 0 2em 0 #000;
  display: flex;
  left: 25%;
  margin: 0 auto;
  min-width: 15em;
  padding: 0.25em 0.65em;
  position: absolute;
  transform: translate(-52%,125%);
  width: 25%;
`

const DownloadImage = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0 1em 0 0;
  width: 20%;
  img {
    width: 100%;
  }
`

const DownloadTexts = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0.3em 0;
`

const Name = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: #fff;
`

const Text = styled.div`
  font-size: .9em;
  font-weight: 400;
  color: #0071eb;
`

const DownloadAnimation = styled.div`
  background: url(${downloadIcon});
  background-size: 100%;
  content: "";
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
  height: 3em;
  outline: 2px solid #000;
  outline-offset: -2px;
  width: 3em;
`

function Downloads () {
    return (
        <Download>
            <DownloadImage>
                <img src={downloadImage} alt="Download Serie" />
            </DownloadImage>
                <DownloadTexts>
                    <Name>Stranger Things</Name>
                    <Text>Downloading...</Text>
                </DownloadTexts>
            <DownloadAnimation />
        </Download>
    )
}

export default Downloads
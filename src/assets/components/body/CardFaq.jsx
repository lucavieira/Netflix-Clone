import styled from "styled-components";

import Forms from "../globals/Forms";
import ContainerCard from "../globals/ContainerCard";

import FaqItem from "./FaqItem";

const FaqCard = styled.div`
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    font-size: 1.6rem;
`

const FaqCardTitle = styled.h1``

const FaqList = styled.ul`
    max-width: 815px;
    width: 75%;

    margin: 2em auto;

    display: flex;
    flex-direction: column;
    gap: 8px;

    list-style: none;
`

function CardFaq () {
    return (
        <ContainerCard>
            <FaqCard>
                <FaqCardTitle>Frequently Asked Questions</FaqCardTitle>
                <FaqList>
                    <br />
                    <FaqItem 
                        title="What is Netflix?"
                        answer={
                            <>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            <br /> <br />
                            You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</>
                        }
                    />
                    <FaqItem 
                        title="How much does Netflix cost?"
                        answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL18.90 to BRL55.90 a month. No extra costs, no contracts."
                    />
                    <FaqItem 
                        title="What's different on Basic with ads?"
                        answer="Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply."
                    />
                    <FaqItem 
                        title="Where can I watch?"
                        answer={
                            <>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br/><br/>
                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</>
                        }
                    />
                    <FaqItem 
                        title="How do I cancel?"
                        answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                    />
                    <FaqItem 
                        title="What can I watch on Netflix?"
                        answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                    />
                    <FaqItem 
                        title="Is Netflix good for kids?"
                        answer={
                            <>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            <br /><br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</>
                        }
                    />
                </FaqList>
                <Forms />
            </FaqCard>
        </ContainerCard>
    )
}

export default CardFaq
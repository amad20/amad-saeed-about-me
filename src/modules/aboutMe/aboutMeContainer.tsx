import { AboutMe } from "./AboutMe"


export const AboutMeContainer = () => {
    const posts = [
        {
            title: 'About Me',
            imgsrc: '',
            description: 'I chose computer science because I had an interest in technology when I was younger and saw how many different fields are in need of computer science majors. A fun fact is I am a big basketball fan, my favorite team is the Boston Celtics and my family is from Kurdistan.',
            
        },
    ]
    return (
        <>
        {
            posts.map((post, index) => <AboutMe key={index} {...post} />)
        }
        </>
    )
}

import { Hobby } from "./Hobby"
import carSrc from './typer.jpg'
import ballSrc from './jays.jpg'

export const HobbyContainer = () => {
    const posts = [
        {
            title: 'Basketball',
            description: 'I like to play and watch basketball',
            imgsrc: ballSrc
        },
        {
            title: 'Cars',
            description: 'I am interested in Cars',
            imgsrc: carSrc
        }
    ]
    return (
        <>
        {
            posts.map((post, index) => <Hobby key={index} {...post} />)
        }
        </>
    )
}
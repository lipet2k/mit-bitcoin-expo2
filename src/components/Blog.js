import stonks from "../images/stonks.jpeg";
import {Link} from 'react-router-dom';

import BlogPost from './BlogPost';

export default function Blog({upload}) {
    return (
        <div className="flex flex-col">
            <h1 className="dark:text-yellow-50 text-3xl gill-sans-font mx-5 mt-5">How to invest in Blockchain</h1>

            <div className="mt-5 mx-5 flex">

                <LargePost heading="stonks" image_path={stonks} alt_text="stonks" content="Block Chain Technology" link="/blog" />

            </div>

            <div className="mt-5 mx-5 flex justify-evenly">

            {upload.map((post, index) => (
            <Post key={index} alt_text={post.page_name} heading="Some Heading" image_path={stonks} content="Block Chain Technology" link={`/${post.page_name}`} />
          ))}
            </div>

        </div>


    )
}

const LargePost = ({ heading, image_path, content, alt_text, link }) => {
    return (
        <Link className="large-post" to={link}>
        <div className="large-post flex">
            <div className="large-post-container flex flex-col mx-5">
                <img src={image_path} alt={alt_text} width="200" height="100" />
                <p className=" dark:text-yellow-50 small-font gill-sans-font">copyright</p>
            </div>
            <div className="post-text flex flex-col">
                
                <h1 className="dark:text-yellow-50 large-font gill-sans-font">{heading}</h1>
                <p className="dark:text-yellow-50 medium-font gill-sans-font">{content}</p>
            </div>
            

        </div>
        </Link>
    )
}

const Post = ({ heading, image_path, content, alt_text, link }) => {
    return (
        <Link className="post" to={link}>
        <div className="post flex flex-col">
            <img src={image_path} alt={alt_text} width="100" height="50" />
            <h5 className="dark:text-yellow-50 medium-font gill-sans-font">{heading}</h5>
            <p className="dark:text-yellow-50 gill-sans-font small-font">{content}</p>

        </div>
        </Link>

    )
}

LargePost.defaultProps = {
    title: 'NULL HEADING',
    image_path: "",
    content: "Lorem ipsum dolor sit amet.",
    alt_text: "Lorem ipsum dolor sit amet."
}

Post.defaultProps = {
    title: 'NULL HEADING',
    image_path: "",
    content: "Lorem ipsum dolor sit amet.",
    alt_text: "Lorem ipsum dolor sit amet."
}


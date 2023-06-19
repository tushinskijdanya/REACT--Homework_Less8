import { useParams } from "react-router-dom";
import { recipes } from "../data/kuzya`s_recipes";

function BlogPost () {
    const {id} = useParams();
    const post = recipes[id - 1];

    return(
        <div className="container">
            <div className="post-page_content">
                <p className="post-title">{post.title}</p>
                <div className="post-image"><img className="postImage" src={post.image}/></div>
                <div className="post-body_content"><p className="post-body">{post.blog}</p></div>
            </div>
        </div>
    )
}

export default BlogPost;
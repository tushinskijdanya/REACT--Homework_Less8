import { Link } from "react-router-dom";
import { recipes } from "../data/kuzya`s_recipes";

function Blog () {
    return(
        <div className="container">
            <div className="blog-main_content">
                {
                    recipes.map((post, idx) => {
                        return(
                        <div>
                            <div className="blog_post" key={idx}>
                                <div className="blog_image"><img className="blog_image" src={post.image}/></div>
                                <div className="blog_content">
                                    <Link className="blog-title" to={`/blog/${post.id}`}>{post.title}</Link>
                                    <p className="blog-stage">{post.stage}</p>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog;
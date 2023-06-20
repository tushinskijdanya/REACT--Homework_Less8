import { useNavigate } from "react-router-dom";
import { recipes } from "../data/kuzya`s_recipes";

function Blog () {
    const navigate = useNavigate();

    const toPostPage = (post) => navigate(`/blog/${post.id}`, {state: {title: post.title, image: post.image, blog: post.blog}});
    
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
                                    <span onClick={() => toPostPage (post)} className="blog-title">{post.title}</span>
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
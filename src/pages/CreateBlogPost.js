import { useContext, useState } from "react";
import { PostContext } from "../App";
import { screensavers } from "../data/screensavers";

function CreatePost () {
    const { posts, setPosts } = useContext(PostContext);
    const [newPost, setNewPost] = useState({
        image: '',
        title: '',
        stage: '',
        blog: '',
        id: posts.lenght + 1
    });
    const [choosePage, setChoosePage] = useState(false);
    const [idx, setIdx] = useState(0);

    function chooseAvatar (e) {
        e.preventDefault();
        setChoosePage(true);
    }

    function toBack(e) {
        e.preventDefault();
        if (idx === 0) {
            setIdx(11);
        } else {
            setIdx((prev) => {
                prev = prev - 1;
                return prev;
            }
            )
        }
    }

    function toNext(e) {
        e.preventDefault();
        if (idx === 11) {
            setIdx(0);
        } else {
            setIdx((prev) => {
                prev = prev + 1;
                return prev;
            }
            )
        }
    }

    function thisAvatar(e) {
        e.preventDefault();
        setChoosePage(false);

    }

    function sendPost (e) {
        e.preventDefault();
    }

    function changeInput(e) {
        const name = e.target.name;
        setNewPost(prev => ({...prev, [name]: e.target.value}));
    }

    return(
        <div className="container">
            <div className="create-post">
                <p className="create-post_title">Заполните пожалуйста форму, чтобы разместить в вашем блоге новый рецепт!</p>
                <form className="createForm">
                    <input onChange={(e) => changeInput(e)} name="title" placeholder="Название рецепта" value={newPost.title}/>
                    <input onChange={(e) => changeInput(e)} name="stage" placeholder="Краткое описание" value={newPost.stage}/>
                    <input onChange={(e) => changeInput(e)} name="blog" placeholder="Ваш рецепт" value={newPost.blog}/>
                    <button onClick={chooseAvatar}>ВЫБРАТЬ ЗАСТАВКУ</button>
                    <div className={choosePage ? `choosepage-content` : `none`}>
                        {
                            <div className="choosepage-img">
                                <button onClick={toBack}>назад</button>
                                <img src={screensavers[idx].image}/>
                                <button onClick={toNext}>вперёд</button>
                            </div>
                        }
                        <button onClick={thisAvatar}>ВЫБРАТЬ</button>
                    </div>
                    <button onClick={sendPost}>СОХРАНИТЬ!</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;
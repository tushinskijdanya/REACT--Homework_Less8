import Layout from "./layouts/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoneFound from "./pages/NoneFound";
import Blog from "./pages/Blog";
import AboutMe from "./pages/About";
import BlogPost from "./pages/BlogPostPage";
import CreatePost from "./pages/CreateBlogPost";
import { createContext, useState } from "react";
import { recipes } from "./data/kuzya`s_recipes";


function App() {
  const [posts, setPosts] = useState(recipes);

  return (
    <>
    <PostContext.Provider value={{posts, setPosts}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="*" element={<NoneFound />} />
        </Route>
      </Routes>
    </PostContext.Provider>
    </>
  );
}

export const PostContext = createContext('default');
export default App;

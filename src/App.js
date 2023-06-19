import Layout from "./layouts/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoneFound from "./pages/NoneFound";
import About_me from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost-page";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<About_me />} />
        <Route path="*" element={<NoneFound />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;

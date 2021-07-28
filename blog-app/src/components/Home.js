
import { useState, useEffect } from "react"
import Bloglist from "./Bloglist"

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
      setTimeout(() =>{
        fetch("http://localhost:3000/blogs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
            setIsPending(false)
        })
      }, 2000)
    }, [])

    // const deleteBlog = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs([...newBlogs])
    // }

    return (
        <div className="home">

            {isPending && <div> Loading ... </div>}

            {blogs && <Bloglist blogs={blogs} />}

        </div>
    );
}

export default Home;
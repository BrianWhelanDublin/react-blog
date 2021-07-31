import { useState } from "react"
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        setIsPending(true);

        fetch("http://localhost:3000/blogs/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            history.push("/")
        });    
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="title">Blog Title</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="body">Blog Body</label>
                <textarea
                    name="body"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label htmlFor="author">Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Post</button>}
                {isPending && <button disabled>Adding Post...</button>}
            </form>
        </div>
    )
}

export default Create

import Bloglist from "./Bloglist"
import useFetch from "../customhooks/useFetch";

const Home = () => {


    const {data:blogs, isPending, error} = useFetch("http://localhost:3000/blogs")
    return (
        <div className="home">

            {error && <div>{error}</div>}

            {isPending && <div> Loading ... </div>}

            {blogs && <Bloglist blogs={blogs} />}

        </div>
    );
}

export default Home;
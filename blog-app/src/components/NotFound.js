import { Link } from "react-router-dom"

const NotFound = () => {
    return (
      <div className="not-found">
          <h2>Sorry</h2>
          <p>Not page found 404</p>
          <Link to="/">Back to home...</Link>
      </div>
    )
}

export default NotFound

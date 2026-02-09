import react from 'react'
import "./Error404.css"


const Error404 = () => {
  return (
  <div className="container">

<h1>404</h1>
  <p>Oops! Page not found.</p>

     <a href="/" >home</a>
      <a href="/about">About</a>
      <a href="/signup">signup</a>
      <a href="/contact">Contact</a>
    </div>
      
  )
}

export default Error404
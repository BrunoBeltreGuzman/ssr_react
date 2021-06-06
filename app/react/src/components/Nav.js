import React from "react";
import { Link } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export default function App() {
       React.useEffect(() => {
              nprogress.start();
              nprogress.done();
       }, []);
       return (
              <div className="container bg-light">
                     <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                   <Link to="/" className="navbar-brand">
                                          Home
                                   </Link>
                                   <button
                                          className="navbar-toggler"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#navbarNavAltMarkup"
                                          aria-controls="navbarNavAltMarkup"
                                          aria-expanded="false"
                                          aria-label="Toggle navigation"
                                   >
                                          <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div
                                          className="collapse navbar-collapse"
                                          id="navbarNavAltMarkup"
                                   >
                                          <div className="navbar-nav">
                                                 <Link
                                                        to="/posts"
                                                        className="nav-link active"
                                                 >
                                                        Posts
                                                 </Link>
                                                 <Link
                                                        to="/post/1"
                                                        className="nav-link active"
                                                 >
                                                        Post[1]
                                                 </Link>{" "}
                                          </div>
                                   </div>
                            </div>
                     </nav>
              </div>
       );
}

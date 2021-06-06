import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Home() {
       return (
              <div>
                     <Nav></Nav>

                     <br />
                     <br />
                     <br />

                     <div className="container">
                            <h1>List Posts</h1>
                            <hr />
                            <Link to="/posts" className="a">
                                   all post
                            </Link>
                     </div>
              </div>
       );
}

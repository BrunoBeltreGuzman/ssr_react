import React from "react";
import Link from "next/link";

export default function Nav() {
       return (
              <div className="container bg-light">
                     <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                   <Link href="/">
                                          <a className="navbar-brand">Home</a>
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
                                                 <Link href="/posts">
                                                        <a className="nav-link active">
                                                               Posts
                                                        </a>
                                                 </Link>
                                                 <Link href="/post/1">
                                                        <a className="nav-link active">
                                                               Post[1]
                                                        </a>
                                                 </Link>
                                          </div>
                                   </div>
                            </div>
                     </nav>
              </div>
       );
}

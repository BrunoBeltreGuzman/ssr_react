import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

export default function Routers() {
       return (
              <BrowserRouter>
                     <Route exact path="/" component={Home} />
                     <Route path="/posts" component={Posts} />
                     <Route path="/post/:post" component={Post} />
              </BrowserRouter>
       );
}

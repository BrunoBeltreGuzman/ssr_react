import React from "react";
import Link from "next/link";
import Layout from "../src/layout/Layout";

export default function Index() {
       return (
              <Layout>
                     <br />
                     <br />
                     <br />

                     <div className="container">
                            <h1>List Posts</h1>
                            <hr />
                            <Link href="/posts">
                                   <a className="a">all post</a>
                            </Link>
                     </div>
              </Layout>
       );
}

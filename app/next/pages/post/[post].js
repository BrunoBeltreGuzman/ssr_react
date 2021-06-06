import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../src/layout/Layout";

export default function getFetchByID(props) {
       const router = useRouter();
       const { post } = router.query;
       //console.log(post);

       const [data, setData] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState([]);

       useEffect(
              async function () {
                     try {
                            setLoading(true);
                            const url =
                                   "https://jsonplaceholder.typicode.com/posts/" +
                                   post;
                            const response = await fetch(url);
                            const json = await response.json();
                            setData(json);
                            console.log(json);
                     } catch (error) {
                            setError(error);
                            setLoading(false);
                     }
              },
              [post]
       );

       if (data) {
              return (
                     <Layout>
                            <div>
                                   <br />
                                   <br />
                                   <br />

                                   <div className="container">
                                          <div className="card bg-dark text-white p-3">
                                                 <div className="card-body">
                                                        <h5>{data.title}</h5>
                                                        <p>{data.body}</p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </Layout>
              );
       }

       if (loading) {
              return (
                     <Layout>
                            <div>
                                   <br />
                                   <br />
                                   <br />
                                   <div className="container">Loading...</div>
                            </div>
                     </Layout>
              );
       }

       if (error) {
              return (
                     <Layout>
                            <div>
                                   <br />
                                   <br />
                                   <br />
                                   <div className="container">
                                          {JSON.stringify(error)}
                                   </div>
                            </div>
                     </Layout>
              );
       }
}

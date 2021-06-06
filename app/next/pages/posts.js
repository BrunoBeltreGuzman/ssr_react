import React, { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import User from "../src/components/User";

export default function Posts() {
       const [data, setData] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState([]);

       useEffect(async function () {
              try {
                     setLoading(true);
                     const url = "https://jsonplaceholder.typicode.com/posts";
                     const response = await fetch(url);
                     const json = await response.json();
                     setData(json);
                     console.log(json);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);

       if (data) {
              return (
                     <Layout>
                            <div>
                                   <br />
                                   <br />
                                   <br />

                                   <div className="container">
                                          {data.map(function (user, index) {
                                                 return (
                                                        <User
                                                               data={user}
                                                        ></User>
                                                 );
                                          })}
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

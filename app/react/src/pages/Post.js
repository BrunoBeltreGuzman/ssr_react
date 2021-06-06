import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Post(props) {
       const { post } = useParams();

       const [data, setData] = useState([]);
       const [loading, setLoading] = useState(true);
       const [error, setError] = useState([]);

       useEffect(async function () {
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
       }, []);

       if (data) {
              return (
                     <div>
                            <Nav></Nav>

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
              );
       }

       if (loading) {
              return (
                     <div>
                            <Nav></Nav>

                            <br />
                            <br />
                            <br />
                            <div className="container">Loading...</div>
                     </div>
              );
       }

       if (error) {
              return (
                     <div>
                            <Nav></Nav>

                            <br />
                            <br />
                            <br />
                            <div className="container">
                                   {JSON.stringify(error)}
                            </div>
                     </div>
              );
       }
}

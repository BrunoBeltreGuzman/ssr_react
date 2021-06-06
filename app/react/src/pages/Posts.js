import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { getAll } from "../tools/fechdata";
import User from "../components/User";

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
                     <div>
                            <Nav></Nav>

                            <br />
                            <br />
                            <br />

                            <div className="container">
                                   {data.map(function (user, index) {
                                          return <User data={user}></User>;
                                   })}
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

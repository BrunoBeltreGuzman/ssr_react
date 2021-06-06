import React from "react";

function redirect(id) {
       window.location.href = "/post/" + id;
}

export default function App(props) {
       const data = props.data;
       return (
              <div
                     type="button"
                     onClick={function (event) {
                            event.preventDefault();
                            redirect(data.id);
                     }}
              >
                     <div className="card p-3">
                            <div className="card-body">
                                   <h5>{data.title}</h5>
                                   <p>{data.body}</p>
                            </div>
                     </div>
                     <hr />
                     <br /> <br />
              </div>
       );
}

  
import React, { Fragment, useState } from "react";

const AddClient = () => {
    const [name, setName] = useState("");
  
    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { name };
        //proxy is only use in development so it will be ignored in production
        //so if there is no http://localhost:5000 then by default it is going to use heroku domain
        //remember this heroku app is just our server serving the build static content and also holding the restful api
  
        //https://pern-todo-app-demo.herokuapp.com/todos
        const response = await fetch("/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
  
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };
    return (
      <Fragment>
        <h1 className="text-center my-5">Client Details</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </Fragment>
    );
  };
  
  export default AddClient;
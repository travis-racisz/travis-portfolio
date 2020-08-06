import React from "react";
import "./styles.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <>
        <div className = "contact-form-container">
        <h1 id = "contact">Contact me!</h1>
        <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xdowbved"
            method="POST"
            className = "contact-form"
        >
            <div className = "contact-form-name">
                <label>First Name:</label> 
                <input placeholder = " Enter your First Name" className = "contact-form-name" type="text" name="firstName" />
                <label>Last Name:</label> 
                <input placeholder = " Enter your Last Name"className = "contact-form-name" type="text" name="lastName" />
            
            
            <label>Email:</label>
            <input placeholder = "Enter your Email" type="email" name="email" />
            <label>Message:</label>
            <textarea type="text" name="message" />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
        </form>
      </div>
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
import React from "react";

class MyFrom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(e) {
    e.preventDefault();

    const message = `Name : ${this.state.name} Email: ${this.state.email} Gender: ${this.state.gender}`;

    alert(message);
  }

  onNameChangeEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onEmailChangeEventHandler(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onGenderChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        gender: e.target.value,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />
          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default MyFrom;

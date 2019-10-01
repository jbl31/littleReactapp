import React, { Component } from "react";

class Client extends Component {
  render() {
    //const details = this.props.details;
    //const onDelete = this.props.onDelete;
    const { details, onDelete } = this.props;

    return (
      <li>
        {details.nom}{" "}
        <button onClick={() => this.props.onDelete(details.id)}>X</button>
      </li>
    );
  }
}

export default Client;

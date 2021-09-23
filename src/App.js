/*import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
 //   event.preventDefault();
 //   const { name, message } = this.state;
 //   await axios.get(
 //     'https://1yzm381k7e.execute-api.us-west-2.amazonaws.com/dev',
 //     { key1: `${name}, ${message}` }
 //   );
 await axios
      .get('https://1yzm381k7e.execute-api.us-west-2.amazonaws.com/dev')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
	  
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
		  
        </form>
      </div>
    );
  }
}*/
/*
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function App() {
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};

return (
	<div stlye={{}}>
	<h4>How to create Dialog Box in ReactJS?</h4>
	<Button variant="outlined" color="primary"
			onClick={handleClickToOpen}>
		Open Demo Dialog
	</Button>
	<Dialog open={open} onClose={handleToClose}>
		<DialogTitle>{"How are you?"}</DialogTitle>
		<DialogContent>
		<DialogContentText>
			I am Good, Hope the same for you!
		</DialogContentText>
		</DialogContent>
		<DialogActions>
		<Button onClick={handleToClose}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
	</Dialog>
	</div>
);
}
*/

import React, { Component } from 'react';
import './App.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://1yzm381k7e.execute-api.us-west-2.amazonaws.com/dev');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					{dataSource.Items.map(item => (
						<div key={item.ID}>
							<h1>{item.ID}</h1>
							<li>{item.Name}</li>
							<li>{item.Message}</li>
						</div>
					))}
				</div>
			);
		}
	}
}
export default App;
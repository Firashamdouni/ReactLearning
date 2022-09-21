import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Segment } from "semantic-ui-react";

class InputSearch extends React.Component {
	state = { term: "" };
	// onFormSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(this.state.term);
	// };
	/*legacy binding*/
	// constructor(props) {
	// 	this.onSubmitForm = this.bind.onSubmitForm();
	// }

	onSubmitForm = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<Segment>
				<Form className="ui  form " onSubmit={this.onSubmitForm}>
					<FormGroup>
						<Label for="exampleEmail" sm={2} tag="h1" size="lg">
							Image Search
						</Label>
						<Col sm={12}>
							<Input
								onChange={(event) =>
									this.setState({ term: event.target.value })
								}
								value={this.state.term}
							/>
						</Col>
					</FormGroup>
				</Form>
			</Segment>
		);
	}
}

export default InputSearch;

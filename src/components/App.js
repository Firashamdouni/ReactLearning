import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import InputSearch from "./InputSearch";
import ListeItem from "./ListItem";
import instance from "../api/unsplash";
class App extends React.Component {
	state = {
		images: [],
	};
	onSearchSubmit = async (term) => {
		const response = await instance.get("/search/photos", {
			params: {
				query: term,
			},
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<Container>
				<Row>
					<div className="my-3">
						<InputSearch onSubmit={this.onSearchSubmit} />
						found: {this.state.images.length}
						<ListeItem data={this.state.images} />
					</div>
				</Row>
			</Container>
		);
	}
}

export default App;

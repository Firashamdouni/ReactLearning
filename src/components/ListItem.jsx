import React from "react";

function ListItem({ data }) {
	const images = data.map(({ description, id, urls }) => {
		return <img src={urls.small} key={id} alt={description} />;
	});

	return <div>{images}</div>;
}

export default ListItem;

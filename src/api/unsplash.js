import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.unsplash.com",
	timeout: 1000,
	headers: {
		Authorization: "Client-ID 0HmqKK05kP4H7lYceFsP24mxxD7flWVZACLclCK6jJM",
	},
});

export default instance;

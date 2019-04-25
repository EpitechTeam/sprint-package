export async function me (req, res) {
	let body = {
		data : "hello"
	}

	res.json({body})
};

function getFile(file) {
	return new Promise(function (resolve) {
		fakeAjax(file, resolve);
	});
}

async function loadFiles(files) {
	// request all files concurrently
	// print in order, sequentially
	const [f1, f2, f3] = await Promise.all(files.map((file) => getFile(file)));
	console.log(f1);
	console.log(f2);
	console.log(f3);
}

loadFiles(["file1", "file2", "file3"]);

// **************************************

function fakeAjax(url, cb) {
	var fake_responses = {
		file1: "The first text",
		file2: "The middle text",
		file3: "The last text",
	};
	var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function () {
		cb(fake_responses[url]);
	}, randomDelay);
}

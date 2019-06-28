// Basic syntax
let createDog = name => {
	let defineBreed = breed => {
		return {
			name: name,
			breed: breed
		};
	}
	return defineBreed;
}

let fluffykins = createDog('fluffykins');
let goldenRetriever = fluffykins('golden retriever')
console.log(goldenRetriever);
// Alternatively:
	// let fluffykins = createDog('fluffykins')('golden retriever');
	// console.log(fluffykins);

// Currying
let createDog = name =>
					breed => ({
						name: name,
						breed: breed
					});
let fluffykins = createDog('fluffykins');
let goldenRetriever = fluffykins('golden retriever');
console.log(goldenRetriever);
// Alternatively:
	// let fluffykins = createDog('fluffykins')('golden retriever');
	// console.log(fluffykins);


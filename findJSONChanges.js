// find differences in second of two JSON objects

let obj1 = {
  "first": "Adam",
  "last": "Wallis",
  "address": {
    "street" : "1290 Briarbrook",
    "city" : "Wheaton"
  }
}
let obj2 = {
  "first": "Adam",
  "last": "Wallis",
  "address": {
    "street" : "1295 Briarbrook",
    "city" : "Wheaton"
  }
}

diff = (obj1, obj2) => {
	const delta = {};
	if (Object.is(obj1, obj2)){
		return undefined
	}
	if (!obj2 || typeof obj2 !== 'object'){
		return obj2
	}
	Object.keys(obj1 || {}).concat(Object.keys(obj2) || {}).forEach(key => {
		if (obj2[key] !== obj1[key] && !Object.is(obj1[key],obj2[key])){
			delta[key]= obj2[key];
		}
		if (typeof obj2[key] === 'object' && typeof obj1[key] === 'object'){
			const value = diff(obj1[key], obj2[key]);
			if (value !== undefined) {
				delta[key] = value;
			}
		}
	});
	return delta
}

	console.log("delta", diff(obj1, obj2));

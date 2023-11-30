export default function analyzeArray(array) {
	const average = () => {
		let sum = 0;
		array.forEach((element) => {
			sum += element;
		});
		return sum / array.length;
	};

	const length = () => array.length;

	const max = () => {
		let maximum = 0;
		array.forEach((element) => {
			if (element > maximum) maximum = element;
		});
		return maximum;
	};

	const min = () => {
		let minimum = array[0];
		array.forEach((element) => {
			if (element < minimum) minimum = element;
		});
		return minimum;
	};

	return {
		average: average(array),
		length: length(array),
		max: max(array),
		min: min(array),
	};
}

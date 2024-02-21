import { tabular } from "../data";
export const extendedContent = (item) => {
	let array = [];
	tabular?.forEach((cell) => {
		if (item?.extend === true && item?.key === cell?.parent) {
			array?.push(cell);
		}
	});
	return array;
};

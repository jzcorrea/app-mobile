import accounting from 'accounting';

export default {

	formatMoney(value) {

		if (value === null) {

			value = 0;
		}

		return accounting.formatMoney(value, "R$ ", 2, ".", ",");
	} 
};
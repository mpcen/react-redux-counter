export const COUNT_INCREMENT = 'COUNT_INCREMENT';
export const COUNT_DECREMENT = 'COUNT_DECREMENT';

export function incrementCounter() {
	return {
		type: COUNT_INCREMENT,	
	}
}

export function decrementCounter() {
	return {
		type: COUNT_DECREMENT		
	}
}
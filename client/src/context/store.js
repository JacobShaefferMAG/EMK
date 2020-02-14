import React from 'react';

export const values = {
	a: 'a',
	b: 'b'
}

export const Store = React.createContext({
	value: values.a,
	toggleValue: () => {}
});
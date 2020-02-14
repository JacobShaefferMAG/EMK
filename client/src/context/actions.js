
export const toggleValue = () => {
	this.setState(state => ({
		value: state.value === values.a ? values.b : values.a
	}))
}

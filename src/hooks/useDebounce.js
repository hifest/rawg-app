import React from 'react'
export default function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = React.useState(value)

	React.useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay || 500)

		return () => {
			clearTimeout(handler)
		}
	}, [value]) // eslint-disable-line react-hooks/exhaustive-deps

	return debouncedValue
}

import { useEffect, useState } from 'react'
export default function useScroll(ref) {
	const [limit, setLimit] = useState(2)
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const [entry] = entries
			if (entry.isIntersecting) {
				setLimit(prev => prev + 6)
			}
		})
		observer.observe(ref.current)
	}, [ref])
	return limit
}

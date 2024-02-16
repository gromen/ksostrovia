export function formatDate(date: Date | number | string) {
	const parsedDate = new Date(date)
	if (!parsedDate) throw new Error('Invalid date')
	return new Intl.DateTimeFormat('pl-PL').format(parsedDate)
}

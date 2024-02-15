export function formatDate(date: Date | number) {
	return new Intl.DateTimeFormat('pl-PL').format(new Date(date))
}

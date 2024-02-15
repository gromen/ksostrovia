export function formatDate(date: Date | number | string) {
	return new Intl.DateTimeFormat('pl-PL').format(new Date(date))
}

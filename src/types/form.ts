export type WithFormProps<T> = T&{
	text?: string,
	error?: string,
	id: string,
	onChangeText: (value: unknown) => void,
}

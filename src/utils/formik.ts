import { FormikErrors, FormikTouched } from 'formik/dist/types'

export const showError =
	<T>(errors: FormikErrors<T>, touched: FormikTouched<T>) =>
		(fieldName: keyof T): string =>
			errors[fieldName] && touched[fieldName] ? (errors[fieldName] as string) : ''

export const formFieldProps =
	<T>(errors: FormikErrors<T>, values: T, setFieldError?: CallableFunction, setFieldValue?: CallableFunction) =>
		(fieldName: keyof T) => {
			const setValue = (value: unknown) => {
				setFieldValue?.(fieldName, value)
				setFieldError?.(fieldName, '')
			}
			
			return {
				text: values[fieldName],
				error: errors[fieldName],
				id: fieldName,
				name: fieldName,
				onChangeText: setValue,
			}
		}

export const formikProps = {
	validateOnChange: false,
	validateOnBlur: false,
	validateOnMount: false,
	enableReinitialize: true,
}

import {WithFormProps} from "@/types/form";
import {useMemo} from "react";

export type FormProps = {
	error?: string,
	text?: string,
}
export const useFormClasses = ({ error, text }: FormProps) => {
	const borderClass = useMemo(() => {
		if(error) {
			return 'border-red-500'
		}
		return 'border-[#33353F]'
	}, [error])
	const labelClass = useMemo(() => {
		if(error) {
			return 'text-red-500'
		}
		return 'text-white'
	}, [error])
	
	// return 'border-red-500'
	return {borderClass, labelClass}
}

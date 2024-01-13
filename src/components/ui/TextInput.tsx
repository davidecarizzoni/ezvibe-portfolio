"use client";

import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {WithFormProps} from "@/types/form";
import {useFormClasses} from "@/hooks/useFormClasses";
import {clsx} from "clsx";

type BaseInputType = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value' & 'onChange'>

export type TextInputProps = WithFormProps<BaseInputType & {
	label?: string;
}>

export const TextInput = ({ text,error, onChangeText, label, ...rest }: TextInputProps) => {
	const { name } = rest
	const {borderClass, labelClass} = useFormClasses({ error })
	return (
		<div className="mb-6">
			<label
				htmlFor={name}
				className={clsx("block mb-2 text-sm font-medium",labelClass)}
				style={{
					color: error ? 'red':  undefined
				}}
			>
				{label}
			</label>
			<input
				name={name}
				type="email"
				className={clsx("bg-[#18191E] outline-0 border placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5")}
				style={{
					borderColor: error ? 'red':  undefined
				}}
				value={text}
				onChange={(e) => onChangeText(e.target.value)}
				{...rest}
			/>
		</div>
	)
}

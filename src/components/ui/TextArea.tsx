"use client";

import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {WithFormProps} from "@/types/form";

type BaseTextArea = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'value' & 'onChange'>

export type TextAreaProps = WithFormProps<BaseTextArea & {
	label?: string;
}>

export const TextArea = ({ text, error, onChangeText, label, ...rest }: TextAreaProps) => {
	const { name } = rest
	return (
		<div className="mb-6">
			<label
				htmlFor={name}
				className="text-white block mb-2 text-sm font-medium"
			>
				{label}
			</label>
			<textarea
				name={name}
				className="resize-none bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
				value={text}
				onChange={(e) => onChangeText(e.target.value)}
				{...rest}
			/>
		</div>
	)
}

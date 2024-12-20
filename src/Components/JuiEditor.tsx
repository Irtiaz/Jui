import { Editor } from "@/Components/Editor";
import {CSSProperties} from "react";

interface Props {
	defaultCode: string;
	style?: CSSProperties;
	padding?: number;
	onCodeChange: (code: string) => void;
	disabled?: boolean;
}

export const JuiEditor: React.FC<Props> = ({ defaultCode, style, padding, onCodeChange, disabled }) => {
	const keywords = [
		"jotokkhon",
		"thake",
		"totokkhon",
		"koro",
		"jodi",
		"hoy",
		"taile",
		"noile",
		"ar",
		"er",
	];

	const operators = [
		"poro",
		"likho",
		"othoba",
		"ebong",
		"choto",
		"soman",
		"boro",
		"+",
		"-",
		"*",
		"/",
		"vagshesh",
		"na",
	];

	const delimeters = [
		"[", "(", ")", "]"
	];

	const styleDecider: (token: string) => CSSProperties | undefined = (word: string) => {

		if (keywords.includes(word)) return {
			color: "#d19a66",
			fontWeight: "bold"
		};

		if (operators.includes(word)) return {
			color: "#61afef"
		};

		if (delimeters.includes(word)) return {
			color: "#e06c75"
		};

		const numericMatch = word.match(/\d+/);
		if (numericMatch && numericMatch[0] === word) return {
			color: "#dcdcaa"
		};

	}

	return (
		<div>
			<Editor
				styleDecider={styleDecider}
				defaultCode={defaultCode}
				padding={padding}
				style={style}
				specialSplits={delimeters}
				onCodeChange={onCodeChange}
				disabled={disabled}
			/>
		</div>
	);
}


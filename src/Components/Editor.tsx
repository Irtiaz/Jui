"use client"

import { CSSProperties, useState } from "react";
import SimpleCodeEditor from "react-simple-code-editor"
import { nanoid } from "nanoid"

type Props = {
	defaultCode?: string;
	styleDecider: (word: string) => CSSProperties | undefined;
	style?: CSSProperties;
	padding?: number;
	specialSplits?: string[];
	onCodeChange: (code: string) => void;
	disabled?: boolean
};

export const Editor: React.FC<Props> = ({ defaultCode, styleDecider, style, padding, specialSplits, onCodeChange, disabled }) => {
	const [ code, setCode ] = useState(defaultCode || "");

	const tokenizer = (word: string) => {
		if (specialSplits === undefined) return [word];

		let result: string[] = [word];
		for (const specialSplit of specialSplits) {
			let nextResult: string[] = [];
			for (const token of result) {
				const splitted = token.split(specialSplit);
				for (let i = 0; i < splitted.length; ++i) {
					nextResult.push(splitted[i]);
					if (i < splitted.length - 1) nextResult.push(specialSplit);
				}
			}
			result = nextResult;
		}
		return result;
	}

	const highlightWord = (word: string) => {
		return <span key={nanoid()}>
			{tokenizer(word).map(token => <span key={nanoid()} style={styleDecider(token)}>{token}</span>)}{" "}
		</span>
	}

	const handleCodeChange = (currentCode: string) => {
		setCode(currentCode);
		if (!disabled) onCodeChange(currentCode);
	}

	const highlight = (wholeCode: string) => {
		const lines = wholeCode.split("\n");
		return (
			<>
				{lines.map(line => <div key={nanoid()}>
					{line.split(" ").map(highlightWord)}
				</div>)}
			</>
		);
	}

	return (
		<SimpleCodeEditor
			value={code}
			onValueChange={handleCodeChange}
			highlight={wholeCode => highlight(wholeCode)}
			padding={padding}
			style={style}
			disabled={disabled}
		/>
	);
}

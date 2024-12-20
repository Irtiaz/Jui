"use client"

import {JuiEditor} from "@/Components/JuiEditor";

export default function TestPage() {
	return (
		<JuiEditor
			defaultCode="likho 10"
			padding={10}
			style={{
				marginTop: "1em",
				fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
				backgroundColor: "#282c34",
				color: "#abb2bf"
			}}
			onCodeChange={() => {}}
			disabled
		/>
	);
}

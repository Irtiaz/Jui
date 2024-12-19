'use client'

import * as monaco from "monaco-editor";
import MonacoEditor from "@monaco-editor/react";
import React from "react";
import { useState } from "react";
import axios from "axios";

import { setupMonaco } from "@/utils/setupMonaco";

interface RunResult {
	output: string | null;
	error: {
		token: string;
		lineNumber: number;
	} | null;
}

export default function Home() {
	const [ code, setCode ] = useState("");
	const [ inputString, setInputString ] = useState("");
	const [ outputString, setOutputString ] = useState("");

	const [ editor, setEditor ] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

	const handleRun = async () => {
		const result = await axios.post<RunResult>('/api/run', {
			code: code,
			input: inputString
		});
		const data = result.data;
		const { output, error } = data;
		console.log({ output, error });
		setOutputString(error !== null || output === null? "" : output);
		
		if (error !== null) {
			/*
			editor?.createDecorationsCollection([{
				range: new monaco.Range(error.lineNumber, 1, error.lineNumber, 1),
				options: {
					isWholeLine: true,
					className: "error-line",
					glyphMarginClassName: "error-glyph",
					hoverMessage: { value: `Error at ${error.token}` }
				}
			}]);
			 */
		}
	}

	return (
		<div className="ml-8 mr-8">
			<div className="mb-6">
				<MonacoEditor
					height="50vh"
					defaultLanguage="Jui"
					defaultValue={code}
					beforeMount={setupMonaco}
					onMount={editorInstance => setEditor(editorInstance)}
					theme="Jui-dark"
					onChange={value => setCode(value || "")}
				/>
			</div>
			<div className="flex m-6">
				<div className="flex-auto mr-4">
					<div className="text-center">Input</div>
					<textarea rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input to the program" onChange={event => setInputString(event.target.value)} />
				</div>

				<div className="flex-auto mr-4">
					<div className="text-center">Output</div>
					<textarea disabled rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Output from the program" value={outputString}/>
				</div>
			</div>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRun}>Run</button>
		</div>
	);
}

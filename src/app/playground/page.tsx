'use client'

import MonacoEditor from "@monaco-editor/react";
import React, {useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import {Button} from "flowbite-react";

import { setupMonaco } from "@/utils/setupMonaco";

interface RunResult {
	output: string | null;
	error: {
		token: string;
		lineNumber: number;
	} | null;
}

export default function Playground() {
	const [ code, setCode ] = useState("");
	const [ inputString, setInputString ] = useState("");
	const [ outputString, setOutputString ] = useState("");
	const [ errorString, setErrorString ] = useState<string | null>(null);

	const handleRun = async () => {
		try {
			const result = await axios.post<RunResult>('/api/run', {
				code: code,
				input: inputString
			});
			const data = result.data;
			const { output, error } = data;
			console.log({ output, error });
			setOutputString(error !== null || output === null? "" : output);

			setErrorString(error !== null? `Compilation Error At ${error.token} at line number ${error.lineNumber}` : null);
		} catch (_) {
			setErrorString("Runtime Timeout");
		}
	}

	useEffect(() => {
		setErrorString(null);
	}, [code])

	return (
		<div className="ml-8 mr-8">
			<div className="mb-6">
				<MonacoEditor
					height="50vh"
					defaultLanguage="Jui"
					defaultValue={code}
					beforeMount={setupMonaco}
					theme="Jui-dark"
					onChange={value => setCode(value || "")}
					options={{
						fontSize: 26
					}}
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
			<Button color="success" onClick={handleRun} disabled={code.trim().length === 0}>Run</Button>

			{errorString !== null && errorString.length !== 0 &&
			<div className="fixed bottom-0 w-full flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
				<svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
					<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
				</svg>
				<span className="sr-only">Info</span>
				<div>
					<span className="font-medium">Error: </span>{errorString}
				</div>
			</div>
			}
		</div>
	);
}

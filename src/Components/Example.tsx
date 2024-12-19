"use client"

import React from "react";
import Link from "next/link";
import MonacoEditor from "@monaco-editor/react";
import { setupMonaco } from "@/utils/setupMonaco";
import { Card, Button } from "flowbite-react";

interface ExampleProps {
	header: string;
	description: string;
	code: string;
	sampleInput: string;
	sampleOutput: string;
}

const Example: React.FC<ExampleProps> = ({ header, description, code, sampleInput, sampleOutput }) => {
	const handlePlaygroundClick = () => {
		window.localStorage.setItem("code", code);
		window.localStorage.setItem("input", sampleInput);
	};

	const fontSize = 20;

	return (
		<Card className="bg-gray-900" style={{margin: "2em", border: "1px solid grey", boxShadow: "5px 10px #111111"}}>
			<h5 className="text-2xl text-center font-semibold mb-3">{header}</h5>
			<p className="text-base text-gray-400 mb-5">{description}</p>

			<div className="mb-5">
				<h6 className="text-xs font-semibold mb-2">Code:</h6>
				<MonacoEditor
					height={`${Math.min(40, code.split("\n").length * 3 * fontSize / 20)}vh`} // Dynamically calculate height
					defaultLanguage="Jui"
					defaultValue={code}
					beforeMount={setupMonaco}
					theme="Jui-dark"
					options={{
						fontSize: fontSize,
						readOnly: true,
						wordWrap: "on",
						scrollBeyondLastLine: false, // Prevent scrolling past the last line
						minimap: { enabled: false }, // Disable the minimap for simplicity
					lineNumbers: "off", // Hide line numbers
					renderLineHighlight: "none", // Disable line highlighting
					selectionHighlight: false, // Disable selection highlighting
					renderWhitespace: "none", // Simplify view
					}}/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
				<div className="mr-2">
					<h6 className="text-xs font-semibold mb-2">Sample Input:</h6>
					<Card className="bg-gray-800">
						<pre className="text-sm text-gray-200 whitespace-pre-wrap">{sampleInput}</pre>
					</Card>
				</div>
				<div>
					<h6 className="text-xs font-semibold mb-2">Sample Output:</h6>
					<Card className="bg-gray-800">
						<pre className="text-sm text-gray-200 whitespace-pre-wrap">{sampleOutput}</pre>
					</Card>
				</div>
			</div>

			<div className="inline-block text-center">
				<Link href="/playground">
					<Button color="success" className="inline-block" onClick={handlePlaygroundClick}>
						Open in Playground
					</Button>
				</Link>
			</div>
		</Card>
	);
};

export default Example;


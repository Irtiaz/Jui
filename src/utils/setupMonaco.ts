import { BeforeMount } from "@monaco-editor/react";

export const setupMonaco: BeforeMount = (monacoInstance) => {
	// Register the custom language
	monacoInstance.languages.register({ id: "Jui" });

	// Define the Monarch tokens provider for the custom language
	monacoInstance.languages.setMonarchTokensProvider("Jui", {
		keywords: [
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
		],
		operators: [
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
		],
		tokenizer: {
			root: [
				[/\b(?:jotokkhon|thake|totokkhon|koro|jodi|hoy|taile|noile|ar|er)\b/, "keyword"],
				[/\b(?:poro|likho|othoba|ebong|choto|soman|boro|\+|-|\*|\/|vagshesh|na)\b/, "operator"],
				[/\d+/, "number"],
				[/[a-zA-Z_][\w]*/, "identifier"],
[/[()[\]]/, "delimiter"],
				],
		},
	});

	// Define language configuration, including bracket pairs
	monacoInstance.languages.setLanguageConfiguration("Jui", {
		brackets: [
			["(", ")"],
			["[", "]"],
		],
	});

	// Define a custom vs-dark theme
	monacoInstance.editor.defineTheme("Jui-dark", {
		base: "vs-dark",
		inherit: true,
		rules: [
			{ token: "keyword", foreground: "d19a66", fontStyle: "bold" },
			{ token: "operator", foreground: "61afef" },
			{ token: "number", foreground: "dcdcaa" },
			{ token: "identifier", foreground: "abb2bf" },
			{ token: "delimiter", foreground: "e06c75" },
		],
		colors: {
			"editor.background": "#282c34",
			"editor.foreground": "#abb2bf",
		},
	});
};

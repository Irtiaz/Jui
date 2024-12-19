import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import {exec} from "child_process";
import util from 'util';

const execPromise = util.promisify(exec);

interface Request {
	code: string;
	input: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	const body = (await request.json()) as Request;
	console.log(body);
	const { code, input } = body;

	const directory = process.cwd();

	const baseName = `temp_${Date.now()}.jui`;
	const codeFile = `${directory}/${baseName}`;
	const inputFile = `${directory}/${baseName}.in`;
	const executableFile = `${directory}/${baseName}.out`;

	// Save the code to a file
	fs.writeFileSync(codeFile, code);

	// Save input to a file
	if (input && input.length > 0) {
		fs.writeFileSync(inputFile, input);
	}

	let output = null;

	try {
		await execPromise(`./jui ${codeFile} ${executableFile}`);
		fs.unlinkSync(codeFile);
	} catch (e) {
		const errorMessage = (e as {stderr: string}).stderr.split("\n")[1];
		const errorMessageWords = errorMessage.split(" ");
		const erroneousToken = errorMessageWords[1];
		const lineNumber = parseInt(errorMessageWords[errorMessageWords.length - 1]);

		fs.unlinkSync(codeFile);
		exec('rm *.c -f');
		return NextResponse.json({
			output: null,
			error: {
				token: erroneousToken,
				lineNumber: lineNumber
			}
		});
	}

	const runCommand = `${executableFile}` + (fs.existsSync(inputFile)? ` < ${inputFile}` : '');

	try {
		const { stdout } = await execPromise(runCommand, { timeout: 1000 });
		output = stdout;

		fs.unlinkSync(executableFile);
		if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);

		return NextResponse.json({ output: output, error: null });
	} catch (e) {
		fs.unlinkSync(executableFile);
		if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);

		return NextResponse.json(null, {status: 408}); // timeout
	}
}

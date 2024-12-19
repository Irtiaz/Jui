import { Card } from "flowbite-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="text-white min-h-screen flex flex-col items-center py-10 px-6">
			<header className="text-center mb-10">
				<h1 className="text-4xl font-bold mb-4">Welcome to Jui</h1>
				<p className="text-xl text-gray-400">
					A blazing-fast, automatic memory managed, Turing Complete, compiled programming language in <b>Bangla</b> that redefines simplicity and performance.
				</p>
			</header>

			<section className="max-w-4xl grid gap-6 sm:grid-cols-1 md:grid-cols-2">
				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🚀 Computationally Turing Complete</h2>
					<p>
						Jui provides the expressiveness and power of a Turing Complete language, 
						enabling you to implement complex algorithms and solve any computational problem.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">⚙️ Compiled Language</h2>
					<p>
						Designed for efficiency, Jui is a compiled language, ensuring minimal runtime overhead and optimized execution.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🌟 Transpiled to C</h2>
					<p>
						Jui transpiles directly to C, harnessing the raw speed and power of C while offering a modern syntax and developer experience.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🔧 Built with ANSI C</h2>
					<p>
						Jui is meticulously crafted in ANSI C, ensuring compatibility, portability, and a lightweight foundation.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🛠️ Custom Lexer Generator</h2>
					<p>
						Jui is built on top of a self-made lexer generator, <Link href="https://github.com/Irtiaz/IrLex" className="underline">IrLex</Link>, eliminating the dependency on traditional tools like Flex and offering unparalleled flexibility.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">📜 Custom Parser Generator</h2>
					<p>
						Instead of relying on traditional parser generators like Bison or Yacc, Jui uses a custom-made parser generator,{" "}
						<Link href="https://github.com/Irtiaz/IrParser" className="underline">IrParser</Link> and{" "}
						<Link href="https://github.com/Irtiaz/IrParseTableGenerator" className="underline">IrParseTableGenerator</Link>{" "}
						giving developers greater control and precision over syntax rules and grammar.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🧠 Automatic Memory Management</h2>
					<p>
						Jui handles memory allocation and deallocation automatically, eliminating the need for manual memory management and reducing the risk of memory leaks.
					</p>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-2">🎨 Syntax Clutter-Free</h2>
					<p>
						Say goodbye to semicolons, curly braces, and rigid indentation! Jui offers a clean and readable syntax, letting you focus on writing code without distractions.
					</p>
				</Card>


			</section>
		</div>
	);
}


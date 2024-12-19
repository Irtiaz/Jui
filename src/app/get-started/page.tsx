import { Card } from "flowbite-react";
import Link from "next/link";

export default function GettingStartedPage() {
	return (
		<div className="text-white min-h-screen flex flex-col items-center py-10 px-6">
			<header className="text-center mb-10">
				<h1 className="text-4xl font-bold mb-4">Getting Started with Jui</h1>
				<p className="text-xl text-gray-400">
					Quickly set up and start coding with Jui, whether locally or in the cloud.
				</p>
			</header>

			<section className="max-w-4xl space-y-6">
				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-4">🖥️ Local Setup</h2>
					<p className="mb-2">
						To get started with Jui on your local machine, you'll need a Unix-based operating system.
					</p>
					<ol className="list-decimal list-inside space-y-2">
						<li>
							Clone the repository:{" "}
							<code className="bg-gray-700 px-1 py-0.5 rounded">git clone https://github.com/Irtiaz/Jui-Language</code>
						</li>
						<li>
							Jui comes with a pre-built binary called <code className="bg-gray-700 px-1 py-0.5 rounded">jui</code>. Alternatively, build it from scratch:
							<br />
							<code className="bg-gray-700 px-1 py-0.5 rounded">make</code>
						</li>
						<li>
							Compile an example from the <code className="bg-gray-700 px-1 py-0.5 rounded">examples</code> folder:
							<br />
							<code className="bg-gray-700 px-1 py-0.5 rounded">jui main.jui</code>
							<br />
							For additional build options, run:
							<br />
							<code className="bg-gray-700 px-1 py-0.5 rounded">jui</code>
						</li>
					</ol>
				</Card>

				<Card className="bg-gray-800 text-white">
					<h2 className="text-2xl font-semibold mb-4">🌐 Online Playground</h2>
					<p>
						If you don't want to set up Jui locally, you can start coding instantly using the online playground. No specific operating system is required.
					</p>
					<Link href="/playground" className="text-blue-400 underline mt-2">
						Explore the Playground
					</Link>
				</Card>
			</section>

			<footer className="mt-16 text-gray-500 text-sm">
				<p>© {new Date().getFullYear()} Jui Language. All Rights Reserved.</p>
			</footer>
		</div>
	);
}


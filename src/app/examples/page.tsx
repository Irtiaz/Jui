import Example from "@/Components/Example";

export default function ExamplesPage() {
	return (
		<div>

			<Example
				header="Input Output"
				description="Use 'poro' to take input and 'likho' to output. You can output a whole expression"
				code={`a = 3\nporo b\nlikho (a + b) vagshesh 4`}
				sampleInput="3"
				sampleOutput="2"
			/>

			<Example
				header="Arithmetic Operators"
				description="All arithmetic operators are like C, except for modulo operator - which is replaced by the keyword 'vagshesh'"
				code={`poro n\nlikho (n + 3 * 2) vagshesh 5`}
				sampleInput="4"
				sampleOutput="0"
			/>

			<Example
				header="Relational Operators"
				description={`The relational operators are - soman, boro, choto, na\nYou can do >= with 'choto na' and so on\n'na' can be used as many times as you want`}
				code={`poro n\nlikho n, 5 er soman\nlikho n, 5 er soman na\nlikho n, 5 er boro\nlikho n, 5 er choto na\nlikho n, 5 er soman na na na na`}
				sampleInput="5"
				sampleOutput="1 0 0 1 1"
			/>

			<Example
				header="Conditional"
				description="Jui has if, else if, else structure like any other programming language"
				code={`poro n\njodi n, 10 er boro hoy taile\n\tlikho 1\nkoro\nnoile jodi n, 5 er boro hoy taile\n\tlikho 2\nkoro\nar noile\n\tlikho 3\nkoro`}
				sampleInput="8"
				sampleOutput="2"
			/>
			
			
			<Example
				header="Loop"
				description="Jui supports loop with jotokkhon, totokkhon syntax"
				code={`poro n\ni = 1\njotokkhon i, n er boro na thake totokkhon\n\tlikho i\n\ti = i + 1\nkoro`}
				sampleInput="3"
				sampleOutput={`1 2 3`}
			/>

			<Example
				header="Arrays"
				description="Arrays in Jui are automatic, and can be used with sparse indexing. Indexing starts with 0, and [0] can be omitted (i.e. array[0] is equivalent to array)"
				code={`a = 10\nporo a[3]\nporo a[10]\nlikho a[0] + a + a[3] + a[10]`}
				sampleInput="2 5"
				sampleOutput="27"
			/>

		</div>
	);
}

import { Metadata } from "next"

type Props = {
	params: {
		id: string
	}
}

export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
	return {
		title: `Page ${id} | Next app`
	}
}

export default function Post({params: {id}}: Props) {
	return (
		<h1>{`Page ${id}`}</h1>
	)
}

export default function UserProfile({ params }: any) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<h1>Profile</h1>
			<br />
			<hr />
			<p className="text-4xl">Proifle Page {params.id}</p>
		</div>
	)
}

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex items-center justify-center gap-4 py-8 md:py-10">
			<div className="justify-center w-1/2">
				{children}
			</div>
		</section>
	);
}

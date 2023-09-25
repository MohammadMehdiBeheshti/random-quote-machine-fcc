export default function Skeleton({ lines = 1, width = "100%" }) {
	return (
		<div className="skeleton-container">
			{Array.from({ length: lines }, (_, i) => (
				<div key={i + 1} style={{ width }} className="skeleton"></div>
			))}
		</div>
	);
}

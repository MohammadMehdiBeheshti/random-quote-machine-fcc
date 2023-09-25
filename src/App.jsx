import { useState, useEffect } from "react";
import Skeleton from "./Skeleton";

export default function App() {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const getQuote = async () => {
		const url = "https://api.quotable.io/quotes/random";
		try {
			setIsLoading(true);
			const response = await fetch(url);
			if (!response.ok) throw new Error("Connection Timed Out!");
			const [data] = await response.json();
			const [quoteText, authorText] = [data.content, data.author];
			setQuote(quoteText);
			setAuthor(authorText);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div className="center" id="quote-box">
			<blockquote cite={author} className="quote-block">
				{!isLoading ? (
					<p id="text">&quot;{quote}&quot;</p>
				) : (
					<Skeleton lines="5" />
				)}

				<div className="downer-box">
					<div className="social-network">
						<a
							href="https://github.com/MohammadMehdiBeheshti/random-quote-machine-fcc"
							target="_blank"
							rel="noreferrer"
						>
							<img src="./imgs/github.svg" alt="Github" className="svg-icon" />
						</a>

						<a
							href="https://www.linkedin.com/in/mohammadmehdibeheshti/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="./imgs/linkedin.svg"
								alt="LinkedIn"
								className="svg-icon"
							/>
						</a>

						<a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
							<img
								src="./imgs/twitter.svg"
								alt="Twitter"
								className="svg-icon"
							/>
						</a>
					</div>

					{!isLoading ? (
						<span id="author">-{author}</span>
					) : (
						<Skeleton width="12rem" />
					)}
				</div>
			</blockquote>

			<button id="new-quote" onClick={getQuote}>
				New Quote
			</button>
		</div>
	);
}

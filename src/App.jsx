import { useState, useEffect } from "react";

export default function App() {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const getQuote = async () => {
		const url = "https://api.quotable.io/quotes/random";
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error("Connection Timed Out!");
			const [data] = await response.json();
			const [quoteText, authorText] = [data.content, data.author];
			setQuote(quoteText);
			setAuthor(authorText);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div className="center" id="quote-box">
			<blockquote cite="#" className="quote-block">
				<p id="text">&quot;{quote}&quot;</p>

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

					<span id="author">-{author}</span>
				</div>
			</blockquote>

			<button id="new-quote" onClick={getQuote}>
				New Quote
			</button>
		</div>
	);
}

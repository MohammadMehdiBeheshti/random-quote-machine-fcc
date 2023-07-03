export default function App() {
	return (
		<div className="center" id="quote-box">
			<blockquote cite="#" className="quote-block">
				<p id="text">
					Those who want to live let them fight, those who do not want to fight in this world of eternal struggle do not
					deserve to live
				</p>

				<div className="downer-box">
					<div className="social-network">
						<a
							href="https://github.com/MohammadMehdiBeheshti/random-quote-machine-fcc"
							target="_blank"
							rel="noreferrer"
						>
							<img src="./github.svg" alt="Github" />
						</a>

						<a href="https://www.linkedin.com/in/mohammadmehdibeheshti/" target="_blank" rel="noreferrer">
							<img src="./linkedin.svg" alt="LinkedIn" />
						</a>

						<a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">
							<img src="./twitter.svg" alt="Twitter" />
						</a>
					</div>

					<span id="author">-Paul hassle</span>
				</div>
			</blockquote>

			<button id="new-quote">New Quote</button>
		</div>
	);
}

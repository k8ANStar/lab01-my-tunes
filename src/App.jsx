import "./App.css";

function App() {
	return (
		<div>
			<h1 className="h1-header">MyTunes</h1>
			<div className="album-container">
				<img
					src="https://cultmtl.com/wp-content/uploads/2024/08/Childish-Gambino-Bando-Stone-and-the-New-World.jpg"
					alt="childish gambino album cover"
					width={300}
					height={300}
				/>
				<div className="text-album">
					<h2 className="albums">Childish Gambino's Albums</h2>
					<div>
						<details>
							<summary>
								<span className="summary-text">
									Brando Stone & the New World
								</span>
							</summary>
							<ol>
								<li>"A Place Where Love Goes"</li>
								<li>"Lithonia"</li>
								<li>"Survive"</li>
								<li>"Talk My Shit"</li>
								<li>"Got To Be"</li>
							</ol>
						</details>
						<details>
							<summary>
								<span className="summary-text">Because The Internet</span>
							</summary>
							<ol>
								<li>"Earth: The Oldest Computer"</li>
								<li>"Telegraph Ave."</li>
								<li>"Sweatpants"</li>
								<li>"Crawl"</li>
								<li>"Zealots of Stockholm"</li>
							</ol>
						</details>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

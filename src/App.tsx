import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [title, setTitle] = useState("");

	useEffect(() => {
		const titleElement = document.querySelector(
			"div#item-area div.item-info-area > h1",
		);
		if (!titleElement) {
			throw new Error(
				"div#item-area div.item-info-area > h1 Element is not found",
			);
		}

		const title = titleElement.textContent?.replace("[Kindle]", "") || "";

		setTitle(title);
	}, []);

	const buttons = [
		{
			text: "Bookoff (Yahoo)",
			url: `https://store.shopping.yahoo.co.jp/bookoffonline/search.html?X=4&p=${title}`,
		},

		{
			text: "bookfan (Yahoo)",
			url: `https://store.shopping.yahoo.co.jp/bookfan/search.html?X=4&p=${title}`,
		},
	];

	return (
		<>
			{buttons.map((button) => (
				<a
					className="btn"
					href={button.url}
					target="_blank"
					rel="noreferrer"
					key={button.text}
				>
					<button type="button" className="btn text-2xl">
						{button.text}
					</button>
				</a>
			))}
		</>
	);
}

export default App;

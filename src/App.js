import "./App.css";
import { SolarProvider } from "@solar-icons/react";
import * as solar from "@solar-icons/react/category";

// Build a flat list of all icons: { category, name, Icon }
const allIcons = [];
for (const [categoryName, categoryIcons] of Object.entries(solar)) {
	if (typeof categoryIcons !== "object" || categoryIcons === null) continue;
	for (const [iconName, IconComponent] of Object.entries(categoryIcons)) {
		// React components are functions (or forwardRef objects in some builds)
		const isComponent =
			typeof IconComponent === "function" ||
			(typeof IconComponent === "object" && IconComponent !== null);
		if (isComponent) {
			allIcons.push({ category: categoryName, name: iconName, Icon: IconComponent });
		}
	}
}

function App() {
	return (
		<SolarProvider value={{ size: "32", color: "currentColor", weight: "Linear" }}>
			<div className="container ma2 avenir">
				<h1 className="mb1 f2 fw7 lh-title mr2">Solar Outline Icons Collection</h1>
				<p className="mb2 f4 fw5 lh-copy measure-wide">
					Check the README in the npm package for more information.
				</p>
				<p className="mb4 f5 fw5 lh-solid ma0 pa0">
					<a
						className="link underline blue hover-gray"
						href="https://www.svgrepo.com/collection/solar-outline-icons/"
					>
						https://www.svgrepo.com/collection/solar-outline-icons/
					</a>
				</p>
				<Card title="Single icon example">
					<p className="mb3 f5 lh-copy measure-wide">
						Since we're wrapping everything here with <code>{`<SolarProvider>`}</code>, as per
						the Solar library's "Global Icon Configuration," including a single icon is
						simple. Just reference the icon in the context of the library & category:
					</p>
					<p className="f5 mb3">
						<span className="lh-copy dark-pink fw6">import statements:</span>
						<code className="db lh-copy">{`import {SolarProvider} from "@solar-icons/react";`}</code>
						<code className="mb3 db lh-copy">{`import * as solar from "@solar-icons/react/category";`}</code>
						<span className="lh-copy dark-pink fw6">
							Wrap everything in the <code className="fw5">{`<SolarProvider>`}</code> tag:
						</span>
						<p className="mb3 lh-copy">
							Optionally pass global pops (as shown here), or set those props on each icon
							instance.
						</p>
						<code className="db lh-copy">{`<SolarProvider value={{ size: "32", color: "currentColor", weight: "Linear" }}>`}</code>
						<p className="f5 lh-copy">Everything goes here</p>
						<code className="mb3 db lh-copy">{`</SolarProvider>`}</code>
						<span className="lh-copy dark-pink fw6">component instance:</span>
						<code className="db lh-copy">{`<solar.Astronomy.Planet />`}</code>
					</p>
					<div className="mt3 mb3 flex items-center">
						<span className="mr2">
							<solar.Astronomy.Planet />
						</span>
						<h3>Title with leading icon</h3>
					</div>
					<p className="f5 lh-copy measure-wide">
						You can also limit your import to a single category, or a single icon. Just align
						your import statement with the scope of the icon being used. Check the README for
						more info.
					</p>
				</Card>
				<Card title="Full library">
					<div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
						{allIcons.map(({ category, name, Icon }) => (
							<div
								key={`${category}-${name}`}
								className="flex flex-column items-center pa3 ba br2 b--moon-gray hover-bg-light-gray"
								style={{ minWidth: "6rem" }}
							>
								<Icon size={28} color="currentColor" />
								<span className="f6 mt2 tc" style={{ wordBreak: "break-word" }}>
									{name}
								</span>
								<span className="f7 mid-gray">{category}</span>
							</div>
						))}
					</div>
				</Card>
			</div>
		</SolarProvider>
	);
}

function Card({ title, children }) {
	return (
		<div className="mb4 bg-white ba br3 b--moon-gray overflow-hidden">
			<div className="card-header bg-dark-gray near-white ph4 pv4 bb b--moon-gray">
				<h2 className="f4 fw6 lh-solid ma0 pa0">{title}</h2>
			</div>
			<div className="card-body pa4">{children}</div>
		</div>
	);
}

export default App;

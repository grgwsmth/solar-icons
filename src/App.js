import "./App.css";
import { SolarProvider } from '@solar-icons/react';
import * as solar from '@solar-icons/react/category';

// Build a flat list of all icons: { category, name, Icon }
const allIcons = [];
for (const [categoryName, categoryIcons] of Object.entries(solar)) {
	if (typeof categoryIcons !== 'object' || categoryIcons === null) continue;
	for (const [iconName, IconComponent] of Object.entries(categoryIcons)) {
		// React components are functions (or forwardRef objects in some builds)
		const isComponent = typeof IconComponent === 'function' || (typeof IconComponent === 'object' && IconComponent !== null);
		if (isComponent) {
			allIcons.push({ category: categoryName, name: iconName, Icon: IconComponent });
		}
	}
}

function App() {
	return (
		<SolarProvider value={{ size: '32', color: 'black', weight: 'Outline' }}>
		<div className="container ma2 avenir">
			<h1 className="mb1 f2 fw7 lh-title mr2">Solar Outline Icons Collection</h1>
			<p className="mb2 f4 fw5 lh-copy measure">Check the README in the npm package for more information.</p>
			<p className="f5 fw5 lh-solid ma0 pa0">
				<a href="https://www.svgrepo.com/collection/solar-outline-icons/">https://www.svgrepo.com/collection/solar-outline-icons/</a>
				</p>
			<Card>
				<div className="flex flex-wrap" style={{ gap: '0.75rem' }}>
					{allIcons.map(({ category, name, Icon }) => (
						<div
							key={`${category}-${name}`}
							className="flex flex-column items-center pa3 ba br2 b--moon-gray hover-bg-light-gray"
							style={{ minWidth: '6rem' }}
						>
							<Icon size={28} color="currentColor" />
							<span className="f6 mt2 tc" style={{ wordBreak: 'break-word' }}>
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

function Card({ children }) {
	return (
		<div className="bg-white ba br3 b--moon-gray overflow-hidden">
			<div className="card-header bg-dark-gray near-white ph4 pv4 bb b--moon-gray">
				<h2 className="f4 fw6 lh-solid ma0 pa0">https://www.svgrepo.com/collection/solar-outline-icons/</h2>
			</div>
			<div className="card-body pa4">
				{children}
			</div>
		</div>
	);
}

export default App;

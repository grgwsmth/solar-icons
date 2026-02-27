import "./App.css";

function App() {
	return (
		<div className="container ma2 avenir">
			<div className="mb4">
				<h1 className="f1 fw7 lh-title mb2">This is some h1 header text</h1>
				<h2 className="f2 fw7 lh-title mb2">This is some h2 header text</h2>
				<h3 className="f3 fw7 lh-title mb2">This is some h3 header text</h3>
				<h4 className="f4 fw6 lh-title mb2">This is some h4 header text</h4>
				<h4 className="f5 fw6 lh-title mb2 ttu">This is some h5 header text</h4>
			</div>
			<p className="mb4 f4 fw5 lh-copy measure">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris.
			</p>
			<Card />
		</div>
	);
}

function Card() {
	return (
		<div className="bg-white ba br3 b--moon-gray overflow-hidden">
			<div className="card-header bg-dark-gray near-white ph4 pv4 bb b--moon-gray">
				<h2 className="f3 fw7 lh-solid ma0 pa0">SVG icon library</h2>
			</div>
			<div className="card-body pa4">
				<p className="mb0 f5 fw5 lh-copy">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}

export default App;

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/index.scss';
import Main from './pages/Main'
//import * as serviceWorker from './serviceWorker';
import { LocalizeProvider } from "react-localize-redux";
import WebFont from 'webfontloader';

WebFont.load({
	google: {
		families: ['Titillium Web:300,400,700', 'open-sans']
	}
});

const App = props => (
	<LocalizeProvider>
		<Router>
			<Route path="/" component={Main} />
		</Router>
	</LocalizeProvider>
);

render(<App />, document.getElementById('wrapper'));


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

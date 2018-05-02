import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import './style/lib/animate.css';
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import {AppContainer} from "react-hot-loader";
import Page from "./Page";

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component store={store}/>
			</Provider>
		</AppContainer>, document.getElementById("root")
	);
};

render(Page);

if (module.hot) {
	const orgError = console.error;
	console.error = (...args) => {
		if (args && args.length === 1 && typeof args[0] === "string" && args[0].indexOf("You cannot change <Router routes>;") > -1) {
		} else {
			orgError.apply(console, args);
		}
	};
	module.hot.accept("./Page", () => {
		render(Page);
	});
}

registerServiceWorker();

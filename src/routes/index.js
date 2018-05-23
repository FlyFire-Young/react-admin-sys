import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";

import Buttons from "../components/ui/Buttons";
import Icons from "../components/ui/Icons";
import Paginations from "../components/ui/Paginations";
import StepsBar from "../components/ui/StepsBar";
import InputTypes from "../components/ui/InputTypes";
import UploadTypes from "../components/ui/UploadTypes";
import CalendarTypes from "../components/ui/CalendarTypes";
import CarouselTypes from "../components/ui/CarouselTypes";
import ListTypes from "../components/ui/ListTypes";
import PopoverTypes from "../components/ui/PopoverTypes";
import TabTypes from "../components/ui/TabTypes";
import TagTypes from "../components/ui/TagTypes";
import PromptBoxTypes from "../components/ui/PromptBoxTypes";
import ModalTypes from "../components/ui/ModalTypes";
import ProgressTypes from "../components/ui/ProgressTypes";
import SpinTypes from "../components/ui/SpinTypes";
import DividerTypes from "../components/ui/DividerTypes";

import RealBasicForm from "../components/form/RealBasicForm";
import RegistrationForm from "../components/form/RegistrationForm";

import BasicTables from "../components/tables/BasicTables";
import SampleTables from "../components/tables/SampleTables";

import LocaleProviders from "../components/Internationalization/LocaleProviders";

import BasicAnimations from "../components/animation/BasicAnimations"
import ExampleAnimations from "../components/animation/ExampleAnimations"

import ViserCharts from "../components/charts/ViserCharts"
import ViserChartsWordCloud from "../components/charts/ViserChartsWordCloud"
import RealHome from "../components/RealHome";

export default class CRouter extends Component {
	requireAuth = (permission, component) => {
		const {auth} = this.props;
		const {permissions} = auth.data;
		// const { auth } = store.getState().httpData;
		if (!permissions || !permissions.includes(permission)) return <Redirect to={"404"}/>;
		return component;
	};

	render() {
		return (
			<Switch>
				<Route exact path="/app/real/home" component={RealHome}/>
				<Route exact path="/app/ui/buttons" component={Buttons}/>
				<Route exact path="/app/ui/icons" component={Icons}/>
				<Route exact path="/app/ui/paginations" component={Paginations}/>
				<Route exact path="/app/ui/stepsBar" component={StepsBar}/>
				<Route exact path="/app/ui/inputTypes" component={InputTypes}/>
				<Route exact path="/app/ui/uploadTypes" component={UploadTypes}/>
				<Route exact path="/app/ui/calendarTypes" component={CalendarTypes}/>
				<Route exact path="/app/ui/carouselTypes" component={CarouselTypes}/>
				<Route exact path="/app/ui/listTypes" component={ListTypes}/>
				<Route exact path="/app/ui/popoverTypes" component={PopoverTypes}/>
				<Route exact path="/app/ui/tabTypes" component={TabTypes}/>
				<Route exact path="/app/ui/tagTypes" component={TagTypes}/>
				<Route exact path="/app/ui/promptBoxTypes" component={PromptBoxTypes}/>
				<Route exact path="/app/ui/modalTypes" component={ModalTypes}/>
				<Route exact path="/app/ui/progressTypes" component={ProgressTypes}/>
				<Route exact path="/app/ui/spinTypes" component={SpinTypes}/>
				<Route exact path="/app/ui/dividerTypes" component={DividerTypes}/>

				<Route exact path="/app/form/realBasicForm" component={RealBasicForm}/>
				<Route exact path="/app/form/registrationForm" component={RegistrationForm}/>

				<Route exact path="/app/table/basicTables" component={BasicTables}/>
				<Route exact path="/app/table/sampleTables" component={SampleTables}/>

				<Route exact path="/app/animation/basicAnimations" component={BasicAnimations}/>
				<Route exact path="/app/animation/exampleAnimations" component={ExampleAnimations}/>

				<Route exact path="/app/chart/viserCharts" component={ViserCharts}/>
				<Route exact path="/app/chart/viserChartsWorldCloud" component={ViserChartsWordCloud}/>

				<Route exact path="/app/Internationalization/localeProviders" component={LocaleProviders}/>
			</Switch>
		);
	}
}
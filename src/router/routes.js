import DashboardScreen from "../containers/DashboardScreen";
import LoginScreen from "../containers/LoginScreen";

const { default: SplashScreen } = require("../containers/SplashScreen");

const screenNames = {
    splahScreen: 'splashScreen',
    loginScreen: 'loginScreen',
    dashboardScreen: 'dashboardScreen'
};


const appRoutes = [
    {
        name: screenNames.splahScreen,
        component: SplashScreen
    },
    {
        name: screenNames.loginScreen,
        component: LoginScreen
    },
    {
        name: screenNames.dashboardScreen,
        component: DashboardScreen
    }
];

export {appRoutes, screenNames}
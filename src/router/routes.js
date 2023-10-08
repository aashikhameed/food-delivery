import DashboardScreen from "../containers/DashboardScreen";
import LoginScreen from "../containers/LoginScreen";
import UserInformationScreen from "../containers/UserInformationScreen";

const { default: SplashScreen } = require("../containers/SplashScreen");

const screenNames = {
    splahScreen: 'splashScreen',
    loginScreen: 'loginScreen',
    dashboardScreen: 'dashboardScreen',
    userInformationScreen: 'userInformationScreen'
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
    },
    {
        name: screenNames.userInformationScreen,
        component: UserInformationScreen
    }
];

export {appRoutes, screenNames}
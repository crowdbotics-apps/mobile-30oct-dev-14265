import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1113819Navigator from '../features/BlankScreen1113819/navigator';
import BlankScreen213587Navigator from '../features/BlankScreen213587/navigator';
import BlankScreen313577Navigator from '../features/BlankScreen313577/navigator';
import BlankScreen013572Navigator from '../features/BlankScreen013572/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1113819: { screen: BlankScreen1113819Navigator },
BlankScreen213587: { screen: BlankScreen213587Navigator },
BlankScreen313577: { screen: BlankScreen313577Navigator },
BlankScreen013572: { screen: BlankScreen013572Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

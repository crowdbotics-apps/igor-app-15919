import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList29515Navigator from '../features/ArticleList29515/navigator';
import ArticleList29514Navigator from '../features/ArticleList29514/navigator';
import ArticleList29513Navigator from '../features/ArticleList29513/navigator';
import ArticleList29481Navigator from '../features/ArticleList29481/navigator';
import ArticleList29480Navigator from '../features/ArticleList29480/navigator';
import ArticleList29479Navigator from '../features/ArticleList29479/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList29515: { screen: ArticleList29515Navigator },
ArticleList29514: { screen: ArticleList29514Navigator },
ArticleList29513: { screen: ArticleList29513Navigator },
ArticleList29481: { screen: ArticleList29481Navigator },
ArticleList29480: { screen: ArticleList29480Navigator },
ArticleList29479: { screen: ArticleList29479Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

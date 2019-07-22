import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import Options from "../screens/Options";
import Themes from "../screens/Themes";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerTitle: "Home"
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        headerTitle: "Options"
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        headerTitle: "Themes"
      }
    }
  },
  {
    mode: "modal",
    headerMode: "screen"
  }
);

const HomeStackontainer = createAppContainer(HomeStack);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

const CurrencyListStackContainer = createAppContainer(CurrencyListStack);

const MainStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeStackontainer
    },
    CurrencyList: {
      screen: CurrencyListStackContainer
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

const MainStackNavigatorContainer = createAppContainer(MainStackNavigator);

export default MainStackNavigatorContainer;
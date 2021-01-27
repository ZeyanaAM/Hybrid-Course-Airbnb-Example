import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from './src/screens/Explore';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const Placeholder = () => {
  return <View style={{flex: 1}} />;
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconColor = focused ? 'red' : 'gray';
            switch (route.name) {
              case 'Explore':
                iconName = 'search';
                break;
              case 'Saved':
                iconName = 'ios-heart-outline';
                break;
              case 'Trips':
                iconName = 'airbnb';
                return (
                  <FontAwesome5
                    name={iconName}
                    brand
                    size={size}
                    color={iconColor}
                  />
                );
            }
            return <Icon name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Trips" component={Placeholder} />
        <Tab.Screen name="Saved" component={Placeholder} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

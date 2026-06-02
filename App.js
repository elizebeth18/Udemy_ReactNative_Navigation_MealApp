import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FatFree from './screens/FatFreeScreen';
import VeganScreen from './screens/VeganScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// this is a user defined component
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneStyle: { backgroundColor: '#a06e4fff' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name='Meal Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />
          }
        }}
      />
      <Drawer.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name='star' color={color} size={size} />
          }
        }}
      />
      <Drawer.Screen
        name='Fat Free'
        component={FatFree}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name='nutrition-outline' color={color} size={size} />
          }
        }}
      />
      <Drawer.Screen
        name='Vegan'
        component={VeganScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="leaf" size={size} color={color} />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#a06e4fff' }
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{
                title: 'Meals Overview'
              }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

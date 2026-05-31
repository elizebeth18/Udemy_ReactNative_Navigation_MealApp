import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MealCategories'
          screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#a06e4fff'}
          }}
        >
          <Stack.Screen 
            name="MealCategories" 
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
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
            // options={{
            //   headerRight: () => {
            //     return (<Text>in the header</Text>)
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

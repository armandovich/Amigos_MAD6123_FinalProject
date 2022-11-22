import { createStackNavigator } from '@react-navigation/stack';
import TaskList from '../screens/Tasks.js';
import TaskManager from '../admin/TaskManager.js'

const Stack = createStackNavigator();

export default function ProjectNav() {
    return (
        <Stack.Navigator screenOptions={ { headerShown: false, headerStyle: { backgroundColor: '#000' }} }>
            <Stack.Screen name="TaskList" component={TaskList} />
            <Stack.Screen name="TaskManager" component={TaskManager} />
        </Stack.Navigator>
    );
}
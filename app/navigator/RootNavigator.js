import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import SampleScreenContainer from '../container/SampleScreenContainer';
import UserDetailScreenComponent from '../component/UserDetailScreenComponent';

const Stack = createStackNavigator();

class RootNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="SampleScreenContainer"
                                component={SampleScreenContainer}
                                options={{ title: 'User List' }}
                            />
                            <Stack.Screen
                                name="UserDetailScreenComponent"
                                component={UserDetailScreenComponent}
                                options={{ title: 'Detail Page' }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

export default RootNavigator;

import React, { Component } from 'react'
import { Text, SafeAreaView, FlatList } from 'react-native'
import styles from '../component/styles/UserListScreenStyles';
import UserListCell from './UserListCell';

class UserListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            arrUserData: [],
        };
    }

    // This Method is used to get response from redux and set value to state variables.
    componentWillReceiveProps(nextProps) {
        var arrTemp = [];
        arrTemp = this.state.arrUserData;
        if (nextProps.arrSampleData.hits.length != 0) {
            for (let i = 0; i < nextProps.arrSampleData.hits.length; i++) {
                arrTemp.push(nextProps.arrSampleData.hits[i])
            }
        }

        this.setState({
            arrUserData: arrTemp,
            pageNumber: this.state.pageNumber + 1,
        })
    }

    // This Method is used to set Timer of 10 Minute for Every API Calling.
    startTimer () {
        setInterval(() => {
            console.log('Api Called');
            this._onEndReached();
        },10000)
    }

    // this is when screen call first time on that time it will call.
    componentDidMount = async () => {
        this.startTimer();
        this._onEndReached();
    }

    // Handle an undefined timer rather than null
    clearTimer(){
        this.timer !== undefined ? clearTimeout(this.timer) : null;
    }

    // This Method is used to when Screen was dismiss the time interval will also discard.
    componentWillUnmount(){
       clearInterval();
    }

    // This method is used to post request to the rematch model and that model call API.
    _onEndReached = async () => {
        let bodyData = {
            payload: false,
            pagenumber: this.state.pageNumber,
        }
        await this.props.fetchSampleData(bodyData);
    }

    render() {
        return (
            <SafeAreaView style={styles.mainContainer}>
                <FlatList
                    data={this.state.arrUserData}
                    renderItem={(Item, Index) => <UserListCell {...this.props} item={Item} index={Index} ></UserListCell>}
                    keyExtractor={(Item, Index) => Item.id}
                    onEndReached={() => this._onEndReached()}
                    onEndReachedThreshold = {0.1}
                />
            </SafeAreaView>
        );
    }
}

export default UserListScreen

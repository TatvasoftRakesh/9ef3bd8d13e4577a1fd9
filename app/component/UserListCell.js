import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/UserListCellStyles';

class UserListCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.item.item,
    })
  }

  itemClicked = () => {
    this.props.navigation.navigate('UserDetailScreenComponent', {item: this.state.data});
  }

  render() {

    const { data } = this.state;
    return (
      <View style={styles.cellMainContainer}>
          <TouchableOpacity onPress={() => this.itemClicked()} style={styles.cellitemStyle}>
            <View style={styles.subView}>
                <Text style={styles.txtStyle}>  {this.props.item.index + 1} Created At  - {data.created_at} </Text>
                <Text style={styles.txtStyle}> Title - {data.title} </Text>
                <Text style={styles.txtStyle}> Url - {data.url} </Text>
                <Text style={styles.txtStyle}> Author - {data.author} </Text>  
            </View>
          </TouchableOpacity>
       
      </View>
    );
  }
}

export default UserListCell;

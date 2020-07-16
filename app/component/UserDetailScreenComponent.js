import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/UserDetailScreenStyles';

class UserDetailScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item : this.props.route.params.item,
    };
  }

  componentDidMount() {

  }

  render() {

    const { item } = this.state;
    return (
      <View style={styles.cellMainContainer}>
        <View style={styles.subView}>
                <Text style={styles.txtStyle}> Created At  - {item.created_at} </Text>
                <Text style={styles.txtStyle}> Title - {item.title} </Text>
                <Text style={styles.txtStyle}> Url - {item.url} </Text>
                <Text style={styles.txtStyle}> Author - {item.author} </Text>  
            </View>
      </View>
    );
  }
}

export default UserDetailScreenComponent;

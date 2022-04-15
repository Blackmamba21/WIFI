import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../redux/actions';

const Edit = () => {
  const [todoItem, setTodoItem] = React.useState('');
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.todoList);
  console.log('todoListData', todoList);

  const addItem = () => {
    console.log('test', todoItem);
    let listItem = {id: todoList.length + 1, title: todoItem};

    // console.log('listItem', listItem);
    dispatch(addTodo(listItem));
    setTodoItem('');
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          margin: 5,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 5,
        }}>
        <TextInput
          onChangeText={(text) => setTodoItem(text)}
          placeholder={'Enter Text Here'}
          autoFocus={true}
          value={todoItem}
        />
        <TouchableOpacity onPress={addItem}>
          <Icon name={'pluscircle'} color="green" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

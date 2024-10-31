import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Link } from 'expo-router'

type taskItem = {
  id: string
  title: string
  done: boolean
}

interface TaskItemProps {
  item: taskItem
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

export const TaskItem = ({ item, toggleTask, removeTask }: TaskItemProps) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => toggleTask(item.id)}
      > */}
      <Link href={`/${item.id}`}>
        <Text style={[styles.item, item.done && styles.itemDone]}>
          {item.title}
        </Text>
      </Link>
      {/* </TouchableOpacity> */}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='#ff3e3e'
        style={styles.button}
        onPress={() => removeTask(item.id)}
      >
        <MaterialIcons name='delete-forever' size={24} color='red' />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
    backgroundColor: '#DDDDDD',
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    // backgroundColor: '#e7e6e7',
  },
  button: {
    padding: 10,

    alignItems: 'center',
  },
  itemDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
})

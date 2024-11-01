import { StatusBar } from 'expo-status-bar'
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { styles as globalStyle } from '../styles'
import { useState } from 'react'
import { TaskItem } from '../components/TaskItem'
import { useNavigation } from 'expo-router'

const mockTasks = [
  {
    id: '1',
    title: 'Task 1',
    done: false,
  },
  {
    id: '2',
    title: 'Task 2',
    done: false,
  },
  {
    id: '3',
    title: 'Task 3',
    done: false,
  },
]

export default function Tasks() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(mockTasks)
  const navigation = useNavigation()

  const addTask = () => {
    if (!task) return
    const newTask = {
      id: String(tasks.length + 1),
      title: task,
      done: false,
    }
    setTasks([...tasks, newTask])
    setTask('')
  }

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  //   const navigateToTaskDetails = (id: string) => {
  //     navigation.navigate('TaskDetails', { id });
  //   };

  console.log({
    task,
    tasks,
  })
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={{ ...styles.container }}>
        <View>
          <Text style={globalStyle.title}>My Todo APP</Text>
          <View style={styles.input}>
            <TextInput
              className='border border-red-500'
              // style={{ borderColor: 'gray', borderWidth: 1, height: 40 }}
              placeholder='Add a new task'
              value={task}
              onChangeText={setTask}
              placeholderTextColor={'gray'}
            />
            <Button title='Add' onPress={addTask} />
          </View>
          <View>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TaskItem
                  item={item}
                  toggleTask={toggleTask}
                  removeTask={removeTask}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // paddingTop: 50,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    gap: 5,
    margin: 5,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#e7e6e7',
  },
  itemDone: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
})

import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Task = ({ id, title }: { id: string; title: string }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>{title}</Text>
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  )
}

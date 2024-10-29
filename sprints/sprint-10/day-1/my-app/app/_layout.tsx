import { Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
      }}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitle: "My App",
        }}
      />
    </View>
  );
}

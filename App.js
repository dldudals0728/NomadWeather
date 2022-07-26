import { StatusBar } from "expo-status-bar";
// 1. View: RN에서 거이 모든 요소는 View에 넣어야 한다. 일종의 container. not div, p, span!
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* 2. 모든 text는 꼭 <Text></Text> 컴포넌트 안에 넣어야 한다. not p, span , h1, h6! (View로 했더니 error) */}
      <Text style={styles.text}>Hello</Text>
      {/* 6. 일부 component는 화면에 나타나지 않고, OS와 대화하기 위한 수단으로 사용된다. (like StatusBar) */}
      <StatusBar style="auto" />
    </View>
  );
}

// 4. SytleSheet.create 내부에 들어가는 것이 obj이기 때문에, <View style={{obj}}>처럼 바로 작성할 수 있다.
// 5. styles = StyleSheet.create({})를 거치지 않고, styles = {container: {}}로 바로 사용이 가능하나, StyleSheet.create를 사용할 경우 자동완성기능이 제공된다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 3. 사용 가능한 style(ex. backgroundColor)이 있고, 사용이 불가능한 style(ex. border)이 있다.
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "red",
  },
});

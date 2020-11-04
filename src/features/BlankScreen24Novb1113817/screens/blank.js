import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_7: "",
    DateTimePicker_9: new Date(""),
    TextInput_11: "",
    Switch_13: true,
    CheckBox_32: true,
    TextInput_17: "",
    CheckBox_19: true
  }

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <DateTimePicker
        date={this.state.DateTimePicker_9}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_9: selectedDate })
        }
      />
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <Switch
        value={this.state.Switch_13}
        onValueChange={nextChecked => this.setState({ Switch_13: nextChecked })}
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_32}
        onPress={nextChecked => this.setState({ CheckBox_32: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_17}
        value={this.state.TextInput_17}
        onChangeText={nextValue => this.setState({ TextInput_17: nextValue })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_19}
        onPress={nextChecked => this.setState({ CheckBox_19: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_3: {},
  Text_5: {},
  TextInput_7: {},
  DateTimePicker_9: {},
  TextInput_11: {},
  Switch_13: {},
  Slider_15: {},
  TextInput_17: {},
  View_1: {},
  Button_3: {},
  Text_5: {},
  TextInput_7: {},
  DateTimePicker_9: {},
  TextInput_11: {},
  Switch_13: {},
  Slider_15: {},
  CheckBox_32: {},
  TextInput_17: { height: 100 },
  CheckBox_19: {}
})

import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

type Props = {
  onImage: Function,
}

export default class CameraRoll extends React.Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button
          title="Take an photo with the camera"
          onPress={this._pickCamera}
        />
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    const { onImage } = this.props;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      onImage(result.uri);
    }
  };

  _pickCamera = async () => {
    const { onImage } = this.props;

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      onImage(result.uri);
    }
  };
}

import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions,TouchableWithoutFeedback,TouchableHighlight,Linking,FlatList,ScrollView} from 'react-native';
import Description from '../events/Description'

var {height,width}=Dimensions.get('window');

export default class ground1 extends Component {
  render() {
    return (
      <Description  description={"Date : February 07 & 08, 2019\nRegistration: Rs.300/Team(3 members)\n\nSpot registrations are available\nParticipants should have a valid college ID\n\nRegistered participants should collect their ASTHRA ID's for participating in any event from the registration desk \nNo accommodation will be provided\nE- Certificates will be provided\n*preference will be given to online registrations\n\nCONTACT DETAILS\nAbdul Hakkim Rahim : +91 8075334878\nDonna Thomas : +91 6282932369"} imageUri={require("./img/ground1.jpg")} Url={'https://docs.google.com/forms/d/e/1FAIpQLSfZQX9K3zfvhejspGiMci-dWcVRdUY8gkw8997nI2lV8KCCtw/viewform'} eventName={"Amphibian Drift "} ></Description>

    
      );
  }
};

const styles = StyleSheet.create({




})

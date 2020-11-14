/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

const {width} = Dimensions.get('window');

const App = () => {
  return (
    <>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.imageContainer}>
          <Image 
            source={{
              uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            }}
            style={{width: width/2.5, height: (width * 35) / 100, borderTopLeftRadius: 80,
              borderTopRightRadius: 80, borderBottomLeftRadius: 80, borderBottomRightRadius: 80}}
          />
          <View style={styles.textProfileContainer}>
            <TextInput
              value='Lacey Fernandez'
              style={styles.textProfile}
            />
            <TouchableOpacity style={styles.btnEditImageProfile}>
            <Image 
              source={{
                uri: 'https://webstockreview.net/images/how-to-edit-png-images-14.png',
              }}
              style={{width: 20, height: 20}}
            />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.cardProfileContainer}>
            <View>
              <Text style={styles.titleProfile}>USER PROFILE</Text>
            </View>
            <View>
              <Text style={styles.labelCard}>User Name</Text>
              <View style={styles.textContainer}>
                <Image 
                  source={{
                    uri: 'https://www.pinclipart.com/picdir/middle/181-1814767_person-svg-png-icon-free-download-profile-icon.png',
                  }}
                  style={styles.iconCard}
                />
                <TextInput 
                placeholder="Enter User Name"
                style={styles.textCard}
                />
              </View>
            </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C2BF'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#A141A9'
  },
  textProfile: {
    color: '#FFF'
  },
  textProfileContainer: {
    //flex: 1, 
    flexDirection: 'row'
  },
  cardProfileContainer: {
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    flex: 1,
    marginHorizontal: '4%',
    marginBottom: '5%',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnEditImageProfile: {
    backgroundColor: '#e1e1e1',
    height:40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    marginLeft:10
  },
  titleProfile: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor:"#e1e1e1",
    borderRadius: 25,
    paddingLeft: 5,
    //paddingVertical: 5
  },
  textCard: {
    marginLeft: 5
  },
  iconCard: {
    width: 30, 
    height: 30,
    marginTop: 10
  },
  labelCard: {
    color: 'purple',
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5
  }
});

export default App;

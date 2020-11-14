import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native';

const {width} = Dimensions.get('window');

const App = () => {
  const [switchMaleValue, setSwitchMaleValue] = useState(false);
  const [switchFemaleValue, setSwitchFemaleValue] = useState(false);
  const [editableValue, setEditableValue] = useState(false);
  const [userProfileValue, setUserProfileValue] = useState('Lacey Fernandez');
  const [showCard, setShowCard] = useState(true);
  const [data, setData] = useState('');

  const { username, cell, mail, date, sex } = data;

  let temp = {};

  const handleChangeForm = (e, name) => {
    //console.log(e);
    temp[name] = e;
    //setData(temp);
    //console.log(temp);
  }

  const toggleSwitchMale = (value) => {
    if(value)
      temp['sex'] = 'Male';
    console.log(temp);
    setSwitchMaleValue(value);
    setSwitchFemaleValue(!value);
    setData(temp);
    temp = data;
  };

  const toggleSwitchFemale = (value) => {
    if(value)
      temp['sex'] = 'Female';

    setSwitchFemaleValue(value);
    setSwitchMaleValue(!value);
    setData(temp);
    temp = data;
  };

  const aviso = () => {
    Alert.alert(
      'Aviso',
      'Esta funcionalidad aún no se encuentra habilitada',
      [{text: 'OK'}]
    )
  }
  const handleDisabled = () => {
    setEditableValue(!editableValue);
  }

  const handleChange = (e) => {
    setUserProfileValue(e.target.value);
  }

  const handleShow = () => {
    setShowCard(!showCard);
  }

  const handleSubmit = (data) => {
    setData(data);
    handleShow();
  }

  return (
    <>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={ ()=> aviso() }>
          <Image 
            source={{
              uri: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
            }}
            style={{width: width/2.5, height: (width * 35) / 100, borderTopLeftRadius: 80,
              borderTopRightRadius: 80, borderBottomLeftRadius: 80, borderBottomRightRadius: 80}}
          />
          </TouchableOpacity>
          <View style={styles.textProfileContainer}>
            <TextInput
              value={userProfileValue}
              style={styles.textProfile}
              editable={editableValue}
              onChange={handleChange}
              onBlur={handleDisabled}
            />
            <TouchableOpacity style={styles.btnEditImageProfile} onPress={handleDisabled}>
            <Image 
              source={{
                uri: 'https://webstockreview.net/images/how-to-edit-png-images-14.png',
              }}
              style={{width: 20, height: 20}}
            />
            </TouchableOpacity>
          </View>
        </View>
        {showCard ? (
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
                onChangeText={(text) => handleChangeForm(text, 'username')}
                />
              </View>
            </View>
            <View>
              <Text style={styles.labelCard}>Email Id</Text>
              <View style={styles.textContainer}>
                <Image 
                  source={{
                    uri: 'https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png',
                  }}
                  style={styles.iconCard}
                />
                <TextInput 
                placeholder="Enter Email"
                style={styles.textCard}
                keyboardType='email-address'
                onChangeText={(text) => handleChangeForm(text, 'mail')}
                />
              </View>
            </View>
            <View>
              <Text style={styles.labelCard}>Mobile Number</Text>
              <View style={styles.textContainer}>
                <Image 
                  source={{
                    uri: 'https://listimg.pinclipart.com/picdir/s/129-1294634_mobile-phone-icon-black-and-white-download-mobile.png',
                  }}
                  style={styles.iconCard}
                />
                <TextInput 
                placeholder="Enter your 10 digit mobile number"
                style={styles.textCard}
                keyboardType='numeric'
                onChangeText={(text) => handleChangeForm(text, 'cell')}
                />
              </View>
            </View>

            <View>
              <Text style={styles.labelCard}>Date of Birth</Text>
              <View style={styles.textContainer}>
                <Image 
                  source={{
                    uri: 'https://cdn.onlinewebfonts.com/svg/img_247795.png',
                  }}
                  style={styles.iconCard}
                />
                <TextInput 
                placeholder="DD / MM / YYYY"
                style={styles.textCard}
                onChangeText={(text) => handleChangeForm(text, 'date')}
                />
              </View>
            </View>

            <View>
              <Text style={styles.labelCard}>Sex</Text>
              <View style={styles.cardSexContainer}>
                <Switch onValueChange={toggleSwitchMale}
                value={switchMaleValue}/>
                <Text style={{marginRight: 40}}>Male</Text>
                <Switch 
                onValueChange={toggleSwitchFemale}
                value={switchFemaleValue}
                />
                <Text>Female</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.btnSave} onPress={()=>handleSubmit(data)}>
                <Text style={styles.btnTextSave}>Save</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
        
      ) : (
          <ScrollView style={styles.cardProfileContainer}>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>User Name</Text>
              <Text>{username}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Email Id</Text>
              <Text>{mail}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Mobile Number</Text>
              <Text>{cell}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Date of Birth</Text>
              <Text>{date}</Text>
            </View>
            <View style={styles.sectionData}>
              <Text style={styles.labelCard}>Sex</Text>
              <Text>{sex}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.btnSave} onPress={handleShow}>
                <Text style={styles.btnTextSave}>Regresar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
      )}
        
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
    backgroundColor: '#A141A9',
    paddingTop: 20
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
    borderRadius: 20,
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
    marginBottom: 15
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
  },
  cardSexContainer: {
    flexDirection: 'row',
  },
  btnTextSave: {
    textAlign: 'center',
    color: '#FFF'
  },
  btnSave: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 25,
    marginTop: 10
  },
  sectionData: {
    marginVertical: 20
  }
});

export default App;

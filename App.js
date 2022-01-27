import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity, Image, SafeAreaView, TouchableOpacityBase, YellowBox } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { palette } from './assets/Themes/palette';
import  Profiles  from './assets/Profiles';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigation_bar}>
        <TouchableOpacity
        // left menu button 
          style={styles.button} title="Menu" onPress={()=>{alert("you clicked menu")}}>
            <Image style={styles.menu_button} source={require("./assets/Icons/menu_light.png")} />
        </TouchableOpacity>
        <Text
        // app name 
          style={styles.app_name}>
            admin:gle
        </Text>
        <Text
        // app name 
          style={styles.slogan}>
            a place where Stanford admin can mingle!
        </Text>
        <TouchableOpacity 
        // right sun button 
          style={styles.button} title="button" onPress={()=>{alert("you clicked sun")}}>
            <Image style={styles.sun_button} source={require("./assets/Icons/sun.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <Text style={styles.user_name}>
          PERSIS DRELL 
        </Text>  
        <Text style={styles.distance}>
          5 miles away 
        </Text>  
        <Image // profile 
        style={styles.profile_photo}
        source={require("./assets/Profiles/drell.jpg")} />
      </View>
      <View style={styles.audio}>
         <Text style={styles.caption}>
          Persis-tent for love 
        </Text>
        <Image style={styles.play_button} source={require("./assets/Icons/player_light.png")} />
        <Image style={styles.wave} source={require("./assets/Icons/audio_waveform_light.png")} />
      </View>
      <View style={styles.bottom_bar}>
        <Image style={styles.discover} source={require("./assets/Icons/discover_light.png")} /> 
        <Image style={styles.matches} source={require("./assets/Icons/heart_light.png")} /> 
        <Image style={styles.dms} source={require("./assets/Icons/messages_light.png")} />
        <Text style={styles.discover_text}>
          Discover
        </Text>
        <Text style={styles.matches_text}>
          Matches
        </Text>
        <Text style={styles.dms_text}>
          Messages
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container for entire interface
  container: {
    backgroundColor: palette.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // navigation bar 
  navigation_bar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 41 : 54,
    width: '100%',
    backgroundColor: palette.lightGray,
    paddingBottom: 1,
    paddingLeft: 7, 
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // menu button 
  menu_button: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  // app name 
  app_name: { 
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: palette.black,
    fontStyle: "italic",
  },

  // slogan
  slogan: { 
    fontSize: 11,
    textAlign: 'center',
    color: palette.black,
    fontStyle: "italic",
    position: 'absolute',
    zIndex: 1,
    left: 85,
    top: 37,
  },

  // sun button 
  sun_button: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },

  // button 
  button: {
    height: 40,
    width: '20%',
    color: palette.black
  },

  profile: {
    marginTop: 20,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    borderRadius: 15,
  }, 

  // profile photo
  profile_photo: {
    paddingTop: 200,
    height: 440, 
    width: 340,
    borderWidth: 1,
    borderColor: 0,
    borderRadius: 15,
    marginBottom: 40,
  },

  // user_name 
  user_name: {
    position: 'absolute',
    zIndex: 1,
    top: 11, 
    left: 16,
    fontFamily: 'Sydney',
    fontSize: 32,
    color: palette.white, 
  },

  // user distance
  distance: {
    position: 'absolute',
    bottom: 15, 
    left: 16,
    zIndex: 1,
    fontSize: 18,
    color: palette.white, 
    fontFamily: 'Sydney',
    marginBottom: 35
  },


  // caption
  caption: {
    position: 'absolute',
    zIndex: 1,
    top: 8, 
    left: 16,
    fontFamily: 'Sydney',
    fontSize: 32,
    color: palette.black, 
  },

  audio: {
    width: '86%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20, 
    marginBottom: 20,
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: 0,
    borderRadius: 20,
    marginBottom: 50,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowRadius: Themes.light.shadows.shadowRadius,
    borderRadius: 15,

  },

  // play button 
  play_button: {
    marginTop: 40,
    bottom: -2, 
    left: -45,
    zIndex: 1,
    resizeMode: 'contain',
    height: 60,
  },

  // audio feature
  wave: {
    marginTop: 40,
    paddingTop: 10,
    position: 'absolute',
    bottom: 1, 
    left: 80,
    zIndex: 1,
    resizeMode: 'contain',
    height: '100%', 
    width: '70%',
  },

  bottom_bar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 71 : 84,
    width: '100%',
    backgroundColor: palette.black,
    paddingBottom: 1,
    paddingLeft: 7, 
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },

  discover: {
    flex: 1, 
    height: '50%',
    width: '90%',
    resizeMode: 'contain',
    bottom: 10, 
  },

  matches: {
    flex: 1, 
    height: '50%',
    width: '90%',
    resizeMode: 'contain',
    bottom: 10, 
  },

  dms: {
    flex: 1, 
    height: '50%',
    width: '90%',
    resizeMode: 'contain',
    bottom: 10, 
  },

  discover_text: {
    position: 'absolute',
    bottom: 7, 
    left: 45,
    zIndex: 1,
    fontFamily: 'Sydney',
    fontSize: 17,
    color: palette.white, 
  }, 

  matches_text: {
    position: 'absolute',
    bottom: 7, 
    left: 170,
    zIndex: 1,
    fontFamily: 'Sydney',
    fontSize: 17,
    color: palette.white, 
  }, 

  dms_text: {
    position: 'absolute',
    bottom: 7, 
    left: 290,
    zIndex: 1,
    fontFamily: 'Sydney',
    fontSize: 17,
    color: palette.white, 
  }, 

});

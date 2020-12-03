import * as React from 'react';

import { StyleSheet, Text, View ,Image} from 'react-native';



export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      weather:""
    }
  }
  getWeather=async()=>{
    var response= await fetch ("https://fcc-weather-api.glitch.me/api/current?lat=27.20&lon=77.49");
    var responseJson= await response.json();
    this.setState({weather:responseJson})
  }
  componentDidMount(){
    this.getWeather();
  }
  render(){

    if(this.state.weather===""){
      return (
    
        <View style={styles.container}>
          <Text>loading..</Text>
        </View>
      );
    }else{
      return (
    
        <View style={styles.container}>
          <Text style={styles.text}>Weather App</Text>
          <Image source={require("./clouds.png")} style={styles.cloud}/>

          <Text>Temp: {this.state.weather.main.temp}&deg;C</Text>
          <Text>Humidity: {this.state.weather.main.humidity}</Text>
          <Text>{this.state.weather.weather[0].description}</Text>
          <Text>{this.state.weather.sys.country}</Text>
        </View>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cloud:{
    width:200,
    height:200,
   
  },
  text:{
    fontSize:30,
    fontWeight:"bold",

  }
});

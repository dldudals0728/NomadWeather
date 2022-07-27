import * as Location from "expo-location";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fontisto, EvilIcons } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "2313943f7551acb56afa967e8de31834";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let now = new Date();
  let todayDate = now.getDate();
  let todayMonth = MONTH[now.getMonth()];
  let todayOfWeek = WEEK[now.getDay()];
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 100,
          }}
        >
          <EvilIcons name="navicon" size={24} color="black" />
          <Text style={styles.cityName}>{city}</Text>
          <Fontisto name="search" size={24} color="black" />
        </View>
        <View style={styles.date}>
          <Text style={{ fontSize: 30, fontWeight: "500" }}>{todayOfWeek}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.dateText}>{todayDate}</Text>
            <Text style={styles.dateText}>{todayMonth}</Text>
          </View>
        </View>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View
            style={{
              ...styles.day,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator
              color="white"
              style={{
                marginTop: 10,
              }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index}>
              <View style={styles.day}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: 50,
                    justifyContent: "space-between",
                    borderTopColor: "black",
                    borderTopWidth: "2",
                  }}
                >
                  <Text style={styles.temp}>
                    {parseFloat(day.temp.day).toFixed(1)}
                  </Text>
                  <Fontisto
                    name={icons[day.weather[0].main]}
                    size={68}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingBottom: 110,
                    borderBottomColor: "black",
                    borderBottomWidth: "2",
                  }}
                >
                  <Text style={styles.description}>{day.weather[0].main}</Text>
                  <Text style={styles.tinyText}>
                    {day.weather[0].description}
                  </Text>
                </View>
              </View>
              <View style={styles.weatherDetail}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "800",
                    }}
                  >
                    {parseFloat(day.temp.max).toFixed(1)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      paddingBottom: 50,
                    }}
                  >
                    {parseFloat(day.temp.min).toFixed(1)}
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "800",
                    }}
                  >
                    {isNaN(parseFloat(day.rain))
                      ? "No DATA"
                      : parseFloat(day.rain).toFixed(1)}
                    %
                    <Fontisto name="rain" size={18} color="black" />
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      paddingBottom: 50,
                    }}
                  >
                    {day.wind_speed} km/h wind
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <ExpoStatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  title: {
    flex: 0.5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cityName: {
    flex: 0.9,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  date: {
    flex: 3,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "500",
    paddingRight: 30,
  },
  weather: {},
  day: {
    flex: 2,
    width: SCREEN_WIDTH,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontSize: 100,
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    fontWeight: "500",
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    fontWeight: "500",
  },
  weatherDetail: {
    flex: 0.75,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

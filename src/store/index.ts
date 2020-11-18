import Axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    position: (null as unknown) as Coordinates,
    weatherData: null
  },
  mutations: {
    setWeatherData(state, payload) {
      state.weatherData = payload;
    },
    setPositionData(state, payload) {
      state.position = payload;
    }
  },
  actions: {
    updateWeatherData({ commit }) {
      Axios.get(
        // eslint-disable-next-line prettier/prettier
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          this.state.position.latitude
        }&lon=${
          this.state.position.longitude
        }&appid=${
          process.env.VUE_APP_OWM_KEY
        }&exclude=minutely,hourly,alerts`)
        .then(val => {
          commit("setWeatherData", val.data);
        })
        .catch(e => {
          console.error(e);
        });
    },
    updatePositionData({ commit }) {
      navigator.geolocation.getCurrentPosition(
        function(pos) {
          commit("setPositionData", pos.coords);
        },
        function(err) {
          console.error(err);
        }
      );
    }
  },
  modules: {}
});

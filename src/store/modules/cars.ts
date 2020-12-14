import axios, { AxiosResponse } from "axios";
const delay = (time: number | undefined) =>
  new Promise(res => setTimeout(res, time)); /// просто задержка для прелоадера
export default {
  state: {
    cars: {}
  },
  mutations: {
    updateCars(state: { cars: object }, cars: object) {
      state.cars = cars;
    }
  },
  actions: {
    async fetchCars(ctx: {
      commit: (arg0: string, arg1: void | AxiosResponse<any>) => void;
    }) {
      await delay(500);
      const cars = await axios.get("./json.json").catch(() => {
        console.log("err");
      });
      ctx.commit("updateCars", cars);
    }
  },
  getters: {
    getCars(state: any) {
      return state.cars;
    }
  }
};

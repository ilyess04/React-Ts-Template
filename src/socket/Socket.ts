import io from "socket.io-client";
import { Config } from "../common";

const Singleton = (function () {
  let instance: any;
  function createInstance() {
    var object = io(Config.getInstance().SOCKET_URL);
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
const socket = Singleton.getInstance();
export default socket;

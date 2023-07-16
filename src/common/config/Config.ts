class Config {
  SOCKET_URL = "";
  API_URL = "http//localhsot:8080";

  private static instance: Config;
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export { Config };

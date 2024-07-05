class Config {
  API_URL = "https://e-com-template-backend.onrender.com";

  private static instance: Config;
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export default Config;

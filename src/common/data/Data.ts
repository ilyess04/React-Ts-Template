import { TLangTranslate } from "../../interfaces";

class Data {
  static getAuthButtonTitle(
    tr: TLangTranslate,
    type: "login" | "forgotPassword" | "resetPassword"
  ): string {
    switch (type) {
      case "login":
        return tr("emailLogin");
      case "forgotPassword":
        return tr("requestPasswordReset");
      case "resetPassword":
        return tr("resetPassword");
    }
  }
  static getAuthFormTitle(
    tr: TLangTranslate,
    type: "login" | "forgotPassword" | "resetPassword"
  ): string {
    switch (type) {
      case "login":
        return tr("login");
      case "forgotPassword":
        return tr("forgotYourPassword");
      case "resetPassword":
        return tr("resetYourPassword");
    }
  }
}
export default Data;

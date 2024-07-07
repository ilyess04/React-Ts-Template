import { arFlag, enFlag, frFlag } from "../../assets";
import { TLangTranslate } from "../../interfaces";
import { Elang } from "../enums";

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
  static getDropDownLangData(tr: TLangTranslate) {
    return [
      { src: enFlag, label: tr("english"), value: Elang.en },
      { src: frFlag, label: tr("french"), value: Elang.fr },
      { src: arFlag, label: tr("arabic"), value: Elang.ar },
    ];
  }
}
export default Data;

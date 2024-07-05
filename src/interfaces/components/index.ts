import { EInputTypes } from "../../common/enums";
import { ICommonComponent } from "../common";
interface IPageTitle extends ICommonComponent {
  title: string;
  size?: number;
}
interface ICheckbox extends ICommonComponent {
  title: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}
interface ILabel extends ICommonComponent {
  text: string;
  isObligatory: boolean;
  isTwoPoints?: boolean;
}
interface IInput extends ICommonComponent {
  label?: string;
  isObligatoryLabel?: boolean;
  labelStyle?: React.CSSProperties;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  type?: EInputTypes;
  inputClassName?: string;
}
interface IAuthForm extends ICommonComponent {
  isLoading: boolean;
  email?: string;
  passWord?: string;
  type: "login" | "forgotPassword" | "resetPassword";
  onChangeEmail?: (email: string) => void;
  onChangePassWord?: (passWord: string) => void;
  confirmPassWord?: string;
  onChangeConfirmPassWord?: (confirmPassWord: string) => void;
  isRemembred?: boolean;
  onChangeIsRemembred?: (isRemembred: boolean) => void;
  onSubmit: () => void;
}
interface IButton extends ICommonComponent {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
}
interface ISidebarMenuItem {
  title: string;
  link: string;
  icon: React.ReactNode;
  subItems?: ISubMenuItem[];
}
interface ISubMenuItem {
  title: string;
  link: string;
}
interface ITextLink extends ICommonComponent {
  linkText: string;
  href: string;
}

export type {
  IPageTitle,
  ICheckbox,
  ILabel,
  IInput,
  IAuthForm,
  IButton,
  ISidebarMenuItem,
  ISubMenuItem,
  ITextLink,
};

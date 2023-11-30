import { EInputTypes } from "../../enums";
import { ICommonComponent } from "../common";

interface IPageTitle extends ICommonComponent {
  title: string;
  size?: number;
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
  value: string | number;
  onChange: (value: string | number) => void;
  type?: EInputTypes;
  inputClassName?: string;
}
export type { IPageTitle, ILabel,IInput };

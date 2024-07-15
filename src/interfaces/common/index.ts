import { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface ICommonComponent {
  className?: string;
  style?: React.CSSProperties;
}
interface ICommonLayout {
  children?: React.ReactNode;
}
type TLangTranslate = (key: string) => string;

export type {
  IKeys,
  ICommonComponent,
  ICommonLayout,
  TLangTranslate,
};

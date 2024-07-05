import { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface IPageProps {
  children: JSX.Element | null | undefined | ReactNode;
}
interface ICommonComponent {
  className?: string;
  style?: React.CSSProperties;
}
interface ICommonLayout {
  children: React.ReactNode;
}
type TLangTranslate = (key: string) => string;

export type {
  IKeys,
  IPageProps,
  ICommonComponent,
  ICommonLayout,
  TLangTranslate,
};

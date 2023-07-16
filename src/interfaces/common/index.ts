import { ReactNode } from "react";

interface IKeys {
  [key: string]: string;
}
interface IPageProps {
  children: JSX.Element | null | undefined | ReactNode;
}
export type { IKeys, IPageProps };

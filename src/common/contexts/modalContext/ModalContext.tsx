import React, { ReactNode } from "react";

const ModalContext = React.createContext<
  { open: (children?: ReactNode) => void; close: () => void } | undefined
>(undefined);
export default ModalContext;

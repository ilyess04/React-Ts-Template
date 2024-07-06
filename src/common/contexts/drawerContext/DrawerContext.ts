import React, { ReactNode } from "react";

const DrawerContext = React.createContext<
  { open: (children?: ReactNode) => void; close: () => void } | undefined
>(undefined);
export default DrawerContext;

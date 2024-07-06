import { ReactNode, useState } from "react";
import { DrawerContext } from "../../common/contexts";
import Drawer from "react-modern-drawer";

const DrawerProvider = (props: { children?: ReactNode }) => {
  const [children, setChildren] = useState<ReactNode | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <DrawerContext.Provider
      value={{
        open: (children: ReactNode) => {
          setChildren(children);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
      }}
    >
      <Drawer
      className="ds-bg-white"
        direction="right"
        open={isOpen}
        size={window.innerWidth * 0.4}
        enableOverlay
        onClose={() => setIsOpen(false)}
      >
        {children}
      </Drawer>
      {props?.children}
    </DrawerContext.Provider>
  );
};
export default DrawerProvider;

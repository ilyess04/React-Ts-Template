import { ReactNode, useState } from "react";
import { ModalContext } from "../../common/contexts";
import { Modal } from "react-bootstrap";

const ModalProvider = (props: { children?: ReactNode }) => {
  const [children, setChildren] = useState<ReactNode | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        open: (children: ReactNode) => {
          setChildren(children);
          setIsOpen(true);
        },
        close: () => setIsOpen(false),
      }}
    >
      <Modal
        show={isOpen}
        centered
        onHide={() => setIsOpen(false)}
        onExit={() => setIsOpen(false)}
      >
        <Modal.Body
          className="ds-bg-white"
          style={{
            minHeight: window.innerHeight * 0.5,
            minWidth: window.innerWidth * 0.5,
            borderRadius: 5,
          }}
        >
          {children}
        </Modal.Body>
      </Modal>
      {props?.children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;

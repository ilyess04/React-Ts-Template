import React, { ReactNode } from "react";
import { useLanguages, useTranslation } from "../../../customHooks";
import { Dropdown } from "react-bootstrap";
import Avatar from "react-avatar";
import { Data } from "../../../common";

const SelectLangDropdown = (): JSX.Element => {
  const { isRtl, getStoredLangFlag, changeLang } = useLanguages();
  const { tr } = useTranslation();
  return (
    <Dropdown drop="down" align={isRtl ? "start" : "end"}>
      <Dropdown.Toggle
        as={React.forwardRef<
          HTMLDivElement,
          { children?: ReactNode; onClick: (e: React.MouseEvent) => void }
        >(({ children, onClick }, ref) => (
          <div className="cursor-pointer" ref={ref} onClick={onClick}>
            {children}
          </div>
        ))}
        children={<Avatar size="25" round src={getStoredLangFlag()} />}
      />
      <Dropdown.Menu>
        {Data.getDropDownLangData(tr).map(({ src, label, value }, index) => (
          <Dropdown.Item
            key={index}
            className="flex"
            onClick={() => changeLang(value)}
          >
            <Avatar size="20" round src={src} />
            <div className="ps-2">{label}</div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default SelectLangDropdown;

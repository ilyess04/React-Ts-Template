import { ILabel } from "../../../interfaces/components";

const Label = ({
  className,
  style,
  text,
  isObligatory,
  isTwoPoints,
}: ILabel) => {
  return (
    <div className={className} style={style}>
      <span className="ds-label">
        {text} {isObligatory && <span className="ds-obligatory-label">* </span>}
        {isTwoPoints && <span>:</span>}
      </span>
    </div>
  );
};
export default Label;

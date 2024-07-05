import { EInputTypes } from "../../../common/enums";
import { IAuthForm } from "../../../interfaces/components";
import { useTranslation } from "../../../customHooks";
import { Button, PageTitle, TextLink } from "../../atoms";
import { Input } from "..";
import { Data } from "../../../common";
import { Checkbox } from "../../molecules";

const AuthForm = ({
  className,
  style,
  type,
  email,
  onChangeEmail,
  onChangePassWord,
  passWord,
  confirmPassWord,
  onChangeConfirmPassWord,
  isRemembred,
  onChangeIsRemembred,
  onSubmit,
}: IAuthForm): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <div
      className={`${className} mb-3`}
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        ...style,
      }}
    >
      <PageTitle className="mb-3" title={Data.getAuthFormTitle(tr, type)} />
      {(type === "login" || type === "forgotPassword") && (
        <Input
          className="mb-3"
          onChange={(value) =>
            onChangeEmail && typeof value === "string" && onChangeEmail(value)
          }
          value={email}
          type={EInputTypes.email}
          placeholder={tr("enterYourEmail")}
        />
      )}
      {(type === "login" || type === "resetPassword") && (
        <Input
          className="mb-3"
          onChange={(value) =>
            onChangePassWord &&
            typeof value === "string" &&
            onChangePassWord(value)
          }
          value={passWord}
          type={EInputTypes.password}
          placeholder={tr("enterYourPassword")}
        />
      )}
      {type === "resetPassword" && (
        <Input
          className="mb-3"
          onChange={(value) =>
            onChangeConfirmPassWord &&
            typeof value === "string" &&
            onChangeConfirmPassWord(value)
          }
          value={confirmPassWord}
          type={EInputTypes.password}
          placeholder={tr("confirmNewPassword")}
        />
      )}
      {type === "login" && (
        <>
          <TextLink
            className="mb-3"
            href="/forgot-password"
            linkText={tr("forgotYourPassword")}
          />
          <Checkbox
            className="mb-3"
            title={tr("KeepMeLoggedIn")}
            isChecked={isRemembred}
            onChange={(isChecked) =>
              onChangeIsRemembred && onChangeIsRemembred(isChecked)
            }
          />
        </>
      )}
      <div className="justify-center d-flex">
        <Button onClick={onSubmit} title={Data.getAuthButtonTitle(tr, type)} />
      </div>
    </div>
  );
};

export default AuthForm;

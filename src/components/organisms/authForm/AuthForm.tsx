import { EInputTypes } from "../../../common/enums";
import { IAuthForm } from "../../../interfaces/components";
import { useTranslation } from "../../../customHooks";
import { Button, PageTitle, TextLink } from "../../atoms";
import { Input } from "..";
import { Data } from "../../../common";
import { Checkbox } from "../../molecules";
import { useMemo } from "react";

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

  const authPageTitle = useMemo(
    () => Data.getAuthFormTitle(tr, type),
    [tr, type]
  );
  const authButtontitle = useMemo(
    () => Data.getAuthButtonTitle(tr, type),
    [tr, type]
  );

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
      <PageTitle className="mb-3" title={authPageTitle} />
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
      <div className="justify-center flex">
        <Button onClick={onSubmit} title={authButtontitle} />
      </div>
    </div>
  );
};

export default AuthForm;

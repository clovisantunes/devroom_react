import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ButtonUIProps {
  text?: string;
  fontSize: string;
  width: string;
  height: string;
  localPath: string;
  click?: any;
  target?: string;
  icon?: ReactNode;
}
interface ButtonServiceProps {
  text: string;
  fontSize: string;
  width: string;
  height: string;
  click?: any;
  contact: string;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ width, height, text, fontSize, localPath, click, target, icon  }) => {
  return (
    <div className={styles.buttonUi} style={{ fontSize, width, height }} onClick={click}>
         <Link to={localPath}>
        {icon}{text}
        </Link>
    </div>
  );
};
const ButtonIcon: React.FC<ButtonUIProps> = ({ width, height, text, fontSize,  click,  icon  }) => {
  return (
    <div className={styles.buttonUi} style={{ fontSize, width, height }} onClick={click}>
        {icon}{text}
    </div>
  );
};

const ButtonServices: React.FC<ButtonServiceProps> = ({ fontSize, height, width, click, text, contact }: ButtonServiceProps) => {
  return(
    <div className={styles.buttonServices} style={{ fontSize, width, height }} onClick={click}>
      <a href={contact}>
        {text}
      </a>
    </div>
  );
}
const ButtonContact: React.FC<ButtonServiceProps> = ({ fontSize, height, width, click, text, contact }: ButtonServiceProps) => {
  return(
    <div className={styles.buttonContact} style={{ fontSize, width, height }} onClick={click}>
      <a href={contact} target="blank">
        {text}
      </a>
    </div>
  );
}

export { ButtonUI, ButtonServices, ButtonContact, ButtonIcon };

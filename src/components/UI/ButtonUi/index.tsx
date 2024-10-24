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
  fontSize?: string;
  width: string;
  background?: string;
  height: string;
  click?: any;
  color?: string;
  contact?: string;
  localPath?: string;
  icon?: ReactNode;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ width, height, text, fontSize, localPath, click, target, icon }) => {
  return (
    <div className={styles.buttonUi} style={{ fontSize, width, height }}>
      <Link to={localPath} onClick={click} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {icon}
        {text}
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

const ButtonServices: React.FC<ButtonServiceProps> = ({ fontSize, height, width, click, text, background, color, icon }: ButtonServiceProps) => {
  return(
    <div className={styles.buttonServices} style={{ fontSize, width, height, background, color}} onClick={click}>
        {icon}{text}
    </div>
  );
}
const ButtonContact: React.FC<ButtonServiceProps> = ({ fontSize, height, width, click, text, localPath, icon }: ButtonServiceProps) => {
  return(
    <div className={styles.buttonContact} style={{ fontSize, width, height }} onClick={click}>
      <Link to={localPath}>
        {text}{icon}
        </Link>
    </div>
  );
}

export { ButtonUI, ButtonServices, ButtonContact, ButtonIcon };

import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { ButtonIcon, ButtonUI } from "../UI/ButtonUi";
import { MdOutlineClose } from "react-icons/md";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { useTranslation } from "react-i18next";

interface Technology {
  icon: ReactNode;
  name: string;
}
interface modalProps {
  modalItem: {
    name: string;
    deploy: string;
    descriptions: {
      title: string;
      spanI: string;
      spanII: string;
    };
    backgroundVideo: string;
  };
  isOpen: boolean;
  onRequestClose: () => void;
}
export function ModalItem({
  modalItem,
  isOpen,
  onRequestClose,
}: modalProps) {
  const { t, i18n } = useTranslation();
  if (!isOpen) {
    return null;
  }
  const isStreamableURL = (url: string) => url.includes("streamable");
  const renderMedia = (url: string) => {
    if (isStreamableURL(url)) {
      return (
        <iframe
        className={styles.videoFrame}
          allow="fullscreen;autoplay"
          allowFullScreen
          height="100%"
          src={url}
          width="100%"
        ></iframe>
      );
    } else {
      return (
        <img
          src={url}
          alt="background"
        />
      );
    }
  };
  
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalApresentation}>
        
        {renderMedia(modalItem.backgroundVideo)}
        </div>
        <div className={styles.description}>
          <TitleText colorText="white" text={modalItem.descriptions.title} />
          <div className={styles.spanCard}>
            <span>{modalItem.descriptions.spanI}</span>
            <span>{modalItem.descriptions.spanII}</span>
          </div>
          <div className={styles.techCard}>
            <div className={styles.techItems}>
              <ButtonUI 
                fontSize="16px"
                height="100%"
                width="100%"
                text={"Adquira este template"}
                localPath={`/services#${modalItem.deploy}`}
              />
            </div>
            <span>
              Somente um lembrete!
            </span>
            <span>
            *Todos os textos, imagens e botões são personalizados de acordo com a sua escolha! 
            </span>
          </div>
        </div>
        <div className={styles.closeButton}>
          <ButtonIcon
            icon={<MdOutlineClose />}
            fontSize="24px"
            height="600"
            localPath="#"
            width="100%"
            click={onRequestClose}
          />
        </div>
      </div>
    </>
  );
}

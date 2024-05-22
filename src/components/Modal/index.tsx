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
    repository: string;
    tecnologies: Technology[];
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
          style={{ width: "100%", height: "80%", objectFit: "cover" }}
        />
      );
    }
  };
  
  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalApresentation}>
        
        {renderMedia(modalItem.backgroundVideo)}
          <div className={styles.buttons}>
            <div className={styles.buttonsItem}>
              <ButtonUI
                fontSize="12px"
                height="100%"
                width="100%"
                localPath={modalItem.repository}
                text={t('git')}
                target="__blank"
              />
            </div>
            <div className={styles.buttonsItem}>
              {modalItem.deploy && (
                <ButtonUI
                  fontSize="12px"
                  height="100%"
                  width="100%"
                  localPath={modalItem.deploy}
                  text={t('deploy')}
                  target="__blank"
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <TitleText colorText="white" text={modalItem.descriptions.title} />
          <div className={styles.spanCard}>
            <span>{modalItem.descriptions.spanI}</span>
            <span>{modalItem.descriptions.spanII}</span>
          </div>
          <div className={styles.techCard}>
            <SubTexts colorText="white" text={t('textModal')} />
            <div className={styles.techItems}>
              {modalItem.tecnologies.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
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

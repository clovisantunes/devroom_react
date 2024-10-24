import styles from './styles.module.scss'
import { RiComputerLine } from "react-icons/ri";
import { IoMdCloudDone } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { GiPaintBrush } from "react-icons/gi";
import { useTranslation } from 'react-i18next';
import { MdOutlinePaid } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";


export default function ServicesItems() {
    const {t} = useTranslation();
    const services: {
        title: string;
        logo?: JSX.Element;
        service: string[];
    }[] = [
        {
            title: t("serviceWeb"),
            logo: <MdOutlinePaid size={30} />,
            service: [
                t("serviceWebItem1"),
             
            ]
        },
        {
            title: t("serviceHost"),
            logo: <MdOutlineDesignServices size={30} />,
            service: [
                t("hostItem1"),
                
            ]
        },
        {
            title: t("serviceMarketing"),
            logo: <BsMegaphone size={30} />,
            service: [
                t("digitalMarketingItem1"),
              
            ]
        },
        {
            title: t("serviceDesign"),
            logo: <HiOutlinePaintBrush size={30} />,
            service: [
                t("designItem1"),
          
            ]
        },
        {
            title: t("suporteTecnico"),
            logo: <BiSupport size={30} />,
            service: [
                t("suporteTecnico1"),
          
            ]
        },
        {
            title: t("landingPages"),
            logo: <RiComputerLine size={30} />,
            service: [
                t("landingPages1"),
          
            ]
        },
    ];

    return (
        <>
            <div className={styles.servicesItems}>
                {services.map((service, index) => (
                    <div key={index} className={styles.servicesItem}>
                        <div className={styles.nameLogo}>
                            <span>{service.logo}</span>
                            <div className={styles.name}>
                                <h3>{service.title}</h3>
                                <div className={styles.line}/>
                            </div>
                        </div>
                        <ul className={styles.servicesUl}>
                            {service.service.map((item, index) => (
                                <li className={styles.serviceLi} key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>   
        </>
    )
}
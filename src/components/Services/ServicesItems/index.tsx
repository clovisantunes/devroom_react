import styles from './styles.module.scss'
import { RiComputerLine } from "react-icons/ri";
import { IoMdCloudDone } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { GiPaintBrush } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

export default function ServicesItems() {
    const {t} = useTranslation();
    const services: {
        title: string;
        logo?: JSX.Element;
        service: string[];
    }[] = [
        {
            title: t("serviceWeb"),
            logo: <RiComputerLine size={30} />,
            service: [
                t("serviceWebItem1"),
                t("serviceWebItem2"),
                t("serviceWebItem3"),
                t("serviceWebItem4"),
                t("serviceWebItem5"),
                t("serviceWebItem6")
            ]
        },
        {
            title: t("serviceHost"),
            logo: <IoMdCloudDone size={30} />,
            service: [
                t("hostItem1"),
                t("hostItem2"),
                t("hostItem3"),
                t("hostItem4"),
                t("hostItem5")
            ]
        },
        {
            title: t("serviceMarketing"),
            logo: <IoIosRocket size={30} />,
            service: [
                t("digitalMarketingItem1"),
                t("digitalMarketingItem2"),
                t("digitalMarketingItem3"),
                t("digitalMarketingItem4")
            ]
        },
        {
            title: t("serviceDesign"),
            logo: <GiPaintBrush size={30} />,
            service: [
                t("designItem1"),
                t("designItem2"),
                t("designItem3")
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
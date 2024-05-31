import styles from './styles.module.scss'
import { RiComputerLine } from "react-icons/ri";
import { IoMdCloudDone } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { GiPaintBrush } from "react-icons/gi";

export default function ServicesItems() {
    const services: {
        title: string;
        logo?: JSX.Element;
        service: string[];
    }[] = [
        {
            title: 'Desenvolvimento Web',
            logo: <RiComputerLine size={30} />,
            service: [
                "Criação de sites apartir de R$ 200,00",
                "Criação de sites customizados",
                "Criação de landing pages",
                "Criação de Blogs de noticias",
                "SEO e otimizações",
                "Criação de sites em React ou Next"
            ]
        },
        {
            title: 'Hospedagem',
            logo: <IoMdCloudDone size={30} />,
            service: [
                "Hospedagem de alta velocidade",
                "Certificado de segurança SSL",
                "Email corporativo",
                "Registro de domínio",
                "Suporte técnico continuo"
            ]
        },
        {
            title: 'Marketing Digital',
            logo: <IoIosRocket size={30} />,
            service: [
                "Campanhas Google ADS",
                "Campanhas Instagram ADS",
                "Campanhas Facebook ADS",
                "Tags de conversão"
            ]
        },
        {
            title: 'Design',
            logo: <GiPaintBrush size={30} />,
            service: [
                "Criação de Design’s",
                "Identidade Visual",
                "Prototipação",
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
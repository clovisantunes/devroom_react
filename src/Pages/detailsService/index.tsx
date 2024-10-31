import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';
import Team from '../../components/Team';
import styles from './styles.module.scss';
import text from './utils/text.json';
import { useEffect, useState } from 'react';
import marketingImage from '../../assets/images/services/marketing.png';
interface ServiceProps {
    id: string;
    title: string;
    backgroundMain: "string";
    subTitle: string[];
    description: string[];
    images: string[];
    services: string[];
}

const details: ServiceProps[] = text as ServiceProps[];
export default function DetailService(){
    const location = useLocation();
    const [selectedService, setSelectedService] = useState<ServiceProps | null>(
        null
    );

    useEffect(() =>{
        const serviceHash = location.hash.replace("#", "");

        const serviceData = details.find((service) => {
            return service.id === serviceHash;
        });
        setSelectedService(serviceData || null);
    }, [location.hash]);

    const getImage = (imageName: string) => {
        try {
          return require(`../../assets/images/services/${imageName}`);
        } catch (error) {
          console.error("Imagem não encontrada:", imageName);
          return "";
        }
      };

    return(
        <>
            <NavBar 
                 home="/"
                 about="#portfolio"
                 contact="/contact"
                 services="#services"  
                 portfolio='#portfolio'
            />
            <div className={styles.detailServiceContainer}>
                {selectedService ? (
                    <div className={styles.detailMain}>
                    <h1>
                        Serviços
                    </h1>
                    <p>
                        Inicio\Serviços\{selectedService.title}
                    </p>
                        <img src={getImage(selectedService.backgroundMain)} alt={selectedService.title} />
                </div>
        ) : (
            <p>Serviço não encontrado</p>
        )}
            </div>

            <Team />
            <Footer 
                iconColor=''
                id=''
                textColor=''
            
            />
        </>
    )
}
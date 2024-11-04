import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Team from "../../components/Team";
import styles from "./styles.module.scss";
import text from "./utils/text.json";
import { useEffect, useState } from "react";
import marketingImage from "../../assets/images/services/marketing.png";
import { SiAffinitypublisher } from "react-icons/si";
import Banner from "../../components/Banner";
import WhatsContact from "../../components/UI/WhatsContact";
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
export default function DetailService() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<ServiceProps | null>(
    null
  );

  useEffect(() => {
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

  return (
    <>
      <NavBar
        home="/"
        about="#portfolio"
        contact="/contact"
        services="/#services"
        portfolio="#portfolio"
        color="black"
      />
      <div className={styles.detailServiceContainer}>
        {selectedService ? (
          <>
            <div className={styles.detailMain}>
              <div className={styles.detailBanner}>
                <h1>Serviços</h1>
                <span>
                  Inicio\Serviços\<p>{selectedService.title}</p>
                </span>
              </div>
              <div className={styles.blur} />
              <img
                src={getImage(selectedService.backgroundMain)}
                alt={selectedService.title}
              />
            </div>
            <div className={styles.detailsDescription}>
              <div className={styles.detailsTitle}>
                <h2>{selectedService.title}</h2>
              </div>
              <div className={styles.detailsText}>
                <div className={styles.titleContent}>
                  <h3>{selectedService.subTitle[0]}</h3>
                  <span>{selectedService.description[0]}</span>
                </div>
                <img
                  src={getImage(selectedService.images[0])}
                  alt={selectedService.title}
                />
              </div>
              <div className={styles.detailsSubText}>
                <img
                  src={getImage(selectedService.images[1])}
                  alt={selectedService.title}
                />
                <div className={styles.titleContent}>
                  <h3>{selectedService.subTitle[1]}</h3>
                  <span>{selectedService.description[1]}</span>
                </div>
              </div>
            </div>
            <div className={styles.servicesContent}>
                <h3>Serviços<span>:</span></h3>
                <div className={styles.servicesGrid}>
                    {selectedService.services.map((service) => (
                        <span key={service}>{service}</span>
                    ))}
                </div>
            </div>
          </>
        ) : (
          <p>Serviço não encontrado</p>
        )}
      </div>
      <Banner />
      <Team />
      <WhatsContact />
      <Footer iconColor="" id="" textColor="" />
    </>
  );
}

import styles from './styles.module.scss';
import image1 from '../../assets/images/team1.png';
import image2 from '../../assets/images/team2.png';


export default function Team() {
    const team = [
        {
            name: 'Clovis',
            image: image1,
            description: 'Clovis é responsável pelo desenvolvimento de soluções digitais na DevRoom. Com ampla experiência em programação e otimização de sistemas, ele se dedica a criar plataformas eficientes e inovadoras, sempre focado em desempenho e usabilidade para atender às necessidades dos clientes.',
            site: 'https://clovis-antunes.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/clovis-antunes/'
        },
        {
            name: 'Dandara',
            image: image2,
            description: 'Dandara atua no design criativo da DevRoom, especializada em desenvolver interfaces visuais atraentes e funcionais. Com foco na experiência do usuário e nas tendências modernas de design, ela transforma ideias em soluções visuais impactantes e acessíveis, garantindo uma comunicação clara e envolvente.',
            site: 'https://portifolio-dandara.vercel.app/',
            linkedin: 'https://www.linkedin.com/in/dandara-bianca-0b3591260/'
        }
    ];

    return (
        <div className={styles.teamContainer}>
            <div className={styles.TextTeam}>
                <h2>
                    Conheça nossa equipe<span>:</span>
                </h2>
                <span>
                    Nossa equipe é composta por duas pessoas apaixonadas pelo que fazem. Juntos, unimos experiência e criatividade para oferecer soluções personalizadas e eficientes. Cada um de nós traz habilidades complementares, garantindo que todos os aspectos do nosso trabalho sejam atendidos com excelência e atenção aos detalhes. 
                </span>
                <span>
                    Nosso compromisso é entregar resultados de alta qualidade, com foco total nas necessidades de nossos clientes.
                </span>
            </div>
            <div className={styles.imageTeam}>
                {team.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <h3>{member.name}</h3>
                        <img src={member.image} alt={member.name} />
                        <p>{member.description}</p>
                        <div className={styles.buttons}>
                        {member.site && (
                            <a href={member.site} target="_blank" rel="noopener noreferrer">
                                Saiba Mais
                            </a>
                        )}
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                                Linkedin
                            </a>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

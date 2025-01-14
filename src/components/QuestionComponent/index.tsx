import { useState } from 'react';
import styles from './styles.module.scss';

export default function Questions() {
    const questions = [
        {
            question: "Como funciona o processo de criação do meu site?",
            answer: "Assim que recebemos todas as informações necessárias, iniciamos o desenvolvimento imediatamente e mantemos você informado sobre o progresso.",
        },
        {
            question: "O site será responsivo?",
            answer: "Sim! Todos os nossos sites são projetados para funcionar perfeitamente em computadores, tablets e celulares.",
        },
        {
            question: "Vocês oferecem suporte técnico após a entrega?",
            answer: "Você pode solicitar um orçamento através do e-mail:",
        },
        {
            question: "Vocês registram o domínio e configuram o e-mail?",
            answer: "Sim! Podemos registrar o domínio e configurar e-mails personalizados para sua empresa.",
        },
        {
            question: "Como faço para atualizar meu site no futuro?",
            answer: "Oferecemos pacotes de manutenção para que você possa manter seu site sempre atualizado.",
        },
        {
            question: "Vocês criam sites para qualquer tipo de negócio?",
            answer: "Sim! Desenvolvemos sites para empresas, freelancers, lojas virtuais e até mesmo projetos pessoais. Basta nos informar suas necessidades.",
        },
        {
            question: "Quanto custa para criar um site?",
            answer: "O valor varia de acordo com o tipo de site e as funcionalidades desejadas. Envie-nos uma mensagem para receber um orçamento personalizado.",
        },
        {
            question: "Meu site será rápido para carregar?",
            answer: "Sim! Otimizamos o desempenho do seu site para que ele carregue rapidamente e ofereça a melhor experiência para os usuários.",
        },
        {
            question: "O site estará disponível em mais de um idioma?",
            answer: "Sim, podemos criar versões do seu site em diferentes idiomas para atender a um público global.",
        },
        {
            question: "Vocês criam landing pages para campanhas específicas?",
            answer: "Sim, desenvolvemos páginas focadas em conversões para campanhas de marketing ou promoções.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.questionsContainer}>
            <h1>
            Duvidas? Nós respondemos!
            </h1>
            {questions.map((item, index) => (
                <div key={index} className={styles.questionItem}>
                    <button
                        className={styles.questionButton}
                        onClick={() => handleClick(index)}
                    >
                        {item.question}
                    {activeIndex === index && (
                        <p className={`${styles.answerText} ${activeIndex === index ? styles.show : ''}`}>
                            {item.answer}
                        </p>
                    )}
                    </button>
                </div>
            ))}
        </div>
    );
}

import { useState } from 'react';
import styles from './styles.module.scss';
import { ButtonUI } from '../UI/ButtonUi';
import imagem1 from '../../assets/images/products/teclado.jpg';
import imagem2 from '../../assets/images/products/mouse.jpeg';
import imagem3 from '../../assets/images/products/monitor.jpg';
import imagem4 from '../../assets/images/products/4060.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';


const produtosMaisVendidos = [
    { id: 1, foto: imagem1, categoria: 'Hardware', subcategoria: 'Teclados', nome: 'Teclado Mecânico', valor: 250, valorPromocional: 200 },
    { id: 2, foto: imagem2, categoria: 'Periféricos', subcategoria: 'Mouses', nome: 'Mouse Gamer', valor: 150, valorPromocional: 120 },
    { id: 3, foto: imagem3, categoria: 'Hardware', subcategoria: 'Monitores', nome: 'Monitor Full HD', valor: 800, valorPromocional: 750 },
    { id: 4, foto: imagem4, categoria: 'Hardware', subcategoria: 'Placas de Vídeo', nome: 'Placa de Vídeo', valor: 2000, valorPromocional: 1800 },
    { id: 5, foto: 'caminho/para/imagem5.jpg', categoria: 'Hardware', subcategoria: 'SSDs', nome: 'SSD 1TB', valor: 450, valorPromocional: 400 },
    { id: 6, foto: 'caminho/para/imagem6.jpg', categoria: 'Hardware', subcategoria: 'Fontes', nome: 'Fonte 600W', valor: 350, valorPromocional: null },
    { id: 7, foto: 'caminho/para/imagem4.jpg', categoria: 'Hardware', subcategoria: 'Placas de Vídeo', nome: 'Placa de Vídeo', valor: 2000, valorPromocional: 1800 },
    { id: 8, foto: 'caminho/para/imagem5.jpg', categoria: 'Hardware', subcategoria: 'SSDs NVMe', nome: 'SSD NVMe 1TB', valor: 550, valorPromocional: 500 },
    { id: 9, foto: 'caminho/para/imagem6.jpg', categoria: 'Hardware', subcategoria: 'Fontes', nome: 'Fonte 600W', valor: 350, valorPromocional: null },
    { id: 10, foto: 'caminho/para/imagem4.jpg', categoria: 'Hardware', subcategoria: 'Placas de Vídeo', nome: 'Placa de Vídeo', valor: 2000, valorPromocional: 1800 },
    { id: 11, foto: 'caminho/para/imagem5.jpg', categoria: 'Hardware', subcategoria: 'SSDs', nome: 'SSD 1TB', valor: 450, valorPromocional: 400 },
    { id: 12, foto: 'caminho/para/imagem6.jpg', categoria: 'Hardware', subcategoria: 'Fontes', nome: 'Fonte 600W', valor: 350, valorPromocional: null },
];

export default function MoreSellComponent() {
    const [startIndex, setStartIndex] = useState(0); 
    const produtosPorPagina = 4;

    const handleNext = () => {
        if (startIndex + produtosPorPagina < produtosMaisVendidos.length) {
            setStartIndex(startIndex + produtosPorPagina);
        }
    };

    const handlePrev = () => {
        if (startIndex - produtosPorPagina >= 0) {
            setStartIndex(startIndex - produtosPorPagina);
        }
    };

    const produtosVisiveis = produtosMaisVendidos.slice(startIndex, startIndex + produtosPorPagina);
    
   

    return (
        <div className={styles.moreSellComponent}>
            <div className={styles.moreSellComponent__container}>
                <div className={styles.moreSellComponent__divider}>
                <h2>Precisando de produtos para seu computador?</h2>
                <ButtonUI 
                    fontSize='1.5rem'
                    height='2rem'
                    width='6rem'
                    text='Ver mais'
                    localPath='/shop'
                    />
                    </div>    
                <div className={styles.carousel}>
                    <button onClick={handlePrev} disabled={startIndex === 0} className={styles.carouselButton}>
                        <IoIosArrowBack />
                    </button>
                    <div className={styles.produtosGrid}>
                        {produtosVisiveis.map((produto) => (
                            <div key={produto.id} className={styles.produtoCard}>
                                <img
                                    src={produto.foto}
                                    alt={`Imagem do produto ${produto.nome}`}
                                    className={styles.produtoImagem}
                                />
                                <div className={styles.produtoDetalhes}>
                                    <p className={styles.produtoCategoria}>{produto.categoria}</p>
                                    <h3 className={styles.produtoNome}>{produto.nome}</h3>
                                    <div className={styles.produtoPreco}>
                                        {produto.valorPromocional && (
                                            <span className={styles.precoPromocional}>
                                                R$ {produto.valorPromocional.toFixed(2)}
                                            </span>
                                        )}
                                        <span className={produto.valorPromocional ? styles.precoAntigo : styles.precoNormal}>
                                            R$ {produto.valor.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={handleNext} disabled={startIndex + produtosPorPagina >= produtosMaisVendidos.length} className={styles.carouselButton}>
                        <MdArrowForwardIos />
                    </button>
                </div>
            </div>
        </div>
    );
}

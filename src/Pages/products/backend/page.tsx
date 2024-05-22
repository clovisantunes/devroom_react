import { useTranslation } from 'react-i18next';
import ProdutsKey from '../../../components/ProductsKey';
import { ToastContainer } from 'react-toastify';
interface backendProps{
    params: any
}

export default  function Backend({params}: backendProps){
    const { t, i18n } = useTranslation();
    const titleMain = t('products.backend.title');
    const title = t('products.backend.details.plan.title');
    const subTitle = {
        subTitle1: t('products.backend.details.plan.subTitle.api'),
        subTitle2: t('products.backend.details.plan.subTitle.multi'),
        subTitle3: t('products.backend.details.plan.subTitle.blog'),
        subTitle4: t('products.backend.details.plan.subTitle.ecommerce'),
    }
    const value  = {
        value1 : t('products.backend.details.plan.value.initial'),
        value2 : t('products.backend.details.plan.value.mid'),
        value3 : t('products.backend.details.plan.value.blog'),
        value4 : t('products.backend.details.plan.value.ecommerce'),
    }
    const coin = t('products.coin');
    const select = t('products.select');
    const utils = {
        utils1 : t('products.backend.details.plan.utils.database'),
        utils2 : t('products.backend.details.plan.utils.customization'),
        utils3 : t('products.backend.details.plan.utils.databaseCommunication'),
        utils4 : t('products.backend.details.plan.utils.userManagement'),
        utils5 : t('products.backend.details.plan.utils.blogPosting'),
        utils6 : t('products.backend.details.plan.utils.ecommerce'),
    }
    const buttonLang = t('products.mobile.descriptionSubTitle');
    const textDescription  = t('products.backend.descriptionText');
    const descriptionTitle = t('products.backend.descriptionTitle');
    const imgPath = "https://media.licdn.com/dms/image/D4D12AQEEOn3UUZChTQ/article-cover_image-shrink_600_2000/0/1683886974594?e=2147483647&v=beta&t=Rovt9GPTKuzjCqRQrtiKbNwB3axfkR3hN8IBRphjwE8";

    return(
        <div>
            <ToastContainer />
            <ProdutsKey 
                title={title} 
                titleMain={titleMain} 
                select={select} 
                subTitles={Object.values(subTitle)} 
                values={Object.values(value)} 
                coin={coin} 
                utils={Object.values(utils)} 
                buttonLang={buttonLang} 
                textDescription={textDescription} 
                descriptionTitle={descriptionTitle}    
                imgPath={imgPath}        
                />
        </div>
    )
}
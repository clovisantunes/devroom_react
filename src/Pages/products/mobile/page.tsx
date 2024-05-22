import { useTranslation } from 'react-i18next';
import ProdutsKey from '../../../components/ProductsKey';

interface mobileProps{
    params: any;
}

export default async function mobile({params}:mobileProps){
    const { t, i18n } = useTranslation();
    const titleMain = t('products.mobile.title');
    const title = t('products.mobile.details.plan.title');
    const subTitle = t('products.mobile.details.plan.subTitle');
    const value  = t('products.mobile.details.plan.value');
    const coin = t('products.coin');
    const select = t('products.select');
    const utils = t('products.mobile.details.plan.utils');
    const buttonLang = t('products.mobile.descriptionSubTitle');
    const textDescription  = t('.products.mobile.descriptionText');
    const descriptionTitle = t('products.mobile.descriptionTitle');
    const imgPath = "https://cdn.sanity.io/images/s7xbv9bz/production/ca07a242e8ef6597980cef806c77a5abc1f96018-800x700.png?w=800&h=700&auto=format&fm=webp";
    return(
        <div>
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
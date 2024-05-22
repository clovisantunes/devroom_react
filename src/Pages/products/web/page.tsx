import { useTranslation } from 'react-i18next';
import ProdutsKey from '../../../components/ProductsKey';
import { ToastContainer } from 'react-toastify';

interface webProps {
  params: any;
}

export default  function Web({ params }: webProps) {
  const { t, i18n } = useTranslation();
  const titleMain = t('products.web.title');
  const title = t('products.web.details.plan.title');
  const subTitle =  {
    subTitle1: t('products.web.details.plan.subTitle.landing'),
    subTitle2: t('products.web.details.plan.subTitle.landingPers'),
    subTitle3: t('products.web.details.plan.subTitle.multi'),
    subTitle4: t('products.web.details.plan.subTitle.ecommerce'),

  }

  const value  = {
    value1: t('products.web.details.plan.value.initial'),
    value2: t('products.web.details.plan.value.mid'),
    value3: t('products.web.details.plan.value.blog'),
    value4: t('products.web.details.plan.value.ecommerce'),

  }
  const coin = t('products.coin');
  const select = t('products.select');
  const utils = {
    utils1: t('products.web.details.plan.utils.landing'),
    utils2: t('products.web.details.plan.utils.template'),
    utils3: t('products.web.details.plan.utils.responsive'),
    utils4: t('products.web.details.plan.utils.domain'),
    utils5: t('products.web.details.plan.utils.blog'),
    utils6: t('products.web.details.plan.utils.ecommerce'),
  }
  const buttonLang = t('products.web.descriptionSubTitle');
  const textDescription  = t('products.web.descriptionText');
  const descriptionTitle = t('products.web.descriptionTitle');
  const imgPath = "https://freepngimg.com/thumb/web_development/3-2-web-development-png-hd.png";
  return (
    <div>
      <ToastContainer />
      <ProdutsKey 
        titleMain={titleMain}
        select={select}
        title={title}
        subTitles={Object.values(subTitle)}
        values = {Object.values(value)}
        coin = {coin}
        utils = {Object.values(utils)}
        buttonLang = {buttonLang}
        textDescription = { textDescription }
        descriptionTitle = { descriptionTitle }
        imgPath = {imgPath}
      />
    </div>
  );
}

import NavBarEcommerce from '../components/navbar';
import informations from '../utils/informations.json';

export default function HomeEcommerce(){
    return (
        <div className="homeEcommerce">
        <NavBarEcommerce 
            navColors={informations.navColors} 
            headerTexts={informations.navTexts}
            />
    </div>
    )
}
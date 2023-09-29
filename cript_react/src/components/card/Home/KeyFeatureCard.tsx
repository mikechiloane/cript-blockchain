import {tailwindStyles} from "../../../styles.ts";
import {resources} from "../../../assets/resources.ts";


export default  function KeyFeature() {

    return(
        <div className={tailwindStyles.keyFeatureStyle.container}>
            <div>
                <img className="h-[60px]" src={resources.featureIcons.security} alt="key feature image"/>
            </div>
            <div>
                <p className="font-bold text-white text-xl mb-2">Easy Transactions</p>
                <p className=" text-white leading-[16px]  font-normal text-[16px]"> Seamlessly send and receive Bitcoin with just a few clicks.</p>

            </div>
        </div>
    )
}
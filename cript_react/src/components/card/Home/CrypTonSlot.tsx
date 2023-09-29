import {resources} from "../../../assets/resources.ts";


export default function CrypTonSlot() {

    return(
        <section>
            <div className="crypton-container">
                <div className="crypton-img-container mx-8 lg:mx-0">
                    <img  className="crypton-image" src={resources.crypt} alt="CrypTon" />

                </div>
                <div className="crypton-text-container">
                   <p className="crypton-title">
                       {resources.crypton.title}
                   </p>
                    <p className="crypton-subtitle">
                        {resources.crypton.body}
                    </p>

                </div>
            </div>
        </section>
    )
}
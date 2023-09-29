import {tailwindStyles} from "../../../styles.ts";
import {resources} from "../../../assets/resources.ts";
import {BsKeyFill} from "react-icons/bs";
import {BsSpeedometer2} from "react-icons/bs";
import {motion} from "framer-motion";
import {MdOutlineAssuredWorkload} from "react-icons/md";
import {useAuth0} from "@auth0/auth0-react";
// import ScrollDownIndicator from "./ScrollDownIndicator.tsx";

export default function Hero() {

    const {logout} = useAuth0();

    return (
        <section>
            <div className={tailwindStyles.heroStye.container}>
                <div className={tailwindStyles.heroStye.contentContainer}>
                    <p className={tailwindStyles.heroStye.title}>{resources.heroText}</p>
                    <p className={tailwindStyles.heroStye.subtitle}>{resources.heroSubtitle}</p>
                    <div className={tailwindStyles.heroStye.featureRowContainer}>
                        <div className={tailwindStyles.heroStye.featureRow}>
                            <BsKeyFill className={tailwindStyles.heroStye.featureIcon}/>
                            <p className={tailwindStyles.heroStye.featureText}>Access</p>
                        </div>
                        <div className={tailwindStyles.heroStye.featureRow}>
                            <MdOutlineAssuredWorkload className={tailwindStyles.heroStye.featureIcon}/>
                            <p className={tailwindStyles.heroStye.featureText}>Certainty</p>
                        </div>
                        <div className={tailwindStyles.heroStye.featureRow}>
                            <BsSpeedometer2 className={tailwindStyles.heroStye.featureIcon}/>
                            <p className={tailwindStyles.heroStye.featureText}>Speed</p>
                        </div>

                    </div>
                    <div className={tailwindStyles.heroStye.buttonContainer}>
                        <button className={tailwindStyles.heroStye.heroButton} onClick={()=>logout()}>Get Started</button>
                    </div>
                </div>
                <div className={tailwindStyles.heroStye.heroImageContainer}>
                        <motion.img
//rotation animate
                            animate={{rotate:360}}
                            transition={{duration:40,repeat:Infinity, ease:"linear", repeatDelay:0.5}}
                            className={tailwindStyles.heroStye.heroImage}  src={resources.heroImage} alt="hero image">
                        </motion.img>
                </div>
            </div>
            {/*<ScrollDownIndicator/>*/}
        </section>
    )
}
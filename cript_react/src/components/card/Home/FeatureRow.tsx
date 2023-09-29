import KeyFeatureCard from "./KeyFeatureCard.tsx";
import {tailwindStyles} from "../../../styles.ts";


export default function FeatureRow (){

    return(
        <section className={tailwindStyles.keyFeatureStyle.section}>
            <div className="flex flex-col items-center justify-center">
                <p className="text-white text-center font-bold text-3xl">Key Features</p>

                </div>
            <div className="grid gap-4 mt-16 grid-cols-2 lg:grid-cols-4 ">
              <KeyFeatureCard/>
                <KeyFeatureCard/>
                <KeyFeatureCard/>
                <KeyFeatureCard/>
            </div>
        </section>

    )
}
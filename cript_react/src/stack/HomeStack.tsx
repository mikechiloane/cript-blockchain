import Home from "../pages/home/Home.tsx";
import {tailwindStyles} from "../styles.ts";

export default function HomeStack() {


    return (
        <div className={tailwindStyles.stack.homeStack}>
            <div className={tailwindStyles.stack.container}>
                <Home/>

            </div>
        </div>

    );
}
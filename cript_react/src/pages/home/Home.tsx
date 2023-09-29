import Header from "../../components/header/home/Header.tsx";
import Hero from "../../components/card/Home/Hero.tsx";
import GridSlot from "../../components/card/Home/GridSlot.tsx";
import FeatureRow from "../../components/card/Home/FeatureRow.tsx";
import Footer from "../../components/footer/Footer.tsx";
import PartnerSlot from "../../components/card/Home/PartnerSlot.tsx";
import CrypTonSlot from "../../components/card/Home/CrypTonSlot.tsx";


export default function Home() {

    return (
        <div className=" min-h-min:h-screen  flex flex-col lg:px-[100px]">
         <Header/>
            <Hero/>
            <GridSlot/>
            <FeatureRow/>
            <PartnerSlot/>
            <CrypTonSlot/>
            <Footer/>
        </div>
    );
}
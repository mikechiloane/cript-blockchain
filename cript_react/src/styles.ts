export const  tailwindStyles = {
    heroStye: {
        container: 'min-h-screen flex pt-[150px] lg:pt-[80px] items-center flex-col lg:flex-row',
        contentContainer: 'flex flex-1 flex-col ',
        title: 'text-5xl font-bold  text-white lg:text-left text-center',
        subtitle: 'text-sm lg:text-left text-center text-white mt-5 font-thin line-spacing-5 white',
        featureRowContainer:"flex flex-1 mt-6 space-x-4  lg:justify-start justify-center",
        featureRow: "flex gap-3 items-center ",
        featureIcon:"text-white text-[26px]",
        featureText:" text-sm text-white font-normal ",
        heroButton:"sec-bg-dark text-sm text-white font-normal py-3 px-6 rounded-full mt-8 hover:bg-[#F7931A] hover:shadow-xl transition duration-200 ease-in-out",
        buttonContainer:"flex justify-center lg:justify-start",
        heroImageContainer:"flex justify-end flex-1",
        heroImage:"w-[400px] h-[500px] object-contain"
    },
    keyFeatureStyle: {
        section: "flex flex-col lg:space-x-6 items-center justify-center lg:justify-between mt-20",
        container: "flex space-y-4 flex-col bg-[#219ebc] py-8 px-6 lg:px-6",
    },
    stack: {
        container:"xl:max-w-[1200px] m-auto px-6 lg:px-0",
        homeStack: " min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#0072EE] to-[#0079FF] "

    }

}
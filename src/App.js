import PhoneScreens from "./media/Phone_screens2.png";
import GetItOnGooglePlay from "./media/Get_it_on_GooglePlay.png";
import BeforeAfter from "./media/BeforeAfter.png";
import TelegramSnapshot from "./media/Telegram_Snapshot.png";

import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
function App() {
    const ProductData = [
        {
            title: "Free",
            bulletPoints: ["Limited FX and Crypto Signals"],
            price: "Sign Up"
        },
        {
            title: "Crypto Pro",
            bulletPoints: ["Intraday Crypto Signals", "Weekly + Monthly Projections", "Risk Management and Position\n" +
            "Calculation guide", "Win in Bear Market"],
            price: "39$ / month"
        },
        {
            title: "Forex Pro",
            bulletPoints: ["Intraday FX Signals", "Weekly + Monthly Projections", "Risk Management and Position\n" +
            "Calculation guide"],
            price: "39$ / month"
        },
    ]
    return (
        <div class={""}>
            <Navbar/>
            <div class={"flex flex-col justify-center"}>
                <h1 class={"mt-20 text-white text-center font-archivo text-8xl"}>Orakkle</h1>
                <h3 class={"text-white text-center font-archivo"}>Smartest market forecasting service</h3>
                <a className={"self-center"} href="https://play.google.com/store/apps/details?id=com.orakkle.orakkle" target={"_blank"}><img className={"mt-20 w-64 transition duration-200 ease-in-out transform hover:scale-75"}
                                src={GetItOnGooglePlay} alt="GooglePlay"/></a>
                <img class={"w-6/12 self-center mt-10"} src={PhoneScreens} alt="Phone"/>
                <h1 className={"mt-40 text-white text-center font-archivo text-6xl"}>All forecasts published to TradingView</h1>
                <h3 className={"text-white text-center font-archivo mt-10"}>Every forecast produced by Orakkle is publicly published to TradingView, served by Orakkle Pro
                    App and Telegram channels. Full forecast history is tracked in the public Telegram channel.</h3>
                <img className={"w-6/12 self-center mt-10"} src={BeforeAfter} alt="BeforeAfter"/>
                <h1 className={"mt-40 text-white text-center font-archivo text-6xl"}>Join the Public Telegram Channel!</h1>
                <a className={"w-1/4 self-center mt-10"} href="https://www.t.me/orakkleapp" target={"_blank"}><img className={"transition duration-200 ease-in-out transform hover:scale-110"} src={TelegramSnapshot} alt="Telegram"/></a>
                <div className={"mt-40 bg-white py-4"}>
                    <h1 className={"text-myBlue text-center font-archivo text-6xl"}>Pricing</h1>
                    <div className={"flex flex-row space-x-4 justify-center mt-10 bg-white py-4"}>
                        {ProductData.map((product) => (
                            <ProductCard title={product.title} bulletPoints={product.bulletPoints} price={product.price}/>
                        ))}

                    </div>
                </div>
                <div className={"my-20 w-3/4 self-center justify-center"}>
                    <p className={"text-center text-white opacity-50"}>CFTC RULE 4.41 – HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN.</p>
                </div>
            </div>
            <Footer/>
        </div>
);
}



export default App;

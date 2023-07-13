import React ,{ Fragment , useState } from "react";
import { useContext } from "react";
import {FcCheckmark} from 'react-icons/fc';
import { Container } from "./Navbar";
import '../Styles/Pricing.css';

export default function Pricing(){
    const {toggle} = useContext(Container)
    const [toggleBasic,setToggleBasic] = useState(true)
    const [toggleStandard, setToggleStandard] = useState(true)
    const [togglePremium, setTogglePremiumc] = useState(true) 

    const [basicCost,setBasicCost] = useState('$5.78')
    const [standardCost,setStandardCost] = useState('$9.78')
    const [premiumCost,setPremiumCost] = useState('$11.54')



    return(
        <Fragment>
            <div className={toggle ? 'background-Color-Main' : 'background-Color-secondary'}>
                <div className="Pricing-container">
                    <div className={toggle ? 'Pricing-option1' : 'light-theme1'}>
                        <h2>Basic</h2>
                        <div className="Price">
                        <h3>{basicCost}$</h3><h4 id="MonthlyYearly">{toggleBasic ? 'Monthly' : 'Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Limited films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on only one device </span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Free Ads</span>
                        <button id='button1'>Subscribe Now</button>
                        <div id="darktheme">
                        <div className="Pricing-yearly-darktheme" onClick={()=> {
                            setToggleBasic(!toggleBasic)
                            if(toggleBasic){
                            setBasicCost('$65.39')
                            }else{
                            setBasicCost('$5.78')
                            }
                        }}>
                            <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                        </div>
                        </div>
                    </div>
                    <div className={toggle ? 'Pricing-option2' : 'light-theme2'}>
                        <h2>Standard</h2>
                        <div className="Price">
                        <h3>{standardCost}$</h3><h4 id="MonthlyYearly">{toggleStandard ? 'Monthly' : 'Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Unlimited films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on any three devices at same time </span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Free Ads</span>
                        <button id='button2'>Subscribe Now</button>
                        <div id="darktheme">
                        <div className="Pricing-yearly-darktheme" onClick={()=> {
                            setToggleStandard(!toggleStandard)
                            if(toggleStandard){
                            setStandardCost('$115.05')
                            }else{
                            setStandardCost('$9.78')
                            }
                        }}>
                            <div className={toggleStandard ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                        </div>
                        </div>
                    </div>
                    <div className={toggle ? 'Pricing-option3' : 'light-theme3'}>
                        <h2>Premium</h2>
                        <div className="Price">
                        <h3>{premiumCost}$</h3><h4 id="MonthlyYearly">{togglePremium ? 'Monthly' : 'Yearly'}</h4>
                        </div>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Unlimited films and tv programmes</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>cancel at anytime</span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Watch on any seven devices at same time </span>
                        <span><FcCheckmark fontSize={25} id='checkmark'/>Free Ads</span>
                        <button id='button3'>Subscribe Now</button>
                        <div id="darktheme">
                        <div className="Pricing-yearly-darktheme" onClick={()=> {
                            setTogglePremiumc(!togglePremium)
                            if(togglePremium){
                            setPremiumCost('$130.48')
                            }else{
                            setPremiumCost('$11.54')
                            }
                        }}>
                            <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );

}
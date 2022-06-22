import {PortfolioButton} from "./Buttons";


export function GlassFooter (){
    return(
        <div className={"footerBase"}>
            <div className={"portfolioLink"}>
                <PortfolioButton/>
            </div>
            <div className={"footer-logo"}>
                BP
            </div>
            <div className={"copyright"}>
                © All Rights Reserved.
            </div>
        </div>
    );
}


export function RegularFooter () {
    return(
        <div className={"footerBase"}>
            <div className={"portfolioLink"}>
                <PortfolioButton/>
            </div>
            <div className={"footer-logo"}>
                BP
            </div>
            <div className={"copyright"}>
                © All Rights Reserved.
            </div>
        </div>
    );
}
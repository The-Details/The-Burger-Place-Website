import {PortfolioButton} from "./Buttons";


export function GlassFooter (){
    return(
        <div className={"glassFooterBase"}>
            <div className={"glassPortfolioLink"}>
                <PortfolioButton/>
            </div>
            <div className={"glassFooterLogo"}>
                BP
            </div>
            <div className={"glassCopyright"}>
                © All Rights Reserved.
            </div>
        </div>
    );
}


export function RegularFooter () {
    return(
        <div className={"regularFooterBase"}>
            <div className={"regularPortfolioLink"}>
                <PortfolioButton/>
            </div>
            <div className={"regularFooterLogo"}>
                BP
            </div>
            <div className={"regularCopyright"}>
                © All Rights Reserved.
            </div>
        </div>
    );
}
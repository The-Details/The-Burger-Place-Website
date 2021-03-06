import {ContactButton, SignInButton} from './Buttons';
import "../stylesheets/Header.css";

export function GlassHeader () {
    return (
        <div className={"glassHeaderBase"}>
            <div className={"glassHeaderLogo"}>
                Burger Place
            </div>
            <div className={"glassMenu"}>
                <div className={"glassMenuItem1"}>
                    <div className={"glassMenuItem"}>
                        <ContactButton/>
                    </div>
                </div>
                <div className={"glassMenuItem2"}>
                   <div className={"glassMenuItem"}>
                       <SignInButton/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export function RegularHeader () {
    return (
        <div className={"regularHeaderBase"}>
            <div className={"regularHeaderLogo"}>
                Burger Place
            </div>
            <div className={"regularMenu"}>
                <div className={"regularMenuItem"}>
                    <ContactButton/>
                </div>
                <div className={"regularMenuItem"}>
                    <SignInButton/>
                </div>
            </div>
        </div>
    );
}
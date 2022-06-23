import {ContactButton, SignInButton} from './Buttons';

export function GlassHeader () {
    return (
        <div className={"glassHeaderBase"}>
            <div className={"glassHeaderLogo"}>
                Burger Place
            </div>
            <div className={"glassMenu"}>
                <div className={"glassMenuItem"}>
                    <ContactButton/>
                </div>
                <div className={"glassMenuItem"}>
                    <SignInButton/>
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
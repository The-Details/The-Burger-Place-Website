import {ContactButton, SignInButton} from './Buttons';

export function GlassHeader () {
    return (
        <div className={"headerBase"}>
            <div className={"logo"}>
                Burger Place
            </div>
            <div className={"menu"}>
                <div className={"menu-item"}>
                    <ContactButton/>
                </div>
                <div className={"menu-item"}>
                    <SignInButton/>
                </div>
            </div>
        </div>
    );
}

export function RegularHeader () {
    return (
        <div className={"headerBase"}>
            <div className={"logo"}>
            </div>
            <div className={"menu"}>
                <div className={"menu-item"}>
                    <ContactButton/>
                </div>
                <div className={"menu-item"}>
                    <SignInButton/>
                </div>
            </div>
        </div>
    );
}
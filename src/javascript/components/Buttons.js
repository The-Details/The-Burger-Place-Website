

export function ContactButton(props){
    return(
        <button className={"menuButton"} onClick={props.setState(true)}>
            <div className={"buttonTextHeader"}>Contact</div>
        </button>
    );
}


export function SignInButton(props) {
    return (
        <button className={"menuButton"} onClick={props.setState(true)}>
            <div className={"buttonTextHeader"}>Sign In</div>
        </button>
    );
}


export function PortfolioButton(props) {
    return (
        <button className={"footerButton"} onClick={props.setState(true)}>
            <div className={"buttonTextFooter"}>Back to Portfolio</div>
        </button>
    );
}


export function BurgerMenuButton(props) {
    return(
        <button className={"foodButtonLight"} onClick={props.setState(true)}>
            <div className={"buttonTextDark"}>Burger Menu</div>
        </button>
    );
}

export function PlaceOrderButton(props){
    return(
        <button className={"orderButtonLight"} onClick={props.setState(true)}>
            <div className={"buttonTextDark"}>Place Order</div>
        </button>
    );
}


export function SausageMenuButton(props){
    return(
        <button className={"foodButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Sausage Menu</div>
        </button>
    );
}


export function FriesMenuButton(props){
    return(
        <button className={"foodButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Fries Menu</div>
        </button>
    );
}


export function SmoothieMenuButton(props){
    return(
        <button className={"foodButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Smoothie Menu</div>
        </button>
    );
}


export function DoorDashButton(props){
    return(
        <button className={"orderButtonDark"} onClick={props.setState(true)}>
            <img src="../../assets/icons8-doordash.svg" alt="DoorDash"/>
            <div className={"buttonTextLight"}>Doordash</div>
        </button>
    );
}


export function UberEatsButton(props){
    return(
        <button className={"orderButtonDark"} onClick={props.setState(true)}>
            <img src="../../assets/icons8-uber-eats.svg" alt="UberEats"/>
            <div className={"buttonTextLight"}>UberEats</div>
        </button>
    );
}


export function CallUsButton(props){
    return(
        <button className={"orderButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Call Us</div>
        </button>
    );
}


export function OrderThruUsButton(props){
    return(
        <button className={"orderButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Order Thru Us</div>
        </button>
    );
}


export function ClickToDiscoverButton(props){
    return(
        <button className={"orderButtonDark"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Click to Discover</div>
        </button>
    );
}


export function ReturnHomeButton(props){
    return(
        <button className={"footerButton"} onClick={props.setState(true)}>
            <div className={"buttonTextLight"}>Back to Portfolio</div>
        </button>
    );
}


export function CloseModalButton(props){
    return(
        <button className={"modalButton"} onClick={props.setState(true)}>
            <img src="../../assets/x-solid.svg" alt="close modal"/>
        </button>
    );
}


export function GallerySelectionIndicatorButton(props){
    return(
        <button className={"galleryButton"} onClick={props.setState(true)}>
            <div className={"trapezoid"}></div>
        </button>
    );
}
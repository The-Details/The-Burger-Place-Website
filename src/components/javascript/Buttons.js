import "../stylesheets/Buttons.css";
import DoorDash from "../../assets/icons8-doordash.svg";
import UberEats from "../../assets/icons8-uber-eats.svg";
import useModal from "./useModals";
import {
    BurgerMenuModal,
    CallUsModal,
    ContactInfoModal,
    DoorDashModal, FryMenuModal,
    OrderThruUsModal, SausageMenuModal,
    SmoothieMenuModal,
    UberEatsModal
} from "./Modals";
import {Link} from "react-router-dom";



function error() {
    window.location.href = "../../404.js";
    return null;
}

export function ContactButton(){
    const {isShowingContact, toggleContact} = useModal();

    return(
        <button className={"menuButton"} onClick={error}>
            <div className={"buttonTextHeader"}>Contact</div>
            <ContactInfoModal isShowing={isShowingContact} hide={toggleContact}/>
        </button>
    );
}


export function SignInButton() {
    // const {isShowingSignIn, toggleSignIn} = useModal();
    // onClick={toggleSignIn}
    return (
        <button className={"menuButton"} onClick={error}>
            <div className={"buttonTextHeader"}>Sign In</div>
            {/*< isShowing={isShowingSignIn} hide={toggleSignIn}/>*/}
        </button>
    );
}


export function PortfolioButton() {

    function backToPortfolio() {
        window.location.href = "https://thedetails.studio";
        return null;
    }

    return (
        <button className={"footerButton"} onClick={backToPortfolio}>
            <div className={"buttonTextFooter"}>Back to Portfolio</div>
        </button>
    );
}


export function BurgerMenuButton() {
    const {isShowingBurger, toggleBurger} = useModal();

    return(
        <button className={"foodButtonLight"} onClick={toggleBurger}>
            <div className={"buttonTextDark"}>Burger Menu</div>
            <BurgerMenuModal isShowing={isShowingBurger} hide={toggleBurger}/>
        </button>
    );
}

export function PlaceOrderButton(){
    // const {isShowingPlaceOrder, togglePlaceOrder} = useModal();

    return(
        <button className={"orderButtonLight"} onClick={error}>
            <div className={"buttonTextDark"}>Place Order</div>
            {/*<OrderThruUsModal isShowing={isShowingPlaceOrder} hide={togglePlaceOrder}/>*/}
        </button>
    );
}


export function SausageMenuButton(){
    const {isShowingSausage, toggleSausage} = useModal();

    return(
        <button className={"foodButtonDark"} onClick={toggleSausage}>
            <div className={"buttonTextLight"}>Sausage Menu</div>
            <SausageMenuModal isShowing={isShowingSausage} hide={toggleSausage}/>
        </button>
    );
}


export function FriesMenuButton(){
    const {isShowingFries, toggleFries} = useModal();

    return(
        <button className={"foodButtonDark"} onClick={toggleFries}>
            <div className={"buttonTextLight"}>Fries Menu</div>
            <FryMenuModal isShowing={isShowingFries} hide={toggleFries}/>
        </button>
    );
}


export function SmoothieMenuButton(){
    const {isShowingSmoothie, toggleSmoothie} = useModal();

    return(
        <button className={"foodButtonDark"} onClick={toggleSmoothie}>
            <div className={"buttonTextLight"}>Smoothie Menu</div>
            <SmoothieMenuModal isShowing={isShowingSmoothie} hide={toggleSmoothie}/>
        </button>
    );
}


export function DoorDashButton(){
    const {isShowingDoorDash, toggleDoorDash} = useModal();

    return(
        <button className={"orderButtonDark"} onClick={error}>
            <img src={DoorDash} alt="DoorDash"/>
            <DoorDashModal isShowing={isShowingDoorDash} hide={toggleDoorDash}/>
        </button>
    );
}


export function UberEatsButton(){
    const {isShowingUberEats, toggleUberEats} = useModal();

    return(
        <button className={"orderButtonDark"} onClick={error}>
            <img src={UberEats} alt="UberEats"/>
            <UberEatsModal isShowing={isShowingUberEats} hide={toggleUberEats}/>
        </button>
    );
}


export function CallUsButton(){
    const {isShowingCallUs, toggleCallUs} = useModal();

    return(
        <button className={"orderButtonDark"} onClick={error}>
            <div className={"buttonTextLight"}>Call Us</div>
            <CallUsModal isShowing={isShowingCallUs} hide={toggleCallUs}/>
        </button>
    );
}


export function OrderThruUsButton(){
    const {isShowingOrderThruUs, toggleOrderThruUs} = useModal();

    return(
        <button className={"orderButtonDark"} onClick={error}>
            <div className={"buttonTextLight"}>Order Thru Us</div>
            <OrderThruUsModal isShowing={isShowingOrderThruUs} hide={toggleOrderThruUs}/>
        </button>
    );
}


export function ClickToDiscoverButton(){
    return(
        <button className={"menuButton"}>
            <div className={"buttonTextDark"}>Click to Discover</div>
        </button>
    );
}

export function ReturnHomeButton(){

    return(
            <Link className={"homeButton"} to="/">
                <div className={"buttonTextLight"}>Home</div>
            </Link>
    );
}

export function GallerySelectionIndicatorButton(){
    return(
        <button className={"galleryButton"} >
            <div className={"parallelogram"}></div>
        </button>
    );
}
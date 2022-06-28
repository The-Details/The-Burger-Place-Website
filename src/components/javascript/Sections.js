import {
    BurgerMenuButton,
    CallUsButton, ClickToDiscoverButton,
    DoorDashButton, FriesMenuButton,
    OrderThruUsButton, PlaceOrderButton, SausageMenuButton,
    SmoothieMenuButton,
    UberEatsButton
} from "./Buttons";
import "../stylesheets/Sections.css";
import orderAccentR from "../../assets/place-order-accent-right.svg";
import orderAccentL from "../../assets/place-order-accent-left.svg";
// import cookedSausage from "../../assets/cooked-vegan-sausages.jpg";
// import cookedDecoratedSausage from "../../assets/cooked-and-decorated-vegan-sausages.jpg";
import {BottomBunModal, LettuceModal, PattyModal, TomatoModal, TopBunModal} from "./Modals";
import useModal from "./useModals";


export function MainSection(){
    const {isShowingTopBun, toggleTopBun} = useModal();
    const {isShowingTomato, toggleTomato} = useModal();
    const {isShowingLettuce, toggleLettuce} = useModal();
    const {isShowingPatty, togglePatty} = useModal();
    const {isShowingBottom, toggleBottom} = useModal();

    return(
        <div className="mainSection">
            <div className="mainLeft">
                <div className="gallery">
                    <div className="infoBurger">
                        <button className="topBun" onClick={toggleTopBun}></button>
                        <TopBunModal isShowing={isShowingTopBun} hide={toggleTopBun}/>
                        <button className="tomato" onClick={toggleTomato}></button>
                        <TomatoModal isShowing={isShowingTomato} hide={toggleTomato}/>
                        <button className="lettuce" onClick={toggleLettuce}></button>
                        <LettuceModal isShowing={isShowingLettuce} hide={toggleLettuce}/>
                        <button className="patty" onClick={togglePatty}></button>
                        <PattyModal isShowing={isShowingPatty} hide={togglePatty}/>
                        <button className="bottomBun" onClick={toggleBottom}></button>
                        <BottomBunModal isShowing={isShowingBottom} hide={toggleBottom}/>
                        <ClickToDiscoverButton/>
                    </div>
                    <div className="galleryImages">
                        <div className="galleryImageLeft"></div>
                        <div className="galleryImageRight"></div>
                    </div>
                </div>
                <div className={"galleryIndicators"}>
                    {/*<GallerySelectionIndicatorButton/>*/}
                    {/*<GallerySelectionIndicatorButton/>*/}
                </div>

            </div>
            <div className="mainRight">
                <div className="mainIntro"><h1 className={"mainIntroText"}>We at the Burger Place believe nothing receives more TLC (Tender Love & Care) than the produce that we serve.</h1></div>
                <div className="mainButtons">
                    <BurgerMenuButton/>
                    <PlaceOrderButton/>
                </div>
            </div>
        </div>
    );
}


export function WittyRemarkSection(){
    return(
        <div className="remarkSection">
            <div className="remarkTitle"><h2>Mouth Waterin’ Already?!</h2></div>
            <div className="remark"><h4>Well, we can definitely satisfy the rest of those buds with our carefully crafted array of non-burger items of sustenance!</h4></div>
        </div>
    );
}


export function AccentSection(){
    return(
        <div className="accent"></div>
    );
}

export function SausageSection(){
    return(
        <div className="sausageSection">
                <div className="imageContainer">
                    <div className="leftImageSausageSection">
                        {/*<img src="../../assets/long-buns-on-tray.jpg" alt="long buns on tray"/>*/}
                    </div>
                    <div className="centerImageSausageSection">
                        {/*<img src={cookedSausage} alt="cooked vegan sausages"/>*/}
                    </div>
                    <div className="rightImageSausageSection">
                        {/*<img src={cookedDecoratedSausage} alt="cooked and decorated vegan sausages"/>*/}
                    </div>
                </div>
                <div className="sausageRemarkContainer">
                    <div className="sausageRemarkTitle"><h2>Our Sausages</h2></div>
                    <div className="sausageRemarkDescription"><h5>Grown in the most state of the art labs, our sausages will hit the spot without the cholesterol</h5></div>
                    <div className={"sausageRemarkButton"}><SausageMenuButton/></div>
                </div>
        </div>
    );
}


export function FrySection(){
    return(
        <div className="frySection">
            <div className="fryRemarkContainer">
                <div className="fryRemarkTitle"><h2>Our Fries</h2></div>
                <div className="fryRemarkDescription"><h5>The finest Po-ta-tos grown right in the restaurant’s farm. No pesticides or any other unwanted side affects of mass-production. They are as fresh as they come.</h5></div>
                <div className={"fryRemarkButton"}><FriesMenuButton/></div>
            </div>
            <div className="imageContainer">
                <div className="leftImageFrySection">
                    {/*<img src="../../assets/baskets-of-potatoes.jpg" alt="baskets of potatoes"/>*/}
                </div>
                <div className="rightImageFrySection">
                    {/*<img src="../../assets/seasoned-fries.jpg" alt="seasoned fries"/>*/}
                </div>
            </div>
        </div>
    );
}


export function SmoothieSection(){
    return(
        <div className="smoothieSection">
            <div className="imageContainer">
                <div className="leftImageSmoothieSection">
                    {/*<img src="../../assets/pouring-green-smoothie.jpg" alt="pouring green smoothie"/>*/}
                </div>
                <div className="centerImageSmoothieSection">
                    {/*<img src="../../assets/woman-holding-a-green-smoothie.jpg" alt="women holding a green smoothie"/>*/}
                </div>
                <div className="rightImageSmoothieSection">
                    {/*<img src="../../assets/red-smoothie-in-jar.jpg" alt="red smoothie in jar"/>*/}
                </div>
            </div>
            <div className="smoothieRemarkContainer">
                <div className="smoothieRemarkTitle"><h2>Our Smoothies</h2></div>
                <div className="smoothieRemarkDescription"><h5>Our smoothies pair well with any item we serve as being an absolutely banger by itself. Whether it is a cold or hot day our smoothies will make your day.</h5></div>
                <div className={"smoothieRemarkButton"}><SmoothieMenuButton/></div>
            </div>
        </div>
    );
}


export function OrderSection(){
    return(
        <div className="orderSection">
            <div className="orderHeaderContainer">
                <div className={"orderHeader"}>
                    <div className="orderHeaderLeft"><img src={orderAccentL} alt="place order accent left"/></div>
                    <div className="orderHeaderTitleContainer"><h2 className={"orderHeaderTitle"}>Place an Order</h2></div>
                    <div className="orderHeaderRight"><img src={orderAccentR} alt="place order accent right"/></div>
                </div>
           </div>
            <div className="orderRemarkContainer"><h5 className={"orderRemark"}>Can’t wait to get those precious items of sustenance? Well, we can’t wait for you to have them!</h5></div>
            <div className="orderOptions">
                <div className="deliverySection">
                    <div className="deliverySectionTitle"><h5>Delivery</h5></div>
                    <DoorDashButton/>
                    <UberEatsButton/>
                </div>
                <div className="pickUpSection">
                    <div className="pickUpSectionTitle"><h5>Pick-Up</h5></div>
                    <CallUsButton/>
                    <OrderThruUsButton/>
                </div>
            </div>
        </div>
    );
}
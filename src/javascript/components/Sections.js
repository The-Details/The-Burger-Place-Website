import {
    BurgerMenuButton,
    CallUsButton, ClickToDiscoverButton,
    DoorDashButton, FriesMenuButton, GallerySelectionIndicatorButton,
    OrderThruUsButton, PlaceOrderButton, SausageMenuButton,
    SmoothieMenuButton,
    UberEatsButton
} from "./Buttons";
import {useState} from "react";


export function MainSection(){

    return(
        <div className={"mainSection"}>
            <div className={"mainLeft"}>
                <div className={"gallery"}>
                    <div className={"infoBurger"}>
                        <div className={"topBun"}></div>
                        <div className={"tomato"}></div>
                        <div className={"lettuce"}></div>
                        <div className={"patty"}></div>
                        <div className={"bottomBun"}></div>
                        <ClickToDiscoverButton/>
                    </div>
                    <div className={"galleryImages"}>
                        <div className={"galleryImageLeft"}></div>
                        <div className={"galleryImageRight"}></div>
                    </div>
                </div>
                <GallerySelectionIndicatorButton/>
            </div>
            <div className={"mainRight"}>
                <div className={"mainIntro"}>We at the Burger Place believe nothing receives more TLC (Tender Love & Care) than the produce that we serve.</div>
                <div className={"mainButtons"}>
                    <BurgerMenuButton/>
                    <PlaceOrderButton/>
                </div>
            </div>
        </div>
    );
}


export function WittyRemarkSection(){
    return(
        <div className={"remarkSection"}>
            <div className={"remarkTitle"}>Mouth Waterin’ Already?!</div>
            <div className={"remark"}>Well, we can definitely satisfy the rest of those buds with our carefully crafted array of non-burger items of sustenance!</div>
        </div>
    );
}


export function AccentSection(){
    return(
        <div className={"accent"}></div>
    );
}

export function SausageSection(){
    return(
        <div className={"sausageSection"}>
                <div className={"imageContainer"}>
                    <div className={"leftImageStyle1"}><img src="../../assets/long-buns-on-tray.jpg" alt="long buns on tray"/></div>
                    <div className={"centerImageStyle1"}><img src="../../assets/cooked-vegan-sausages.jpg" alt="cooked vegan sausages"/></div>
                    <div className={"rightImageStyle1"}><img src="../../assets/cooked-and-decorated-vegan-sausages.jpg" alt="cooked and decorated vegan sausages"/></div>
                </div>
                <div className={"sausageRemarkContainer"}>
                    <div className={"sausageRemarkTitle"}>Our Sausages</div>
                    <div className={"sausageRemarkDescription"}>Grown in the most state of the art labs, our sausages will hit the spot without the cholesterol</div>
                    <SausageMenuButton/>
                </div>
        </div>
    );
}


export function FrySection(){
    return(
        <div className={"frySection"}>
            <div className={"fryRemarkContainer"}>
                <div className={"fryRemarkTitle"}>Our Fries</div>
                <div className={"fryRemarkDescription"}>The finest Po-ta-tos grown right in the restaurant’s farm. No pesticides or any other unwanted side affects of mass-production. They are a fresh as they come.</div>
                <FriesMenuButton/>
            </div>
            <div className={"imageContainer"}>
                <div className={"leftImageStyle2"}><img src="../../assets/baskets-of-potatoes.jpg" alt="baskets of potatoes"/></div>
                <div className={"rightImageStyle2"}><img src="../../assets/seasoned-fries.jpg" alt="seasoned fries"/></div>
            </div>
        </div>
    );
}


export function SmoothieSection(){
    return(
        <div className={"smoothieSection"}>
            <div className={"imageContainer"}>
                <div className={"leftImageStyle1"}><img src="../../assets/pouring-green-smoothie.jpg" alt="pouring green smoothie"/></div>
                <div className={"centerImageStyle1"}><img src="../../assets/women-holding-a-green-smoothie.jpg" alt="women holding a green smoothie"/></div>
                <div className={"rightImageStyle1"}><img src="../../assets/red-smoothie-in-jar.jpg" alt="red smoothie in jar"/></div>
            </div>
            <div className={"smoothieRemarkContainer"}>
                <div className={"smoothieRemarkTitle"}>Our Smoothies</div>
                <div className={"smoothieRemarkDescription"}>Our smoothies pair well with any item we serve as being an absolutely banger by itself. Whether it is a cold or hot day our smoothies will make your day.</div>
                <SmoothieMenuButton/>
            </div>
        </div>
    );
}


export function OrderSection(){
    return(
        <div className={"orderSection"}>
            <div className={"orderHeader"}>
                <div className={"orderHeaderLeft"}><img src="../../assets/place-order-accent-left.svg" alt="place order accent left"/></div>
                <div className={"orderHeaderTitle"}>Place an Order</div>
                <div className={"orderHeaderRight"}><img src="../../assets/place-order-accent-right.svg" alt="place order accent right"/></div>
            </div>
            <div className={"orderRemark"}>Can’t wait to get those precious items of sustenance? Well, we can’t wait for you to have them!</div>
            <div className={"orderOptions"}>
                <div className={"deliverySection"}>
                    <div className={"deliverySectionTitle"}>Delivery</div>
                    <DoorDashButton/>
                    <UberEatsButton/>
                </div>
                <div className={"pickUpSection"}>
                    <div className={"pickUpSectionTitle"}>Pick-Up</div>
                    <CallUsButton/>
                    <OrderThruUsButton/>
                </div>
            </div>
        </div>
    );
}
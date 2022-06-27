import {useState} from "react";

const useModal = () => {

    // Burger State Handlers
    const [isShowingTopBun, setIsShowingTopBun] = useState(false);
    const [isShowingTomato, setIsShowingTomato] = useState(false);
    const [isShowingLettuce, setIsShowingLettuce] = useState(false);
    const [isShowingPatty, setIsShowingPatty] = useState(false);
    const [isShowingBottom, setIsShowingBottom] = useState(false);

    function toggleTopBun(){
        setIsShowingTopBun(!isShowingTopBun);
    }
    function toggleTomato(){
        setIsShowingTomato(!isShowingTomato);
    }
    function toggleLettuce(){
        setIsShowingLettuce(!isShowingLettuce);
    }
    function togglePatty(){
        setIsShowingPatty(!isShowingPatty);
    }
    function toggleBottom(){
        setIsShowingBottom(!isShowingBottom);
    }




    // Button State Handlers
    const [isShowingContact, setIsShowingContact] = useState(false);
    const [isShowingSignIn, setIsShowingSignIn] = useState(false);
    const [isShowingBurger, setIsShowingBurger] = useState(false);
    const [isShowingPlaceOrder, setIsShowingPlaceOrder] = useState(false);
    const [isShowingSausage, setIsShowingSausage] = useState(false);
    const [isShowingFries, setIsShowingFries] = useState(false);
    const [isShowingSmoothie, setIsShowingSmoothie] = useState(false);
    const [isShowingDoorDash, setIsShowingDoorDash] = useState(false);
    const [isShowingUberEats, setIsShowingUberEats] = useState(false);
    const [isShowingCallUs, setIsShowingCallUs] = useState(false);
    const [isShowingOrderThruUs, setIsShowingOrderThruUs] = useState(false);

    function toggleContact(){
        setIsShowingContact(!isShowingContact);
    }
    function toggleSignIn(){
        setIsShowingSignIn(!isShowingSignIn);
    }
    function toggleBurger(){
        setIsShowingBurger(!isShowingBurger);
    }
    function togglePlaceOrder(){
        setIsShowingPlaceOrder(!isShowingPlaceOrder);
    }
    function toggleSausage(){
        setIsShowingSausage(!isShowingSausage);
    }
    function toggleFries(){
        setIsShowingFries(!isShowingFries);
    }
    function toggleSmoothie(){
        setIsShowingSmoothie(!isShowingSmoothie);
    }
    function toggleDoorDash(){
        setIsShowingDoorDash(!isShowingDoorDash);
    }
    function toggleUberEats(){
        setIsShowingUberEats(!isShowingUberEats);
    }
    function toggleCallUs(){
        setIsShowingCallUs(!isShowingCallUs);
    }
    function toggleOrderThruUs(){
        setIsShowingOrderThruUs(!isShowingOrderThruUs);
    }



    return{
        isShowingTopBun,
        toggleTopBun,
        isShowingTomato,
        toggleTomato,
        isShowingLettuce,
        toggleLettuce,
        isShowingPatty,
        togglePatty,
        isShowingBottom,
        toggleBottom,
        isShowingContact,
        toggleContact,
        isShowingSignIn,
        toggleSignIn,
        isShowingBurger,
        toggleBurger,
        isShowingPlaceOrder,
        togglePlaceOrder,
        isShowingSausage,
        toggleSausage,
        isShowingFries,
        toggleFries,
        isShowingSmoothie,
        toggleSmoothie,
        isShowingDoorDash,
        toggleDoorDash,
        isShowingUberEats,
        toggleUberEats,
        isShowingCallUs,
        toggleCallUs,
        isShowingOrderThruUs,
        toggleOrderThruUs,

    }
};

export default useModal;
import addIcon from "../assets/icons/add.svg"
import arrowLeftIcon from "../assets/icons/arrow_left.svg"
import editIcon from "../assets/icons/edit.svg"
import logoutIcon from "../assets/icons/logout.svg"
import moneyIcon from "../assets/icons/money.svg"
import moreIcon from "../assets/icons/more.svg"
import sunIcon from "../assets/icons/sun.svg"
import translateIcon from "../assets/icons/translate.svg"
import trashIcon from "../assets/icons/trash.svg"
import walletIcon from "../assets/icons/wallet.svg"

interface IconProps {
        name: string;
    }

export default function Icon(props: IconProps){

    let iconSrc = "";

    switch (props.name) {
        case "add":
            iconSrc = addIcon;
            break;
        case "arrow_left":
            iconSrc = arrowLeftIcon;
            break;
        case "edit":
            iconSrc = editIcon;
            break;
        case "logout":
            iconSrc = logoutIcon;
            break;
        case "money":
            iconSrc = moneyIcon;
            break;
        case "more":
            iconSrc = moreIcon;
            break;
        case "sun":
            iconSrc = sunIcon;
            break;
        case "translate":
            iconSrc = translateIcon;
            break;
        case "trash":
            iconSrc = trashIcon;
            break;
        case "wallet":
            iconSrc = walletIcon;
            break;
    }

    return <img src={iconSrc} alt={props.name} />;
    
}


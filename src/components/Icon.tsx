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

const icons = {
    add: addIcon,
    arrow_left: arrowLeftIcon,
    edit: editIcon,
    logout: logoutIcon,
    money: moneyIcon,
    more: moreIcon,
    sun: sunIcon,
    translate: translateIcon,
    trash: trashIcon,
    wallet: walletIcon
}

interface IconProps {
    name: keyof typeof icons;
}

export default function Icon(props: IconProps){

    const iconSrc = icons[props.name];

    return <img src={ iconSrc } alt={ props.name } />;
    
}


import addIcon from "../assets/icons/add.svg";
import arrowLeftIcon from "../assets/icons/arrow_left.svg";
import closeIcon from "../assets/icons/close.svg";
import editIcon from "../assets/icons/edit.svg";
import logoutIcon from "../assets/icons/logout.svg";
import moneyIcon from "../assets/icons/money.svg";
import moreIcon from "../assets/icons/more.svg";
import sunIcon from "../assets/icons/sun.svg";
import translateIcon from "../assets/icons/translate.svg";
import trashIcon from "../assets/icons/trash.svg";
import walletIcon from "../assets/icons/wallet.svg";
import warningIcon from "../assets/icons/warnig.svg";

const getIconForType = (type: string) => {
  switch (type) {
    case "add":
      return addIcon;
    case "arrow_left":
      return arrowLeftIcon;
    case "close":
      return closeIcon;
    case "edit":
      return editIcon;
    case "logout":
      return logoutIcon;
    case "money":
      return moneyIcon;
    case "more":
      return moreIcon;
    case "sun":
      return sunIcon;
    case "translate":
      return translateIcon;
    case "trash":
      return trashIcon;
    case "wallet":
      return walletIcon;
    case "warning":
      return warningIcon;
  }
};

interface IconProps {
  name: string;
}

export default function Icon(props: IconProps) {
  const iconSrc = getIconForType(props.name);

  return <img src={iconSrc} alt={props.name} />;
}

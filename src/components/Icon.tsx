import add from "../assets/icons/add.svg"
import arrow_left from "../assets/icons/arrow_left.svg"
import edit from "../assets/icons/edit.svg"
import logout from "../assets/icons/logout.svg"
import money from "../assets/icons/money.svg"
import more from "../assets/icons/more.svg"
import sun from "../assets/icons/sun.svg"
import translate from "../assets/icons/translate.svg"
import trash from "../assets/icons/trash.svg"
import wallet from "../assets/icons/wallet.svg"


export default function Icon(props: any){
    return (
            <>
                {props.name === "add" && <img src={add} alt={props.name} />}
                {props.name === "arrow_left" && <img src={arrow_left} alt={props.name} />}
                {props.name === "edit" && <img src={edit} alt={props.name} />}
                {props.name === "logout" && <img src={logout} alt={props.name} />}
                {props.name === "money" && <img src={money} alt={props.name} />}
                {props.name === "more" && <img src={more} alt={props.name} />}
                {props.name === "sun" && <img src={sun} alt={props.name} />}
                {props.name === "translate" && <img src={translate} alt={props.name} />}
                {props.name === "trash" && <img src={trash} alt={props.name} />}
                {props.name === "wallet" && <img src={wallet} alt={props.name} />}
            </>  
    )
}


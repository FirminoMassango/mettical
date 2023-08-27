import Button from "./Button";
import moneyIcon from "../assets/icons/money.svg";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  budget: string;
  isMainScreen?: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="h-52 bg-primary-200 rounded-b-3xl p-4 text-white ">
      <nav className="flex justify-between">
        {!props.isMainScreen && <Link to={`/`}><Button icon="arrow_left" type="default" fill /></Link>}
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <Button icon="more" type="default" fill />
      </nav>
      <div className="flex justify-between mt-10">
        <div className="">
          <div className="">
            <h2 className="uppercase text-base font-bold">Valor inicial</h2>
          </div>
          <div className="bg-seconday-100 mt-4">
            <span className="text-3xl font-bold align-bottom align-text-bottom">
              {props.budget}
            </span>
            <span className="align-text-bottom ml-2 text-base font-extrabold">MZN</span>
          </div>
        </div>
        <div>
          <img className="animate-custom-bounce" src={moneyIcon} alt="money" />
        </div>
      </div>
    </header>
  );
}

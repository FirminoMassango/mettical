import Button from "./Button";
import moneyIcon from "../assets/icons/money.svg";

interface HeaderProps {
  title: string;
  budget: string;
  isMainScreen?: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="h-52 bg-primary-200 rounded-b-3xl p-8 text-white ">
      <div className="flex justify-between">
        {props.isMainScreen && <Button icon="arrow_left" type="default" fill />}
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <Button icon="more" type="default" fill />
      </div>
      <div className="flex justify-between my-8">
        <div className="">
          <div className="">
            <h1 className="uppercase text-base font-bold">Valor inicial</h1>
          </div>
          <div className="bg-seconday-100 mt-4">
            <span className="text-3xl font-bold align-bottom align-text-bottom">
              {props.budget}
            </span>
            <span className="align-text-bottom ml-2 font-bold">MZN</span>
          </div>
        </div>
        <div>
          <img className="animate-custom-bounce" src={moneyIcon} alt="money" />
        </div>
      </div>
    </div>
  );
}

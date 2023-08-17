import Button from "./Button"
import moneyIcon from "../assets/icons/money.svg"
import React from "react"

interface HeaderProps {
    title: string,
    budget: string
}

export default function Header(props: HeaderProps){
    return (
            <div className="h-52 bg-primary-200 rounded-b-3xl p-8 text-white ">
                <div className="flex justify-between">
                    <Button icon="arrow_left"/>
                    <h1 className="text-2xl font-semibold">{ props.title }</h1>
                    <Button icon="more"/>
                </div>
                <div className="flex justify-between my-8">
                    <div className="">
                        <div className="">
                            <h1 className="uppercase text-base font-medium">Valor inicial</h1>
                        </div>
                        <div className="bg-seconday-100 mt-4">
                            <span className="text-3xl font-semibold align-bottom align-text-bottom">{ props.budget}</span>
                            <span className="align-text-bottom ml-2 font-bold">MZN</span>
                        </div>
                    </div>
                    <div>
                        <img className="animate-custom-bounce" src={moneyIcon} alt="money" />
                    </div>
                </div>
            </div>
    )
}
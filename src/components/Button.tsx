import Icon from "./Icon"

interface ButtonProps {
    icon: string;
}
export default function Button(props: ButtonProps){
    return (
        <>
            <button className="grid h-10 w-10 bg-primary-100 place-content-center rounded-full hover:bg-secondary-100">
                <Icon name={props.icon}/>
            </button>
        </>
    )
}
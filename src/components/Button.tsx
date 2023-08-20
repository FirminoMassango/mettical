import Icon from "./Icon"

interface ButtonProps {
    icon: string;
    fill?: boolean;
    type?: string;
}
export default function Button(props: ButtonProps){
    
    const background_color = props.fill ? "bg-primary-100" : ""

    return (
        <>
            <button className={ `grid h-10 w-10 place-content-center rounded-full hover:bg-primary-100/50 ${ background_color }` }>
                <Icon name={ props.icon }/>
            </button>
    
        </>
    )
}
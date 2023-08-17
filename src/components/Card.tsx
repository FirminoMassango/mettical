import Button from "./Button";
import Icon from "./Icon";

export default function Card() {
    return (
            <div className="flex items-center justify-between h-32 mx-4 my-4 p-8 bg-white rounded-lg">
                <div>
                    <h1 className="font-semibold">Despesa 1</h1>
                    <p className="font-base">15,000.00</p>
                </div>
                <div className="flex">
                    <Button icon="edit"/>
                    <div className="ml-4">
                      <Button icon="trash"/>  
                    </div>
                    
                </div>
            </div>
    )
}

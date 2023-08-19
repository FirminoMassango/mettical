import Button from "./Button";

export default function Card() {
    return (
            <div className="flex items-center justify-between h-32 mx-4 my-4 p-8 bg-white rounded-2xl shadow-md shadow-secondary-100/50">
                <div>
                    <h1 className="text-xl text-secondary-300 font-semibold mb-4">Despesa 1</h1>
                    <p className="text-base text-secondary-300 font-base">15,000.00 MZN</p>
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

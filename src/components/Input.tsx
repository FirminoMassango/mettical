interface InputProps {
  name?: string;
  type: string;
}
export default function Input(props: InputProps) {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          htmlFor=""
          className="text-base text-secondary-300 font-bold mb-2"
        >
          {props.name}
        </label>
        <input
          type={props.type}
          name={props.name}
          id=""
          className="h-12 p-4 border border-secondary-100 rounded-lg"
          placeholder="Indique o tipo de despesa. Ex: Faculdade"
        />
      </div>
    </>
  );
}

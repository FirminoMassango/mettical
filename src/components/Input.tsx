interface InputProps {
  name?: string;
  type: string;
}
export default function Input(props: InputProps) {
  return (
    <>
      <div className="flex flex-col mb-2">
        <label htmlFor="" className="text-base font-semibold">
          {props.name}
        </label>
        <input
          type={props.type}
          name={props.name}
          id=""
          className="h-10 border border-secondary-100 rounded"
          placeholder="Indique o tipo de despesa. Ex: Faculdade"
        />
      </div>
    </>
  );
}

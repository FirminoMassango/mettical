interface InputProps {
  type: string;
  name?: string;
  placeholder?: string;
}
export default function Input(props: InputProps) {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label htmlFor="" className="text-base text-secondary-300 mb-2">
          {props.name}
        </label>
        <input
          type={props.type}
          name={props.name}
          id=""
          className={`h-12 p-4 border border-slate-300 text-sm shadow-sm placeholder-slate-400 rounded-md focus:outline-none focus:ring focus:ring-primary-100/20 ${
            props.type === "button"
              ? "bg-primary-200 border-none text-white font-semibold"
              : ""
          }`}
          placeholder={props.placeholder}
          value={props.type === "button" ? "Registar despesa" : ""}
        />
      </div>
    </>
  );
}

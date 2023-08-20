import Icon from "./Icon";

export default function FloatActionButton() {
  return (
    <button className="grid h-16 w-16 place-content-center fixed bottom-9 right-4 rounded-full bg-primary-200 hover:bg-primary-100">
      <Icon name="add" />
    </button>
  );
}

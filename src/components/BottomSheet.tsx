import Input from "./Input";
export default function BottomSheet() {
  return (
    <>
      <div className="w-full h-64 bg-white border border-primary-100 rounded-t-2xl fixed bottom-0 p-4">
        <Input type="text" name="tipo" />
        <Input type="text" name="tipo" />
        <Input type="text" name="tipo" />
      </div>
    </>
  );
}

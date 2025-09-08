import { Avatar } from "./Avatar";

export function Appbar() {
  return (
    <div className="px-10 border-b py-4 flex justify-between text-2xl">
      <div>Bloggs</div>
      <div>
        <Avatar size="big" name="Sumedh" />
      </div>
    </div>
  );
}

import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function Signup() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div>
        <Auth type="signup" />
      </div>
      <div className="lg:visible invisible">
        <Quote />
      </div>
    </div>
  );
}

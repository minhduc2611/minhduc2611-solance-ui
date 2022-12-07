import { Button } from "antd";
import axios from "axios";

export default function Home() {
  return (
    <div className="md:container md:mx-auto px-4 flex justify-center">
      <Button>Login with Github</Button>
    </div>
  );
}

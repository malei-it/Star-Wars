import { useState } from "react";
import { names } from "../../index";

interface PropsInterface {
  name: ReadonlyArray<string>;
}

function Discription(props: any) {
  let [name, setName] = useState("");

  if (name == names) {
    return (
      <main className="styles.discription">
        <h2>Discription</h2>
        {name}
      </main>
    );
  } else {
    setName(names);
  }
  return (
    <main className="styles.discription">
      <h2>Discription</h2>
      {name}
    </main>
  );
}

export default Discription;

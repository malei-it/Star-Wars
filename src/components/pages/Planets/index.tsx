import { PostsList } from "../../PostsList";
import styles from "./style.module.css";

// interface PropsInterface {
//   data: ReadonlyArray<{
//       name: string;
//       rotation_period: number;
//       orbital_period: number;
//       diameter: number;
//       climate: string;
//       gravity: any;
//       terrain: string;
//       surface_water: number;
//       population: number;
//       residents: any;
//   }>
// }

function Planets() {
  return (
    <main className={styles.planets}>
      <h2>Choose a planet:</h2>
      <PostsList />
    </main>
  );
}

export default Planets;

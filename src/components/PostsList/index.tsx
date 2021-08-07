import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myFetch from "../../lib/myFetch";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPostsAction } from "./redux/actionType";
import { PlanetInterface } from "./interfaces";
import { getPostsSelector } from "./redux/selectors";
import { OnClickPlanet } from "../../lib/onClickPlanet/OnClickPlanets";
import Discription from "./components/DiscriptionPlanet";

import styles from "./style.module.css";

interface PropsInterface {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: any;
  terrain: string;
  surface_water: number;
  population: number;
  residents: [];
  film: [];
  created: string;
  edited: string;
  url: string;
}
let names = "";
function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(getPostsSelector);

  useEffect(() => {
    // myFetch('/planets').then((response) => response.json()).then((data) => setPost(data.results) )
    fetch(`${process.env.REACT_APP_BASE_URL}/planets/`)
      .then((response) => response.json())
      .then((data) => dispatch(setPostsAction(data.results)));
  }, [dispatch]);

  function Click(event: any) {
    let name = event.target.innerText;
    names = name;
  }

  return (
    <div className={styles.posts}>
      {posts.map((post: PlanetInterface) => (
        <ul key={post.diameter}>
          <li className={styles.post__item}>
            <Link className={styles.planet} onClick={Click} to="/discription">
              {post.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export { PostsList, names };

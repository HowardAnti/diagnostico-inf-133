import Image from "next/image";
import styles from "./page.module.css";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";

export default function Home() {
  return (
    <main className={styles.main}>
      <PokemonList number={6} />
    </main>
  );
}

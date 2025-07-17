import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <ul>
        <li><a href="/inventory">Inventory</a></li>
        <li><a href="/invoice">Invoice</a></li>
      </ul>
    </div>
  );
}

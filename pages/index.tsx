import Head from "next/head";
import Image from "next/image";
import { Fugaz_One } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Switch } from '@base-ui-components/react/switch';
import Clock from "@/components/clock";
// import stylesi from '@styles/index.module.css';

const fugaz = Fugaz_One({
  variable: "--font-fugaz-sans",
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <div className=" w-full h-screen grid place-content-center" >
      {/* <Switch.Root className={styles.Switch}>
        <Switch.Thumb className={styles.Thumb} />
      </Switch.Root> */}
      <Clock></Clock>
    </div>
  );
}

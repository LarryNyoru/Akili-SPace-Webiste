"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { Button, ThemeUIProvider } from "theme-ui";
import { theme } from "@/utils/Theme";
import Hero from "@/components/banner/Hero";
import SectionHeading from "@/components/section/SectionHeading";

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <main>
        <Hero />
        <SectionHeading
          slogan="Meet Our Patners"
          title="This are the patners helping us realize our goals ."
          description=""
        ></SectionHeading>
      </main>
    </ThemeUIProvider>
  );
}

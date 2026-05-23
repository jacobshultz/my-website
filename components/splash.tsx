"use client";
import { useEffect, useState } from "react";
import { rollGreeting } from "@/lib/greeting";

export default function Splash() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setGreeting(rollGreeting());
  }, []);

  return <p id="splash">{greeting}</p>;
}
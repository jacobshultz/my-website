import greetingsData from "@/data/greetings.json";

/**
 * @returns A random greeting phrase.
 */
export function rollGreeting(): string {
  return greetingsData[Math.floor(Math.random() * greetingsData.length)];
}
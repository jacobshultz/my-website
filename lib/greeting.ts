import greetingsData from "@/data/greetings.json";

/**
 * @returns A random greeting phrase.
 */
export function rollGreeting(): string {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  if (month === 6 && day === 3) {  
    return "Happy birthday to my lovely Lauren!!!"
  }

  return greetingsData[Math.floor(Math.random() * greetingsData.length)];
}
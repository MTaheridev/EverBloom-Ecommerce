"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Custom404() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center text-gray-900 mt-32 gap-8">
      <h1 className="text-9xl font-thin">404</h1>
      <h3>🌻 Sorry, this page has wilted! Let’s root you back to the right place.</h3>
      <button onClick={() => {router.push("/")}} className="bg-accentSecondary text-bgPrimary px-8 py-2 rounded-lg font-text">Take Me Home</button>
    </div>
  );
}

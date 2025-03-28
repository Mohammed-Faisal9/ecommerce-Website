import Link from "next/link";

export default function Button({ children, className = "", onClick, disabled=false }) {
  const styles = `bg-black text-white px-6 py-3 rounded hover:bg-neutral-800 transition-all ${className}`;

  return <button className={styles} onClick={onClick} disabled={disabled}>{children}</button>;
}

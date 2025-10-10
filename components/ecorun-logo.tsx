import Image from "next/image"

export function EcorunLogo({ className = "w-12 h-12" }: { className?: string }) {
  return <Image src="/ecorun-logo.png" alt="ECORUN" width={48} height={48} className={className} priority />
}

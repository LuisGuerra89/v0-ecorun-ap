"use client"

import { Home, ShoppingCart, User, ShoppingBag } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-primary text-primary-foreground border-t border-primary/20 px-6 py-3 rounded-t-3xl z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => router.push("/home")}
          className={`flex flex-col items-center gap-1 transition-opacity ${
            isActive("/home") ? "opacity-100" : "opacity-60"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Inicio</span>
        </button>
        <button
          onClick={() => router.push("/purchases")}
          className={`flex flex-col items-center gap-1 transition-opacity ${
            isActive("/purchases") ? "opacity-100" : "opacity-60"
          }`}
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs">Mis Compras</span>
        </button>
        <button
          onClick={() => router.push("/cart")}
          className={`flex flex-col items-center gap-1 transition-opacity ${
            isActive("/cart") ? "opacity-100" : "opacity-60"
          }`}
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs">Carrito</span>
        </button>
        <button
          onClick={() => router.push("/profile")}
          className={`flex flex-col items-center gap-1 transition-opacity ${
            isActive("/profile") ? "opacity-100" : "opacity-60"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  )
}

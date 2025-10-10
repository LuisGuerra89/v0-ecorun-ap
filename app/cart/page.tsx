"use client"

import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Carrito</h1>
        </div>
      </div>

      {/* Empty Cart */}
      <div className="flex flex-col items-center justify-center p-8 min-h-[60vh]">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <ShoppingCart className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-bold mb-2">Tu carrito está vacío</h2>
        <p className="text-muted-foreground text-center mb-6">
          Explora nuestros comercios y encuentra los mejores beneficios
        </p>
        <Button className="bg-primary hover:bg-primary/90" onClick={() => router.push("/home")}>
          Explorar comercios
        </Button>
      </div>
    </div>
  )
}

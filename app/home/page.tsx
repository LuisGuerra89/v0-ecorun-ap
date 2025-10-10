"use client"

import { useState } from "react"
import { Search, Home, ShoppingCart, User, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { EcorunLogo } from "@/components/ecorun-logo"

const categories = [
  { id: "electro", name: "Electro", icon: "📱", route: "/categories/electro" },
  { id: "indumentaria", name: "Indumentaria", icon: "👕", route: "/categories/indumentaria" },
  { id: "creditos", name: "Créditos efectivo", icon: "💵", route: "/categories/creditos" },
  { id: "seguros", name: "Seguros", icon: "🛡️", route: "/categories/seguros" },
]

const topStores = [
  { name: "Brujosport", category: "Indumentaria", rating: 4.9, reviews: 57 },
  { name: "Tradicion", category: "Electrodomésticos", rating: 4.4, reviews: 19 },
]

export default function HomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with User Info */}
      <div className="bg-primary text-primary-foreground p-4 rounded-b-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-primary-foreground">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback>ET</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm opacity-90">Hola</p>
              <p className="font-semibold">Ezequiel Tremonti</p>
              <p className="text-xs opacity-90">Socio Premium</p>
            </div>
          </div>
          
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Buscador" className="pl-10 bg-background text-foreground h-11 rounded-xl" />
        </div>
      </div>

      {/* Categories */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Categorías</h2>
          <button className="text-sm text-primary">mostrar todos</button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => router.push(category.route)}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-muted transition-colors"
            >
              <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <span className="text-xs text-center leading-tight">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Rated Stores */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Comercios mejores puntuados</h2>
        <div className="space-y-3">
          {topStores.map((store, index) => (
            <Card
              key={index}
              className="p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => router.push(`/store/${store.name.toLowerCase()}`)}
            >
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-primary">
                {store.name[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{store.name}</h3>
                <p className="text-sm text-muted-foreground">{store.category}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{store.rating}</span>
                <span className="text-xs text-muted-foreground">({store.reviews} opiniones)</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t border-primary/20 px-6 py-3 rounded-t-3xl">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "opacity-100" : "opacity-60"}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Inicio</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("purchases")
              router.push("/purchases")
            }}
            className={`flex flex-col items-center gap-1 ${activeTab === "purchases" ? "opacity-100" : "opacity-60"}`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Mis Compras</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("cart")
              router.push("/cart")
            }}
            className={`flex flex-col items-center gap-1 ${activeTab === "cart" ? "opacity-100" : "opacity-60"}`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Carrito</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("profile")
              router.push("/profile")
            }}
            className={`flex flex-col items-center gap-1 ${activeTab === "profile" ? "opacity-100" : "opacity-60"}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  )
}

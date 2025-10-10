"use client"

import { ArrowLeft, MapPin, Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"

const stores = [
  {
    id: "confort-acuario",
    name: "Confort Acuario",
    rating: 4.9,
    reviews: 37,
    location: "Lomas de Zamora",
    logo: "CA",
  },
  {
    id: "albanesi",
    name: "Albanesi",
    rating: 4.7,
    reviews: 66,
    location: "Quilmes",
    logo: "AL",
  },
  {
    id: "fm-hogar",
    name: "FM Hogar",
    rating: 4.5,
    reviews: 28,
    location: "Adrogue",
    logo: "FM",
  },
  {
    id: "gaona",
    name: "Gaona",
    rating: 4.8,
    reviews: 45,
    location: "Lomas de Zamora",
    logo: "GA",
  },
]

export default function ElectroCategory() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1 text-center">ELECTRODOMÉSTICOS</h1>
          <div className="w-6" />
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="buscar zona/producto" className="pl-10 bg-background text-foreground h-11 rounded-xl" />
        </div>
      </div>

      {/* Store List */}
      <div className="p-4 space-y-3">
        {stores.map((store) => (
          <Card
            key={store.id}
            className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push(`/store/${store.id}`)}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{store.logo}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{store.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{store.location}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{store.rating}</span>
                  <span className="text-xs text-muted-foreground">({store.reviews} opiniones)</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* BottomNav Component */}
      <BottomNav />
    </div>
  )
}

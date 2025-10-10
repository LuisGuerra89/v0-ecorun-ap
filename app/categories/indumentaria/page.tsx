"use client"

import { ArrowLeft, MapPin, Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"

const stores = [
  {
    id: "brujosport",
    name: "Brujosport",
    rating: 4.9,
    reviews: 57,
    location: "Banfield",
    logo: "BS",
  },
  {
    id: "tradicion",
    name: "Tradicion",
    rating: 4.4,
    reviews: 19,
    location: "Lomas de Zamora",
    logo: "TR",
  },
]

export default function IndumentariaCategory() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1 text-center">INDUMENTARIA</h1>
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

      {/* BottomNav */}
      <BottomNav />
    </div>
  )
}

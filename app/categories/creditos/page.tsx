"use client"

import { ArrowLeft, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"

export default function CreditosCategory() {
  const router = useRouter()

  const branches = [
    { name: "Boston Cred - Lomas de Zamora", address: "Av. Hipólito Yrigoyen 9250" },
    { name: "Boston Cred - Banfield", address: "Av. Alsina 1234" },
    { name: "Boston Cred - Temperley", address: "Av. Meeks 567" },
  ]

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1 text-center">CRÉDITOS EN EFECTIVO</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="p-4">
        {/* Boston Cred Info */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white px-6 py-3 rounded-lg mb-4">
              <p className="text-2xl font-bold text-red-600">Boston</p>
              <p className="text-lg text-red-600">Cred</p>
            </div>
            <p className="text-sm font-medium text-red-900 mb-2">
              Créditos en efectivo con tasas preferenciales para socios ECORUN
            </p>
            <p className="text-xs text-red-700">Hasta $1.000.000 en tu cuenta</p>
          </div>
        </Card>

        {/* Branches */}
        <h2 className="text-lg font-semibold mb-4">Sucursales disponibles</h2>
        <div className="space-y-3">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push("/credit-simulation")}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-red-600">BC</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{branch.name}</h3>
                  <div className="flex items-start gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  )
}

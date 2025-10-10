"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const branches = [
  "Sucursal Lomas de Zamora",
  "Sucursal Hudson",
  "Sucursal Temperley",
  "Sucursal Adrogue",
  "Sucursal Banfield",
]

export default function StorePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedBranch, setSelectedBranch] = useState("")
  const [showBenefits, setShowBenefits] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Confort Acuario</h1>
        </div>
      </div>

      {/* Store Info */}
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <span className="text-4xl font-bold text-primary">CA</span>
          </div>
          <h2 className="text-2xl font-bold">Confort Acuario</h2>
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9</span>
          </div>
        </div>

        {/* Branch Selector */}
        <Card className="p-4 mb-4">
          <label className="text-sm font-medium mb-2 block">Seleccionar Sucursal</label>
          <Select value={selectedBranch} onValueChange={setSelectedBranch}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="buscar sucursal" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((branch) => (
                <SelectItem key={branch} value={branch}>
                  {branch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedBranch && (
            <Button className="w-full mt-3 bg-primary hover:bg-primary/90" onClick={() => setShowBenefits(true)}>
              SELECCIONAR
            </Button>
          )}
        </Card>

        {/* Benefits Section */}
        {showBenefits && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">Beneficios</h3>

            {/* Discount Card */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="flex items-center gap-4">
                <div className="text-5xl">💵</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">15% DESCUENTO</p>
                  <p className="text-xs text-green-700">AL CONTADO</p>
                  <p className="text-xs text-green-700">(TRANSFERENCIA/EFECTIVO)</p>
                </div>
              </div>
            </Card>

            {/* Installments Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center gap-4">
                <div className="text-5xl">💳</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-900">Hasta 6 cuotas sin</p>
                  <p className="text-sm font-medium text-blue-900">interés</p>
                </div>
              </div>
            </Card>

            {/* Boston Cred Card */}
            <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="bg-white px-4 py-2 rounded-lg">
                  <p className="text-xl font-bold text-red-600">Boston</p>
                  <p className="text-sm text-red-600">Cred</p>
                </div>
                <p className="text-sm font-medium text-red-900">
                  Acceso exclusivo con tasas y cupos exclusivos para socios
                </p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 mt-2"
                  onClick={() => router.push(`/store/${params.id}/financing`)}
                >
                  SIMULA TU CRÉDITO
                </Button>
              </div>
            </Card>

            {/* Cash Discount Button */}
            <Button
              variant="outline"
              className="w-full h-12 border-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={() => router.push(`/store/${params.id}/discount`)}
            >
              SOLICITAR DESCUENTO EN EFECTIVO
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

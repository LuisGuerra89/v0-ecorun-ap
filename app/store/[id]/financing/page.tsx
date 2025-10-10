"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FinancingPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("1000000")
  const [installments, setInstallments] = useState("6")
  const [isInStore, setIsInStore] = useState(false)

  const calculateInstallment = () => {
    const total = Number.parseInt(amount)
    const months = Number.parseInt(installments)
    return (total / months).toLocaleString("es-AR")
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Financiación Boston Cred</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Store Status */}
        <Card className="p-4 bg-primary/5">
          <p className="text-sm text-center text-muted-foreground mb-3">¿Estás en el local?</p>
          <Button
            className={`w-full ${
              isInStore ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80 text-foreground"
            }`}
            onClick={() => setIsInStore(!isInStore)}
          >
            {isInStore ? "ESTOY EN EL LOCAL ✓" : "ESTOY EN EL LOCAL"}
          </Button>
        </Card>

        {/* Credit Info */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">Mi cupo:</p>
            <p className="text-3xl font-bold text-primary">$1.000.000</p>
          </div>
        </Card>

        {/* Financing Simulation */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Compras financiada</h3>

          <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-bold text-red-600">Boston</p>
              <p className="text-sm text-red-600">Cred</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Monto a financiar</label>
              <Input
                type="text"
                value={`$${Number.parseInt(amount).toLocaleString("es-AR")}`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setAmount(value)
                }}
                className="text-center text-lg font-semibold"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Cantidad de cuotas</label>
              <Select value={installments} onValueChange={setInstallments}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 cuotas</SelectItem>
                  <SelectItem value="6">6 cuotas</SelectItem>
                  <SelectItem value="12">12 cuotas</SelectItem>
                  <SelectItem value="18">18 cuotas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="p-4 bg-muted">
              <p className="text-sm text-muted-foreground text-center mb-1">{installments} CUOTAS DE</p>
              <p className="text-2xl font-bold text-center">${calculateInstallment()}</p>
            </Card>
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90 h-12 text-lg font-semibold">ACEPTAR</Button>
        </Card>

        <p className="text-xs text-center text-muted-foreground px-4">
          Al aceptar, se generará un código que deberás mostrar al comercio para completar la operación
        </p>
      </div>
    </div>
  )
}

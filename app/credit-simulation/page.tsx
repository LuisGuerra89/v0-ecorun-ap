"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreditSimulation() {
  const router = useRouter()
  const [amount, setAmount] = useState("500000")
  const [installments, setInstallments] = useState("12")

  const calculateInstallment = () => {
    const total = Number.parseInt(amount)
    const months = Number.parseInt(installments)
    // Simple calculation with ~30% annual interest
    const monthlyRate = 0.025
    const installment =
      (total * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    return installment.toLocaleString("es-AR", { maximumFractionDigits: 0 })
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Simular Crédito</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Credit Limit */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">Tu cupo disponible:</p>
            <p className="text-3xl font-bold text-primary">$1.000.000</p>
          </div>
        </Card>

        {/* Simulation Form */}
        <Card className="p-6">
          <div className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center border-2 border-red-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">Boston</p>
              <p className="text-sm text-red-600">Cred</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Monto del crédito</label>
              <Input
                type="text"
                value={`$${Number.parseInt(amount).toLocaleString("es-AR")}`}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  if (Number.parseInt(value) <= 1000000) {
                    setAmount(value)
                  }
                }}
                className="text-center text-xl font-semibold h-14"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Cantidad de cuotas</label>
              <Select value={installments} onValueChange={setInstallments}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6">6 cuotas</SelectItem>
                  <SelectItem value="12">12 cuotas</SelectItem>
                  <SelectItem value="18">18 cuotas</SelectItem>
                  <SelectItem value="24">24 cuotas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <p className="text-sm text-green-800 text-center mb-2">{installments} cuotas de</p>
              <p className="text-3xl font-bold text-center text-green-600">${calculateInstallment()}</p>
            </Card>

            <div className="bg-muted p-4 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Monto solicitado:</span>
                <span className="font-semibold">${Number.parseInt(amount).toLocaleString("es-AR")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tasa preferencial socios:</span>
                <span className="font-semibold text-green-600">30% anual</span>
              </div>
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90 h-12 text-lg font-semibold">
            SOLICITAR CRÉDITO
          </Button>
        </Card>

        <p className="text-xs text-center text-muted-foreground px-4">
          El crédito está sujeto a aprobación. Deberás acercarte a la sucursal seleccionada con tu DNI para completar el
          trámite.
        </p>
      </div>
    </div>
  )
}

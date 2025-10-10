"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function DiscountPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const discountPercentage = 15

  const calculateDiscount = () => {
    const total = Number.parseInt(amount) || 0
    const discount = (total * discountPercentage) / 100
    return {
      discount: discount.toLocaleString("es-AR"),
      final: (total - discount).toLocaleString("es-AR"),
    }
  }

  const { discount, final } = calculateDiscount()

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Descuento en Efectivo</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 text-center">Confort Acuario</h3>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl mb-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">{discountPercentage}%</p>
              <p className="text-sm font-medium text-green-800">DESCUENTO AL CONTADO</p>
              <p className="text-xs text-green-700">(Transferencia/Efectivo)</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Monto de la compra</label>
              <Input
                type="text"
                placeholder="$0"
                value={amount ? `$${Number.parseInt(amount).toLocaleString("es-AR")}` : ""}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "")
                  setAmount(value)
                }}
                className="text-center text-xl font-semibold h-14"
              />
            </div>

            {amount && (
              <div className="space-y-3">
                <Card className="p-4 bg-green-50 border-green-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-green-900">Descuento:</span>
                    <span className="text-lg font-bold text-green-600">-${discount}</span>
                  </div>
                </Card>

                <Card className="p-4 bg-primary/10 border-primary">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total a pagar:</span>
                    <span className="text-2xl font-bold text-primary">${final}</span>
                  </div>
                </Card>
              </div>
            )}
          </div>

          <Button className="w-full mt-6 bg-primary hover:bg-primary/90 h-12 text-lg font-semibold" disabled={!amount}>
            SOLICITAR DESCUENTO
          </Button>
        </Card>

        <p className="text-xs text-center text-muted-foreground px-4">
          Al solicitar, se generará un código que el comercio deberá validar para aplicar el descuento
        </p>
      </div>
    </div>
  )
}

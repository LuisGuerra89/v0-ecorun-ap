"use client"

import { ArrowLeft, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"

const purchases = [
  {
    id: 1,
    store: "Confort Acuario",
    date: "15/03/2024",
    amount: 850000,
    discount: 127500,
    status: "completed",
    paymentMethod: "Efectivo",
  },
  {
    id: 2,
    store: "Albanesi",
    date: "10/03/2024",
    amount: 450000,
    installments: "6 cuotas",
    status: "completed",
    paymentMethod: "Boston Cred",
  },
  {
    id: 3,
    store: "Boston Cred",
    date: "05/03/2024",
    amount: 300000,
    installments: "12 cuotas",
    status: "in-progress",
    paymentMethod: "Crédito efectivo",
  },
]

export default function PurchasesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Mis Compras</h1>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {purchases.map((purchase) => (
          <Card key={purchase.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{purchase.store}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{purchase.date}</span>
                </div>
              </div>
              <Badge
                variant={purchase.status === "completed" ? "default" : "secondary"}
                className={purchase.status === "completed" ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}
              >
                {purchase.status === "completed" ? "Completada" : "En proceso"}
              </Badge>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monto:</span>
                <span className="font-semibold">${purchase.amount.toLocaleString("es-AR")}</span>
              </div>

              {purchase.discount && (
                <div className="flex justify-between text-green-600">
                  <span>Descuento aplicado:</span>
                  <span className="font-semibold">-${purchase.discount.toLocaleString("es-AR")}</span>
                </div>
              )}

              {purchase.installments && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Financiación:</span>
                  <span className="font-semibold">{purchase.installments}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-muted-foreground">Método de pago:</span>
                <span className="font-semibold">{purchase.paymentMethod}</span>
              </div>

              {purchase.discount && (
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">Total pagado:</span>
                  <span className="font-bold text-primary">
                    ${(purchase.amount - purchase.discount).toLocaleString("es-AR")}
                  </span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}

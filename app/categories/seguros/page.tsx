"use client"

import { ArrowLeft, MessageCircle, Phone, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"

export default function SegurosCategory() {
  const router = useRouter()

  const handleWhatsApp = () => {
    // In production, this would open WhatsApp with the agent's number
    window.open("https://wa.me/5491112345678", "_blank")
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold flex-1 text-center">SEGUROS</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Provider Card */}
        <Card className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Federación Patronal</h2>
            <p className="text-sm text-muted-foreground">Proveedor oficial de seguros ECORUN</p>
          </div>

          {/* Benefits */}
          <div className="space-y-3 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Beneficios para socios:</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Descuentos exclusivos en todas las pólizas</li>
                <li>• Asesoramiento personalizado sin cargo</li>
                <li>• Cobertura inmediata</li>
                <li>• Planes de pago flexibles</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Tipos de seguros disponibles:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-background p-2 rounded text-center">🚗 Auto</div>
                <div className="bg-background p-2 rounded text-center">🏠 Hogar</div>
                <div className="bg-background p-2 rounded text-center">❤️ Vida</div>
                <div className="bg-background p-2 rounded text-center">🏥 Salud</div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 h-12 bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Llamar
              </Button>
              <Button variant="outline" className="flex-1 h-12 bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </Card>

        <p className="text-xs text-center text-muted-foreground px-4">
          Un agente de Federación Patronal te contactará para brindarte asesoramiento personalizado y cotizar tu seguro.
        </p>
      </div>

      {/* Bottom Nav */}
      <BottomNav />
    </div>
  )
}

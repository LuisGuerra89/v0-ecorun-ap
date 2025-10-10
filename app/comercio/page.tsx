"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { EcorunLogo } from "@/components/ecorun-logo"

export default function ComercioPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <EcorunLogo className="w-20 h-20" />
          <h1 className="text-2xl font-bold text-foreground">ECORUN</h1>
        </div>

        <Card className="p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Panel de Comercios</h2>
          <p className="text-muted-foreground">El panel de comercios está disponible en la versión web de ECORUN.</p>
          <p className="text-sm text-muted-foreground">
            Por favor, accede desde tu computadora para gestionar tu comercio.
          </p>
        </Card>

        <Button variant="outline" className="w-full h-12 bg-transparent" onClick={() => router.push("/")}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </Button>
      </div>
    </div>
  )
}

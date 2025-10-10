"use client"

import { ArrowLeft, User, CreditCard, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const router = useRouter()

  const menuItems = [
    { icon: User, label: "Datos personales", route: "/profile/personal" },
    { icon: CreditCard, label: "Métodos de pago", route: "/profile/payment" },
    { icon: Bell, label: "Notificaciones", route: "/profile/notifications" },
    { icon: HelpCircle, label: "Ayuda y soporte", route: "/profile/help" },
  ]

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Mi Perfil</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* User Info Card */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="w-20 h-20 border-2 border-primary">
              <AvatarImage src="/placeholder.svg?height=80&width=80" />
              <AvatarFallback className="text-2xl">ET</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-bold">Ezequiel Tremonti</h2>
              <p className="text-sm text-muted-foreground">ezequiel@email.com</p>
              <Badge className="mt-2 bg-primary hover:bg-primary">Socio Premium</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Compras realizadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">$245.000</p>
              <p className="text-xs text-muted-foreground">Ahorrado en descuentos</p>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="divide-y">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className="w-full p-4 flex items-center gap-3 hover:bg-muted transition-colors"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1 text-left font-medium">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </Card>

        {/* Logout Button */}
        <button
          onClick={() => router.push("/")}
          className="w-full p-4 flex items-center justify-center gap-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Cerrar sesión</span>
        </button>
      </div>
    </div>
  )
}

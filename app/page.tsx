"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EcorunLogo } from "@/components/ecorun-logo"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login - in production this would call an API
    if (username && password) {
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6 pb-8">
      {/* Logo and Welcome */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <EcorunLogo className="w-20 h-20" />
          <h1 className="text-2xl font-bold text-foreground">ECORUN</h1>
        </div>

        <h2 className="text-3xl font-bold text-foreground text-center">BIENVENIDO</h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <Input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-12 text-center border-2"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-center border-2"
          />
          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            INICIAR SESIÓN
          </Button>
        </form>

        <button className="text-sm text-muted-foreground hover:text-foreground">¿Olvidaste contraseña?</button>
      </div>

      {/* Bottom Buttons */}
      <div className="w-full max-w-md flex gap-3">
        <Button
          variant="outline"
          className="flex-1 h-12 border-2 border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
        >
          SOY SOCIO
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-12 border-2 border-foreground text-foreground hover:bg-muted font-semibold bg-transparent"
          onClick={() => router.push("/comercio")}
        >
          SOY COMERCIO
        </Button>
      </div>
    </div>
  )
}

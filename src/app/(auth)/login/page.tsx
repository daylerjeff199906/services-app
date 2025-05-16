"use client";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react"; // ✅ Importar signIn de next-auth
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "sonner";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí debes implementar la lógica real de inicio de sesión
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl font-bold text-center mb-2">
                Iniciar sesión
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Bienvenido de nuevo a ChambeaYa
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Accede a tu cuenta</CardTitle>
                  <CardDescription>
                    Ingresa tus credenciales para continuar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <Tabs defaultValue="email">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="email">Email</TabsTrigger>
                          <TabsTrigger value="telefono">Teléfono</TabsTrigger>
                        </TabsList>
                        <TabsContent value="email" className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="tu@email.com"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="password">Contraseña</Label>
                              <Link
                                href="/recuperar-password"
                                className="text-xs text-orange-600 hover:underline"
                              >
                                ¿Olvidaste tu contraseña?
                              </Link>
                            </div>
                            <Input
                              id="password"
                              type="password"
                              placeholder="Tu contraseña"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </TabsContent>
                        <TabsContent
                          value="telefono"
                          className="space-y-4 mt-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="telefono">Número de teléfono</Label>
                            <Input
                              id="telefono"
                              type="tel"
                              placeholder="+51 999 999 999"
                              required
                            />
                          </div>
                          <p className="text-xs text-gray-500">
                            Te enviaremos un código de verificación por SMS
                          </p>
                        </TabsContent>
                      </Tabs>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="recordar" />
                        <label
                          htmlFor="recordar"
                          className="text-sm text-gray-600"
                        >
                          Recordar mi sesión
                        </label>
                      </div>

                      <Button className="w-full" type="submit">
                        Iniciar sesión
                      </Button>

                      {/* ✅ Botón para iniciar sesión con Google */}
                      <Button
                        variant="outline"
                        className="w-full"
                        type="button"
                        onClick={() =>
                          signIn("google", { callbackUrl: redirectPath || "/" })
                        }
                      >
                        Continuar con Google
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="text-sm text-gray-600 text-center">
                    ¿No tienes cuenta?{" "}
                    <Link
                      href="/registro"
                      className="text-orange-600 hover:underline"
                    >
                      Regístrate
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

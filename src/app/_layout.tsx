// layout.tsx é responsável por definir a estrutura e navegação das telas daquela pasta.
// <Stack /> cria uma navegação em pilha.
// Funciona assim: Usuário entra na Home > Vai para Login > Pode voltar para Home >

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      // serve para esconder o cabeçalho (header) das telas.
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    />
  );
}

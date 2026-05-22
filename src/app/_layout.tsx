// layout.tsx é responsável por definir a estrutura e navegação das telas daquela pasta.
// <Stack /> cria uma navegação em pilha.
// Funciona assim: Usuário entra na Home > Vai para Login > Pode voltar para Home >

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      // screenOptions > é um objeto que define opções de configuração para as telas da navegação.
      screenOptions={{
        // // headerShown > serve para esconder o cabeçalho (header) das telas.
        headerShown: false,
        // contenStyle > funciona como um style aplicado na tela inteira da navegação.
        contentStyle: { backgroundColor: "transparent" },
      }}
    />
  );
}

// StyleSheet no React Native é uma forma de criar estilos parecidos com CSS, mas usando JavaScript
import { StyleSheet } from "react-native";

import { cores } from "@/styles/colors";

// StyleSheet.create é uma função que cria um objeto de estilos
export const styles = StyleSheet.create({
  // Aqui você pode criar estilos para usar nos seus componentes

  container1: {
    // faz o elemento ocupar todo o espaço disponível na tela ou dentro do container
    flex: 1,
  },

  container2: {
    backgroundColor: cores.green[600],
    // faz o elemento ocupar 100% da largura do elemento pai.
    width: "100%",
    // alinha os itens no centro do eixo horizontal
    alignItems: "center",
    padding: 28,
    borderRadius: 15,
  },

  titulo: {
    color: cores.gray[100],
    fontSize: 22,
    marginTop: 50,
    fontWeight: "bold",
  },

  container3: {
    flexDirection: "row",
    gap: 200,
    marginTop: 36,
  },

  container4: {
    gap: 4,
    alignItems: "center",
    margin: -10,
  },

  totalGasto: {
    color: cores.gray[300],
    fontSize: 18,
  },

  valorGasto: {
    color: cores.gray[100],
    fontSize: 22,
    fontWeight: "bold",
  },

  limite: {
    color: cores.gray[100],
    fontSize: 18,
    fontWeight: "bold",
  },
});

// StyleSheet no React Native é uma forma de criar estilos parecidos com CSS, mas usando JavaScript
import { StyleSheet } from "react-native";

import { cores } from "@/styles/colors";

// StyleSheet.create é uma função que cria um objeto de estilos
export const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  //
  container2: {
    backgroundColor: "#5306E0",
    width: "100%",
    padding: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 60,
  },

  titulo: {
    color: cores.gray[100],
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 40,
    alignItems: "center",
  },

  container4: {
    gap: 4,
  },

  totalGasto: {
    color: cores.gray[300],
    fontSize: 14,
  },

  valorGasto: {
    color: cores.gray[100],
    fontSize: 34,
    fontWeight: "bold",
  },

  containerLimite: {
    backgroundColor: "#6d28d9",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  limite: {
    color: cores.gray[100],
    fontSize: 14,
    fontWeight: "bold",
  },

  valorLimite: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  containerInfo: {
    padding: 20,
    marginTop: 10,
  },

  subtitulo: {
    color: "#9ca3af",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },

  cardAdicionar: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    gap: 15,
  },

  inputDescricao: {
    backgroundColor: "#f3f4f6",
    width: "100%",
    padding: 17,
    borderRadius: 12,
    fontSize: 16,
  },

  botaoCategoria: {
    backgroundColor: "#f3f4f6",
    padding: 17,
    borderRadius: 12,
  },

  textoBotaoCategoria: {
    fontSize: 16,
  },

  menuCategorias: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
  },

  botaoAdicionar: {
    backgroundColor: "#5306E0",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  textoBotaoAdicionar: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  containerResumo: {
    backgroundColor: "#fff",
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },

  tituloResumo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9ca3af",
    alignSelf: "flex-start",
  },

  graficoContainer: {
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  grafico: {
    width: 170,
    height: 170,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "#1d4ed8",
  },

  legendaGrafico: {
    color: "#2563eb",
    fontSize: 18,
  },

  containerHistorico: {
    marginTop: 30,
  },

  tituloHistorico: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9ca3af",
    marginBottom: 20,
  },

  cardHistorico: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  nomeGasto: {
    fontSize: 18,
    fontWeight: "bold",
  },

  categoriaGasto: {
    color: "#9ca3af",
    marginTop: 5,
  },

  valorHistorico: {
    color: "#ef4444",
    fontWeight: "bold",
    fontSize: 18,
  },
});

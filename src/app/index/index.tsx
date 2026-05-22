// TouchableOpacity é um componente usado para criar áreas clicáveis, como botões.
// Quando o usuário toca nele, a opacidade diminui automaticamente, dando um efeito visual de “botão pressionado”.
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

//useState é um Hook do React usado para guardar e atualizar informações na tela.
//Ele permite que o componente “lembre” valores.
// um estado (state) é basicamente uma informação que pode mudar durante o funcionamento da aplicação.
import { useState } from "react";

import { styles } from "@/styles/indexStyle";

// Componente = pedaço da interface (tela ou parte da tela).
// export significa exportar > permitir que outros arquivos usem essa função.
// default significa que esse é o principal componente do arquivo.
export default function index() {
  const [menuAberto, setMenuAberto] = useState(false);

  // categoriaSelecionada é a informação que guarda qual categoria o usuário escolheu (ex: alimentação, transporte, etc).
  // setCategoriaSelecionada é a função que atualiza essa informação.
  // useState("") significa que o valor inicial de categoriaSelecionada é uma string vazia.
  //Cria um estado. O "" significa: Então a categoria começa sem valor.
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  // estados dos inputs
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  // lista de gastos
  type Gasto = {
    descricao: string;
    valor: number;
    categoria: string;
  };

  const [gastos, setGastos] = useState<Gasto[]>([]);

  // Aqui criamos um array (lista) com as categorias de gastos que o usuário pode escolher.
  const categorias = [
    "Alimentação",
    "Transporte",
    "Lazer",
    "Saúde",
    "Educação",
    "Moradia",
    "Outros",
  ];

  // função responsável por adicionar gasto
  function adicionarGasto() {
    // validação simples
    if (descricao === "" || valor === "" || categoriaSelecionada === "") {
      return;
    }

    // cria objeto do gasto
    const novoGasto = {
      descricao: descricao,
      valor: Number(valor),
      categoria: categoriaSelecionada,
    };

    // adiciona novo gasto no array
    setGastos([...gastos, novoGasto]);

    // limpa inputs
    setDescricao("");
    setValor("");
  }

  // soma todos os gastos
  const totalGasto = gastos.reduce((total, item) => total + item.valor, 0);

  // return > exibir algo na tela
  return (
    // ScrollView permite rolagem da tela
    <ScrollView style={styles.container1} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.container2}>
        <Text style={styles.titulo}>Finanças Pessoais</Text>

        <View style={styles.container3}>
          {/* TOTAL GASTO */}
          <View style={styles.container4}>
            <Text style={styles.totalGasto}>TOTAL GASTO</Text>

            <Text style={styles.valorGasto}>R$ {totalGasto.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {/* CONTAINER PRINCIPAL */}
      <View style={styles.containerInfo}>
        <Text style={styles.subtitulo}>+ NOVO GASTO</Text>

        {/* CARD */}
        <View style={styles.cardAdicionar}>
          {/* INPUT DESCRIÇÃO */}
          <TextInput
            placeholder="Descrição (ex: Almoço)"
            style={styles.inputDescricao}
            placeholderTextColor={"#9ca3af"}
            value={descricao}
            onChangeText={setDescricao}
          />

          {/* INPUT VALOR */}
          <TextInput
            placeholder="Valor"
            style={styles.inputDescricao}
            placeholderTextColor={"#9ca3af"}
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />

          {/* BOTÃO MENU */}
          <TouchableOpacity
            onPress={() => setMenuAberto(!menuAberto)}
            style={styles.botaoCategoria}
          >
            <Text style={styles.textoBotaoCategoria}>
              {categoriaSelecionada === ""
                ? "Selecionar Categoria"
                : categoriaSelecionada}
            </Text>
          </TouchableOpacity>

          {/* MENU DE CATEGORIAS */}
          {menuAberto && (
            <View style={styles.menuCategorias}>
              {categorias.map((item) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => {
                    setCategoriaSelecionada(item);
                    setMenuAberto(false);
                  }}
                  style={{
                    backgroundColor:
                      categoriaSelecionada === item ? "#5306E0" : "#e5e7eb",

                    padding: 15,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      color: categoriaSelecionada === item ? "#fff" : "#000",

                      fontSize: 16,
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* BOTÃO ADICIONAR */}
          <TouchableOpacity
            onPress={adicionarGasto}
            style={styles.botaoAdicionar}
          >
            <Text style={styles.textoBotaoAdicionar}>Adicionar Gasto</Text>
          </TouchableOpacity>
        </View>

        {/* RESUMO */}
        <View style={styles.containerResumo}>
          <Text style={styles.tituloResumo}>RESUMO POR CATEGORIA</Text>

          {/* gráfico simples fake */}
          <View style={styles.graficoContainer}>
            <View style={styles.grafico}></View>
          </View>

          <Text style={styles.legendaGrafico}>
            ● {categoriaSelecionada || "Sem categoria"}
          </Text>
        </View>

        {/* HISTÓRICO */}
        <View style={styles.containerHistorico}>
          <Text style={styles.tituloHistorico}>HISTÓRICO RECENTE</Text>

          {gastos.map((item, index) => (
            <View key={index} style={styles.cardHistorico}>
              <View>
                <Text style={styles.nomeGasto}>{item.descricao}</Text>

                <Text style={styles.categoriaGasto}>{item.categoria}</Text>
              </View>

              <Text style={styles.valorHistorico}>
                R$ {item.valor.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
/* // TextInput é um campo de texto onde o usuário pode digitar algo
// categorias.map() é uma função que percorre cada item do array categorias e cria um botão para cada categoria.
// key={item} serve como identidade unica para cada item da lista, ajudando o React a identificar qual item foi clicado.
// onPress é um evento. quando o usuário tocar aqui, faça alguma coisa
// “ onPress={() => setCategoriaSelecionada(item)} quando o usuário tocar aqui, faça alguma coisa”
// () => cria uma função anônima. Ela funciona como: “guarde essa ação para depois” */

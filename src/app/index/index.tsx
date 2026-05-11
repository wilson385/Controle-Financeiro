import { Text, View } from "react-native";

import { styles } from "./style";

// Componente = pedaço da interface (tela ou parte da tela).
// export significa exportar > permitir que outros arquivos usem essa função.
// default significa que esse é o principal componente do arquivo.
export default function index() {
  // return > exibir algo na tela
  return (
    // View é um container, como uma div no HTML
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Finanças pessoais</Text>

        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.totalGasto}>Total Gasto</Text>
            <Text style={styles.valorGasto}>R$ 0,00</Text>
          </View>

          <View style={styles.container4}>
            <Text style={styles.limite}>Limite</Text>
            <Text style={styles.valorGasto}>R$ 0,00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

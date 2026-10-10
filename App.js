
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (item.trim() !== '') {
      setLista([...lista, item.trim()]);
      setItem('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um produto"
        value={item}
        onChangeText={setItem}
      />

      <Button
        title="Adicionar"
        onPress={adicionarItem}
      />

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.produto}>• {item}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Sua lista está vazia.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  produto: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginTop: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777777',
  },
});

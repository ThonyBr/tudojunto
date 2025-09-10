import pandas as pd

# Dados de exemplo
dados = {
    'Nome': ['Pikachu', 'Charmander', 'Bulbasaur'],
    'Tipo 1': ['Elétrico', 'Fogo', 'Grama'],
    'Tipo 2': [None, None, 'Veneno'],
    'HP': [35, 39, 45]
}

# Criar um DataFrame
df = pd.DataFrame(dados)

# Salvar em um arquivo CSV
df.to_csv('pokemon_exemplo.csv', index=False, encoding='utf-8-sig')

print("Arquivo 'pokemon_exemplo.csv' criado com sucesso!")
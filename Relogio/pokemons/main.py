import pandas as pd

# Ler o arquivo CSV
df = pd.read_csv('pokemon.csv')

while True:
    print("\nMenu:")
    print("1. Ver Todos")
    print("2. Ver Pokémon")
    print("3. Ver Tipo")
    print("0. Sair")

    option = input("Escolha uma opção: ")

    if option == '1':
        print(df.to_string())
    elif option == '2':
        pokemon_name = input("Digite o nome do Pokémon: ")
        pokemon_data = df[df['nome'].str.lower() == pokemon_name.lower()]
        if not pokemon_data.empty:
            print(pokemon_data.to_string(index=False))
        else:
            print("Pokémon não encontrado.")
    elif option == '3':
        tipo = input("Digite o tipo: ")
        type_data = df[df['tipo 1'].str.lower() == tipo.lower()]
        if not type_data.empty:
            print(type_data.to_string(index=False))
        else:
            print("Nenhum Pokémon encontrado com esse tipo.")
    elif option == '0':
        print("Saindo do programa.")
        break
    else:
        print("Opção inválida! Tente novamente.")
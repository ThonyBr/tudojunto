def preco(preco1):
        if preco1 >= 100:
        return "Barato"
    else:
        return "Caro pra caramba"


preco1 = float(input("Digite o preço do primeiro produto: "))

resultado = situacao(preco1)
print(f"A média de preços está na faixa: {resultado}.")


def calculararea(base, altura):
    return base * altura

base = float(input("Digite o valor da base do retângulo: "))
altura = float(input("Digite o valor da altura do retângulo: "))

area = calculararea(base, altura)

print(f"A área do retângulo é: {area}")

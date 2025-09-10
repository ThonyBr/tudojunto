function inicio() { 
    let nome = window.prompt('Qual é seu nome?'); 
    let res = document.getElementById('resultado'); 
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;</p>`; 
}

function inicioAlerta() { 
    let nome = window.prompt('Qual é o seu nome?'); 
    window.alert(`Olá, ${nome}! É um prazer te conhecer`); 
}

function media() { 
    let aluno = window.prompt('Qual é o nome do aluno?'); 
    let nota1 = Number(window.prompt('Qual foi a primeira nota dele(a)?')); 
    let nota2 = Number(window.prompt('Qual foi a segunda nota dele(a)?')); 
    let nota3 = Number(window.prompt('Qual foi a terceira nota dele(a)?')); 
    let media = (nota1 + nota2 + nota3) / 3; 
    let final = document.getElementById('resultado'); 
    final.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>:<br> As notas obtidas foram <mark>${nota1}, ${nota2} e ${nota3}</mark>.<br> A média final é <mark>${media.toFixed(2)}</mark>.</p>`; 
}
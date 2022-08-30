let dia = -2;
let contLinhas = 0;
let contColunas = 0;

document.write("<table>");
document.write("<tr>");
document.write("<th>D</th>");
document.write("<th>S</th>");
document.write("<th>T</th>");
document.write("<th>Q</th>");
document.write("<th>Q</th>");
document.write("<th>S</th>");
document.write("<th>S</th>");
document.write("<tr>");

for (contLinhas; contLinhas < 5; contLinhas++) {
	document.write("<tr>");
	contColunas = 0;

	for (contColunas; contColunas < 7; contColunas++) {
		document.write("<td>");
		if (dia > 0 && dia < 32) {
			document.write(formataNumero(dia))
		};
		dia++;
		document.write("</td>");
	}

	document.write("</tr>");
}
document.write("</table>");

document.write("<br>");


function imprima(texto) {
	document.write(texto + "<br>");
}

function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}
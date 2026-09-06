# Ideias e pendências

Lista do que ficou para depois. Nada aqui está implementado.
Estado do projeto quando esta lista foi escrita: 236 lotes, 93 marcos, 183 nós e
223 arestas de rua, 31 rótulos, 61 ícones. Site no ar em
https://cainaogg.github.io/afmapa/

---

## 1. Correção — nomes sem posição — RESOLVIDO EM PARTE

Eram 45 nomes que a busca achava mas cuja rota levava para uma âncora inventada.

**12 viraram apelido de marcos que já existiam** e agora levam ao lugar certo:
Rbs, Guaíba Record, Smed, Gov. do Estado, Pref. Munic. de Porto Alegre, Bat,
Bauducco, Produtos Agrícolas, Bonfa, Mark, Tupiniquim e RS Eventos.

**Sobraram 33** (31 de comércio + Ambev duplicado). Continuam na busca, mas com
o aviso de que o mapa oficial não marca onde ficam e **sem botão de rota** — não
mandam mais ninguém para o lugar errado.

Falta mapear os 31 de comércio. O levantamento será feito em campo, anotando em
qual praça de alimentação fica cada um; com essa lista, é só ligar nome à praça.
Confirmado que essa informação **não existe no PDF**: as praças são só uma área
vermelha com o ícone de garfo, sem subdivisão nem nome de barraca.

O texto abaixo é o registro do problema original.

**Era o item mais urgente da lista, e não era uma feature: era um defeito.**

O `data.js` tem uma seção `categories` que veio da listagem do PDF: são só nomes,
sem coordenada. Quem procura por eles encontra normalmente, mas a rota vai para
uma âncora genérica por categoria (a de "Patrocinador", por exemplo, fica em
1600,1560 — em cima da CEEE Equatorial).

O problema não é a busca falhar: é ela **acertar com aparência de certeza e
entregar a pessoa no lugar errado**. Alguém procura "Batatas Chips", o site
mostra 200 m e ~3 min, e leva para outro canto do acampamento.

São 45 nomes:

| categoria | quantos | exemplos |
|---|---|---|
| COMERCIO | 31 | Batatas Chips, Cachorrão do Tchê, Crepes Doces e Salgados |
| PRACA_HAR | 5 | Bonfa Cachorro-Quente, Mark Hamburgueria, Produtos Agrícolas |
| PAT | 4 | Ambev, Bauducco |
| INST | 3 | Gov. do Estado, Pref. Munic. de Porto Alegre, SMED |
| IMPRENSA | 2 | RBS, Guaíba Record |

Alguns são duplicata de marco que já existe com outro nome (Bonfa, Mark,
Bauducco) e resolvem com um apelido. Os 31 de comércio provavelmente ficam nas
praças de alimentação, mas não sei em qual.

**Dois caminhos:**

- **Rápido e seguro:** marcar como "localização não mapeada", manter na busca
  (a pessoa fica sabendo que existe) e desabilitar o botão de rota.
- **Completo:** mapear cada um. Preciso saber onde ficam — não dá pra extrair
  do PDF, eles só aparecem na listagem, sem posição no desenho.

---

## 2. Pedidos seus que ficaram para trás

### Favoritar piquetes
Você pediu quando montamos a interface estilo Google Maps. A ideia era marcar
piquetes com estrela e ter uma lista "Salvos", ignorando o histórico de recentes.
Guardaria no navegador (`localStorage`), sem conta nem servidor.

### Colapsar/expandir o painel lateral
Pedido junto com o de cima. Em tela larga o painel ocuparia menos espaço quando
recolhido, com uma setinha para reabrir.

### O que tem em cada Praça de Alimentação
Você disse que precisaria levantar isso. Hoje as 12 praças existem no mapa com
número, mas sem saber o que tem dentro. Provavelmente resolve boa parte dos 31
nomes de comércio do item 1.

---

## 3. Programação do dia dentro do site

**A que eu mais recomendo.** Os dados já existem: a planilha
`Programacao AF 2026.xlsx` (fora do repositório) tem as 144 atrações separadas
por dia, de 29/08 a 20/09.

Numa central de informações, "o que tem hoje?" e "onde é o show?" devem ser as
perguntas mais frequentes depois de "onde fica o piquete X". A ideia é uma aba
que mostra a programação do dia corrente e, em cada atração, um botão que traça
a rota até o palco.

O trabalho maior não é a interface: é ligar cada atração ao palco correspondente
(Jayme Caetano Braun, Nico Fagundes, Estância Harmonia) de forma confiável.

---

## 4. Funcionar sem sinal (PWA)

O site tem 2,3 MB no primeiro acesso e o acampamento vai ter 4G congestionado
com muita gente no mesmo lugar. Com um service worker guardando os arquivos em
cache, depois da primeira abertura ele funciona **sem internet nenhuma**.

De brinde vem o "adicionar à tela de início": o visitante instala e abre como
se fosse um app, sem barra de navegador.

São umas 40 linhas mais um `manifest.json`. Baixo esforço, ganho grande para o
contexto de uso.

---

## 5. Link direto para um local

Uma URL como `https://cainaogg.github.io/afmapa/?p=139` que já abre no piquete,
com a rota traçada saindo do balcão.

Serve exatamente para o seu trabalho: a pessoa pergunta, você manda o link no
WhatsApp e ela chega sozinha, sem você ter que explicar o caminho.

Vale gerar também um QR por local, para imprimir e colar.

---

## 6. Rota em passos escritos

Hoje a rota é uma linha no mapa e a distância total. Como os nós agora carregam
o nome da rua (`Rua_Glaucus_Saraiva_3`), dá para gerar instruções de texto:
"siga pela Rua Simões Lopes Neto, vire à direita na Glaucus Saraiva, o piquete
fica à esquerda".

Ajuda a explicar no balcão sem precisar mostrar a tela, e serve para quem tem
dificuldade de se orientar por mapa.

---

## 7. Coisas menores

- **20 marcos ainda sem ícone** — a maioria é área retangular (palcos, feiras,
  Churrascaria Cultura Gaúcha), onde o ícone talvez nem faça sentido.
- **Testar o GPS no parque.** Nunca foi validado em campo. O site agora está em
  HTTPS (requisito do navegador) e tem um diagnóstico dentro de Configurações
  que mostra latitude, longitude, precisão e para onde isso caiu no mapa.
- **`/AFmapa` com maiúsculas.** O Pages diferencia maiúsculas; o repositório
  ficou `afmapa`. Se quiser as maiúsculas, renomeie para exatamente `AFmapa` e
  regere o QR com `python3 gerar_qr.py <nova-url>`.
- **`editor.html` está público** em `/editor.html`. Sem risco (só edita uma
  cópia local no navegador de quem abrir), mas dá para tirar do ar se preferir.
- **`icons_sponsors/`** (27 logos, 808 KB) não é usada pelo site, está
  versionada como acervo.
- **Modo escuro com a arte oficial.** A arte do PDF é clara e continua clara no
  modo escuro, igual a visão de satélite do Google Maps. Dá para escurecer com
  um filtro se incomodar.
- **Backups.** `backups/backup1` e `backup2` existem só no seu computador, fora
  do Git. O histórico do repositório já cumpre esse papel daqui pra frente.

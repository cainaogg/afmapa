# Ideias e pendências

Lista do que ficou para depois. Os itens 2 (menos as praças), 3, 4 e 6 já
foram feitos — ficam aqui marcados como FEITO, com o que sobrou de cada um.
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

### Favoritar piquetes — FEITO
Estrela no cartão do local. Com a busca vazia, a lista de favoritos aparece no
lugar dos resultados. Guardado em `localStorage` (`af2026_favoritos`), sem conta
nem servidor — some se a pessoa limpar os dados do navegador.

### Colapsar/expandir o painel lateral — FEITO
Botão `⌃` na barra de busca: recolhe tudo menos a própria busca e devolve o mapa
inteiro. Clicar de novo reabre.

### O que tem em cada Praça de Alimentação — PENDENTE (depende de você)
Você disse que precisaria levantar isso. Hoje as 12 praças existem no mapa com
número, mas sem saber o que tem dentro. Provavelmente resolve boa parte dos 31
nomes de comércio do item 1.

---

## 3. Programação do dia dentro do site — FEITO

Botão 📅 abre a programação, já no dia de hoje, com a tira de dias para navegar.
Cada palco tem "ver no mapa", que fecha a lista e vai para o palco (com rota, se
a partida fixa estiver ligada). No dia corrente, a próxima atração de cada palco
fica destacada.

Os dados vêm de `programacao.js`, gerado da planilha por `gerar_programacao.py`
— **rode o script de novo sempre que a planilha mudar**. São 19 dias e 146
atrações; a linha "05 e 06/09" da planilha virou dois dias, e o dia da semana é
recalculado da data (a planilha traz 14/09 como "Terça", quando é Segunda).

Só existem dois palcos na planilha: Jayme Caetano Braun e Nico Fagundes. A
Estância Harmonia que eu tinha suposto não aparece na programação.

O texto original:

Os dados já existem: a planilha
`Programacao AF 2026.xlsx` (fora do repositório) tem as 144 atrações separadas
por dia, de 29/08 a 20/09.

Numa central de informações, "o que tem hoje?" e "onde é o show?" devem ser as
perguntas mais frequentes depois de "onde fica o piquete X". A ideia é uma aba
que mostra a programação do dia corrente e, em cada atração, um botão que traça
a rota até o palco.

O trabalho maior não é a interface: é ligar cada atração ao palco correspondente
(Jayme Caetano Braun, Nico Fagundes, Estância Harmonia) de forma confiável.

---

## 4. Funcionar sem sinal (PWA) — FEITO

`sw.js` + `manifest.webmanifest`. A página em si vai na rede primeiro (assim uma
publicação nova chega a quem está online) e o resto — dados, mapa, ícones — sai
do cache. Depois da primeira abertura, funciona sem internet nenhuma, e dá para
"adicionar à tela de início".

**Ao publicar uma mudança de dados, bump nos dois lugares:** `?v=` na tag do
`data.js` dentro do `index.html` e `CACHE = 'af2026-vN'` no `sw.js`. Sem isso,
quem já abriu o site continua vendo a versão velha.

Só funciona em HTTPS — no GitHub Pages sim, abrindo o arquivo direto do
computador não.

O texto original:

O site tem 2,3 MB no primeiro acesso e o acampamento vai ter 4G congestionado
com muita gente no mesmo lugar. Com um service worker guardando os arquivos em
cache, depois da primeira abertura ele funciona **sem internet nenhuma**.

De brinde vem o "adicionar à tela de início": o visitante instala e abre como
se fosse um app, sem barra de navegador.

São umas 40 linhas mais um `manifest.json`. Baixo esforço, ganho grande para o
contexto de uso.

---

## 4b. Atalhos "mais perto daqui" — FEITO

Fileira de botões abaixo da busca: Banheiro, Comida, Ambulatório, Brigada,
Estacionamento e Saída. Cada um roda um Dijkstra só (`distanciasDe`) e devolve o
mais próximo. A origem é a partida fixa, senão o GPS, senão o centro do que está
na tela — então a resposta muda conforme você navega: do lote 120 o banheiro mais
perto é o Cancha Reta (194 m), do 225 é o Simões Lopes Neto (108 m).

Vale porque a resposta não é óbvia: são 4 sanitários no parque inteiro, e os seis
serviços (ambulatório, brigada, bombeiros, duas polícias, juizado) estão todos
juntos na Casa do Gaúcho.

---

## 4c. Busca que perdoa erro de digitação — FEITO

Só entra quando a busca exata volta vazia ou com menos de 8 resultados, sob o
título "Resultados parecidos" / "Talvez seja".

Duas peças: distância de edição com corte antecipado, e uma redução fonética do
português antes de comparar (qu=k, c+e/i=s, ch=x, z=s, h mudo, letra dobrada =
simples). A fonética era necessária: "kerencia" → "querencia" custa 2 edições, e
afrouxar a tolerância pra 2 fazia "banheiro" casar com "Pinheiro". Pelo som,
"kerencia" e "querencia" ficam idênticas e "banheiro" e "pinheiro" continuam
diferentes.

Tolerância proporcional (1 erro até 9 letras, 2 até 14), comparação palavra a
palavra, e número de lote não tem parecido — senão "161" sugeria 101, 111, 121.

Casos conferidos: kerencia, estansia, bate casko, xurrasqueira, lisiguana e
tiaraju (que achava só o Playground Sepé Tiaraju e agora oferece o piquete 161
"Tiarayú"). Custo: 1 a 8 ms por tecla.

---

## 5. Link direto para um local

Uma URL como `https://cainaogg.github.io/afmapa/?p=139` que já abre no piquete,
com a rota traçada saindo do balcão.

Serve exatamente para o seu trabalho: a pessoa pergunta, você manda o link no
WhatsApp e ela chega sozinha, sem você ter que explicar o caminho.

Vale gerar também um QR por local, para imprimir e colar.

---

## 6. Rota em passos escritos — FEITO

Depois de traçar, a rota vira um cartão próprio: no celular ele sobe de baixo e
abre puxando pela alça (como o Google Maps); no desktop fica no canto inferior
esquerdo com os passos sempre à vista. O ✕ cancela a rota de verdade — apaga a
linha e os pinos, que antes ficavam na tela.

Os passos saem do nome das ruas nos nós, agrupando trechos seguidos da mesma rua
e decidindo o lado da curva pelo produto vetorial entre um trecho e o seguinte
(< 30° = siga em frente, > 150° = retorno). Trecho de menos de 12 m entra no
anterior, senão a lista vira picadinho.

Onde o mapa oficial não nomeia a rua, o passo sai sem nome ("vire à direita e
siga 40 m") — são os nós `Rua_sem_nome_*` e `Sem_Nome_*`.

O texto original:

Como os nós agora carregam
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

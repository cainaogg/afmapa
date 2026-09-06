# Mapa do Acampamento Farroupilha 2026

Mapa interativo do Acampamento Farroupilha 2026 (Parque Harmonia, Porto Alegre).
Site estatico: nao precisa de servidor, banco de dados nem build.

## Como usar

- **Buscar** piquete por numero ou nome, e tambem palcos, banheiros, pracas de
  alimentacao, lojas e patrocinadores. A busca ignora acento e entende sinonimos
  ("banheiro" acha os sanitarios, "taxi" acha os pontos de embarque).
- **Tracar rota a pe** entre ate 6 paradas, pelo caminho mais curto sobre as ruas
  reais do acampamento (Dijkstra sobre a malha viaria mapeada).
- **Arrastar as paradas** pela alca para reordenar; a rota recalcula na hora.
- **Configuracoes** (engrenagem): modo escuro, desativar GPS e partida fixa na
  Chama Crioula (para quem atende no balcao de informacoes).

## Arquivos

| arquivo | o que e |
|---|---|
| `index.html` | o site inteiro (HTML + CSS + JS, sem dependencias) |
| `data.js` | lotes, marcos, malha de ruas e rotulos, extraidos do PDF oficial |
| `icons.js` | lista dos icones com o nome de cada um |
| `icons/` | icones recortados do mapa oficial |
| `mapa/` | arte do mapa oficial em WebP, usada como camada de fundo |
| `editor.html` | ferramenta interna para calibrar ruas, marcos e icones |
| `gerar_qr.py` | regera o QR code embutido no site (rode se a URL mudar) |

## Convencao dos nos de rua (`data.js`)

    Rua_Nome_4                  4o no da "Rua Nome"
    Avenida_Paixao_Cortes_5_1   subno 1 do no 5 (inserido depois, sem renumerar a via)
    Sem_Nome_12_2               rua sem nome numero 12, no 2
    Praca_*, Portico_*          lugares, nao vias

## Editor

O `editor.html` edita apenas uma copia local no seu navegador. Para publicar
alteracoes e preciso exportar o JSON e substituir o `data.js` do repositorio.

## QR code

O botao do QR mostra um codigo embutido no proprio `index.html` como SVG, sem
depender de internet nem de biblioteca externa. Se a URL do site mudar (por
exemplo ao renomear o repositorio), regere com:

    python3 gerar_qr.py https://cainaogg.github.io/afmapa/

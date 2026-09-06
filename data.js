// dados extraidos do mapa oficial 2026 (PDF vetorial) + ruas/marcos calibrados manualmente no editor
//
// CONVENCAO DE NOME DOS NOS DE RUA (definida pelo Caina):
//   Rua_Nome_4              -> 4o no da "Rua Nome"
//   Avenida_Paixao_Cortes_5_1 -> subno 1 do no 5 (usado quando um no e inserido
//                                depois, pra nao ter que renumerar a via inteira)
//   Sem_Nome_12_2           -> rua sem nome numero 12, no 2
//   Praca_*, Portico_*, rotula_* -> lugares, nao vias
//
window.AF2026 = {
 "lots": [
  {
   "num": 1,
   "nome": "Campo A Fora",
   "x": 3218,
   "y": 981
  },
  {
   "num": 2,
   "nome": "Presilha Crioula",
   "x": 3312,
   "y": 981
  },
  {
   "num": 3,
   "nome": "Os Oliveiras",
   "x": 3401,
   "y": 977
  },
  {
   "num": 4,
   "nome": "Amigos Do Rio Grande",
   "x": 3491,
   "y": 976
  },
  {
   "num": 5,
   "nome": "Estância Do Titi Véio",
   "x": 3579,
   "y": 974
  },
  {
   "num": 6,
   "nome": "Tropeiros Do Asfalto",
   "x": 3741,
   "y": 972
  },
  {
   "num": 7,
   "nome": "Os Xucros",
   "x": 3822,
   "y": 970
  },
  {
   "num": 8,
   "nome": "Recanto Dos Amigos",
   "x": 3905,
   "y": 971
  },
  {
   "num": 9,
   "nome": "Rancho Do Pinheiro",
   "x": 3985,
   "y": 971
  },
  {
   "num": 10,
   "nome": "20 De Setembro",
   "x": 4066,
   "y": 971
  },
  {
   "num": 11,
   "nome": "Herança Rio-Grandense",
   "x": 4146,
   "y": 971
  },
  {
   "num": 12,
   "nome": "Estância De Viamão",
   "x": 4225,
   "y": 971
  },
  {
   "num": 13,
   "nome": "Querência Dos Tiatinos",
   "x": 4303,
   "y": 972
  },
  {
   "num": 14,
   "nome": "Universitários",
   "x": 4383,
   "y": 972
  },
  {
   "num": 15,
   "nome": "Do Esgualepado",
   "x": 4463,
   "y": 971
  },
  {
   "num": 16,
   "nome": "Lenço Colorado",
   "x": 4542,
   "y": 971
  },
  {
   "num": 17,
   "nome": "Botoneira Crioula",
   "x": 4621,
   "y": 971
  },
  {
   "num": 18,
   "nome": "Taura Veio",
   "x": 4701,
   "y": 969
  },
  {
   "num": 19,
   "nome": "Centauros Do Pampa",
   "x": 4783,
   "y": 966
  },
  {
   "num": 20,
   "nome": "Bancários",
   "x": 4870,
   "y": 964
  },
  {
   "num": 21,
   "nome": "Xirus Do Harmonia",
   "x": 3256,
   "y": 1112
  },
  {
   "num": 22,
   "nome": "Morada Campeira",
   "x": 3256,
   "y": 1200
  },
  {
   "num": 23,
   "nome": "Família Moura",
   "x": 3258,
   "y": 1286
  },
  {
   "num": 24,
   "nome": "Freitas Brasil",
   "x": 3257,
   "y": 1372
  },
  {
   "num": 25,
   "nome": "Ferro Em Brasa",
   "x": 3257,
   "y": 1456
  },
  {
   "num": 26,
   "nome": "Galpão Querência Dos Machados",
   "x": 3257,
   "y": 1548
  },
  {
   "num": 27,
   "nome": "Entre Amigos",
   "x": 3256,
   "y": 1630
  },
  {
   "num": 28,
   "nome": "Para Boi",
   "x": 3342,
   "y": 1630
  },
  {
   "num": 29,
   "nome": "Quatro Cantos Do Rio Grande",
   "x": 3342,
   "y": 1545
  },
  {
   "num": 30,
   "nome": "24 Irmãos",
   "x": 3342,
   "y": 1459
  },
  {
   "num": 31,
   "nome": "Gaudérios Do Asfalto",
   "x": 3343,
   "y": 1372
  },
  {
   "num": 32,
   "nome": "Inhanduí",
   "x": 3345,
   "y": 1289
  },
  {
   "num": 33,
   "nome": "Elo Colorado",
   "x": 3345,
   "y": 1201
  },
  {
   "num": 34,
   "nome": "Oitavados No Balcão",
   "x": 3344,
   "y": 1112
  },
  {
   "num": 35,
   "nome": "Gamboa",
   "x": 3470,
   "y": 1115
  },
  {
   "num": 36,
   "nome": "Estância Das Águas",
   "x": 3471,
   "y": 1203
  },
  {
   "num": 37,
   "nome": "Chama Nativa - Funcionários GHC",
   "x": 3474,
   "y": 1332
  },
  {
   "num": 38,
   "nome": "Pirapó",
   "x": 3476,
   "y": 1414
  },
  {
   "num": 39,
   "nome": "Estadual Galponeiro Do Arambaré",
   "x": 3471,
   "y": 1502
  },
  {
   "num": 40,
   "nome": "Cabo Toco - Sindisaúde",
   "x": 3474,
   "y": 1588
  },
  {
   "num": 41,
   "nome": "Cerca Véia",
   "x": 3563,
   "y": 1112
  },
  {
   "num": 42,
   "nome": "Ninho Do Sabiá",
   "x": 3696,
   "y": 1202
  },
  {
   "num": 43,
   "nome": "Amigos Do Sorro",
   "x": 3691,
   "y": 1110
  },
  {
   "num": 44,
   "nome": "Aporreados Do Partenon",
   "x": 3780,
   "y": 1111
  },
  {
   "num": 45,
   "nome": "Aba Larga",
   "x": 3780,
   "y": 1202
  },
  {
   "num": 46,
   "nome": "Amigos Da Tradição",
   "x": 3907,
   "y": 1201
  },
  {
   "num": 47,
   "nome": "Rancho Dos Valenças",
   "x": 3907,
   "y": 1107
  },
  {
   "num": 48,
   "nome": "Rodeio De Estância",
   "x": 3994,
   "y": 1107
  },
  {
   "num": 49,
   "nome": "Maragatos Da Zona Sul",
   "x": 3998,
   "y": 1196
  },
  {
   "num": 50,
   "nome": "Desgarrados",
   "x": 4126,
   "y": 1192
  },
  {
   "num": 51,
   "nome": "Pantanal",
   "x": 4123,
   "y": 1105
  },
  {
   "num": 52,
   "nome": "Desgarrados Do Rio Grande Os Herdeiros De Bento",
   "x": 4328,
   "y": 1103
  },
  {
   "num": 53,
   "nome": "Amizade Campeira",
   "x": 4330,
   "y": 1191
  },
  {
   "num": 54,
   "nome": "Solto Ao Vento",
   "x": 4335,
   "y": 1276
  },
  {
   "num": 55,
   "nome": "Amigos Do Negrinho Do Pastoreio",
   "x": 4331,
   "y": 1361
  },
  {
   "num": 56,
   "nome": "Bate Casco",
   "x": 4338,
   "y": 1450
  },
  {
   "num": 57,
   "nome": "Sentinela Da Fronteira",
   "x": 4336,
   "y": 1535
  },
  {
   "num": 58,
   "nome": "Estrela Dalva - Mangueira De Pedra",
   "x": 4336,
   "y": 1618
  },
  {
   "num": 59,
   "nome": "Las Piedras",
   "x": 4335,
   "y": 1708
  },
  {
   "num": 60,
   "nome": "Louco De Bueno",
   "x": 4424,
   "y": 1706
  },
  {
   "num": 61,
   "nome": "Samarru",
   "x": 4425,
   "y": 1617
  },
  {
   "num": 62,
   "nome": "Instituto Beneficente Cavaleiros Da Tradição - IBCT",
   "x": 4427,
   "y": 1535
  },
  {
   "num": 63,
   "nome": "Guerreiros Da Zona Norte",
   "x": 4426,
   "y": 1450
  },
  {
   "num": 64,
   "nome": "Guerreiros Do Sul",
   "x": 4425,
   "y": 1361
  },
  {
   "num": 65,
   "nome": "Tropilha Crioula",
   "x": 4424,
   "y": 1276
  },
  {
   "num": 66,
   "nome": "Rancho Velho Capivari Do Sul",
   "x": 4421,
   "y": 1192
  },
  {
   "num": 67,
   "nome": "Prijú",
   "x": 4418,
   "y": 1102
  },
  {
   "num": 68,
   "nome": "Lendas Do Sul",
   "x": 4554,
   "y": 1106
  },
  {
   "num": 69,
   "nome": "Iguaria Campeira",
   "x": 4552,
   "y": 1189
  },
  {
   "num": 70,
   "nome": "Tio Flor",
   "x": 4555,
   "y": 1275
  },
  {
   "num": 71,
   "nome": "Estância De Maragatos",
   "x": 4553,
   "y": 1358
  },
  {
   "num": 72,
   "nome": "Chimangos",
   "x": 4556,
   "y": 1450
  },
  {
   "num": 73,
   "nome": "Cusco Amigo",
   "x": 4553,
   "y": 1533
  },
  {
   "num": 74,
   "nome": "Sinuelo Do Cristal",
   "x": 4553,
   "y": 1621
  },
  {
   "num": 75,
   "nome": "República Do Pampa",
   "x": 4553,
   "y": 1705
  },
  {
   "num": 76,
   "nome": "Tatu Faqueado",
   "x": 4643,
   "y": 1705
  },
  {
   "num": 77,
   "nome": "Lida De Campo",
   "x": 4643,
   "y": 1621
  },
  {
   "num": 78,
   "nome": "Estância Velho Barroso",
   "x": 4646,
   "y": 1534
  },
  {
   "num": 79,
   "nome": "Amigos Do Tio Flor",
   "x": 4645,
   "y": 1450
  },
  {
   "num": 80,
   "nome": "Perreco",
   "x": 4641,
   "y": 1361
  },
  {
   "num": 81,
   "nome": "Sonho De Guri",
   "x": 4644,
   "y": 1274
  },
  {
   "num": 82,
   "nome": "Amigos De São Borja",
   "x": 4645,
   "y": 1189
  },
  {
   "num": 83,
   "nome": "Recanto Gaudério",
   "x": 4644,
   "y": 1107
  },
  {
   "num": 84,
   "nome": "Queixo Duro",
   "x": 4767,
   "y": 1104
  },
  {
   "num": 85,
   "nome": "Origem Campeira",
   "x": 4765,
   "y": 1190
  },
  {
   "num": 86,
   "nome": "Fraternidade Gaúcha - Grande Oriente",
   "x": 4765,
   "y": 1273
  },
  {
   "num": 87,
   "nome": "A Ferro E Fogo",
   "x": 4766,
   "y": 1359
  },
  {
   "num": 88,
   "nome": "Dos Borges",
   "x": 4766,
   "y": 1443
  },
  {
   "num": 89,
   "nome": "Velho Picasso",
   "x": 4764,
   "y": 1533
  },
  {
   "num": 90,
   "nome": "Campo Novo",
   "x": 4761,
   "y": 1620
  },
  {
   "num": 91,
   "nome": "Mandruva Verde",
   "x": 4767,
   "y": 1708
  },
  {
   "num": 92,
   "nome": "Barraca Armada",
   "x": 4860,
   "y": 1708
  },
  {
   "num": 93,
   "nome": "Dos Oliveiras",
   "x": 4858,
   "y": 1619
  },
  {
   "num": 94,
   "nome": "Vento Minuano",
   "x": 4859,
   "y": 1533
  },
  {
   "num": 95,
   "nome": "João Bombacha",
   "x": 4859,
   "y": 1443
  },
  {
   "num": 96,
   "nome": "Amigos Dos Martins",
   "x": 4859,
   "y": 1359
  },
  {
   "num": 97,
   "nome": "Fundação São João",
   "x": 4858,
   "y": 1273
  },
  {
   "num": 98,
   "nome": "Xirú Do Coice",
   "x": 4858,
   "y": 1189
  },
  {
   "num": 99,
   "nome": "Cabeça Preta",
   "x": 4857,
   "y": 1104
  },
  {
   "num": 100,
   "nome": "Raiz Missioneira",
   "x": 4983,
   "y": 1055
  },
  {
   "num": 101,
   "nome": "Desgarrados Da Cavalhada",
   "x": 4983,
   "y": 1154
  },
  {
   "num": 102,
   "nome": "Grupo Arte Nativas Vertente Missioneira",
   "x": 4983,
   "y": 1251
  },
  {
   "num": 103,
   "nome": "Raça Gaúcha",
   "x": 4985,
   "y": 1338
  },
  {
   "num": 104,
   "nome": "Alegretense",
   "x": 4987,
   "y": 1428
  },
  {
   "num": 105,
   "nome": "Querência Amiga",
   "x": 4985,
   "y": 1519
  },
  {
   "num": 106,
   "nome": "Vigilantes Do Rio Grande Do Sul",
   "x": 4986,
   "y": 1605
  },
  {
   "num": 107,
   "nome": "Camboatá",
   "x": 4986,
   "y": 1694
  },
  {
   "num": 108,
   "nome": "Charla De Galpão",
   "x": 4986,
   "y": 1863
  },
  {
   "num": 109,
   "nome": "Orçamento Participativo",
   "x": 4986,
   "y": 1952
  },
  {
   "num": 110,
   "nome": "Desgarrado Do Ipiranga",
   "x": 4986,
   "y": 2040
  },
  {
   "num": 111,
   "nome": "Panela De Gancho",
   "x": 4986,
   "y": 2131
  },
  {
   "num": 112,
   "nome": "Vaqueanos Da Tradição",
   "x": 4986,
   "y": 2218
  },
  {
   "num": 113,
   "nome": "Querencia Dos Amigos",
   "x": 4986,
   "y": 2308
  },
  {
   "num": 114,
   "nome": "Manotaço",
   "x": 4987,
   "y": 2391
  },
  {
   "num": 115,
   "nome": "Fronteira Seca",
   "x": 1292,
   "y": 1370
  },
  {
   "num": 116,
   "nome": "João Vitorino",
   "x": 4987,
   "y": 2477
  },
  {
   "num": 117,
   "nome": "Tropa Gaúcha RS",
   "x": 4854,
   "y": 2376
  },
  {
   "num": 118,
   "nome": "Tropa Gaúcha Do Brasil RS",
   "x": 4855,
   "y": 2289
  },
  {
   "num": 119,
   "nome": "Galpão Fagundes",
   "x": 4853,
   "y": 2202
  },
  {
   "num": 120,
   "nome": "Lixiguana",
   "x": 4852,
   "y": 2115
  },
  {
   "num": 121,
   "nome": "Curto E Grosso",
   "x": 4851,
   "y": 2029
  },
  {
   "num": 122,
   "nome": "Amigos Do Sul",
   "x": 4854,
   "y": 1945
  },
  {
   "num": 123,
   "nome": "Espora De Prata",
   "x": 4853,
   "y": 1858
  },
  {
   "num": 124,
   "nome": "Missioneiro",
   "x": 4760,
   "y": 1858
  },
  {
   "num": 125,
   "nome": "Tchê Gurias",
   "x": 4758,
   "y": 1945
  },
  {
   "num": 126,
   "nome": "Portal Do Rio Grande",
   "x": 4761,
   "y": 2030
  },
  {
   "num": 127,
   "nome": "Do Grosso",
   "x": 4760,
   "y": 2116
  },
  {
   "num": 128,
   "nome": "Tio João",
   "x": 4764,
   "y": 2202
  },
  {
   "num": 129,
   "nome": "Clube De Truco Pitoco",
   "x": 4764,
   "y": 2289
  },
  {
   "num": 130,
   "nome": "Gadanha",
   "x": 4762,
   "y": 2376
  },
  {
   "num": 131,
   "nome": "Desgarrados Do Partenon",
   "x": 4766,
   "y": 2463
  },
  {
   "num": 132,
   "nome": "Monte Xiru",
   "x": 4641,
   "y": 2464
  },
  {
   "num": 133,
   "nome": "Marco Antonio Mezenga",
   "x": 4638,
   "y": 2376
  },
  {
   "num": 134,
   "nome": "Tricolor Dos Pampas",
   "x": 4638,
   "y": 2292
  },
  {
   "num": 135,
   "nome": "Laços De Amizade",
   "x": 4636,
   "y": 2207
  },
  {
   "num": 136,
   "nome": "Acampamento Sinal Marca E Tarca",
   "x": 4634,
   "y": 2120
  },
  {
   "num": 137,
   "nome": "Motoqueiros Do Pampa",
   "x": 4636,
   "y": 2033
  },
  {
   "num": 138,
   "nome": "Estância Do Guerreiro",
   "x": 4637,
   "y": 1948
  },
  {
   "num": 139,
   "nome": "Chama Crioula",
   "x": 4637,
   "y": 1862
  },
  {
   "num": 140,
   "nome": "Amigos De Viamão",
   "x": 4549,
   "y": 1862
  },
  {
   "num": 141,
   "nome": "Manilha De Espada",
   "x": 4546,
   "y": 1946
  },
  {
   "num": 142,
   "nome": "É O Tchê",
   "x": 4548,
   "y": 2033
  },
  {
   "num": 143,
   "nome": "Lanceiros De Prata",
   "x": 4550,
   "y": 2119
  },
  {
   "num": 144,
   "nome": "Tamandaré",
   "x": 4550,
   "y": 2207
  },
  {
   "num": 145,
   "nome": "Flores Da Cunha",
   "x": 4550,
   "y": 2292
  },
  {
   "num": 146,
   "nome": "San Martin",
   "x": 4549,
   "y": 2375
  },
  {
   "num": 147,
   "nome": "Laços De Sangue",
   "x": 4549,
   "y": 2465
  },
  {
   "num": 148,
   "nome": "Grito Do Quero Quero - SBT",
   "x": 4406,
   "y": 2380
  },
  {
   "num": 149,
   "nome": "Rincão Gaudério",
   "x": 4406,
   "y": 2295
  },
  {
   "num": 150,
   "nome": "Mango E Maneia",
   "x": 4407,
   "y": 2208
  },
  {
   "num": 151,
   "nome": "Familia E Tradição",
   "x": 4409,
   "y": 2124
  },
  {
   "num": 152,
   "nome": "Guardiões Do Rio Grande",
   "x": 4404,
   "y": 2033
  },
  {
   "num": 153,
   "nome": "OAB",
   "x": 4251,
   "y": 2126
  },
  {
   "num": 154,
   "nome": "OAB - Oabprev",
   "x": 4252,
   "y": 2212
  },
  {
   "num": 155,
   "nome": "Galpão De Pau A Pique",
   "x": 4254,
   "y": 2301
  },
  {
   "num": 156,
   "nome": "Herdeiros Dos Quatro Cantos Do Rgs",
   "x": 4255,
   "y": 2392
  },
  {
   "num": 157,
   "nome": "Meu Velho Pai",
   "x": 4253,
   "y": 2503
  },
  {
   "num": 158,
   "nome": "Guardas Da Tradição",
   "x": 4170,
   "y": 2411
  },
  {
   "num": 159,
   "nome": "Lida Campeira",
   "x": 4081,
   "y": 2380
  },
  {
   "num": 160,
   "nome": "Porteira Aberta",
   "x": 3995,
   "y": 2352
  },
  {
   "num": 161,
   "nome": "Tiarayú",
   "x": 4169,
   "y": 2217
  },
  {
   "num": 162,
   "nome": "Revolução Dos Tauras",
   "x": 4085,
   "y": 2223
  },
  {
   "num": 163,
   "nome": "Herança Farrapa",
   "x": 3994,
   "y": 2220
  },
  {
   "num": 164,
   "nome": "Recanto Dos Cunhas",
   "x": 3908,
   "y": 2226
  },
  {
   "num": 165,
   "nome": "Mangaço",
   "x": 3816,
   "y": 2221
  },
  {
   "num": 166,
   "nome": "Adaga De Prata",
   "x": 3716,
   "y": 2143
  },
  {
   "num": 167,
   "nome": "Corretores Da Tradição",
   "x": 3707,
   "y": 2233
  },
  {
   "num": 168,
   "nome": "Marca Gaucha ( Banrisul )",
   "x": 3539,
   "y": 2128
  },
  {
   "num": 169,
   "nome": "Morro Da Tapera - Asj - RS",
   "x": 3451,
   "y": 2103
  },
  {
   "num": 170,
   "nome": "Mala De Garupa - Grande Loja Maçônica",
   "x": 3367,
   "y": 2080
  },
  {
   "num": 171,
   "nome": "Herança Pampeana",
   "x": 3280,
   "y": 2064
  },
  {
   "num": 172,
   "nome": "Fundação Assefaz/rs",
   "x": 3199,
   "y": 2039
  },
  {
   "num": 173,
   "nome": "Amigos Do Sul",
   "x": 3105,
   "y": 2011
  },
  {
   "num": 174,
   "nome": "República Riograndense",
   "x": 4019,
   "y": 2569
  },
  {
   "num": 175,
   "nome": "Amigos Da Estância",
   "x": 3917,
   "y": 2487
  },
  {
   "num": 176,
   "nome": "A Tradicionalista",
   "x": 3826,
   "y": 2444
  },
  {
   "num": 177,
   "nome": "Galpão Da Querência",
   "x": 3735,
   "y": 2423
  },
  {
   "num": 178,
   "nome": "Estrela",
   "x": 3646,
   "y": 2404
  },
  {
   "num": 179,
   "nome": "Chilena De Ouro",
   "x": 3655,
   "y": 2526
  },
  {
   "num": 180,
   "nome": "Sinpol",
   "x": 3737,
   "y": 2554
  },
  {
   "num": 181,
   "nome": "Recanto Do Pafúncio",
   "x": 3828,
   "y": 2559
  },
  {
   "num": 182,
   "nome": "Grupo De Tradições E Folclore Os Tapeyaras",
   "x": 3917,
   "y": 2576
  },
  {
   "num": 183,
   "nome": "Terra Gaúcha",
   "x": 3435,
   "y": 2312
  },
  {
   "num": 184,
   "nome": "Descendência Caudilha",
   "x": 3350,
   "y": 2314
  },
  {
   "num": 185,
   "nome": "Gonçalves",
   "x": 3260,
   "y": 2312
  },
  {
   "num": 186,
   "nome": "Regalos De Amizade",
   "x": 3176,
   "y": 2311
  },
  {
   "num": 187,
   "nome": "Galponeiros Do Harmonia",
   "x": 3090,
   "y": 2304
  },
  {
   "num": 188,
   "nome": "Tropeiros De Viamão",
   "x": 3003,
   "y": 2283
  },
  {
   "num": 189,
   "nome": "Gaudérios Da Harmonia",
   "x": 3434,
   "y": 2545
  },
  {
   "num": 190,
   "nome": "Rancho Dos Desgarrados",
   "x": 3347,
   "y": 2532
  },
  {
   "num": 191,
   "nome": "Recanto Dos Piás",
   "x": 3260,
   "y": 2531
  },
  {
   "num": 192,
   "nome": "Três Irmãos",
   "x": 3164,
   "y": 2528
  },
  {
   "num": 193,
   "nome": "Gaudérios Da Saúde",
   "x": 3009,
   "y": 2526
  },
  {
   "num": 194,
   "nome": "Raízes Do Sul",
   "x": 2919,
   "y": 2536
  },
  {
   "num": 195,
   "nome": "Pêlo Escuro",
   "x": 2244,
   "y": 2266
  },
  {
   "num": 196,
   "nome": "35 Ctg",
   "x": 2145,
   "y": 2170
  },
  {
   "num": 197,
   "nome": "Estrela Gaudéria",
   "x": 4249,
   "y": 2787
  },
  {
   "num": 198,
   "nome": "Flor E Truco",
   "x": 4148,
   "y": 2760
  },
  {
   "num": 199,
   "nome": "Estância Da Figueira",
   "x": 4060,
   "y": 2747
  },
  {
   "num": 200,
   "nome": "Gaudérios Da Zona Sul",
   "x": 3970,
   "y": 2732
  },
  {
   "num": 201,
   "nome": "Jp De Tradição",
   "x": 3879,
   "y": 2735
  },
  {
   "num": 202,
   "nome": "Chimango",
   "x": 3790,
   "y": 2742
  },
  {
   "num": 203,
   "nome": "Marca Gaúcha",
   "x": 3481,
   "y": 2755
  },
  {
   "num": 204,
   "nome": "Tramela De Barro",
   "x": 3394,
   "y": 2750
  },
  {
   "num": 205,
   "nome": "Estância Dos Amigos",
   "x": 3309,
   "y": 2740
  },
  {
   "num": 206,
   "nome": "Galpão Dos Amigos",
   "x": 3225,
   "y": 2739
  },
  {
   "num": 207,
   "nome": "Querência Do Peão",
   "x": 3145,
   "y": 2735
  },
  {
   "num": 208,
   "nome": "30 De Abril",
   "x": 3067,
   "y": 2733
  },
  {
   "num": 209,
   "nome": "Da Cavalhada",
   "x": 2992,
   "y": 2724
  },
  {
   "num": 210,
   "nome": "Sentinela Dos Pampas",
   "x": 2912,
   "y": 2724
  },
  {
   "num": 211,
   "nome": "Herdeiros Da Fronteira",
   "x": 2838,
   "y": 2718
  },
  {
   "num": 212,
   "nome": "Ponche Verde",
   "x": 2759,
   "y": 2717
  },
  {
   "num": 213,
   "nome": "Eptche",
   "x": 2679,
   "y": 2717
  },
  {
   "num": 214,
   "nome": "Trio Da Canha",
   "x": 2600,
   "y": 2715
  },
  {
   "num": 215,
   "nome": "Liberdade",
   "x": 2513,
   "y": 2716
  },
  {
   "num": 216,
   "nome": "Paleteada",
   "x": 2429,
   "y": 2595
  },
  {
   "num": 217,
   "nome": "Tropeiros De Guaíba",
   "x": 2429,
   "y": 2696
  },
  {
   "num": 218,
   "nome": "Fazendo Tubiano",
   "x": 2432,
   "y": 2788
  },
  {
   "num": 219,
   "nome": "Agrupamento Crioulo Hélio Barbachan",
   "x": 2301,
   "y": 2579
  },
  {
   "num": 220,
   "nome": "Desgarrados Do Pago",
   "x": 2301,
   "y": 2700
  },
  {
   "num": 221,
   "nome": "Toca Do Graxaim",
   "x": 2304,
   "y": 2792
  },
  {
   "num": 222,
   "nome": "Apaysanados",
   "x": 2216,
   "y": 2784
  },
  {
   "num": 223,
   "nome": "Do Chasque",
   "x": 2213,
   "y": 2667
  },
  {
   "num": 224,
   "nome": "Mouro Velho",
   "x": 2213,
   "y": 2525
  },
  {
   "num": 225,
   "nome": "Amizade Gaudéria",
   "x": 2060,
   "y": 2390
  },
  {
   "num": 226,
   "nome": "Chapeu Tapeado",
   "x": 2094,
   "y": 2479
  },
  {
   "num": 227,
   "nome": "Pampa E Liberdade",
   "x": 2100,
   "y": 2569
  },
  {
   "num": 228,
   "nome": "Mangaço",
   "x": 2094,
   "y": 2657
  },
  {
   "num": 229,
   "nome": "Rancho Dorneles",
   "x": 2008,
   "y": 2657
  },
  {
   "num": 230,
   "nome": "Rincão Da Amizade",
   "x": 2008,
   "y": 2568
  },
  {
   "num": 231,
   "nome": "Harmonia Gaudéria",
   "x": 2010,
   "y": 2481
  },
  {
   "num": 232,
   "nome": "Galpão Do Gonha",
   "x": 2098,
   "y": 2791
  },
  {
   "num": 233,
   "nome": "Galpão Da Amizade",
   "x": 2005,
   "y": 2792
  },
  {
   "num": 234,
   "nome": "La Fronteira",
   "x": 1920,
   "y": 2792
  },
  {
   "num": 235,
   "nome": "Cabo Toco",
   "x": 1827,
   "y": 2789
  },
  {
   "num": 236,
   "nome": "Os Fronteiriços",
   "x": 430,
   "y": 1531
  }
 ],
 "roadNodes": {
  "Praça Sul": [
   1744,
   2221
  ],
  "Estacionamento Leste (acesso)": [
   5005,
   1771
  ],
  "Praça Leste": [
   2120,
   1955
  ],
  "Praça Oeste": [
   1439,
   1865
  ],
  "rotula_das_cuias_acesso": [
   5353,
   2719
  ],
  "Rua_Otavio_Francisco_Caruso_da_Rocha_1": [
   2106,
   892
  ],
  "Rua_Otavio_Francisco_Caruso_da_Rocha_2": [
   4402,
   872
  ],
  "Rua_Otavio_Francisco_Caruso_da_Rocha_3": [
   5540,
   847
  ],
  "Avenida_Augusto_de_Carvalho_1": [
   5631,
   860
  ],
  "Avenida_Augusto_de_Carvalho_2": [
   5620,
   1010
  ],
  "Avenida_Augusto_de_Carvalho_3": [
   5623,
   2111
  ],
  "Avenida_Augusto_de_Carvalho_4": [
   5473,
   2524
  ],
  "rotula_das_cuias": [
   5556,
   2878
  ],
  "Avenida_Edvaldo_Pereira_Paiva_1": [
   4492,
   2930
  ],
  "Avenida_Edvaldo_Pereira_Paiva_2": [
   4082,
   3005
  ],
  "Avenida_Edvaldo_Pereira_Paiva_3": [
   3060,
   3014
  ],
  "Avenida_Edvaldo_Pereira_Paiva_4": [
   1680,
   3042
  ],
  "Pórtico_da_Orla": [
   1650,
   2852
  ],
  "Pórtico_das_Cuias": [
   4385,
   2840
  ],
  "Rua_Presidente_Ademir_de_Morais_1": [
   4276,
   2692
  ],
  "Rua_Presidente_Ademir_de_Morais_2": [
   4191,
   2642
  ],
  "Rua_Presidente_Ademir_de_Morais_3": [
   4055,
   2626
  ],
  "Rua_Presidente_Ademir_de_Morais_4": [
   3782,
   2624
  ],
  "Rua_Presidente_Ademir_de_Morais_5": [
   3373,
   2625
  ],
  "Rua_Presidente_Ademir_de_Morais_6": [
   2813,
   2591
  ],
  "Rua_Presidente_Ademir_de_Morais_7": [
   2650,
   2573
  ],
  "Rua_Cyra_Dutra_Ferreira_1": [
   2367,
   2525
  ],
  "Rua_Presidente_Ademir_de_Morais_8": [
   2354,
   2479
  ],
  "Rua_Presidente_Ademir_de_Morais_9": [
   2289,
   2430
  ],
  "Rua_Leopoldo_Rassier_1": [
   2069,
   2150
  ],
  "Rua_Leopoldo_Rassier_2": [
   2105,
   2244
  ],
  "Rua_Leopoldo_Rassier_3": [
   2153,
   2329
  ],
  "Rua_Leopoldo_Rassier_4": [
   2270,
   2384
  ],
  "Rua_Luiz_Carlos_Borges_1": [
   2332,
   2354
  ],
  "Rua_Luiz_Carlos_Borges_2": [
   2410,
   2306
  ],
  "Rua_Luiz_Carlos_Borges_3": [
   2488,
   2213
  ],
  "Rua_Cyra_Dutra_Ferreira_2": [
   2372,
   2597
  ],
  "Rua_Cyra_Dutra_Ferreira_3": [
   2372,
   2677
  ],
  "Rua_Cyra_Dutra_Ferreira_4": [
   2369,
   2744
  ],
  "Rua_Cyra_Dutra_Ferreira_5": [
   2368,
   2809
  ],
  "Rua_Cesar_Passarinho_1": [
   2152,
   2374
  ],
  "Rua_Cesar_Passarinho_2": [
   2154,
   2506
  ],
  "Rua_Cesar_Passarinho_3": [
   2156,
   2714
  ],
  "Rua_Cesar_Passarinho_4": [
   2156,
   2823
  ],
  "Rua_Jose_Claudio_Machado_1": [
   2071,
   2279
  ],
  "Rua_Jose_Claudio_Machado_2": [
   1932,
   2417
  ],
  "Rua_Jose_Claudio_Machado_3": [
   1934,
   2714
  ],
  "Rua_Simões_Lopes_Neto_1": [
   2184,
   1987
  ],
  "Rua_Simões_Lopes_Neto_2": [
   2522,
   2159
  ],
  "Rua_Simões_Lopes_Neto_3": [
   2790,
   2160
  ],
  "Rua_Simões_Lopes_Neto_4": [
   2961,
   2191
  ],
  "Rua_Simões_Lopes_Neto_5": [
   3172,
   2213
  ],
  "Avenida Jayme Caetano Braun_1": [
   2071,
   1050
  ],
  "Avenida Jayme Caetano Braun_2": [
   1958,
   1383
  ],
  "Avenida Jayme Caetano Braun_3": [
   1918,
   1616
  ],
  "Avenida Jayme Caetano Braun_4": [
   1695,
   2374
  ],
  "Avenida Jayme Caetano Braun_5": [
   1664,
   2643
  ],
  "Rua_sem_nome_1_1": [
   1578,
   2631
  ],
  "Rua_sem_nome_1_2": [
   1325,
   2579
  ],
  "Rua_sem_nome_1_4": [
   896,
   2497
  ],
  "Rua_sem_nome_2_1": [
   904,
   2370
  ],
  "Rua_sem_nome_2_2": [
   874,
   2289
  ],
  "Rua_sem_nome_2_3": [
   869,
   2228
  ],
  "Rua_sem_nome_2_4": [
   698,
   2040
  ],
  "Rua_sem_nome_2_5": [
   354,
   1602
  ],
  "Rua_sem_nome_2_6": [
   250,
   1373
  ],
  "Rua_sem_nome_3_1": [
   432,
   2081
  ],
  "Rua_sem_nome_4_1": [
   373,
   1294
  ],
  "Rua_sem_nome_5_1": [
   500,
   1239
  ],
  "Rua_sem_nome_5_2": [
   635,
   1334
  ],
  "Rua_sem_nome_5_3": [
   770,
   1453
  ],
  "Rua_sem_nome_5_4": [
   895,
   1600
  ],
  "Rua_sem_nome_5_5": [
   1148,
   1661
  ],
  "Rua_sem_nome_5_6": [
   1281,
   1792
  ],
  "Rua_sem_nome_5_7": [
   1403,
   1853
  ],
  "Rua_sem_nome_6_2": [
   902,
   1283
  ],
  "Rua_sem_nome_6_1": [
   697,
   1308
  ],
  "Rua_sem_nome_6_3": [
   1126,
   1246
  ],
  "Rua_sem_nome_6_4": [
   1161,
   1286
  ],
  "Rua_sem_nome_6_5": [
   1229,
   1486
  ],
  "Rua_sem_nome_6_6": [
   1392,
   1561
  ],
  "Rua_sem_nome_6_7": [
   1534,
   1673
  ],
  "Rua_sem_nome_7_1": [
   1221,
   1516
  ],
  "Rua_sem_nome_7_2": [
   1058,
   1865
  ],
  "Rua_sem_nome_7_3": [
   999,
   2002
  ],
  "Rua_sem_nome_7_4": [
   927,
   2153
  ],
  "Rua_sem_nome_3_2": [
   738,
   2044
  ],
  "Rua_sem_nome_3_3": [
   916,
   2046
  ],
  "Rua_sem_nome_3_4": [
   977,
   2058
  ],
  "Rua_sem_nome_3_5": [
   1375,
   2038
  ],
  "Praça Sudoeste": [
   1431,
   2044
  ],
  "Rua_sem_nome_8_1": [
   1395,
   2073
  ],
  "Rua_sem_nome_8_2": [
   1320,
   2253
  ],
  "Rua_sem_nome_1_3": [
   1194,
   2499
  ],
  "Rua_sem_nome_8_3": [
   1277,
   2367
  ],
  "Praça_Nordeste": [
   2147,
   1718
  ],
  "Praça_Noroeste": [
   1560,
   1706
  ],
  "Praça Sudeste": [
   2033,
   2117
  ],
  "Avenida_Paixão_Cortes_1": [
   2364,
   1762
  ],
  "Avenida_Paixão_Cortes_2": [
   3015,
   1769
  ],
  "Rua_Glaucus_Saraiva_1": [
   2432,
   1803
  ],
  "Rua_Glaucus_Saraiva_2": [
   3035,
   2080
  ],
  "Rua_Darci_Fagundes_1": [
   3015,
   1800
  ],
  "Rua_Darci_Fagundes_2": [
   3021,
   1898
  ],
  "Rua_Darci_Fagundes_3": [
   3034,
   2030
  ],
  "Rua_Glaucus_Saraiva_3": [
   3290,
   2186
  ],
  "Rua_Glaucus_Saraiva_4": [
   3602,
   2265
  ],
  "Rua_Glaucus_Saraiva_5": [
   3817,
   2347
  ],
  "Rua_Glaucus_Saraiva_6": [
   3930,
   2404
  ],
  "Rua_Glaucus_Saraiva_7": [
   4003,
   2457
  ],
  "Rua_Glaucus_Saraiva_8": [
   4143,
   2573
  ],
  "Avenida_Paixão_Cortes_3": [
   3196,
   1775
  ],
  "Avenida_Paixão_Cortes_4": [
   3405,
   1768
  ],
  "Avenida_Paixão_Cortes_5": [
   3489,
   1790
  ],
  "Avenida_Paixão_Cortes_6": [
   3865,
   1794
  ],
  "Avenida_Paixão_Cortes_7": [
   4173,
   1787
  ],
  "Avenida_Paixão_Cortes_8": [
   4274,
   1784
  ],
  "Avenida_Paixão_Cortes_10": [
   4317,
   1789
  ],
  "Avenida_Paixão_Cortes_11": [
   4482,
   1781
  ],
  "Avenida_Paixão_Cortes_12": [
   4691,
   1789
  ],
  "Avenida_Paixão_Cortes_13": [
   4915,
   1784
  ],
  "Rua_Anita_Garibaldi_1": [
   3525,
   1814
  ],
  "Rua_Anita_Garibaldi_2": [
   3547,
   1887
  ],
  "Rua_Anita_Garibaldi_3": [
   3607,
   1973
  ],
  "Rua_Anita_Garibaldi_4": [
   3625,
   2044
  ],
  "Rua_Anita_Garibaldi_5": [
   3866,
   2118
  ],
  "Rua_Anita_Garibaldi_6": [
   4020,
   2127
  ],
  "Rua_Anita_Garibaldi_7": [
   4180,
   2079
  ],
  "Rua_Sepé_Tiaraju_1": [
   3866,
   1946
  ],
  "Rua_Paulo_R._R._Guimarães_1": [
   4170,
   1941
  ],
  "Rua_Negrinho_do_Pastoreiro_1": [
   4315,
   1843
  ],
  "Rua_Negrinho_do_Pastoreiro_2": [
   4322,
   2013
  ],
  "Rua_Negrinho_do_Pastoreiro_3": [
   4317,
   2349
  ],
  "Rua_Barbosa_Lessa_2": [
   4487,
   2617
  ],
  "Rua_Barbosa_Lessa_3": [
   4705,
   2567
  ],
  "Rua_Barbosa_Lessa_4": [
   4909,
   2466
  ],
  "Rua_Maria_Pampin_1": [
   4470,
   2236
  ],
  "Rua_Hugo_da_Cunha_Alves_1": [
   4697,
   2344
  ],
  "Rua_Hugo_da_Cunha_Alves_2": [
   4695,
   2085
  ],
  "Rua_Maria_Pampin_2": [
   4482,
   1414
  ],
  "Rua_Hugo_da_Cunha_Alves_3": [
   4697,
   1398
  ],
  "Rua_Antônio_Augusto_Fagundes_1": [
   4271,
   1084
  ],
  "Rua_Antônio_Augusto_Fagundes_2": [
   4266,
   1253
  ],
  "Rua_Antônio_Augusto_Fagundes_3": [
   4274,
   1527
  ],
  "Rua_Antônio_Augusto_Fagundes_4": [
   4273,
   1715
  ],
  "Rua_Aparicio_Silva_Rillo_1": [
   4056,
   1149
  ],
  "Rua_Aparicio_Silva_Rillo_2": [
   4057,
   1259
  ],
  "Rua_Teixeirinha_1": [
   3835,
   1097
  ],
  "Rua_Teixeirinha_2": [
   3841,
   1202
  ],
  "Rua_Teixeirinha_3": [
   3841,
   1265
  ],
  "Rua_Gildo_de_Freitas_2": [
   3623,
   1259
  ],
  "Rua_Gildo_de_Freitas_1": [
   3626,
   1182
  ],
  "Rua_Lilian_Argentina_1": [
   3192,
   1343
  ],
  "Rua_Dimas_Costa_1": [
   3410,
   1265
  ],
  "Sem_Nome_9_1": [
   3540,
   1270
  ],
  "Sem_Nome_9_2": [
   3736,
   1263
  ],
  "Sem_Nome_9_3": [
   3949,
   1266
  ],
  "Sem_Nome_9_4": [
   4166,
   1264
  ],
  "Avenida_Paixão_Cortes_5_1": [
   3780,
   1779
  ],
  "Avenida_Paixão_Cortes_6_1": [
   4029,
   1774
  ],
  "Sem_Nome_10_1": [
   3544,
   1536
  ],
  "Sem_Nome_10_2": [
   3539,
   1733
  ],
  "Sem_Nome_11_1": [
   3643,
   1544
  ],
  "Sem_Nome_11_2": [
   3894,
   1534
  ],
  "Sem_Nome_11_3": [
   4146,
   1530
  ],
  "Sem_Nome_12_1": [
   3777,
   1534
  ],
  "Sem_Nome_12_2": [
   3781,
   1731
  ],
  "Sem_Nome_13_1": [
   4023,
   1536
  ],
  "Sem_Nome_13_2": [
   4029,
   1739
  ],
  "Rua_Cancha_Reta_8": [
   4915,
   1039
  ],
  "Sem_Nome_14_1": [
   4917,
   1343
  ],
  "Sem_Nome_14_2": [
   4916,
   1636
  ],
  "Sem_Nome_15_1": [
   2050,
   2715
  ],
  "Casa_do_Gaucho_1": [
   2709,
   1382
  ],
  "Rua_Cancha_Reta_0": [
   3194,
   1052
  ],
  "Rua_Cancha_Reta_1": [
   3408,
   1042
  ],
  "Rua_Cancha_Reta_2": [
   3628,
   1038
  ],
  "Rua_Cancha_Reta_3": [
   3847,
   1040
  ],
  "Rua_Cancha_Reta_4": [
   4060,
   1041
  ],
  "Rua_Cancha_Reta_5": [
   4270,
   1039
  ],
  "Rua_Cancha_Reta_6": [
   4485,
   1037
  ],
  "Rua_Cancha_Reta_7": [
   4708,
   1041
  ],
  "Rua_Barbosa_Lessa_1": [
   4317,
   2621
  ]
 },
 "roadEdges": [
  [
   "Rua_Otavio_Francisco_Caruso_da_Rocha_1",
   "Rua_Otavio_Francisco_Caruso_da_Rocha_2"
  ],
  [
   "Rua_Otavio_Francisco_Caruso_da_Rocha_2",
   "Rua_Otavio_Francisco_Caruso_da_Rocha_3"
  ],
  [
   "Avenida_Paixão_Cortes_13",
   "Rua_Barbosa_Lessa_4"
  ],
  [
   "Rua_Simões_Lopes_Neto_1",
   "Rua_Simões_Lopes_Neto_2"
  ],
  [
   "Avenida_Augusto_de_Carvalho_2",
   "Avenida_Augusto_de_Carvalho_3"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_8",
   "Rua_Cyra_Dutra_Ferreira_1"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_9",
   "Rua_Presidente_Ademir_de_Morais_8"
  ],
  [
   "Avenida Jayme Caetano Braun_3",
   "Praça_Nordeste"
  ],
  [
   "Avenida_Paixão_Cortes_1",
   "Praça_Nordeste"
  ],
  [
   "Casa_do_Gaucho_1",
   "Avenida_Paixão_Cortes_1"
  ],
  [
   "Avenida_Paixão_Cortes_2",
   "Avenida_Paixão_Cortes_1"
  ],
  [
   "Avenida_Paixão_Cortes_3",
   "Avenida_Paixão_Cortes_2"
  ],
  [
   "Rua_Glaucus_Saraiva_3",
   "Rua_Glaucus_Saraiva_2"
  ],
  [
   "Rua_Simões_Lopes_Neto_5",
   "Rua_Glaucus_Saraiva_3"
  ],
  [
   "Rua_Glaucus_Saraiva_4",
   "Rua_Glaucus_Saraiva_3"
  ],
  [
   "Rua_Anita_Garibaldi_4",
   "Rua_Glaucus_Saraiva_4"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_2",
   "Rua_Presidente_Ademir_de_Morais_1"
  ],
  [
   "Rua_Glaucus_Saraiva_8",
   "Rua_Presidente_Ademir_de_Morais_2"
  ],
  [
   "Rua_Glaucus_Saraiva_5",
   "Rua_Glaucus_Saraiva_4"
  ],
  [
   "Rua_Anita_Garibaldi_4",
   "Rua_Anita_Garibaldi_5"
  ],
  [
   "Rua_Anita_Garibaldi_6",
   "Rua_Anita_Garibaldi_5"
  ],
  [
   "Rua_Anita_Garibaldi_7",
   "Rua_Anita_Garibaldi_6"
  ],
  [
   "Rua_Negrinho_do_Pastoreiro_2",
   "Rua_Anita_Garibaldi_7"
  ],
  [
   "Avenida_Paixão_Cortes_11",
   "Avenida_Paixão_Cortes_10"
  ],
  [
   "Rua_Paulo_R._R._Guimarães_1",
   "Rua_Anita_Garibaldi_7"
  ],
  [
   "Avenida_Paixão_Cortes_4",
   "Avenida_Paixão_Cortes_5"
  ],
  [
   "Avenida_Paixão_Cortes_3",
   "Avenida_Paixão_Cortes_4"
  ],
  [
   "Rua_Cancha_Reta_0",
   "Rua_Cancha_Reta_1"
  ],
  [
   "Rua_Cancha_Reta_2",
   "Rua_Cancha_Reta_1"
  ],
  [
   "Rua_Cancha_Reta_3",
   "Rua_Cancha_Reta_2"
  ],
  [
   "Rua_Cancha_Reta_4",
   "Rua_Cancha_Reta_3"
  ],
  [
   "Rua_Cancha_Reta_5",
   "Rua_Cancha_Reta_4"
  ],
  [
   "Rua_Cancha_Reta_6",
   "Rua_Cancha_Reta_5"
  ],
  [
   "Avenida_Paixão_Cortes_8",
   "Avenida_Paixão_Cortes_10"
  ],
  [
   "Rua_Cancha_Reta_7",
   "Rua_Cancha_Reta_8"
  ],
  [
   "Rua_Cancha_Reta_6",
   "Rua_Cancha_Reta_7"
  ],
  [
   "Rua_Barbosa_Lessa_4",
   "Rua_Barbosa_Lessa_3"
  ],
  [
   "Rua_Barbosa_Lessa_1",
   "Rua_Barbosa_Lessa_2"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_1",
   "Rua_Barbosa_Lessa_1"
  ],
  [
   "Rua_Barbosa_Lessa_2",
   "Rua_Barbosa_Lessa_3"
  ],
  [
   "Avenida_Paixão_Cortes_13",
   "Estacionamento Leste (acesso)"
  ],
  [
   "Rua_Cesar_Passarinho_3",
   "Rua_Cesar_Passarinho_4"
  ],
  [
   "Rua_Jose_Claudio_Machado_2",
   "Rua_Jose_Claudio_Machado_3"
  ],
  [
   "Rua_Leopoldo_Rassier_1",
   "Rua_Leopoldo_Rassier_2"
  ],
  [
   "Rua_Leopoldo_Rassier_3",
   "Rua_Leopoldo_Rassier_2"
  ],
  [
   "Praça_Noroeste",
   "Praça Oeste"
  ],
  [
   "Praça Sudoeste",
   "Praça Oeste"
  ],
  [
   "Praça Sul",
   "Praça Sudoeste"
  ],
  [
   "Praça_Noroeste",
   "Avenida Jayme Caetano Braun_3"
  ],
  [
   "Rua_sem_nome_5_4",
   "Rua_sem_nome_5_5"
  ],
  [
   "Rua_sem_nome_5_3",
   "Rua_sem_nome_5_4"
  ],
  [
   "Rua_sem_nome_6_2",
   "Rua_sem_nome_6_3"
  ],
  [
   "Rua_sem_nome_6_2",
   "Rua_sem_nome_5_3"
  ],
  [
   "Rua_sem_nome_5_2",
   "Rua_sem_nome_5_3"
  ],
  [
   "Rua_sem_nome_5_1",
   "Rua_sem_nome_5_2"
  ],
  [
   "Rua_sem_nome_2_6",
   "Rua_sem_nome_2_5"
  ],
  [
   "Rua_sem_nome_2_4",
   "Rua_sem_nome_2_5"
  ],
  [
   "Rua_sem_nome_2_5",
   "Rua_sem_nome_3_1"
  ],
  [
   "Rua_sem_nome_2_4",
   "Rua_sem_nome_3_1"
  ],
  [
   "Rua_sem_nome_2_4",
   "Rua_sem_nome_2_3"
  ],
  [
   "Rua_sem_nome_1_3",
   "Rua_sem_nome_1_4"
  ],
  [
   "Rua_sem_nome_1_1",
   "Avenida Jayme Caetano Braun_5"
  ],
  [
   "Pórtico_da_Orla",
   "Avenida Jayme Caetano Braun_5"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_1",
   "Pórtico_das_Cuias"
  ],
  [
   "Avenida_Edvaldo_Pereira_Paiva_4",
   "Pórtico_da_Orla"
  ],
  [
   "Avenida_Edvaldo_Pereira_Paiva_4",
   "Avenida_Edvaldo_Pereira_Paiva_3"
  ],
  [
   "Avenida_Edvaldo_Pereira_Paiva_2",
   "Avenida_Edvaldo_Pereira_Paiva_3"
  ],
  [
   "Avenida_Edvaldo_Pereira_Paiva_1",
   "Pórtico_das_Cuias"
  ],
  [
   "Avenida_Edvaldo_Pereira_Paiva_2",
   "Avenida_Edvaldo_Pereira_Paiva_1"
  ],
  [
   "rotula_das_cuias_acesso",
   "Avenida_Edvaldo_Pereira_Paiva_1"
  ],
  [
   "rotula_das_cuias",
   "rotula_das_cuias_acesso"
  ],
  [
   "Rua_Barbosa_Lessa_2",
   "Rua_Barbosa_Lessa_3"
  ],
  [
   "Avenida_Paixão_Cortes_2",
   "Rua_Darci_Fagundes_1"
  ],
  [
   "Rua_sem_nome_1_4",
   "Rua_sem_nome_2_1"
  ],
  [
   "Rua_sem_nome_2_1",
   "Rua_sem_nome_2_2"
  ],
  [
   "Rua_sem_nome_2_2",
   "Rua_sem_nome_2_3"
  ],
  [
   "Rua_Cancha_Reta_2",
   "Rua_Gildo_de_Freitas_1"
  ],
  [
   "Rua_Gildo_de_Freitas_1",
   "Rua_Gildo_de_Freitas_2"
  ],
  [
   "Rua_sem_nome_1_1",
   "Rua_sem_nome_1_2"
  ],
  [
   "Rua_sem_nome_1_2",
   "Rua_sem_nome_1_3"
  ],
  [
   "Rua_Teixeirinha_3",
   "Rua_Teixeirinha_2"
  ],
  [
   "Rua_Teixeirinha_2",
   "Rua_Teixeirinha_1"
  ],
  [
   "Rua_Teixeirinha_1",
   "Rua_Cancha_Reta_3"
  ],
  [
   "Rua_Glaucus_Saraiva_8",
   "Rua_Glaucus_Saraiva_7"
  ],
  [
   "Rua_Glaucus_Saraiva_7",
   "Rua_Glaucus_Saraiva_6"
  ],
  [
   "Rua_Glaucus_Saraiva_6",
   "Rua_Glaucus_Saraiva_5"
  ],
  [
   "Rua_Cyra_Dutra_Ferreira_5",
   "Rua_Cyra_Dutra_Ferreira_4"
  ],
  [
   "Rua_Cyra_Dutra_Ferreira_4",
   "Rua_Cyra_Dutra_Ferreira_3"
  ],
  [
   "Rua_Cyra_Dutra_Ferreira_3",
   "Rua_Cyra_Dutra_Ferreira_2"
  ],
  [
   "Rua_Cyra_Dutra_Ferreira_2",
   "Rua_Cyra_Dutra_Ferreira_1"
  ],
  [
   "Avenida_Paixão_Cortes_7",
   "Rua_Paulo_R._R._Guimarães_1"
  ],
  [
   "Rua_Anita_Garibaldi_5",
   "Rua_Sepé_Tiaraju_1"
  ],
  [
   "Rua_Sepé_Tiaraju_1",
   "Avenida_Paixão_Cortes_6"
  ],
  [
   "Rua_sem_nome_6_5",
   "Rua_sem_nome_6_4"
  ],
  [
   "Rua_sem_nome_6_4",
   "Rua_sem_nome_6_3"
  ],
  [
   "Rua_Leopoldo_Rassier_3",
   "Rua_Cesar_Passarinho_1"
  ],
  [
   "Rua_Cesar_Passarinho_1",
   "Rua_Cesar_Passarinho_2"
  ],
  [
   "Rua_Cesar_Passarinho_2",
   "Rua_Cesar_Passarinho_3"
  ],
  [
   "Rua_Simões_Lopes_Neto_2",
   "Rua_Simões_Lopes_Neto_3"
  ],
  [
   "Rua_Simões_Lopes_Neto_3",
   "Rua_Simões_Lopes_Neto_4"
  ],
  [
   "Rua_Simões_Lopes_Neto_4",
   "Rua_Simões_Lopes_Neto_5"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_2",
   "Rua_Presidente_Ademir_de_Morais_3"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_3",
   "Rua_Presidente_Ademir_de_Morais_4"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_4",
   "Rua_Presidente_Ademir_de_Morais_5"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_5",
   "Rua_Presidente_Ademir_de_Morais_6"
  ],
  [
   "Praça Sudoeste",
   "Rua_sem_nome_3_5"
  ],
  [
   "Rua_sem_nome_3_5",
   "Rua_sem_nome_8_1"
  ],
  [
   "Rua_sem_nome_8_1",
   "Rua_sem_nome_8_2"
  ],
  [
   "Rua_Cancha_Reta_8",
   "Sem_Nome_14_1"
  ],
  [
   "Sem_Nome_14_1",
   "Sem_Nome_14_2"
  ],
  [
   "Sem_Nome_14_2",
   "Avenida_Paixão_Cortes_13"
  ],
  [
   "Avenida_Paixão_Cortes_12",
   "Rua_Hugo_da_Cunha_Alves_2"
  ],
  [
   "Rua_Hugo_da_Cunha_Alves_2",
   "Rua_Hugo_da_Cunha_Alves_1"
  ],
  [
   "Rua_Hugo_da_Cunha_Alves_1",
   "Rua_Barbosa_Lessa_3"
  ],
  [
   "Avenida_Paixão_Cortes_5",
   "Rua_Anita_Garibaldi_1"
  ],
  [
   "Rua_Anita_Garibaldi_1",
   "Rua_Anita_Garibaldi_2"
  ],
  [
   "Rua_Anita_Garibaldi_2",
   "Rua_Anita_Garibaldi_3"
  ],
  [
   "Rua_Anita_Garibaldi_3",
   "Rua_Anita_Garibaldi_4"
  ],
  [
   "Rua_Aparicio_Silva_Rillo_1",
   "Rua_Cancha_Reta_4"
  ],
  [
   "Rua_Cancha_Reta_1",
   "Rua_Dimas_Costa_1"
  ],
  [
   "Avenida_Paixão_Cortes_4",
   "Rua_Dimas_Costa_1"
  ],
  [
   "Avenida_Augusto_de_Carvalho_1",
   "Rua_Otavio_Francisco_Caruso_da_Rocha_3"
  ],
  [
   "Avenida_Augusto_de_Carvalho_1",
   "Avenida_Augusto_de_Carvalho_2"
  ],
  [
   "Avenida_Augusto_de_Carvalho_3",
   "Avenida_Augusto_de_Carvalho_4"
  ],
  [
   "Avenida_Augusto_de_Carvalho_4",
   "rotula_das_cuias_acesso"
  ],
  [
   "rotula_das_cuias",
   "Avenida_Edvaldo_Pereira_Paiva_1"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_6",
   "Rua_Presidente_Ademir_de_Morais_7"
  ],
  [
   "Rua_Presidente_Ademir_de_Morais_8",
   "Rua_Presidente_Ademir_de_Morais_7"
  ],
  [
   "Rua_Leopoldo_Rassier_4",
   "Rua_Presidente_Ademir_de_Morais_9"
  ],
  [
   "Rua_Luiz_Carlos_Borges_1",
   "Rua_Leopoldo_Rassier_4"
  ],
  [
   "Rua_Luiz_Carlos_Borges_2",
   "Rua_Luiz_Carlos_Borges_1"
  ],
  [
   "Rua_Leopoldo_Rassier_3",
   "Rua_Leopoldo_Rassier_4"
  ],
  [
   "Rua_Simões_Lopes_Neto_2",
   "Rua_Luiz_Carlos_Borges_3"
  ],
  [
   "Rua_Luiz_Carlos_Borges_3",
   "Rua_Luiz_Carlos_Borges_2"
  ],
  [
   "Rua_Jose_Claudio_Machado_3",
   "Sem_Nome_15_1"
  ],
  [
   "Rua_Cesar_Passarinho_3",
   "Sem_Nome_15_1"
  ],
  [
   "Rua_Leopoldo_Rassier_2",
   "Rua_Jose_Claudio_Machado_1"
  ],
  [
   "Rua_Jose_Claudio_Machado_2",
   "Rua_Jose_Claudio_Machado_1"
  ],
  [
   "Rua_Negrinho_do_Pastoreiro_2",
   "Rua_Negrinho_do_Pastoreiro_3"
  ],
  [
   "Rua_Barbosa_Lessa_1",
   "Rua_Negrinho_do_Pastoreiro_3"
  ],
  [
   "Avenida_Paixão_Cortes_11",
   "Avenida_Paixão_Cortes_12"
  ],
  [
   "Avenida_Paixão_Cortes_13",
   "Avenida_Paixão_Cortes_12"
  ],
  [
   "Avenida Jayme Caetano Braun_1",
   "Rua_Otavio_Francisco_Caruso_da_Rocha_1"
  ],
  [
   "Avenida Jayme Caetano Braun_1",
   "Avenida Jayme Caetano Braun_2"
  ],
  [
   "Avenida Jayme Caetano Braun_3",
   "Avenida Jayme Caetano Braun_2"
  ],
  [
   "Praça Sul",
   "Avenida Jayme Caetano Braun_4"
  ],
  [
   "Avenida Jayme Caetano Braun_4",
   "Avenida Jayme Caetano Braun_5"
  ],
  [
   "Rua_sem_nome_2_6",
   "Rua_sem_nome_4_1"
  ],
  [
   "Rua_sem_nome_4_1",
   "Rua_sem_nome_5_1"
  ],
  [
   "Rua_sem_nome_5_5",
   "Rua_sem_nome_5_6"
  ],
  [
   "Rua_sem_nome_5_7",
   "Rua_sem_nome_5_6"
  ],
  [
   "Praça Oeste",
   "Rua_sem_nome_5_7"
  ],
  [
   "Rua_sem_nome_7_2",
   "Rua_sem_nome_5_5"
  ],
  [
   "Rua_sem_nome_5_2",
   "Rua_sem_nome_6_1"
  ],
  [
   "Rua_sem_nome_6_1",
   "Rua_sem_nome_6_2"
  ],
  [
   "Rua_sem_nome_6_5",
   "Rua_sem_nome_6_6"
  ],
  [
   "Rua_sem_nome_6_6",
   "Rua_sem_nome_6_7"
  ],
  [
   "Rua_sem_nome_6_7",
   "Praça_Noroeste"
  ],
  [
   "Rua_sem_nome_7_1",
   "Rua_sem_nome_6_5"
  ],
  [
   "Rua_sem_nome_7_1",
   "Rua_sem_nome_5_5"
  ],
  [
   "Rua_sem_nome_7_3",
   "Rua_sem_nome_7_2"
  ],
  [
   "Rua_sem_nome_3_4",
   "Rua_sem_nome_7_3"
  ],
  [
   "Rua_sem_nome_2_3",
   "Rua_sem_nome_7_4"
  ],
  [
   "Rua_sem_nome_7_4",
   "Rua_sem_nome_3_4"
  ],
  [
   "Rua_sem_nome_2_4",
   "Rua_sem_nome_3_2"
  ],
  [
   "Rua_sem_nome_3_3",
   "Rua_sem_nome_3_4"
  ],
  [
   "Rua_sem_nome_3_2",
   "Rua_sem_nome_3_3"
  ],
  [
   "Rua_sem_nome_3_5",
   "Rua_sem_nome_3_4"
  ],
  [
   "Rua_sem_nome_8_2",
   "Rua_sem_nome_8_3"
  ],
  [
   "Rua_sem_nome_8_3",
   "Rua_sem_nome_1_3"
  ],
  [
   "Praça Sudeste",
   "Rua_Leopoldo_Rassier_1"
  ],
  [
   "Praça Leste",
   "Praça Sudeste"
  ],
  [
   "Praça Sul",
   "Praça Sudeste"
  ],
  [
   "Praça_Nordeste",
   "Praça Leste"
  ],
  [
   "Praça Leste",
   "Rua_Simões_Lopes_Neto_1"
  ],
  [
   "Avenida_Paixão_Cortes_1",
   "Rua_Glaucus_Saraiva_1"
  ],
  [
   "Rua_Darci_Fagundes_1",
   "Rua_Darci_Fagundes_2"
  ],
  [
   "Rua_Darci_Fagundes_3",
   "Rua_Darci_Fagundes_2"
  ],
  [
   "Rua_Glaucus_Saraiva_2",
   "Rua_Darci_Fagundes_3"
  ],
  [
   "Rua_Glaucus_Saraiva_1",
   "Rua_Glaucus_Saraiva_2"
  ],
  [
   "Rua_Glaucus_Saraiva_2",
   "Rua_Darci_Fagundes_1"
  ],
  [
   "Avenida_Paixão_Cortes_7",
   "Avenida_Paixão_Cortes_8"
  ],
  [
   "Avenida_Paixão_Cortes_10",
   "Rua_Negrinho_do_Pastoreiro_1"
  ],
  [
   "Rua_Negrinho_do_Pastoreiro_1",
   "Rua_Negrinho_do_Pastoreiro_2"
  ],
  [
   "Rua_Barbosa_Lessa_2",
   "Rua_Maria_Pampin_1"
  ],
  [
   "Avenida_Paixão_Cortes_11",
   "Rua_Maria_Pampin_1"
  ],
  [
   "Avenida_Paixão_Cortes_11",
   "Rua_Maria_Pampin_2"
  ],
  [
   "Rua_Cancha_Reta_6",
   "Rua_Maria_Pampin_2"
  ],
  [
   "Rua_Cancha_Reta_7",
   "Rua_Hugo_da_Cunha_Alves_3"
  ],
  [
   "Rua_Hugo_da_Cunha_Alves_3",
   "Avenida_Paixão_Cortes_12"
  ],
  [
   "Rua_Hugo_da_Cunha_Alves_2",
   "Rua_Hugo_da_Cunha_Alves_3"
  ],
  [
   "Rua_Antônio_Augusto_Fagundes_2",
   "Rua_Antônio_Augusto_Fagundes_3"
  ],
  [
   "Rua_Antônio_Augusto_Fagundes_2",
   "Rua_Antônio_Augusto_Fagundes_1"
  ],
  [
   "Rua_Cancha_Reta_5",
   "Rua_Antônio_Augusto_Fagundes_1"
  ],
  [
   "Avenida_Paixão_Cortes_8",
   "Rua_Antônio_Augusto_Fagundes_4"
  ],
  [
   "Rua_Antônio_Augusto_Fagundes_3",
   "Rua_Antônio_Augusto_Fagundes_4"
  ],
  [
   "Rua_Aparicio_Silva_Rillo_2",
   "Rua_Aparicio_Silva_Rillo_1"
  ],
  [
   "Rua_Cancha_Reta_0",
   "Rua_Lilian_Argentina_1"
  ],
  [
   "Rua_Lilian_Argentina_1",
   "Avenida_Paixão_Cortes_3"
  ],
  [
   "Sem_Nome_9_1",
   "Rua_Dimas_Costa_1"
  ],
  [
   "Sem_Nome_9_1",
   "Rua_Gildo_de_Freitas_2"
  ],
  [
   "Rua_Gildo_de_Freitas_2",
   "Sem_Nome_9_2"
  ],
  [
   "Sem_Nome_9_2",
   "Rua_Teixeirinha_3"
  ],
  [
   "Sem_Nome_9_3",
   "Rua_Teixeirinha_3"
  ],
  [
   "Rua_Aparicio_Silva_Rillo_2",
   "Sem_Nome_9_3"
  ],
  [
   "Sem_Nome_9_4",
   "Rua_Aparicio_Silva_Rillo_2"
  ],
  [
   "Rua_Antônio_Augusto_Fagundes_2",
   "Sem_Nome_9_4"
  ],
  [
   "Sem_Nome_9_1",
   "Sem_Nome_10_1"
  ],
  [
   "Sem_Nome_10_1",
   "Sem_Nome_10_2"
  ],
  [
   "Sem_Nome_12_2",
   "Sem_Nome_12_1"
  ],
  [
   "Sem_Nome_13_1",
   "Sem_Nome_13_2"
  ],
  [
   "Avenida_Paixão_Cortes_5_1",
   "Sem_Nome_12_2"
  ],
  [
   "Avenida_Paixão_Cortes_6",
   "Avenida_Paixão_Cortes_5_1"
  ],
  [
   "Avenida_Paixão_Cortes_5",
   "Avenida_Paixão_Cortes_5_1"
  ],
  [
   "Avenida_Paixão_Cortes_6_1",
   "Avenida_Paixão_Cortes_6"
  ],
  [
   "Sem_Nome_13_2",
   "Avenida_Paixão_Cortes_6_1"
  ],
  [
   "Avenida_Paixão_Cortes_7",
   "Avenida_Paixão_Cortes_6_1"
  ],
  [
   "Sem_Nome_10_1",
   "Sem_Nome_11_1"
  ],
  [
   "Sem_Nome_11_1",
   "Sem_Nome_12_1"
  ],
  [
   "Sem_Nome_11_2",
   "Sem_Nome_12_1"
  ],
  [
   "Sem_Nome_13_1",
   "Sem_Nome_11_2"
  ],
  [
   "Sem_Nome_11_3",
   "Sem_Nome_13_1"
  ],
  [
   "Rua_Antônio_Augusto_Fagundes_3",
   "Sem_Nome_11_3"
  ]
 ],
 "gates": [
  [
   "Rua_Otavio_Francisco_Caruso_da_Rocha_1",
   "Rua Otávio Francisco Caruso da Rocha (acesso)"
  ],
  [
   "Pórtico_da_Orla",
   "Av. Jayme Caetano Braun (acesso principal)"
  ],
  [
   "rotula_das_cuias_acesso",
   "Rótula das Cuias"
  ],
  [
   "Estacionamento Leste (acesso)",
   "Estacionamento Leste (acesso)"
  ]
 ],
 "landmarks": [
  {
   "nome": "Piquete RBS (Imprensa)",
   "x": 1355,
   "y": 1948,
   "cat": "media",
   "icon": "grupo_rbs",
   "iconSize": 90,
   "tambemChamado": [
    "Rbs"
   ]
  },
  {
   "nome": "Palco Jayme Caetano Braun",
   "x": 1791,
   "y": 1947,
   "cat": "stage",
   "shape": "rect",
   "w": 350,
   "h": 200
  },
  {
   "nome": "Chama Crioula",
   "x": 2146,
   "y": 2052,
   "cat": "special",
   "icon": "chama_crioula",
   "iconSize": 80,
   "alias": "chama crioula fogo"
  },
  {
   "nome": "Casa do Gaúcho",
   "x": 2716,
   "y": 1365,
   "w": 420,
   "h": 380,
   "shape": "rect",
   "cat": "shop",
   "icon": "casa_do_gaucho",
   "iconSize": 110,
   "alias": "casa do gaucho administracao"
  },
  {
   "nome": "Lago",
   "shape": "poly",
   "behind": true,
   "cat": "water",
   "points": [
    [
     2468,
     1787
    ],
    [
     2995,
     1780
    ],
    [
     3020,
     2040
    ]
   ],
   "x": 2828,
   "y": 1869
  },
  {
   "nome": "Ambulatório (Casa do Gaúcho)",
   "x": 2582,
   "y": 1364,
   "cat": "service",
   "icon": "ambulatorio",
   "iconSize": 108,
   "alias": "posto medico saude enfermaria primeiros socorros emergencia farmacia"
  },
  {
   "nome": "Juizado (Casa do Gaúcho)",
   "x": 2926,
   "y": 1421,
   "cat": "service",
   "icon": "juizado",
   "iconSize": 100,
   "alias": "juizado justica menor conselho tutelar"
  },
  {
   "nome": "Brigada Militar (Casa do Gaúcho)",
   "x": 2575,
   "y": 1536,
   "cat": "service",
   "icon": "brigada_militar",
   "iconSize": 108,
   "alias": "policia seguranca brigada"
  },
  {
   "nome": "Polícia Penal (Casa do Gaúcho)",
   "x": 2751,
   "y": 1535,
   "cat": "service",
   "icon": "policia_penal",
   "iconSize": 93,
   "alias": "policia seguranca"
  },
  {
   "nome": "Corpo de Bombeiros (Casa do Gaúcho)",
   "x": 2835,
   "y": 1477,
   "cat": "service",
   "icon": "corpo_de_bombeiros",
   "iconSize": 108,
   "alias": "bombeiro emergencia incendio"
  },
  {
   "nome": "Polícia Civil (Casa do Gaúcho)",
   "x": 2617,
   "y": 1678,
   "cat": "service",
   "icon": "policia_civil",
   "iconSize": 100,
   "alias": "policia seguranca"
  },
  {
   "nome": "Feira Farroupilha de Artesanato",
   "x": 3908,
   "y": 1394,
   "w": 680,
   "h": 230,
   "shape": "rect",
   "cat": "shop"
  },
  {
   "nome": "Palco Nico Fagundes",
   "x": 3905,
   "y": 1643,
   "w": 160,
   "h": 200,
   "shape": "rect",
   "cat": "stage"
  },
  {
   "nome": "Feira Agricultura Familiar",
   "x": 4160,
   "y": 1636,
   "w": 200,
   "h": 190,
   "shape": "rect",
   "cat": "agro"
  },
  {
   "nome": "Mercado Farroupilha",
   "x": 4552,
   "y": 2683,
   "cat": "market",
   "icon": "mercado",
   "iconSize": 110,
   "alias": "mercado compras supermercado"
  },
  {
   "nome": "SAC — Central de Informações",
   "x": 1544,
   "y": 2420,
   "cat": "service",
   "icon": "central_de_informacoes",
   "iconSize": 95,
   "alias": "informacoes ajuda sac atendimento perdidos achados"
  },
  {
   "nome": "Playground Sepé Tiaraju",
   "x": 1008,
   "y": 1446,
   "cat": "food",
   "icon": "playground_sepe_tiaraju",
   "iconSize": 90,
   "alias": "brinquedo crianca parquinho playground"
  },
  {
   "nome": "Parque de Diversões",
   "x": 554,
   "y": 2256,
   "cat": "food",
   "icon": "parque_de_diversoes",
   "iconSize": 110,
   "alias": "brinquedo roda gigante diversao crianca"
  },
  {
   "nome": "Harmonia Beach Sports",
   "x": 1098,
   "y": 2281,
   "cat": "food",
   "icon": "harmonia_beach_sports",
   "iconSize": 111,
   "alias": "esporte quadra beach areia"
  },
  {
   "nome": "1",
   "x": 3087,
   "y": 1681,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 102,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "2",
   "x": 3297,
   "y": 1713,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 89,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "3",
   "x": 3476,
   "y": 1686,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 96,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "4",
   "x": 4393,
   "y": 1877,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 54,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "5",
   "x": 2437,
   "y": 2399,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 96,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "6",
   "x": 4022,
   "y": 1944,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 121,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "7",
   "x": 3643,
   "y": 1641,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 112,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "8",
   "x": 4241,
   "y": 1914,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 89,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "9",
   "x": 3489,
   "y": 1951,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 104,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "10",
   "x": 3737,
   "y": 1923,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 121,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "11",
   "x": 2833,
   "y": 2528,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 54,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "12",
   "x": 3509,
   "y": 2391,
   "cat": "food",
   "icon": "praca_de_alimentacao",
   "iconSize": 96,
   "tipo": "Praça de Alimentação",
   "alias": "comida lanche restaurante comer food"
  },
  {
   "nome": "Pórtico Churrascaria",
   "x": 2092,
   "y": 962,
   "cat": "public",
   "icon": "portico_churrascaria",
   "iconSize": 90,
   "alias": "portico entrada acesso portao"
  },
  {
   "nome": "Pórtico da Orla",
   "x": 1651,
   "y": 2857,
   "cat": "public",
   "icon": "portico_da_orla",
   "iconSize": 90,
   "alias": "portico entrada acesso portao"
  },
  {
   "nome": "Estacionamento Orla",
   "x": 2926,
   "y": 2907,
   "w": 2400,
   "h": 160,
   "shape": "rect",
   "behind": true,
   "cat": "park",
   "semDesenho": true
  },
  {
   "nome": "Estacionamento Leste",
   "x": 5295,
   "y": 1699,
   "w": 550,
   "h": 1550,
   "shape": "rect",
   "behind": true,
   "cat": "park",
   "semDesenho": true
  },
  {
   "nome": "Estacionamento Casa do Gaúcho",
   "x": 2705,
   "y": 1270,
   "cat": "park",
   "shape": "rect",
   "w": 700,
   "h": 600,
   "semDesenho": true
  },
  {
   "nome": "Churrascaria Cultura Gaúcha",
   "x": 1732,
   "y": 1145,
   "cat": "food",
   "w": 350,
   "h": 320,
   "shape": "rect"
  },
  {
   "nome": "Operacional",
   "x": 1043,
   "y": 966,
   "cat": "public"
  },
  {
   "nome": "CEEE Equatorial",
   "x": 1538,
   "y": 1547,
   "cat": "public",
   "icon": "ceee_equatorial",
   "iconSize": 90
  },
  {
   "nome": "Rede Pampa",
   "x": 1740,
   "y": 1581,
   "cat": "media",
   "icon": "rede_pampa",
   "iconSize": 90
  },
  {
   "nome": "Frutos de Goiás",
   "x": 1464,
   "y": 2145,
   "cat": "food",
   "icon": "frutos_goias",
   "iconSize": 57,
   "tipo": "Alimentação"
  },
  {
   "nome": "Quindinlândia",
   "x": 1558,
   "y": 2202,
   "cat": "food",
   "icon": "quindinlandia",
   "iconSize": 57,
   "tipo": "Alimentação"
  },
  {
   "nome": "3 Corações / Doca 8",
   "x": 1590,
   "y": 2266,
   "cat": "food",
   "icon": "tres_coracoes_doca",
   "iconSize": 62,
   "tipo": "Alimentação"
  },
  {
   "nome": "Edu o Bolicho",
   "x": 1969,
   "y": 2256,
   "cat": "food",
   "icon": "edu_o_bolicho",
   "iconSize": 75,
   "tipo": "Alimentação"
  },
  {
   "nome": "Produtores Gaúchos Unidos",
   "x": 1569,
   "y": 2316,
   "cat": "shop",
   "icon": "produtores_gauchos_unidos",
   "iconSize": 57,
   "tipo": "Loja",
   "tambemChamado": [
    "Produtos Agrícolas"
   ]
  },
  {
   "nome": "Estilo & Tradição",
   "x": 1849,
   "y": 2351,
   "cat": "shop",
   "icon": "estilo_e_tradicao",
   "iconSize": 57,
   "tipo": "Loja"
  },
  {
   "nome": "Souvenir Oficial",
   "x": 1547,
   "y": 2362,
   "cat": "shop",
   "icon": "souvenir_oficial",
   "iconSize": 57,
   "tipo": "Loja"
  },
  {
   "nome": "Bonfa",
   "x": 1834,
   "y": 2407,
   "cat": "food",
   "icon": "bonfa",
   "iconSize": 57,
   "tipo": "Alimentação",
   "tambemChamado": [
    "Bonfa Cachorro-Quente"
   ]
  },
  {
   "nome": "Santo Forte",
   "x": 1826,
   "y": 2460,
   "cat": "food",
   "icon": "santo_forte",
   "iconSize": 57,
   "tipo": "Alimentação"
  },
  {
   "nome": "Mark",
   "x": 1813,
   "y": 2516,
   "cat": "food",
   "icon": "mark_hamburgueria",
   "iconSize": 57,
   "tipo": "Alimentação",
   "tambemChamado": [
    "Mark Hamburgueria"
   ]
  },
  {
   "nome": "Tupiniquim",
   "x": 1346,
   "y": 1656,
   "cat": "food",
   "icon": "tupiniquim",
   "iconSize": 78,
   "tipo": "Alimentação",
   "tambemChamado": [
    "Tupiniquim Biergarten"
   ]
  },
  {
   "nome": "RS Eventos Esportivos",
   "x": 1374,
   "y": 2350,
   "cat": "shop",
   "icon": "rs_eventos_esportivos",
   "iconSize": 57,
   "tipo": "Loja",
   "tambemChamado": [
    "Rs Eventos"
   ]
  },
  {
   "nome": "Corsan Aegea",
   "x": 3098,
   "y": 1843,
   "cat": "public"
  },
  {
   "nome": "Confraria Crioula",
   "x": 3209,
   "y": 1880,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Sabiá",
   "x": 3319,
   "y": 1848,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Reliquias Botas",
   "x": 3415,
   "y": 1881,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Reliquias Botas (leste)",
   "x": 4406,
   "y": 1930,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Tabacaria",
   "x": 4360,
   "y": 1831,
   "cat": "shop",
   "icon": "tabacaria",
   "iconSize": 53,
   "tipo": "Loja",
   "alias": "cigarro tabaco fumo"
  },
  {
   "nome": "SG Facas",
   "x": 2845,
   "y": 2041,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Falcão",
   "x": 3904,
   "y": 2322,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Falcão (oeste)",
   "x": 2703,
   "y": 2517,
   "cat": "shop",
   "tipo": "Loja"
  },
  {
   "nome": "Área Técnica",
   "x": 4804,
   "y": 2625,
   "cat": "public"
  },
  {
   "nome": "Distribuidora de Bebidas",
   "x": 5169,
   "y": 2308,
   "cat": "public"
  },
  {
   "nome": "Piquete da Prefeitura (balcão de informações)",
   "x": 2228,
   "y": 2100,
   "cat": "public",
   "icon": "piquete_prefeitura",
   "iconSize": 80,
   "alias": "prefeitura informacoes balcao",
   "tambemChamado": [
    "Pref. Munic. De Porto Alegre"
   ]
  },
  {
   "nome": "Piquete Estância da Harmonia",
   "x": 2197,
   "y": 1813,
   "cat": "shop",
   "icon": "piquete_estancia_harmonia",
   "iconSize": 75
  },
  {
   "nome": "Turismo Farroupilha de Galpão",
   "x": 2307,
   "y": 1819,
   "cat": "shop",
   "icon": "turismo_farroupilha_de_galpao",
   "iconSize": 75
  },
  {
   "nome": "Churrasqueiras Públicas",
   "x": 2806,
   "y": 2346,
   "cat": "food",
   "icon": "churrasqueiras_publicas",
   "iconSize": 110,
   "alias": "churrasco churrasqueira assar"
  },
  {
   "nome": "Orla",
   "tipo": "Sanitários",
   "x": 3633,
   "y": 2740,
   "cat": "service",
   "icon": "sanitarios_e_chuveiros",
   "iconSize": 143,
   "alias": "banheiro wc toalete privada chuveiro ducha"
  },
  {
   "nome": "Cancha Reta",
   "tipo": "Sanitários",
   "x": 4207,
   "y": 1154,
   "cat": "service",
   "icon": "sanitarios_e_chuveiros",
   "iconSize": 90,
   "alias": "banheiro wc toalete privada chuveiro ducha"
  },
  {
   "nome": "Simões Lopes Neto",
   "tipo": "Sanitários",
   "x": 2652,
   "y": 2105,
   "cat": "service",
   "icon": "sanitarios_e_chuveiros",
   "iconSize": 113,
   "alias": "banheiro wc toalete privada chuveiro ducha"
  },
  {
   "nome": "Praça Harmonia",
   "tipo": "Sanitários",
   "x": 1481,
   "y": 2306,
   "cat": "service",
   "icon": "sanitarios_e_chuveiros",
   "iconSize": 78,
   "alias": "banheiro wc toalete privada chuveiro ducha"
  },
  {
   "nome": "Brigada Militar 2",
   "x": 3557,
   "y": 1206,
   "cat": "service",
   "icon": "brigada_militar",
   "iconSize": 108,
   "alias": "policia seguranca brigada"
  },
  {
   "nome": "Táxi e App — Norte",
   "x": 2762,
   "y": 949,
   "cat": "public",
   "icon": "embarque_desembarque_taxis_e_app",
   "iconSize": 90,
   "alias": "taxi uber 99 aplicativo embarque desembarque carona ponto"
  },
  {
   "nome": "Governo do Estado do RS",
   "x": 2461,
   "y": 1903,
   "cat": "public",
   "icon": "brasao_rs",
   "iconSize": 90,
   "tambemChamado": [
    "Gov. Do Estado"
   ]
  },
  {
   "nome": "Droga Raia",
   "x": 2642,
   "y": 1991,
   "cat": "public",
   "icon": "raia",
   "iconSize": 90
  },
  {
   "nome": "Bauduco",
   "x": 2749,
   "y": 2039,
   "cat": "public",
   "icon": "bauducco",
   "iconSize": 90,
   "tambemChamado": [
    "Bauducco"
   ]
  },
  {
   "nome": "Tintas Renner",
   "x": 2354,
   "y": 1995,
   "cat": "public",
   "icon": "renner",
   "iconSize": 90
  },
  {
   "nome": "BAT Brasil",
   "x": 2504,
   "y": 2054,
   "cat": "public",
   "icon": "bat_brasil",
   "iconSize": 90,
   "tambemChamado": [
    "Bat"
   ]
  },
  {
   "nome": "Brahma",
   "x": 2317,
   "y": 1635,
   "cat": "public",
   "icon": "brahma",
   "iconSize": 90
  },
  {
   "nome": "Petrobrás Grid",
   "x": 2203,
   "y": 1556,
   "cat": "public",
   "icon": "grid_petrobras",
   "iconSize": 90
  },
  {
   "nome": "Pepsi",
   "x": 2088,
   "y": 1585,
   "cat": "public",
   "icon": "pepsi",
   "iconSize": 90
  },
  {
   "nome": "SMED; Secretaria Municipal da Educação",
   "x": 2024,
   "y": 1479,
   "cat": "public",
   "icon": "prefeitura_secretaria_educacao",
   "iconSize": 90,
   "tambemChamado": [
    "Smed"
   ]
  },
  {
   "nome": "Estátua de Maurício Sirotsky Sobrinho",
   "x": 1712,
   "y": 2265,
   "cat": "public",
   "icon": "estatua_de_mauricio_sirotsky_sobrinho",
   "iconSize": 90,
   "alias": "estatua monumento"
  },
  {
   "nome": "Estátua de Jayme Caetano Braun",
   "x": 1671,
   "y": 2458,
   "cat": "public",
   "icon": "estatua_de_jayme_caetano_braun",
   "iconSize": 90,
   "alias": "estatua monumento"
  },
  {
   "nome": "Táxi e App — Orla",
   "x": 1450,
   "y": 2985,
   "cat": "public",
   "icon": "embarque_desembarque_taxis_e_app",
   "iconSize": 90,
   "alias": "taxi uber 99 aplicativo embarque desembarque carona ponto"
  },
  {
   "nome": "Cachaça 51",
   "x": 1827,
   "y": 2697,
   "cat": "public",
   "icon": "cachaca_51",
   "iconSize": 90
  },
  {
   "nome": "Record TV",
   "x": 1393,
   "y": 1487,
   "cat": "public",
   "icon": "record_tv",
   "iconSize": 90,
   "tambemChamado": [
    "Guaíba Record"
   ]
  },
  {
   "nome": "Record TV 2",
   "x": 1863,
   "y": 2271,
   "cat": "public",
   "icon": "record_tv",
   "iconSize": 90
  },
  {
   "nome": "Rádio Guaíba",
   "x": 1453,
   "y": 1411,
   "cat": "public",
   "icon": "radio_guaiba",
   "iconSize": 90
  },
  {
   "nome": "Sustenta Tchê!",
   "x": 2086,
   "y": 1292,
   "cat": "public",
   "icon": "sustenta_tche",
   "iconSize": 90
  },
  {
   "nome": "Nacional Gás",
   "x": 2394,
   "y": 2194,
   "cat": "public",
   "icon": "nacional_gas",
   "iconSize": 90
  },
  {
   "nome": "Pórtico Rótula das Cuias",
   "x": 4399,
   "y": 2845,
   "cat": "public",
   "icon": "portico_rotula_das_cuias",
   "iconSize": 90,
   "alias": "portico entrada acesso portao"
  },
  {
   "nome": "SBT",
   "x": 4406,
   "y": 2504,
   "cat": "public",
   "icon": "sbt",
   "iconSize": 90,
   "tambemChamado": [
    "Piquete Grito do Quero-Quero",
    "Grito do Quero Quero",
    "Quero-Quero"
   ]
  }
 ],
 "categories": {
  "INST": [
   "Gov. Do Estado",
   "Pref. Munic. De Porto Alegre",
   "Smed",
   "Corsan Aegea"
  ],
  "PAT": [
   "Ceee Equatorial",
   "Sustenta Tchê",
   "Ambev",
   "Petrobras Grid",
   "Ambev",
   "Bauducco",
   "Tintas Renner",
   "Bat",
   "Nacional Gás",
   "Cachaça 51"
  ],
  "IMPRENSA": [
   "Rede Pampa",
   "Rbs",
   "Guaíba Record",
   "Grito Do Quero Quero - SBT"
  ],
  "COMERCIO": [
   "Batidas E Caipira No Pilão",
   "Batatas Chips",
   "Batatas Gourmet",
   "Cachorrão Do Tchê",
   "Cia Do Tchê",
   "Cocada Feita Na Hora",
   "Crepes Doces E Salgados",
   "Doces Do Tchê",
   "Dóffee – Donuts E Coffee",
   "Espetinho Do Gringo",
   "Fast Trail Lanches",
   "Gelado Gelei",
   "Gringo Rei Do Costelão 12 Horas",
   "Hamburgueria Do Rei",
   "Imperio Do Lanche",
   "Krep'S Suiço, Churros E Batata Chips",
   "Le Pastel",
   "Lelo Bistrô",
   "Mina Do Açaí",
   "Morango Com Chocolate",
   "Pão Com Linguiça Borrússia",
   "Petiscaria Do Gringo",
   "Picanha Do Gaúcho",
   "Pizza Benditta",
   "Rei Do Costelão Baguete",
   "Rei Do Doce Gaúcho",
   "Rei Do Prensado",
   "Rei Do Salame",
   "Sorveteria 35",
   "Top Das Galáxias",
   "Vila Das Frutas Exóticas"
  ],
  "PRACA_HAR": [
   "3 Corações | Doca 8",
   "Bonfa Cachorro-Quente",
   "Santo Forte",
   "Edu O Bolicho",
   "Mark Hamburgueria",
   "Produtos Agrícolas",
   "Quindinlandia",
   "Frutos De Goiás",
   "Souvenir Oficial",
   "Tupiniquim Biergarten",
   "Rs Eventos"
  ],
  "CORREARIA": [
   "Confraria Crioula",
   "Sabiá",
   "Sg Facas",
   "Reliquias Botas"
  ],
  "CUTELARIA": [
   "Falcão"
  ]
 },
 "streetLabels": [
  {
   "text": "Rua Otávio Francisco Caruso da Rocha",
   "x": 4024,
   "y": 834,
   "rot": 0,
   "len": 1167,
   "size": 24
  },
  {
   "text": "Rua Simões Lopes Neto",
   "x": 2498,
   "y": 1831,
   "rot": 30,
   "len": 438,
   "size": 24
  },
  {
   "text": "Avenida Augusto de Carvalho",
   "x": 5698,
   "y": 1514,
   "rot": -90,
   "len": 880,
   "size": 20
  },
  {
   "text": "Rótula das Cuias",
   "x": 5454,
   "y": 2798,
   "rot": 38.1,
   "len": 258,
   "size": 18
  },
  {
   "text": "Rua Darci Fagundes",
   "x": 2933,
   "y": 2030,
   "rot": 30,
   "len": 588,
   "size": 24
  },
  {
   "text": "Rua Luiz Carlos Borges",
   "x": 2462,
   "y": 2518,
   "rot": 20,
   "len": 438,
   "size": 24
  },
  {
   "text": "Rua Lilian Argentina",
   "x": 3119,
   "y": 1377,
   "rot": 90,
   "len": 522,
   "size": 24
  },
  {
   "text": "Rua Dimas Costa",
   "x": 3414,
   "y": 1265,
   "rot": 90,
   "len": 318,
   "size": 20.4
  },
  {
   "text": "Rua Teixeirinha",
   "x": 3792,
   "y": 1054,
   "rot": 0,
   "len": 924,
   "size": 24
  },
  {
   "text": "Rua Aparício Silva Rillo",
   "x": 4065,
   "y": 1265,
   "rot": 0,
   "len": 780,
   "size": 16.8
  },
  {
   "text": "Rua Oliveira Silveira",
   "x": 4910,
   "y": 1282,
   "rot": 90,
   "len": 978,
   "size": 15.1
  },
  {
   "text": "Rua Sepé Tiaraju",
   "x": 3865,
   "y": 1832,
   "rot": 90,
   "len": 408,
   "size": 15.1
  },
  {
   "text": "Rua Paulo R. R. Guimarães",
   "x": 4192,
   "y": 2079,
   "rot": -20,
   "len": 318,
   "size": 20.4
  },
  {
   "text": "Rua Cyra Dutra Ferreira",
   "x": 2370,
   "y": 2853,
   "rot": 0,
   "len": 594,
   "size": 24
  },
  {
   "text": "Rua Tia Eva",
   "x": 3560,
   "y": 2570,
   "rot": -60,
   "len": 162,
   "size": 23.7
  },
  {
   "text": "Rua Gildo de Freitas",
   "x": 3718,
   "y": 1054,
   "rot": 0,
   "len": 762,
   "size": 24
  },
  {
   "text": "Rua Barbosa Lessa",
   "x": 4486,
   "y": 2510,
   "rot": 90,
   "len": 372,
   "size": 24
  },
  {
   "text": "Avenida Edvaldo Pereira Paiva",
   "x": 4546,
   "y": 2844,
   "rot": -10,
   "len": 192,
   "size": 9.0
  },
  {
   "text": "Rua Cancha Reta",
   "x": 3951,
   "y": 1040,
   "rot": 0.3,
   "len": 1514,
   "size": 24
  },
  {
   "text": "Rua Presidente Ademir de Morais",
   "x": 3436,
   "y": 2625,
   "rot": -0.1,
   "len": 2035,
   "size": 20.4
  },
  {
   "text": "Rua Leopoldo Rassier",
   "x": 2136,
   "y": 2299,
   "rot": 60.5,
   "len": 328,
   "size": 12.0
  },
  {
   "text": "Rua Cesar Passarinho",
   "x": 2156,
   "y": 2742,
   "rot": 90.0,
   "len": 449,
   "size": 13.2
  },
  {
   "text": "Rua José Cláudio Machado",
   "x": 2008,
   "y": 2342,
   "rot": -44.8,
   "len": 493,
   "size": 19.8
  },
  {
   "text": "Avenida Jayme Caetano Braun",
   "x": 1889,
   "y": 1716,
   "rot": -73.6,
   "len": 1649,
   "size": 16.8
  },
  {
   "text": "Avenida Paixão Cortes",
   "x": 3638,
   "y": 1792,
   "rot": 0.6,
   "len": 2555,
   "size": 24
  },
  {
   "text": "Rua Glaucus Saraiva",
   "x": 3155,
   "y": 2130,
   "rot": 22.6,
   "len": 1890,
   "size": 24
  },
  {
   "text": "Rua Anita Garibaldi",
   "x": 3615,
   "y": 2006,
   "rot": 75.8,
   "len": 828,
   "size": 9.4
  },
  {
   "text": "Rua Negrinho do Pastoreiro",
   "x": 4320,
   "y": 1974,
   "rot": 87.6,
   "len": 506,
   "size": 18.7
  },
  {
   "text": "Rua Maria Pampin",
   "x": 4476,
   "y": 1825,
   "rot": -89.2,
   "len": 822,
   "size": 20.4
  },
  {
   "text": "Rua Hugo da Cunha Alves",
   "x": 4696,
   "y": 1871,
   "rot": -89.8,
   "len": 946,
   "size": 24
  },
  {
   "text": "Rua Antônio Augusto Fagundes",
   "x": 4266,
   "y": 1248,
   "rot": -88.3,
   "len": 631,
   "size": 14.7
  }
 ],
 "lotBoxSize": {
  "w": 78,
  "h": 78
 }
};

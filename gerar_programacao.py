# -*- coding: utf-8 -*-
"""Gera programacao.js a partir da planilha oficial. Rode de novo quando ela mudar:
       python gerar_programacao.py
A planilha traz "05 e 06/09" numa linha so: viram dois dias. O dia da semana e
recalculado da data (a planilha tem 14/09 como 'Terca', quando e Segunda)."""
import openpyxl, json, io, re, datetime, sys

XLSX = sys.argv[1] if len(sys.argv) > 1 else \
    u'C:/Users/caina/Documents/.Trabalho/Acampamento Farroupilha/Programacao AF 2026.xlsx'
SEMANA = ['Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo']

dias = {}
for data, _semana, palco, hora, atr in openpyxl.load_workbook(XLSX, data_only=True)['Todos os dias'] \
        .iter_rows(min_row=2, values_only=True):
    if not atr:
        continue
    data = str(data).strip()
    m = re.match(r'^(\d{2})\s*e\s*(\d{2})/(\d{2})$', data)
    alvos = [m.group(1)+'/'+m.group(3), m.group(2)+'/'+m.group(3)] if m else [data]
    for a in alvos:
        dd, mm = int(a[:2]), int(a[3:5])
        d = dias.setdefault(a, {'data': a, 'semana': SEMANA[datetime.date(2026, mm, dd).weekday()], 'itens': []})
        d['itens'].append({'palco': str(palco).strip(),
                           'hora': str(hora).strip() if hora else '',
                           'atracao': str(atr).strip()})

ordem = sorted(dias.values(), key=lambda d: (int(d['data'][3:5]), int(d['data'][:2])))
io.open('programacao.js', 'w', encoding='utf-8', newline='\n').write(
    u"// Gerado de 'Programacao AF 2026.xlsx' por gerar_programacao.py. Nao editar a mao.\n"
    u"window.AF_PROG = " + json.dumps({'dias': ordem}, ensure_ascii=False, indent=1) + ";\n")
print(len(ordem), 'dias |', sum(len(d['itens']) for d in ordem), 'atracoes')

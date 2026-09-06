"""Gera o QR code do site e embute como SVG dentro do index.html.
Rode de novo se a URL do site mudar:  python3 gerar_qr.py <url>
"""
import sys, re, segno

URL = sys.argv[1] if len(sys.argv) > 1 else 'https://cainaogg.github.io/acampamento-farroupilha-mapa/'
qr = segno.make(URL, error='m')
mat = [[1 if c else 0 for c in linha] for linha in qr.matrix]
n = len(mat)
Q = 2                                   # zona de silencio, exigida pra leitura
lado = n + Q * 2

# um <path> unico com todos os modulos escuros: SVG pequeno e nitido em qualquer zoom
d = ''.join(f'M{x+Q} {y+Q}h1v1h-1z' for y, row in enumerate(mat)
            for x, v in enumerate(row) if v)
svg = (f'<svg id="qrSvg" viewBox="0 0 {lado} {lado}" '
       f'shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">'
       f'<rect width="{lado}" height="{lado}" fill="#fff"/>'
       f'<path d="{d}" fill="#000"/></svg>')

html = open('index.html', encoding='utf-8').read()
novo = re.sub(r'<canvas id="qrCanvas"[^>]*></canvas>|<svg id="qrSvg".*?</svg>', svg, html, count=1, flags=re.S)
if novo == html:
    raise SystemExit('nao achei o lugar do QR no index.html')
novo = re.sub(r"const QR_URL = '[^']*';", f"const QR_URL = '{URL}';", novo)
open('index.html', 'w', encoding='utf-8').write(novo)
print(f'QR embutido: versao {qr.version}, {n}x{n} modulos, {len(svg)} bytes')
print(f'URL: {URL}')

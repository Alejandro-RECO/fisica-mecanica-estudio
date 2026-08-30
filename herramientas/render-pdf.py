"""
Convierte un PDF en imagenes de pagina para que curador-clase pueda leerlo.

Por que existe: la herramienta Read abre imagenes directamente, pero para
abrir un PDF necesita poppler, que no esta instalado en esta maquina. Y buena
parte de las presentaciones de la docente son PDF de imagenes: extraer texto
de ellas devuelve catorce caracteres. Sin este paso, el material central del
curso es ilegible para el sistema.

Uso:
    python herramientas/render-pdf.py fuentes/precentaciones/cinematica1.pdf
    python herramientas/render-pdf.py <pdf> --desde 5 --hasta 12
    python herramientas/render-pdf.py <pdf> --dpi 200      # matematica densa

La salida va a .render/<nombre>/pNN.png, que esta en .gitignore: son
artefactos derivados y se pueden volver a generar. fuentes/ no se toca.
"""

import argparse
import pathlib
import sys

try:
    import pymupdf
except ImportError:
    sys.exit("Falta PyMuPDF. Instalalo con: pip install pymupdf")

RAIZ = pathlib.Path(__file__).resolve().parent.parent


def render(pdf: pathlib.Path, desde: int, hasta: int | None, dpi: int) -> list[pathlib.Path]:
    doc = pymupdf.open(pdf)
    ultima = doc.page_count if hasta is None else min(hasta, doc.page_count)

    if desde < 1 or desde > doc.page_count:
        sys.exit(f"El PDF tiene {doc.page_count} paginas; --desde {desde} esta fuera de rango.")

    salida = RAIZ / ".render" / pdf.stem
    salida.mkdir(parents=True, exist_ok=True)

    hechas = []
    for i in range(desde - 1, ultima):
        destino = salida / f"p{i + 1:02d}.png"
        doc[i].get_pixmap(dpi=dpi).save(destino)
        hechas.append(destino)

    doc.close()
    return hechas


def main() -> None:
    p = argparse.ArgumentParser(description="Renderiza un PDF a imagenes de pagina.")
    p.add_argument("pdf", type=pathlib.Path)
    p.add_argument("--desde", type=int, default=1, help="primera pagina, 1-indexada")
    p.add_argument("--hasta", type=int, default=None, help="ultima pagina, inclusive")
    p.add_argument("--dpi", type=int, default=150, help="150 alcanza para diapositivas")
    args = p.parse_args()

    if not args.pdf.exists():
        sys.exit(f"No existe: {args.pdf}")

    hechas = render(args.pdf, args.desde, args.hasta, args.dpi)

    print(f"{len(hechas)} paginas renderizadas a {args.dpi} dpi:")
    for h in hechas:
        print(f"  {h.relative_to(RAIZ).as_posix()}")


if __name__ == "__main__":
    main()

"""Generate a PDF matching the original CV layout exactly."""
from __future__ import annotations

import io
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

BLACK = colors.black

# ── styles (Helvetica = Arial equivalent, all body text 9pt) ──────────────────
_CONTACT    = ParagraphStyle("contact",   fontName="Helvetica", fontSize=9,
                              leading=12, alignment=TA_CENTER, textColor=BLACK,
                              spaceAfter=4)
_SECTION    = ParagraphStyle("section",   fontName="Helvetica-Bold", fontSize=9,
                              leading=12, alignment=TA_LEFT, textColor=BLACK,
                              spaceBefore=8, spaceAfter=1)
_ENTRY_L    = ParagraphStyle("entryL",    fontName="Helvetica-Bold", fontSize=9,
                              leading=12, alignment=TA_LEFT,   textColor=BLACK)
_ENTRY_C    = ParagraphStyle("entryC",    fontName="Helvetica-Bold", fontSize=9,
                              leading=12, alignment=TA_CENTER, textColor=BLACK)
_ENTRY_R    = ParagraphStyle("entryR",    fontName="Helvetica-Bold", fontSize=9,
                              leading=12, alignment=TA_RIGHT,  textColor=BLACK)
_BULLET     = ParagraphStyle("bullet",    fontName="Helvetica", fontSize=9,
                              leading=12, alignment=TA_JUSTIFY, textColor=BLACK,
                              leftIndent=14, spaceAfter=1)
_SUB        = ParagraphStyle("sub",       fontName="Helvetica", fontSize=9,
                              leading=12, alignment=TA_JUSTIFY, textColor=BLACK,
                              leftIndent=28, spaceAfter=1)


def _entry_row(left: str, center: str, right: str, col_w: tuple) -> Table:
    """Three-column bold row with full-width bottom underline."""
    t = Table(
        [[Paragraph(left, _ENTRY_L),
          Paragraph(center, _ENTRY_C),
          Paragraph(right, _ENTRY_R)]],
        colWidths=list(col_w),
    )
    t.setStyle(TableStyle([
        ("VALIGN",         (0, 0), (-1, -1), "BOTTOM"),
        ("LEFTPADDING",    (0, 0), (-1, -1), 0),
        ("RIGHTPADDING",   (0, 0), (-1, -1), 0),
        ("TOPPADDING",     (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING",  (0, 0), (-1, -1), 1),
        ("LINEBELOW",      (0, 0), (-1, -1), 0.75, BLACK),
    ]))
    return t


def generate_pdf(cv_text: str) -> bytes:
    buf = io.BytesIO()

    PAGE_W, _ = A4
    ML = MR = 2.03 * cm          # matches original 57.6pt margins
    content_w = PAGE_W - ML - MR

    # Three entry columns: role 40%, company 35%, date 25%
    col_l = content_w * 0.40
    col_c = content_w * 0.35
    col_r = content_w * 0.25

    doc = SimpleDocTemplate(
        buf, pagesize=A4,
        leftMargin=ML, rightMargin=MR,
        topMargin=0.88 * cm,      # matches original (name box starts ~25pt from top)
        bottomMargin=1.5 * cm,
    )

    story: list = []

    for raw in cv_text.splitlines():
        line = raw.rstrip()

        # ── Name: # FIRSTNAME LASTNAME ────────────────────────────────────────
        if re.match(r'^# [^#]', line):
            name  = line[2:].strip()
            parts = name.split(" ", 1)
            first = parts[0]
            last  = parts[1] if len(parts) > 1 else ""

            # Name box: right-aligned, ~37% of content width (matches original)
            name_box_w  = content_w * 0.37
            name_gap_w  = content_w - name_box_w

            name_para = Paragraph(
                f'<font name="Helvetica">{first} </font>'
                f'<font name="Helvetica-Bold">{last}</font>',
                ParagraphStyle("nameBox", fontName="Helvetica", fontSize=22,
                               leading=26, alignment=TA_RIGHT, textColor=BLACK),
            )
            # Two-cell row: empty gap | name box with border
            name_tbl = Table(
                [[Paragraph("", _BULLET), name_para]],
                colWidths=[name_gap_w, name_box_w],
            )
            name_tbl.setStyle(TableStyle([
                ("BOX",           (1, 0), (1, 0), 1.5, BLACK),
                ("LEFTPADDING",   (0, 0), (-1, -1), 0),
                ("RIGHTPADDING",  (0, 0), (-1, -1), 0),
                ("LEFTPADDING",   (1, 0), (1, 0), 8),
                ("RIGHTPADDING",  (1, 0), (1, 0), 8),
                ("TOPPADDING",    (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]))
            story.append(name_tbl)

        # ── Contact: ## ... ───────────────────────────────────────────────────
        elif line.startswith("## "):
            contact = line[3:].strip()
            story.append(Paragraph(contact, _CONTACT))

        # ── Section header: ### TITLE ─────────────────────────────────────────
        elif line.startswith("### "):
            title = line[4:].strip().upper()
            story.append(Spacer(1, 2))
            story.append(Paragraph(title, _SECTION))

        # ── Entry header: **Role** | Company | Date ───────────────────────────
        elif line.startswith("**") and "|" in line:
            parts = [p.strip() for p in line.split(" | ")]
            role_m = re.match(r'\*\*(.+?)\*\*', parts[0])
            role   = role_m.group(1) if role_m else parts[0]

            if len(parts) >= 3:
                left, center, right = role, parts[1], parts[2]
            elif len(parts) == 2:
                left, center, right = role, "", parts[1]
            else:
                left, center, right = role, "", ""

            story.append(_entry_row(left, center, right, (col_l, col_c, col_r)))

        # ── Sub-bullet ────────────────────────────────────────────────────────
        elif re.match(r'^  +- ', line):
            text = line.strip()[2:].strip()
            story.append(Paragraph(f"o  {text}", _SUB))

        # ── Bullet ────────────────────────────────────────────────────────────
        elif line.startswith("- ") or line.startswith("• "):
            text = line[2:].strip()
            story.append(Paragraph(f"\u2022  {text}", _BULLET))

        # ── Blank line ────────────────────────────────────────────────────────
        elif line.strip() == "":
            pass

        # ── Plain text fallback ───────────────────────────────────────────────
        else:
            if line.strip():
                story.append(Paragraph(line.strip(), _BULLET))

    doc.build(story)
    buf.seek(0)
    return buf.read()

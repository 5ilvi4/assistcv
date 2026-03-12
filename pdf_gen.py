"""Generate a formatted PDF from the CV markdown text."""
from __future__ import annotations

import io
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

# ── colour palette ────────────────────────────────────────────────────────────
TEXT   = colors.HexColor("#1a1a2e")
MUTED  = colors.HexColor("#555566")
RULE   = colors.HexColor("#2d3561")

# ── paragraph styles ──────────────────────────────────────────────────────────
_NAME = ParagraphStyle("cvName",   fontName="Helvetica-Bold", fontSize=22,
                        leading=26, alignment=TA_CENTER, textColor=TEXT, spaceAfter=2)
_CONTACT = ParagraphStyle("cvContact", fontName="Helvetica", fontSize=9,
                            leading=12, alignment=TA_CENTER, textColor=MUTED, spaceAfter=6)
_SECTION = ParagraphStyle("cvSection", fontName="Helvetica-Bold", fontSize=10,
                            leading=14, alignment=TA_LEFT, textColor=TEXT,
                            spaceBefore=10, spaceAfter=2, textTransform="uppercase")
_ENTRY   = ParagraphStyle("cvEntry",   fontName="Helvetica", fontSize=9.5,
                            leading=13, alignment=TA_LEFT, textColor=TEXT,
                            spaceBefore=5, spaceAfter=1)
_DATE    = ParagraphStyle("cvDate",    fontName="Helvetica", fontSize=9.5,
                            leading=13, alignment=TA_RIGHT, textColor=MUTED)
_BULLET  = ParagraphStyle("cvBullet",  fontName="Helvetica", fontSize=9,
                            leading=12, alignment=TA_JUSTIFY, textColor=TEXT,
                            leftIndent=12, spaceAfter=1)
_SUB     = ParagraphStyle("cvSub",     fontName="Helvetica", fontSize=9,
                            leading=12, alignment=TA_JUSTIFY, textColor=TEXT,
                            leftIndent=26, spaceAfter=1)


def _entry_row(left_html: str, right_text: str, col_widths: tuple) -> Table:
    """Two-column table: bold entry left, date right-aligned."""
    t = Table(
        [[Paragraph(left_html, _ENTRY), Paragraph(right_text, _DATE)]],
        colWidths=list(col_widths),
    )
    t.setStyle(TableStyle([
        ("VALIGN",        (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING",   (0, 0), (-1, -1), 0),
        ("RIGHTPADDING",  (0, 0), (-1, -1), 0),
        ("TOPPADDING",    (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return t


def generate_pdf(cv_text: str) -> bytes:
    """Parse cv_text and return PDF bytes."""
    buf = io.BytesIO()

    PAGE_W, _ = A4
    ML = MR = 2 * cm
    content_w = PAGE_W - ML - MR
    date_col   = 3.2 * cm
    left_col   = content_w - date_col

    doc = SimpleDocTemplate(
        buf, pagesize=A4,
        leftMargin=ML, rightMargin=MR,
        topMargin=1.5 * cm, bottomMargin=1.5 * cm,
    )

    story: list = []

    for raw_line in cv_text.splitlines():
        line = raw_line.rstrip()

        # ── name: # NAME ──────────────────────────────────────────────────────
        if re.match(r'^# [^#]', line):
            story.append(Paragraph(line[2:].strip(), _NAME))

        # ── contact: ## ... ───────────────────────────────────────────────────
        elif line.startswith("## "):
            text = line[3:].strip().replace("|", " • ")
            story.append(Paragraph(text, _CONTACT))
            story.append(HRFlowable(width="100%", thickness=1,
                                     color=RULE, spaceAfter=4))

        # ── section: ### TITLE ────────────────────────────────────────────────
        elif line.startswith("### "):
            story.append(Spacer(1, 4))
            story.append(Paragraph(line[4:].strip(), _SECTION))
            story.append(HRFlowable(width="100%", thickness=0.5,
                                     color=RULE, spaceAfter=2))

        # ── entry: **role** | company | date (or **skill** | level) ──────────
        elif line.startswith("**") and "|" in line:
            parts = [p.strip() for p in line.split(" | ")]
            role_m = re.match(r'\*\*(.+?)\*\*', parts[0])
            role   = role_m.group(1) if role_m else parts[0]

            if len(parts) >= 3:
                left  = f"<b>{role}</b> &nbsp;·&nbsp; {parts[1]}"
                right = parts[2]
            elif len(parts) == 2:
                left  = f"<b>{role}</b>"
                right = parts[1]
            else:
                story.append(Paragraph(f"<b>{role}</b>", _ENTRY))
                continue

            story.append(_entry_row(left, right, (left_col, date_col)))

        # ── sub-bullet (2+ leading spaces then "- ") ─────────────────────────
        elif re.match(r'^  +- ', line):
            text = line.strip()[2:].strip()
            story.append(Paragraph(f"◦ &nbsp;{text}", _SUB))

        # ── bullet: "- " or "• " ─────────────────────────────────────────────
        elif line.startswith("- ") or line.startswith("• "):
            text = line[2:].strip()
            story.append(Paragraph(f"• &nbsp;{text}", _BULLET))

        # ── blank line ────────────────────────────────────────────────────────
        elif line.strip() == "":
            pass  # spacing handled by style spaceBefore/spaceAfter

        # ── plain text fallback ───────────────────────────────────────────────
        else:
            if line.strip():
                story.append(Paragraph(line.strip(), _ENTRY))

    doc.build(story)
    buf.seek(0)
    return buf.read()

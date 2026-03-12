"""CV Viewer — visualise and download CV as PDF."""
import re
from pathlib import Path
import streamlit as st

from cv_data import DEFAULT_CV, TAILORED_CVS
from pdf_gen import generate_pdf

_ORIGINAL_PDF = Path(__file__).parent / "2025_Nov_CV_Silvia Adinda copy.pdf"

st.set_page_config(page_title="Silvia Adinda – CV", layout="centered", page_icon="📄")

F = "Arial, Helvetica, sans-serif"


# ── CV → HTML renderer (matches original PDF layout exactly) ─────────────────
def cv_to_html(cv_text: str) -> str:
    lines = cv_text.splitlines()
    html  = []

    for raw in lines:
        line = raw.rstrip()

        # ── Name: # FIRSTNAME LASTNAME ────────────────────────────────────────
        if re.match(r'^# [^#]', line):
            name   = line[2:].strip()
            parts  = name.split(" ", 1)
            first  = parts[0]
            last   = parts[1] if len(parts) > 1 else ""
            # Name box: right-aligned, ~37% width (matches original PDF)
            html.append(
                f'<div style="display:flex;justify-content:flex-end;margin-bottom:3px;">'
                f'<div style="border:1.5px solid #000;padding:4px 10px;'
                f'font-family:{F};font-size:22px;line-height:1.2;width:37%;">'
                f'<div style="text-align:right;">{first} <strong>{last}</strong></div>'
                f'</div></div>'
            )

        # ── Contact: ## ... ───────────────────────────────────────────────────
        elif line.startswith("## "):
            contact = line[3:].strip()
            html.append(
                f'<p style="text-align:center;font-family:{F};font-size:12px;'
                f'color:#000;margin:0 0 6px 0;">{contact}</p>'
            )

        # ── Section header: ### TITLE ─────────────────────────────────────────
        elif line.startswith("### "):
            title = line[4:].strip().upper()
            html.append(
                f'<p style="font-family:{F};font-weight:bold;font-size:12px;'
                f'margin:10px 0 1px 0;">{title}</p>'
            )

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

            html.append(
                f'<div style="display:flex;justify-content:space-between;align-items:baseline;'
                f'font-family:{F};font-size:12px;font-weight:bold;'
                f'border-bottom:0.75px solid #000;padding:2px 0 1px 0;margin-top:2px;">'
                f'<span style="width:40%;text-align:left;">{left}</span>'
                f'<span style="width:35%;text-align:center;">{center}</span>'
                f'<span style="width:25%;text-align:right;">{right}</span>'
                f'</div>'
            )

        # ── Sub-bullet (2+ leading spaces + "- ") ────────────────────────────
        elif re.match(r'^  +- ', line):
            text = line.strip()[2:].strip()
            html.append(
                f'<div style="margin-left:38px;font-family:{F};font-size:12px;'
                f'line-height:1.4;color:#000;">o &nbsp;{text}</div>'
            )

        # ── Bullet: "- " or "• " ─────────────────────────────────────────────
        elif line.startswith("- ") or line.startswith("• "):
            text = line[2:].strip()
            html.append(
                f'<div style="margin-left:18px;font-family:{F};font-size:12px;'
                f'line-height:1.4;color:#000;">• &nbsp;{text}</div>'
            )

        # ── Blank line ────────────────────────────────────────────────────────
        elif line.strip() == "":
            html.append('<div style="height:3px;"></div>')

        # ── Plain text fallback ───────────────────────────────────────────────
        else:
            if line.strip():
                html.append(
                    f'<p style="font-family:{F};font-size:12px;margin:1px 0;">'
                    f'{line.strip()}</p>'
                )

    return "\n".join(html)


# ── sidebar ───────────────────────────────────────────────────────────────────
with st.sidebar:
    st.header("CV Versions")

    version_labels = ["📄 Original"] + [f"🎯 {t['label']}" for t in TAILORED_CVS]
    selected = st.selectbox("Select version", version_labels)

    if selected == "📄 Original":
        active_cv   = DEFAULT_CV
        active_name = "CV_Silvia_Adinda.pdf"
    else:
        idx         = version_labels.index(selected) - 1
        active_cv   = TAILORED_CVS[idx]["cv"]
        active_name = f"CV_Silvia_Adinda_{TAILORED_CVS[idx]['company'].replace(' ', '_')}.pdf"

    st.divider()

    if selected == "📄 Original":
        # Serve the original PDF file directly — exact match guaranteed
        st.download_button(
            "⬇️ Download Original PDF",
            data=_ORIGINAL_PDF.read_bytes(),
            file_name=active_name,
            mime="application/pdf",
            type="primary",
            use_container_width=True,
        )
    elif st.button("📄 Generate & Download PDF", type="primary", use_container_width=True):
        with st.spinner("Building PDF…"):
            try:
                pdf_bytes = generate_pdf(active_cv)
                st.download_button(
                    "⬇️ Download PDF",
                    data=pdf_bytes,
                    file_name=active_name,
                    mime="application/pdf",
                    use_container_width=True,
                )
            except Exception as e:
                st.error(f"PDF generation failed: {e}")

    if TAILORED_CVS:
        st.divider()
        st.markdown("**Tailored versions**")
        for t in TAILORED_CVS:
            st.markdown(f"🎯 **{t['company']}**  \n{t['role']}")

# ── main: CV preview ──────────────────────────────────────────────────────────
st.markdown(
    f'<div style="background:#fff;color:#000;padding:48px 56px;border-radius:4px;'
    f'box-shadow:0 2px 16px rgba(0,0,0,0.10);">'
    f'{cv_to_html(active_cv)}'
    f'</div>',
    unsafe_allow_html=True,
)

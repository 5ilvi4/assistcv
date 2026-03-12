"""CV Viewer — visualise and download CV as PDF."""
import re
import streamlit as st

from cv_data import DEFAULT_CV, TAILORED_CVS
from pdf_gen import generate_pdf

# ── page config ───────────────────────────────────────────────────────────────
st.set_page_config(page_title="Silvia Adinda – CV", layout="centered", page_icon="📄")


# ── CV → HTML renderer ────────────────────────────────────────────────────────
def cv_to_html(cv_text: str) -> str:
    """Convert CV markdown text to styled HTML for display."""
    lines = cv_text.splitlines()
    html  = []

    for raw in lines:
        line = raw.rstrip()

        # Name: # NAME
        if re.match(r'^# [^#]', line):
            html.append(f'<h1 style="text-align:center;margin-bottom:2px;">{line[2:].strip()}</h1>')

        # Contact: ## ...
        elif line.startswith("## "):
            contact = line[3:].strip().replace("|", "·")
            html.append(f'<p style="text-align:center;color:#666;font-size:0.85em;margin-top:0;">{contact}</p>')
            html.append('<hr style="border:1px solid #2d3561;margin:6px 0 12px 0;">')

        # Section: ### TITLE
        elif line.startswith("### "):
            title = line[4:].strip().upper()
            html.append(f'<h3 style="margin-bottom:2px;margin-top:18px;letter-spacing:0.05em;">{title}</h3>')
            html.append('<hr style="border:0.5px solid #aaa;margin:2px 0 6px 0;">')

        # Entry: **Role** | Company | Date
        elif line.startswith("**") and "|" in line:
            parts = [p.strip() for p in line.split(" | ")]
            role_m = re.match(r'\*\*(.+?)\*\*', parts[0])
            role   = role_m.group(1) if role_m else parts[0]

            if len(parts) >= 3:
                left  = f'<b>{role}</b> &nbsp;·&nbsp; {parts[1]}'
                right = parts[2]
            elif len(parts) == 2:
                left  = f'<b>{role}</b>'
                right = parts[1]
            else:
                left, right = f'<b>{role}</b>', ""

            html.append(
                f'<div style="display:flex;justify-content:space-between;margin-top:8px;">'
                f'<span>{left}</span>'
                f'<span style="color:#666;font-size:0.88em;white-space:nowrap;">{right}</span>'
                f'</div>'
            )

        # Sub-bullet (2+ leading spaces + "- ")
        elif re.match(r'^  +- ', line):
            text = line.strip()[2:].strip()
            html.append(f'<div style="margin-left:32px;font-size:0.9em;color:#333;">◦ {text}</div>')

        # Bullet: "- " or "• "
        elif line.startswith("- ") or line.startswith("• "):
            text = line[2:].strip()
            html.append(f'<div style="margin-left:16px;font-size:0.9em;">• {text}</div>')

        # Blank line
        elif line.strip() == "":
            html.append('<div style="margin:3px 0;"></div>')

        # Fallback plain text
        else:
            if line.strip():
                html.append(f'<p style="margin:2px 0;">{line.strip()}</p>')

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

    if st.button("📄 Generate & Download PDF", type="primary", use_container_width=True):
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

    if len(TAILORED_CVS) > 0:
        st.divider()
        st.markdown("**Tailored versions**")
        for t in TAILORED_CVS:
            st.markdown(f"🎯 **{t['company']}**  \n{t['role']}")

# ── main: CV preview ──────────────────────────────────────────────────────────
st.markdown(
    f'<div style="background:#fff;color:#111;padding:40px 48px;border-radius:8px;'
    f'box-shadow:0 2px 12px rgba(0,0,0,0.08);font-family:Georgia,serif;font-size:0.95em;line-height:1.5;">'
    f'{cv_to_html(active_cv)}'
    f'</div>',
    unsafe_allow_html=True,
)

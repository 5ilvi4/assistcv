"""CV Viewer — visualise and download CV as PDF via browser print."""
import json
import re
from pathlib import Path
import streamlit as st
import streamlit.components.v1 as components

from cv_data import DEFAULT_CV, TAILORED_CVS

_ORIGINAL_PDF = Path(__file__).parent / "2025_Nov_CV_Silvia Adinda copy.pdf"

st.set_page_config(page_title="Silvia Adinda – CV", layout="centered", page_icon="📄")

F = "Arial, Helvetica, sans-serif"


# ── CV text → HTML body fragments (shared by preview and print page) ──────────
def _cv_body(cv_text: str) -> str:
    lines = cv_text.splitlines()
    html  = []

    for raw in lines:
        line = raw.rstrip()

        if re.match(r'^# [^#]', line):
            name  = line[2:].strip()
            parts = name.split(" ", 1)
            first = parts[0]
            last  = parts[1] if len(parts) > 1 else ""
            html.append(
                '<div class="name-row">'
                f'<div class="name-box">{first} <strong>{last}</strong></div>'
                '</div>'
            )

        elif line.startswith("## "):
            contact = line[3:].strip()
            html.append(f'<p class="contact">{contact}</p>')

        elif line.startswith("### "):
            title = line[4:].strip().upper()
            html.append(f'<p class="section">{title}</p>')

        elif line.startswith("**") and "|" in line:
            parts  = [p.strip() for p in line.split(" | ")]
            role_m = re.match(r'\*\*(.+?)\*\*', parts[0])
            role   = role_m.group(1) if role_m else parts[0]
            if len(parts) >= 3:
                left, center, right = role, parts[1], parts[2]
            elif len(parts) == 2:
                left, center, right = role, "", parts[1]
            else:
                left, center, right = role, "", ""
            html.append(
                '<div class="entry">'
                f'<span class="entry-l">{left}</span>'
                f'<span class="entry-c">{center}</span>'
                f'<span class="entry-r">{right}</span>'
                '</div>'
            )

        elif re.match(r'^  +- ', line):
            text = line.strip()[2:].strip()
            html.append(f'<div class="sub-bullet">o &nbsp;{text}</div>')

        elif line.startswith("- ") or line.startswith("• "):
            text = line[2:].strip()
            html.append(f'<div class="bullet">&#8226; &nbsp;{text}</div>')

        elif line.strip() == "":
            pass

        else:
            if line.strip():
                html.append(f'<p class="plain">{line.strip()}</p>')

    return "\n".join(html)


# ── Shared CSS (used in both preview div and print page) ──────────────────────
_CSS = f"""
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body, .cv-wrap {{
  font-family: {F};
  font-size: 9pt;
  line-height: 1.35;
  color: #000;
  background: #fff;
}}
.name-row {{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3pt;
}}
.name-box {{
  border: 1.5pt solid #000;
  padding: 4pt 8pt;
  font-size: 22pt;
  line-height: 1.2;
  width: 37%;
  text-align: right;
}}
.contact {{
  text-align: center;
  font-size: 9pt;
  margin: 0 0 5pt 0;
}}
.section {{
  font-weight: bold;
  font-size: 9pt;
  margin: 8pt 0 1pt 0;
}}
.entry {{
  display: flex;
  font-weight: bold;
  font-size: 9pt;
  border-bottom: 0.75pt solid #000;
  padding: 2pt 0 1pt 0;
  margin-top: 2pt;
}}
.entry-l {{ width: 40%; text-align: left; }}
.entry-c {{ width: 35%; text-align: center; }}
.entry-r {{ width: 25%; text-align: right; }}
.bullet {{
  margin-left: 14pt;
  font-size: 9pt;
  line-height: 1.35;
}}
.sub-bullet {{
  margin-left: 28pt;
  font-size: 9pt;
  line-height: 1.35;
}}
.plain {{
  font-size: 9pt;
  margin: 1pt 0;
}}
"""


def cv_to_preview_html(cv_text: str) -> str:
    """Render CV as an inline HTML block for the Streamlit page."""
    body = _cv_body(cv_text)
    return (
        f'<style>.cv-wrap {{ {_CSS} }}</style>'
        f'<div class="cv-wrap" style="background:#fff;padding:48px 56px;'
        f'border-radius:4px;box-shadow:0 2px 16px rgba(0,0,0,.10);">'
        f'{body}</div>'
    )


def cv_to_print_page(cv_text: str) -> str:
    """Return a complete, self-contained A4 HTML page for browser print-to-PDF."""
    body = _cv_body(cv_text)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>CV – Silvia Adinda</title>
  <style>
    @page {{ size: A4; margin: 2.03cm; }}
    {_CSS}
    @media print {{
      body {{ -webkit-print-color-adjust: exact; print-color-adjust: exact; }}
    }}
  </style>
</head>
<body>
{body}
</body>
</html>"""


def _print_button(cv_text: str, label: str = "🖨️ Open Print View → Save as PDF") -> None:
    """Inject a button that opens the print page in a new tab."""
    html_page = cv_to_print_page(cv_text)
    html_json  = json.dumps(html_page)   # safely escape for JS string literal
    components.html(
        f"""
        <button onclick="
          var blob = new Blob([{html_json}], {{type:'text/html;charset=utf-8'}});
          var url  = URL.createObjectURL(blob);
          window.open(url, '_blank');
        " style="width:100%;padding:8px 0;background:#FF4B4B;color:#fff;
                 border:none;border-radius:6px;cursor:pointer;
                 font-size:14px;font-weight:600;font-family:sans-serif;">
          {label}
        </button>
        """,
        height=48,
    )


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
        # Original: direct file download (exact match) + print view
        st.download_button(
            "⬇️ Download Original PDF",
            data=_ORIGINAL_PDF.read_bytes(),
            file_name=active_name,
            mime="application/pdf",
            type="primary",
            use_container_width=True,
        )
        _print_button(active_cv, "🖨️ Open Print View")
    else:
        # Tailored: browser print-to-PDF
        _print_button(active_cv)
        st.caption("In the new tab: Cmd+P (Mac) / Ctrl+P (Win) → Save as PDF. Set margins to None.")

    if TAILORED_CVS:
        st.divider()
        st.markdown("**Tailored versions**")
        for t in TAILORED_CVS:
            st.markdown(f"🎯 **{t['company']}**  \n{t['role']}")


# ── main: CV preview ──────────────────────────────────────────────────────────
st.markdown(cv_to_preview_html(active_cv), unsafe_allow_html=True)

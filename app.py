"""CV Tailor — paste a job description, edit your CV, download as PDF."""
import re
import string

import streamlit as st

from cv_data import DEFAULT_CV
from pdf_gen import generate_pdf

# ── page config ───────────────────────────────────────────────────────────────
st.set_page_config(page_title="CV Tailor", layout="wide", page_icon="📄")

st.title("📄 CV Tailor")
st.caption(
    "Paste a job description on the left. Edit your CV on the right to match. "
    "Download the tailored version as a formatted PDF."
)

# ── keyword helpers ───────────────────────────────────────────────────────────
STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "is", "are", "was", "were", "be", "been", "being", "have",
    "has", "had", "do", "does", "did", "will", "would", "could", "should",
    "may", "might", "shall", "can", "not", "that", "this", "their", "they",
    "we", "you", "it", "its", "as", "by", "from", "our", "your", "also",
    "including", "such", "other", "more", "about", "which", "who", "when",
    "what", "how", "all", "any", "both", "each", "few", "more", "most",
    "through", "during", "into", "than", "then", "so", "up", "out", "if",
    "experience", "work", "working", "role", "team", "strong", "ability",
    "skills", "skill", "knowledge", "understanding", "across", "within",
    "ensure", "support", "help", "use", "used", "using", "provide", "build",
    "new", "key", "well", "good", "high", "large", "small", "make", "take",
}


def extract_keywords(text: str, top_n: int = 30) -> list[str]:
    """Return the most frequent meaningful words from text."""
    words = re.findall(r'\b[a-zA-Z][a-zA-Z+#.\-]{2,}\b', text)
    freq: dict[str, int] = {}
    for w in words:
        w_lower = w.lower().rstrip(string.punctuation)
        if w_lower not in STOPWORDS and len(w_lower) > 2:
            freq[w_lower] = freq.get(w_lower, 0) + 1
    ranked = sorted(freq, key=lambda k: freq[k], reverse=True)
    return ranked[:top_n]


def keyword_overlap(jd_keywords: list[str], cv_text: str) -> tuple[list[str], list[str]]:
    """Return (found_in_cv, missing_from_cv) lists."""
    cv_lower = cv_text.lower()
    found   = [kw for kw in jd_keywords if kw in cv_lower]
    missing = [kw for kw in jd_keywords if kw not in cv_lower]
    return found, missing


# ── session state ─────────────────────────────────────────────────────────────
if "cv_text" not in st.session_state:
    st.session_state.cv_text = DEFAULT_CV

# ── layout ────────────────────────────────────────────────────────────────────
col_jd, col_cv = st.columns([1, 1], gap="large")

# ── left: job description ─────────────────────────────────────────────────────
with col_jd:
    st.subheader("Job Description")
    jd = st.text_area(
        "Paste the job description here",
        height=500,
        placeholder="Paste the full job description here...",
        label_visibility="collapsed",
    )

    if jd.strip():
        jd_keywords = extract_keywords(jd, top_n=25)
        found, missing = keyword_overlap(jd_keywords, st.session_state.cv_text)

        st.divider()
        st.markdown("**Keyword analysis**")

        c1, c2 = st.columns(2)
        with c1:
            st.markdown(f"**✅ Already in your CV** ({len(found)})")
            if found:
                st.markdown(" &nbsp; ".join(
                    f"`{kw}`" for kw in found
                ))
            else:
                st.caption("None detected yet.")

        with c2:
            st.markdown(f"**⚠️ Missing from your CV** ({len(missing)})")
            if missing:
                st.markdown(" &nbsp; ".join(
                    f"`{kw}`" for kw in missing
                ))
            else:
                st.success("All key terms covered!")

        if missing:
            st.info(
                "💡 Share this page with the missing keywords highlighted and ask "
                "Claude Code (in chat) to tailor your CV bullet points to include them."
            )

# ── right: CV editor ──────────────────────────────────────────────────────────
with col_cv:
    st.subheader("Your CV")

    cv_text = st.text_area(
        "Edit your CV below",
        value=st.session_state.cv_text,
        height=500,
        label_visibility="collapsed",
        key="cv_editor",
    )
    st.session_state.cv_text = cv_text

    col_reset, col_download = st.columns([1, 1])

    with col_reset:
        if st.button("↩ Reset to original", use_container_width=True):
            st.session_state.cv_text = DEFAULT_CV
            st.rerun()

    with col_download:
        if st.button("📄 Generate PDF", type="primary", use_container_width=True):
            with st.spinner("Building PDF…"):
                try:
                    pdf_bytes = generate_pdf(cv_text)
                    st.download_button(
                        "⬇️ Download PDF",
                        data=pdf_bytes,
                        file_name="CV_Silvia_Adinda_Tailored.pdf",
                        mime="application/pdf",
                        use_container_width=True,
                    )
                except Exception as e:
                    st.error(f"PDF generation failed: {e}")

# ── instructions ──────────────────────────────────────────────────────────────
with st.expander("How to use this app", expanded=False):
    st.markdown("""
1. **Paste the job description** in the left panel.
2. **Review the keyword analysis** — it shows which JD terms are already in your CV and which are missing.
3. **Share the missing keywords** with Claude Code in chat — ask to tailor specific bullet points.
4. **Paste the updated text** back into the CV editor on the right.
5. Click **Generate PDF** and download your tailored CV.

The CV text uses a simple format:
- `# NAME` — your name (large heading)
- `## contact` — contact line
- `### SECTION` — section header (e.g. EMPLOYMENT)
- `**Role** | Company | Date` — job entry
- `- bullet text` — bullet point
- `  - sub-bullet` — indented sub-point (2 leading spaces)
""")

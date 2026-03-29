// CV Applications — data file loaded by cv_tailor.html
// Add new tailored versions here; cv_tailor.html is pure template.
//
// Fields per entry:
//   key        – unique identifier used in localStorage
//   label      – display name for the dropdown
//   company    – company name (for tracker)
//   role       – job title (for tracker)
//   jdUrl      – link to the original JD
//   dateAdded  – when this CV version was created (YYYY-MM-DD)
//   cv         – full CV in markdown format
//
// Runtime state (status, dateApplied, notes) is stored in localStorage.

const CV_APPLICATIONS = [
  {
    key:       "default",
    label:     "Original",
    company:   "",
    role:      "",
    jdUrl:     "",
    dateAdded: "",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and Subject Matter Expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
- Built the knowledge repository architecture: curated, structured, and maintained marketing content — brand guidelines, campaign assets, product information, SOPs, and presentations — ensuring accuracy and currency across global markets.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams as an always-available single source of truth, enabling any team member to query in natural language for instant, up-to-date answers.
- Validated and tested AI responses against real user questions prior to launch; led user adoption and onboarding across the global team.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Leading and managing IT Projects Innovation Roadmap and Strategies for international regions: Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East.
- Leading the end-to-end System Deployment: global business process alignment, system ideation, technical development, preparing user adoption, and launch of technology for Service and Commercial Business Group – 20 Countries Deployed, users on boarded.
- Projects: CRM, ServiceMax – Salesforce, iCenter, Service Board, System Migration, AI/ML Service Renewal Automation Process, Data Migration and Governance.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Led and automated Merchant Order Taking process by supporting 2 AI Products: deployment, user adoption, and product iteration:
  - Chatbot-Order Taking Automation: 10k on boarded merchant and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k on boarded merchant and 20bio revenue in 3 months.
- Organized and managed the framework and roadmap of Datalake, Data Governance, User governance for finance and reporting: integrity, security, establishing policies and standards for data handling.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Led the roadmap of AI/ML: data governance, new business opportunities, technology ideation, development of new features and product initiatives — organizing 6 engineers and 2 data scientists.
- Supported and automating core process of Alodokter by leading and maintaining 6 AI/ML Products:
  - Chatbot Automation: using Binary Classification and Multi-class classification, scaling for 1 million users per month during Covid-19.
  - Aloweb Recommender System: Doctors' Recommender (Clustering).
  - Almobile Recommender System: Health Articles Recommender (using Clustering and CTR).
  - Ads Topic Classification with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Spam Review Flagging with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Feeds Recommender: Collaborative Filtering Based, Content Based and Hybrid Based-LightFM.
- Implemented Exploratory Data Analysis for business hypotheses validations and model testing.
- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Prepared teaching materials: Technical Project Management, Introduction to Data Analytics and Data Governance, ETL, Design Thinking, Data Processing, Data Modeling, Data Analysis, and Data Visualization with Story Telling.
- Taught undergraduate students from various undergraduate programs: Data Analytics (beginner level).

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Leveraged data to understand business needs by conducting end-to-end analysis that includes data gathering, analysis, ongoing scaled deliverables, reports and presentations: growth, retention, revenue.
- Deployed and Monitoring Data Governance process: Implementing Trackers (SDK) to LinkAja User Journey metrics, preparing the required data points and acceptance criteria using MixPanel and Braze.
- Led Automation Projects by utilizing Artificial Intelligence to implement growth initiatives with Product, Marketing and Sales Operations Teams:
  - Users' eKYC Automation (tampered, deblurring, 4 Points Transformation) – automating 80% process.
  - User Segmentation: Mapping and Analyzing Recency, Frequency and Monetary (RFM).

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional project using Agile Methodology for Data Pipeline/Log Stream deployment and implementation: work plans, project resources, requirements, and result evaluation.
- Reported to CTO: implementing and monitoring data governance, data quality, and accuracy.
- Led the delivery of acceptance criteria and key milestone: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation for Marketing Group, eKYC Process for Operation Group, Reporting for Finance Group.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Analyzed and detecting fraud patterns behavior by users, drivers, and merchants.
- Led and formulating Fraud Detection automation system through for Fraud Operation Team: successfully preventing losses of around $5 million USD.
- Prepared insights and reports using statistical tools, data visualization and business use case for business team: transactional, in-app behavior, and other behavioral data.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted research and assessment in Garment Industry to analyze the current condition of Labor in Indonesia from selected companies in Indonesia Worker Survey (Java).
- Prepared annual report with Better Work Indonesia and Tuft University for Key Development Partners: Governments and Sponsors.

### PROJECTS

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo Collaboration | 2025
- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy, supporting a nurse + GP remote workflow in low-resource settings.
- Designed AI model logic, confidence scoring with transparent explainability layer, and 4-class classification output (Cervical Cancer / HSIL / LSIL / Normal). Stack: HTML/JS, GenAI.
- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built hospital capacity planning simulation tool replaying 7,402 procedures across 260 simulated operating days to recommend optimal holding bay count, closing time, and scheduling policy.
- Stack: Python, Streamlit. Deployed as interactive web app with cost analysis, policy comparison, and heatmap visualisations.

**VibesCheck — Relationship Health Analyser** | Personal Research | 2025
- Designed 13-step LLM pipeline that analyses chat exports across 28 communication dimensions and 13 interpersonal traits, producing an Overall Relationship Health Score (0–100) with confidence intervals and relationship stage prediction.

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI prototype automating prior authorization packet assembly for home oxygen (DMEPOS) — AI extracts clinical evidence from uploaded documents, runs payer-specific rules checks (Medicare, MA plans), and generates submission-ready packets. Stack: HTML/JS, LLM.

### SKILLS

**Tableau** | | Advanced
- Experienced in data analysis, data visualization and dashboard creation for reporting using Tableau.
**R Programming** | | Intermediate
- Comfortable with basic data analysis and visualization using R.
**Python** | | Intermediate
- Comfortable with basic data analysis and visualization using Python.
**PowerBI** | | Advanced
- Experienced in data visualization and dashboard creation for reporting using PowerBI.
**SQL – BigQuery** | | Advanced
- Experienced in data querying for various needs using SQL from BigQuery.
**Mixpanel – Application Tracking** | | Advanced
- Experienced in application tracking, metrics creation, events and attributes creation for various features and products.
**Braze – Application Tracking** | | Advanced
- Experienced in application tracking, metrics creation, events and attributes creation for various features and products.
**Firebase – Application Tracking** | | Advanced
- Experienced in application tracking, metrics creation, events and attributes creation for various features and products.

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "default-v2",
    label:     "Original V.2",
    company:   "",
    role:      "",
    jdUrl:     "",
    dateAdded: "2026-03-28",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### PROFILE

Silvia Adinda is an AI and technology program leader with over 8 years of experience across healthcare, fintech, and consumer technology, combining deep technical fluency with a consistent track record of delivering AI programs that get adopted and produce measurable business outcomes. She operates at the intersection of AI strategy, program execution, and organizational change — equally comfortable defining a product roadmap, deploying an agentic AI system, and running the change management program that makes it stick.

Her career spans the full AI lifecycle: from ideating and building AI/ML products from scratch, to deploying them in production at scale, to governing the data infrastructure that sustains them, to leading the training and onboarding that drives real adoption. She has done this at global organizations including GE Healthcare, Johnson & Johnson, Philip Morris International, Alodokter, LinkAja, and GOJEK — and independently as a builder and researcher.

At GE Healthcare (2023–2025), she served as Senior Technical Project Manager leading the AI and technology Innovation Roadmap across 20 countries spanning Asia, Africa, Latin America, Australasia, Europe, the UK, and the Middle East. She managed the full lifecycle of enterprise technology programs — from business process alignment and system ideation through technical development, user adoption, and launch — across the Service and Commercial Business Groups. Programs included CRM transformation, AI/ML Service Renewal Automation, Enterprise System Migration, and Data Governance. She was recognized with the Five Heartbeats Award for "Deliver the Future of Healthcare" in 2025.

At Johnson & Johnson (2025), she was engaged as an external AI and Subject Matter Expert to design and deploy an AI-powered knowledge management system for the Global Marketing function. She built the knowledge repository architecture, deployed an AI chatbot via Microsoft Copilot integrated into Microsoft Teams as the team's single source of truth, and personally led the validation, user adoption, and global onboarding program.

At Philip Morris International (2023), she led the deployment of two AI automation products — a Chatbot and a Call-bot for merchant order-taking — from zero to production in under three months, onboarding 10,000+ merchants and generating 250bio and 20bio revenue respectively, while simultaneously building the data governance and user governance frameworks for finance and reporting.

At Alodokter (2022–2023), she served as Senior Product Manager for AI/ML, leading the roadmap and coordinating 6 engineers and 2 data scientists across 6 AI/ML products in production — including a Chatbot that scaled to 1 million users per month during Covid-19, two Recommender Systems, classification and spam detection models using Fasttext and SKlearn, and a Feeds Recommender built on Collaborative Filtering and Hybrid LightFM. She also led ETL Migration, Data Governance, A/B Testing infrastructure, and Kubernetes-based DevOps migration.

At LinkAja (2020–2022), she held two roles: as Project Manager for the Log Stream program (reporting directly to the CTO), she delivered five mission-critical data pipeline capabilities across Fraud, Marketing, Operations, and Finance; as Senior Data Analyst in the Big Data, AI and Anti-Fraud Engineering team, she led AI automation initiatives including eKYC identity verification automation (80% process automated) and RFM-based user segmentation, and governed data quality and analytics infrastructure using MixPanel and Braze.

At GOJEK (2019), she built and deployed a Fraud Detection automation system that prevented approximately $5 million USD in losses, analyzing behavioral patterns across users, drivers, and merchants.

She has also taught as an Adjunct Lecturer in Data Analytics at Binus University (2021–2022), designing and delivering curriculum on Technical Project Management, Data Analytics, Data Governance, ETL, Design Thinking, Data Modeling, and Data Visualization.

Beyond her professional roles, she independently builds AI systems: ColpoAI, an AI clinical decision support tool for cervical cancer detection affiliated with a formal research study at the University of Limpopo (funded by SAfAIDS and ASCCP); a Prior Auth Auto-Assembler, an agentic AI system automating prior authorization packet assembly for home oxygen with payer-specific rules validation; an EP/CATH Lab Planning Simulator built in Python and Streamlit that replayed 7,402 procedures to optimize hospital capacity planning; and VibesCheck, a 13-step LLM pipeline analysing chat exports across 28 communication dimensions and 13 interpersonal traits.

She is completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 3.775/4.00, Class of 2026) on a full ride scholarship from the Indonesia Endowment Fund, and holds a Bachelor's in Management from Universitas Indonesia (full ride scholarship, Most Outstanding Student 2015). She is hands-on with Microsoft Copilot, ChatGPT, Claude, Gemini, Python, SQL/BigQuery, Tableau, PowerBI, Mixpanel, Braze, and Firebase.

### EDUCATION

**Stanford Univ. School of Medicine** | Stanford, CA | Class of 2026
Master in Medical Informatics · GPA 3.775/4.00 · LPDP Full Scholarship

**Universitas Indonesia** | Jakarta, Indonesia | July 2018
Bachelor's in Management · Full Scholarship · Most Outstanding Student 2015

### SKILLS

**AI Program Management & Digital Transformation** | | Advanced
- Designing and running AI programs from ideation through deployment, adoption, and iteration across global organizations.
**AI/ML Product Development** | | Advanced
- Built and shipped 6+ AI/ML products in production: chatbots, recommender systems, classification models, agentic AI systems.
**Change Management & User Adoption** | | Advanced
- Designed and led adoption programs, hands-on training, and onboarding across thousands of users at J&J, GE Healthcare, PMI, and Alodokter.
**Data Analysis & Governance** | | Advanced
- End-to-end data analysis, data governance frameworks, KPI design, and business insight generation.
**Technical Tools** | | Advanced
- Microsoft Copilot, ChatGPT, Claude, Gemini · Python · SQL/BigQuery · Tableau · PowerBI · Mixpanel · Braze · Firebase

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and Subject Matter Expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
- Built the knowledge repository architecture: curated, structured, and maintained marketing content — brand guidelines, campaign assets, product information, SOPs, and presentations — ensuring accuracy and currency across global markets.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams as an always-available single source of truth, enabling any team member to query in natural language for instant, up-to-date answers.
- Validated and tested AI responses against real user questions prior to launch; led user adoption and onboarding across the global team.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Leading and managing IT Projects Innovation Roadmap and Strategies for international regions: Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East.
- Leading the end-to-end System Deployment: global business process alignment, system ideation, technical development, preparing user adoption, and launch of technology for Service and Commercial Business Group – 20 Countries Deployed, users on boarded.
- Projects: CRM, ServiceMax – Salesforce, iCenter, Service Board, System Migration, AI/ML Service Renewal Automation Process, Data Migration and Governance.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Led and automated Merchant Order Taking process by supporting 2 AI Products: deployment, user adoption, and product iteration:
  - Chatbot-Order Taking Automation: 10k on boarded merchant and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k on boarded merchant and 20bio revenue in 3 months.
- Organized and managed the framework and roadmap of Datalake, Data Governance, User governance for finance and reporting: integrity, security, establishing policies and standards for data handling.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Led the roadmap of AI/ML: data governance, new business opportunities, technology ideation, development of new features and product initiatives — organizing 6 engineers and 2 data scientists.
- Supported and automating core process of Alodokter by leading and maintaining 6 AI/ML Products:
  - Chatbot Automation: using Binary Classification and Multi-class classification, scaling for 1 million users per month during Covid-19.
  - Aloweb Recommender System: Doctors' Recommender (Clustering).
  - Almobile Recommender System: Health Articles Recommender (using Clustering and CTR).
  - Ads Topic Classification with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Spam Review Flagging with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Feeds Recommender: Collaborative Filtering Based, Content Based and Hybrid Based-LightFM.
- Implemented Exploratory Data Analysis for business hypotheses validations and model testing.
- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Prepared teaching materials: Technical Project Management, Introduction to Data Analytics and Data Governance, ETL, Design Thinking, Data Processing, Data Modeling, Data Analysis, and Data Visualization with Story Telling.
- Taught undergraduate students from various undergraduate programs: Data Analytics (beginner level).

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Leveraged data to understand business needs by conducting end-to-end analysis that includes data gathering, analysis, ongoing scaled deliverables, reports and presentations: growth, retention, revenue.
- Deployed and Monitoring Data Governance process: Implementing Trackers (SDK) to LinkAja User Journey metrics, preparing the required data points and acceptance criteria using MixPanel and Braze.
- Led Automation Projects by utilizing Artificial Intelligence to implement growth initiatives with Product, Marketing and Sales Operations Teams:
  - Users' eKYC Automation (tampered, deblurring, 4 Points Transformation) – automating 80% process.
  - User Segmentation: Mapping and Analyzing Recency, Frequency and Monetary (RFM).

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional project using Agile Methodology for Data Pipeline/Log Stream deployment and implementation: work plans, project resources, requirements, and result evaluation.
- Reported to CTO: implementing and monitoring data governance, data quality, and accuracy.
- Led the delivery of acceptance criteria and key milestone: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation for Marketing Group, eKYC Process for Operation Group, Reporting for Finance Group.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Analyzed and detecting fraud patterns behavior by users, drivers, and merchants.
- Led and formulating Fraud Detection automation system through for Fraud Operation Team: successfully preventing losses of around $5 million USD.
- Prepared insights and reports using statistical tools, data visualization and business use case for business team: transactional, in-app behavior, and other behavioral data.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted research and assessment in Garment Industry to analyze the current condition of Labor in Indonesia from selected companies in Indonesia Worker Survey (Java).
- Prepared annual report with Better Work Indonesia and Tuft University for Key Development Partners: Governments and Sponsors.

### PROJECTS

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo Collaboration | 2025
- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy, supporting a nurse + GP remote workflow in low-resource settings.
- Designed AI model logic, confidence scoring with transparent explainability layer, and 4-class classification output (Cervical Cancer / HSIL / LSIL / Normal). Stack: HTML/JS, GenAI.
- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built hospital capacity planning simulation tool replaying 7,402 procedures across 260 simulated operating days to recommend optimal holding bay count, closing time, and scheduling policy.
- Stack: Python, Streamlit. Deployed as interactive web app with cost analysis, policy comparison, and heatmap visualisations.

**VibesCheck — Relationship Health Analyser** | Personal Research | 2025
- Designed 13-step LLM pipeline that analyses chat exports across 28 communication dimensions and 13 interpersonal traits, producing an Overall Relationship Health Score (0–100) with confidence intervals and relationship stage prediction.

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI prototype automating prior authorization packet assembly for home oxygen (DMEPOS) — AI extracts clinical evidence from uploaded documents, runs payer-specific rules checks (Medicare, MA plans), and generates submission-ready packets. Stack: HTML/JS, LLM.

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "default-v3",
    label:     "Original V.3 — Chronological",
    company:   "",
    role:      "",
    jdUrl:     "",
    dateAdded: "2026-03-28",
    cv: `#! SILVIA ADINDA
##! adinda@stanford.edu  •  650 305 6683  •  linkedin.com/in/silviatariganadinda  •  github.com/5ilvi4

AI and technology program leader with 8+ years of experience across healthcare, fintech, and consumer technology. Track record of building and deploying AI/ML products, leading large-scale technology programs across 20 countries, and driving user adoption across thousands of users. Hands-on with Python, SQL/BigQuery, Tableau, PowerBI, Mixpanel, Braze, Firebase, and Microsoft Copilot.

=== Education:
>>> 2025–2026 ||| Master in Medical Informatics, Stanford University School of Medicine
~- GPA 3.775/4.00 · Full Ride Scholarship, Ministry of Finance (LPDP)
~- Coursework: Data Driven Medicine · Digitally-Enabled Healthcare · Biodesign for Digital Health · Modeling Biomedical Systems · Healthcare Operations Management · Bioethical Challenges of New Technology · Principles of Business Strategy

>>>  ||| Bachelor's in Economics, Universitas Indonesia
~- Full Ride Scholarship · Most Outstanding Student

=== Experience:
>>> 2025 ||| AI Consultant — Knowledge Management, Johnson & Johnson, Irvine, USA
~- Engaged as external AI and Subject Matter Expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
~- Built the knowledge repository architecture: curated, structured, and maintained marketing content — brand guidelines, campaign assets, product information, SOPs, and presentations — ensuring accuracy and currency across global markets.
~- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams as an always-available single source of truth, enabling any team member to query in natural language for instant, up-to-date answers.
~- Validated and tested AI responses against real user questions prior to launch; led user adoption and onboarding across the global team.

>>> Sep 2023–May 2025 ||| Senior Technical Project Manager, General Electric Healthcare, International Region
~- Leading and managing IT Projects Innovation Roadmap and Strategies for international regions: Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East.
~- Leading the end-to-end System Deployment: global business process alignment, system ideation, technical development, preparing user adoption, and launch of technology for Service and Commercial Business Group – 20 Countries Deployed, users onboarded.
~- Projects: CRM, ServiceMax – Salesforce, iCenter, Service Board, System Migration, AI/ML Service Renewal Automation Process, Data Migration and Governance.
~- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025.

>>> May–Aug 2023 ||| Sabbatical Leave, Caregiving
~- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

>>> Jan–April 2023 ||| Digital Transformation Manager (AI/ML), Philip Morris International
~- Led and automated Merchant Order Taking process by supporting 2 AI Products: deployment, user adoption, and product iteration.
~- Chatbot Order Taking Automation: 10k onboarded merchants and 250bio revenue in 3 months.
~- Call-bot Order Taking Automation: 2k onboarded merchants and 20bio revenue in 3 months.
~- Organized and managed the framework and roadmap of Datalake, Data Governance, User Governance for finance and reporting: integrity, security, establishing policies and standards for data handling.

>>> Jan 2022–2023 ||| AI/ML and Analytics — Senior Product Manager, Alodokter
~- Led the roadmap of AI/ML: data governance, new business opportunities, technology ideation, development of new features and product initiatives — organizing 6 engineers and 2 data scientists.
~- Led and maintained 6 AI/ML Products: Chatbot Automation (1 million users/month during Covid-19), Doctors' Recommender, Health Articles Recommender, Ads Topic Classifier, Spam Review Flagger, and Feeds Recommender (Collaborative Filtering + Hybrid LightFM).
~- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

>>> Jun 2021–Jun 2022 ||| Adjunct Lecturer — Data Analytics, Binus (Bina Nusantara) University
~- Prepared and delivered teaching materials: Technical Project Management, Introduction to Data Analytics and Data Governance, ETL, Design Thinking, Data Processing, Data Modeling, Data Analysis, and Data Visualization.

>>> 2020–2022 ||| Senior Data Analyst, LinkAja – Big Data, AI and Anti-Fraud Engineering
~- Conducted end-to-end analysis for growth, retention, and revenue; deployed Data Governance via MixPanel and Braze.
~- Led AI automation initiatives: eKYC Automation (tampered, deblurring, 4 Points Transformation) — automating 80% of process; User Segmentation (RFM).

>>> 2020–2021 ||| Project Manager — Log Stream, LinkAja – Tech Group
~- Managed cross-functional Agile project for Data Pipeline/Log Stream deployment; reported to CTO.
~- Delivered: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation, eKYC Process, and Finance Reporting.

>>> 2019 ||| Business Intelligence Analyst, GOJEK – Data Science
~- Analyzed and detected fraud patterns across users, drivers, and merchants.
~- Led Fraud Detection automation system for Fraud Operation Team — preventing losses of ~$5 million USD.

>>> 2014–2015 ||| Research Assistant, United Nations – ILO Jakarta Office
~- Conducted research and assessment in Indonesia's Garment Industry (Indonesia Worker Survey, Java).
~- Prepared annual report with Better Work Indonesia and Tufts University for key development partners.

=== Projects:
>>> 2025 ||| ColpoAI — AI Cervical Cancer Detection, Personal / University of Limpopo Collaboration
~- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy, supporting a nurse + GP remote workflow in low-resource settings.
~- 4-class classification output (Cervical Cancer / HSIL / LSIL / Normal) with confidence scoring and explainability layer. Stack: HTML/JS, GenAI.
~- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

>>> 2025 ||| EP/CATH Lab Planning Simulator, Personal Project
~- Built hospital capacity planning simulation tool replaying 7,402 procedures across 260 simulated operating days to recommend optimal holding bay count, closing time, and scheduling policy.
~- Stack: Python, Streamlit. Deployed as interactive web app with cost analysis, policy comparison, and heatmap visualisations.

>>> 2025 ||| VibesCheck — Relationship Health Analyser, Personal Research
~- Designed 13-step LLM pipeline analysing chat exports across 28 communication dimensions and 13 interpersonal traits, producing an Overall Relationship Health Score (0–100) with confidence intervals and relationship stage prediction.

>>> 2025 ||| Prior Auth Auto-Assembler, Personal Project
~- Built agentic AI prototype automating prior authorization packet assembly for home oxygen (DMEPOS) — extracts clinical evidence, runs payer-specific rules checks (Medicare, MA plans), generates submission-ready packets. Stack: HTML/JS, LLM.

=== Additional Information:
~- Technical: Python · SQL/BigQuery · Tableau · PowerBI · Mixpanel · Braze · Firebase · Microsoft Copilot · ChatGPT · Claude · Gemini · R · HL7 · FHIR · DICOM
~- Languages: English (fluent) · Indonesian (native)
~- Certifications: Computational Thinking – Univ. of Pennsylvania (2019) · Data Science Math Skills – Duke University (2019) · Computer Science 101 – Stanford University (2016–2018)`
  },
  {
    key:       "gehc-datafabric",
    label:     "GE Healthcare — Principal PM, Data Fabric",
    company:   "GE Healthcare",
    role:      "Principal Product Manager, Data Fabric",
    jdUrl:     "https://careers.gehealthcare.com/global/en/job/R4027823/Principal-Product-Manager-Data-Fabric",
    dateAdded: "2026-03-28",
    coverLetter: `Dear Hiring Team,

I am applying for the Principal Product Manager, Data Fabric role within GE HealthCare's Science and Technology Organization. This role sits at the exact intersection of my background: platform product strategy, data architecture, and cross-functional program leadership in healthcare at global scale.

At GE HealthCare, I spent nearly two years as Senior Technical Project Manager driving the Innovation Roadmap across international regions — working directly with engineering, architecture, and business stakeholders to align, deliver, and iterate on technology programs including AI/ML Service Renewal Automation, CRM, and Data Migration and Governance. I understand how GE HealthCare builds and deploys at scale, and I know how to navigate the organization to get things done.

Before GE, I led data platform and AI/ML product strategy across Alodokter, LinkAja, and Philip Morris International — defining multi-year roadmaps, establishing data governance frameworks, and translating platform capabilities into downstream product value. At Alodokter, I owned the full AI/ML product roadmap across six products and coordinated engineers, data scientists, and business stakeholders in a fast-moving, ambiguous environment. At LinkAja, I led Data Pipeline and Log Stream deployment end-to-end — building the data infrastructure that powered fraud detection, marketing automation, and finance reporting.

I am currently completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 3.775/4.00, graduating 2026), which has deepened my understanding of healthcare data standards — FHIR, HL7, DICOM — and the interoperability challenges that make a well-designed data fabric so strategically critical for GE HealthCare's portfolio.

I would welcome the opportunity to bring this combination of internal GE context, data platform expertise, and product strategy to the Data Fabric team.

Sincerely,
Silvia Adinda`,
    cv: `#! SILVIA ADINDA
##! adinda@stanford.edu  •  650 305 6683  •  linkedin.com/in/silviatariganadinda  •  github.com/5ilvi4

AI and technology program leader with 8+ years of experience across healthcare, fintech, and consumer technology. Track record of building and deploying AI/ML products, leading large-scale technology programs across 20 countries, and driving user adoption across thousands of users. Hands-on with Python, SQL/BigQuery, Tableau, PowerBI, Mixpanel, Braze, Firebase, and Microsoft Copilot.

=== Education:
>>> 2025–2026 ||| Master in Medical Informatics, Stanford University School of Medicine
~- GPA 3.775/4.00 · Full Ride Scholarship, Ministry of Finance (LPDP)
~- Coursework: Data Driven Medicine · Digitally-Enabled Healthcare · Biodesign for Digital Health · Modeling Biomedical Systems · Healthcare Operations Management · Bioethical Challenges of New Technology · Principles of Business Strategy

>>>  ||| Bachelor's in Economics, Universitas Indonesia
~- Full Ride Scholarship · Most Outstanding Student

=== Experience:
>>> Sep 2023–May 2025 ||| Senior Technical Project Manager, General Electric Healthcare, International Region
~- Leading and managing IT Projects Innovation Roadmap and Strategies for international regions: Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East.
~- Leading the end-to-end System Deployment: global business process alignment, system ideation, technical development, preparing user adoption, and launch of technology for Service and Commercial Business Group – 20 Countries Deployed, users onboarded.
~- Projects: CRM, ServiceMax – Salesforce, iCenter, Service Board, System Migration, AI/ML Service Renewal Automation Process, Data Migration and Governance.
~- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025.

>>> Jan 2022–2023 ||| AI/ML and Analytics — Senior Product Manager, Alodokter
~- Led the roadmap of AI/ML: data governance, new business opportunities, technology ideation, development of new features and product initiatives — organizing 6 engineers and 2 data scientists.
~- Led and maintained 6 AI/ML Products: Chatbot Automation (1 million users/month during Covid-19), Doctors' Recommender, Health Articles Recommender, Ads Topic Classifier, Spam Review Flagger, and Feeds Recommender (Collaborative Filtering + Hybrid LightFM).
~- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

>>> 2020–2021 ||| Project Manager — Log Stream, LinkAja – Tech Group
~- Managed cross-functional Agile project for Data Pipeline/Log Stream deployment; reported to CTO.
~- Delivered: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation, eKYC Process, and Finance Reporting.

>>> 2020–2022 ||| Senior Data Analyst, LinkAja – Big Data, AI and Anti-Fraud Engineering
~- Conducted end-to-end analysis for growth, retention, and revenue; deployed Data Governance via MixPanel and Braze.
~- Led AI automation initiatives: eKYC Automation (tampered, deblurring, 4 Points Transformation) — automating 80% of process; User Segmentation (RFM).

>>> Jan–April 2023 ||| Digital Transformation Manager (AI/ML), Philip Morris International
~- Led and automated Merchant Order Taking process by supporting 2 AI Products: deployment, user adoption, and product iteration.
~- Chatbot Order Taking Automation: 10k onboarded merchants and 250bio revenue in 3 months.
~- Call-bot Order Taking Automation: 2k onboarded merchants and 20bio revenue in 3 months.
~- Organized and managed the framework and roadmap of Datalake, Data Governance, User Governance for finance and reporting: integrity, security, establishing policies and standards for data handling.

>>> May–Aug 2023 ||| Sabbatical Leave, Caregiving
~- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

>>> 2025 ||| AI Consultant — Knowledge Management, Johnson & Johnson, Irvine, USA
~- Engaged as external AI and Subject Matter Expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
~- Built the knowledge repository architecture: curated, structured, and maintained marketing content — brand guidelines, campaign assets, product information, SOPs, and presentations — ensuring accuracy and currency across global markets.
~- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams as an always-available single source of truth, enabling any team member to query in natural language for instant, up-to-date answers.
~- Validated and tested AI responses against real user questions prior to launch; led user adoption and onboarding across the global team.

>>> 2019 ||| Business Intelligence Analyst, GOJEK – Data Science
~- Analyzed and detected fraud patterns across users, drivers, and merchants.
~- Led Fraud Detection automation system for Fraud Operation Team — preventing losses of ~$5 million USD.

>>> 2014–2015 ||| Research Assistant, United Nations – ILO Jakarta Office
~- Conducted research and assessment in Indonesia's Garment Industry (Indonesia Worker Survey, Java).
~- Prepared annual report with Better Work Indonesia and Tufts University for key development partners.

=== Projects:
>>> 2025 ||| EP/CATH Lab Planning Simulator, Personal Project
~- Built hospital capacity planning simulation tool replaying 7,402 procedures across 260 simulated operating days to recommend optimal holding bay count, closing time, and scheduling policy.
~- Stack: Python, Streamlit. Deployed as interactive web app with cost analysis, policy comparison, and heatmap visualisations.

>>> 2025 ||| Prior Auth Auto-Assembler, Personal Project
~- Built agentic AI prototype automating prior authorization packet assembly for home oxygen (DMEPOS) — extracts clinical evidence, runs payer-specific rules checks (Medicare, MA plans), generates submission-ready packets. Stack: HTML/JS, LLM.

>>> 2025 ||| ColpoAI — AI Cervical Cancer Detection, Personal / University of Limpopo Collaboration
~- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy, supporting a nurse + GP remote workflow in low-resource settings.
~- 4-class classification output (Cervical Cancer / HSIL / LSIL / Normal) with confidence scoring and explainability layer. Stack: HTML/JS, GenAI.
~- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

=== Additional Information:
~- Technical: Python · SQL/BigQuery · Tableau · PowerBI · Mixpanel · Braze · Firebase · Microsoft Copilot · ChatGPT · Claude · Gemini · R · HL7 · FHIR · DICOM
~- Languages: English (fluent) · Indonesian (native)
~- Certifications: Computational Thinking – Univ. of Pennsylvania (2019) · Data Science Math Skills – Duke University (2019) · Computer Science 101 – Stanford University (2016–2018)`
  },
  {
    key:       "x",
    label:     "X \u2013 Program Manager, Early Stage",
    company:   "X",
    role:      "Program Manager, Early Stage",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    coverLetter: `Dear Hiring Team,

I am writing to express my interest in the Program Manager, Early Stage role at X. With a decade of experience building and scaling AI/ML programs from 0 to 1 — across healthcare, fintech, and consumer technology — I bring the systems thinking, cross-functional coordination, and comfort with ambiguity that early-stage programs at X demand.

At GE Healthcare, I led a 20-country technology deployment spanning five continents, serving as the operational backbone that kept complex, multi-workstream programs moving while aligning engineering, commercial, and regional stakeholders. Before that, at Philip Morris International and Alodokter, I built AI automation products from scratch — going from initial concept through development, user adoption, and iteration — achieving measurable outcomes including 10,000+ merchants onboarded and products serving 1 million users per month.

What draws me to X is the intersection of scale and speed. Early-stage programs at X require the ability to define structure where none exists, move fast without losing accountability, and build trust across teams that are figuring things out in real time. That is exactly the environment where I have consistently delivered.

I am currently completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 4.0, graduating 2026) and would welcome the opportunity to bring this combination of technical depth and program leadership to your team.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and program expert to design and deploy an AI-powered knowledge management system — built from 0-to-1: architecture design, content curation, AI deployment, and user adoption across J&J's Global Marketing team.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams as a scalable, always-available single source of truth for global marketing users.
- Validated and tested AI responses against real user questions; defined adoption metrics and led onboarding to drive full team rollout.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Served as the organizational backbone for a global AI/technology program spanning 20 countries across Asia, Africa, Latin America, Australia, Europe, the UK, and the Middle East — coordinating workstreams, managing dependencies, and unblocking decisions on behalf of senior leadership.
- Built systems and frameworks for 0-to-1 program execution: global business process alignment, solution ideation, technical development, user adoption, and launch — driving full deployment lifecycle across Service and Commercial Business Groups.
- Defined program milestones, performance metrics, and accountability structures for concurrent complex initiatives including CRM, AI/ML Service Renewal Automation, Data Migration and Governance, and System Migration.
- Managed strategic partnerships with internal technology teams and external regional partners to drive alignment and deliver outcomes across diverse markets.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Built and launched 2 AI automation products from 0-to-1: managed full program lifecycle from partner engagement, solution development, user adoption, to iteration — achieving 10k merchants onboarded and 250bio revenue in 3 months (Chatbot) and 2k merchants and 20bio revenue in 3 months (Call-bot).
- Designed and implemented systems for Datalake, Data Governance, and User Governance: establishing policies, standards, and automation frameworks that enabled reliable data integrity for finance and reporting.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Operated as program lead for an early-stage AI team: defined roadmap, coordinated workstreams, and organized 6 engineers and 2 data scientists across concurrent 0-to-1 initiatives and new business opportunities.
- Built systems for experimentation and iterative delivery across 6 AI/ML products from ideation through development, testing, and launch — including AI Chatbot scaling to 1 million users/month, Recommender Systems, and Feeds Recommender (Collaborative + Hybrid LightFM).
- Translated complex technical concepts (ML classification, clustering, collaborative filtering) into actionable plans for cross-functional stakeholders and leadership.
- Led A/B Testing, ETL Migration, Data Governance, and DevOps migration using Kubernetes.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Led cross-functional Agile program for Data Pipeline/Log Stream deployment from 0-to-1: defined work plans, managed resources, and tracked requirements and results across multiple business groups (Fraud, Marketing, Operations, Finance).
- Reported directly to CTO, acting as leadership proxy: monitoring data governance, data quality, and system accuracy; unblocking decisions and managing cross-team dependencies.
- Delivered key milestones: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation, eKYC Process, and Finance Reporting.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Defined and tracked performance metrics across growth, retention, and revenue — delivering scalable ongoing analysis and reports for leadership decision-making.
- Built and deployed Data Governance systems: SDK trackers for User Journey metrics using MixPanel and Braze; led AI-driven automation initiatives (eKYC Automation, User Segmentation RFM) with Product, Marketing, and Sales Operations.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Formulated Fraud Detection automation system for the Fraud Operations Team: analytically modeled behavior patterns and defined metrics — preventing losses of approximately $5 million USD.
- Prepared actionable insights and reports using statistical tools and data visualization for cross-functional stakeholders.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### PROJECTS

**VibesCheck — Relationship Health Analyser** | Personal Research | 2025
- Designed and built a 0-to-1 LLM-powered product: 13-step pipeline analysing chat exports across 28 communication dimensions and 13 interpersonal traits, producing an Overall Relationship Health Score (0–100) with confidence intervals.

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI prototype from 0-to-1 automating prior authorization packet assembly — defined product requirements, built rules engine, and shipped a fully functional single-file web app. Stack: HTML/JS, LLM.

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo | 2025
- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy — designed AI model, confidence scoring, and interface from scratch. Stack: HTML/JS, GenAI.

### SKILLS

**Program Management & 0-to-1 Execution** | | Advanced
**Strategic Partnership & Stakeholder Management** | | Advanced
**AI/ML Product & Program Management** | | Advanced
**Systems Design & Process Automation** | | Advanced
**Metrics Definition & Performance Tracking** | | Advanced
**Agile Methodology & Roadmap Planning** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Jira / Asana / Project Management Tools** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "ey",
    label:     "EY \u2013 Digital Grid Manager",
    company:   "EY",
    role:      "Digital Grid Manager",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    coverLetter: `Dear Hiring Team,

I am applying for the Digital Grid Manager role at EY. My background sits at the intersection of technology transformation, project governance, and AI/ML delivery — with direct experience managing complex, multi-country technology programs in regulated environments and advising organizations on digital and data strategy.

At GE Healthcare, I led end-to-end technology deployments across 20 countries, managing the full SDLC from business process alignment through system development, user adoption, and launch. I brought rigorous project governance to concurrent initiatives — CRM, AI/ML automation, system migration, and data governance — ensuring quality, risk management, and milestone accountability across distributed teams. At Philip Morris International, I led digital transformation through AI-driven automation, delivering measurable business outcomes within tight timelines.

EY's advisory model demands the ability to navigate client environments, translate complex technical requirements into structured delivery plans, and manage risk across ambiguous, high-stakes programs. These are capabilities I have built across industries and geographies throughout my career.

I hold a Master's in Medical Informatics from Stanford University School of Medicine (GPA 4.0, graduating 2026), which gives me a strong foundation in data governance and technology strategy to complement my operational program management experience.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and technology expert to design and deploy an AI-powered knowledge management system: led full project lifecycle from knowledge architecture design, content governance, AI deployment, and user adoption.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams, establishing a governed single source of truth for J&J's Global Marketing team across global markets.
- Validated and tested AI responses against real user queries; defined governance standards for content accuracy and currency.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Led technology transformation and IT innovation roadmap for international regions: Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East — directly within GE's global technology ecosystem.
- Managed end-to-end system development lifecycle (SDLC): global business process alignment, solution ideation, technical development, user adoption strategy, and technology launch across Service and Commercial Business Groups — 20 Countries Deployed, users onboarded.
- Applied iterative delivery and project governance frameworks to manage cross-functional technical teams, ensuring quality, risk management, and milestone accountability across concurrent complex initiatives.
- Delivered technology solutions across CRM, ServiceMax – Salesforce, iCenter, Service Board, System Migration, AI/ML Service Renewal Automation, and Data Migration and Governance.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Led digital transformation initiative by deploying and scaling 2 AI-driven automation products, managing full project lifecycle from client engagement, solution development, user adoption, and continuous iteration:
  - Chatbot-Order Taking Automation: 10k onboarded merchants and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k onboarded merchants and 20bio revenue in 3 months.
- Established framework and governance roadmap for Datalake, Data Governance, and User Governance: defining policies, standards, security protocols, and data integrity practices for finance and reporting.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Managed resource planning and delivery governance for AI/ML product roadmap — organizing 6 engineers and 2 data scientists across concurrent technology initiatives and new business opportunities.
- Drove iterative delivery of 6 AI/ML products from ideation through development, testing, and launch, applying structured project governance and continuous process improvement across the full SDLC.
- Led A/B Testing, ETL Migration, Data Governance, and DevOps migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Prepared and delivered course materials covering Technical Project Management, Data Analytics, ETL, Design Thinking, Data Modeling, and Data Visualization with Storytelling.
- Coached undergraduate students in analytical problem-solving and project delivery methodologies.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional technology project using Agile methodology for Data Pipeline/Log Stream deployment: work plans, resource management, requirements definition, and result evaluation.
- Reported to CTO on data governance, data quality, and system accuracy; led acceptance criteria and key milestone delivery across multiple business groups.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Conducted end-to-end analysis supporting business decision-making: growth, retention, and revenue reporting with scalable, ongoing deliverables.
- Deployed Data Governance process: Implementing Trackers (SDK) for User Journey metrics using MixPanel and Braze; led AI-driven automation projects to implement growth initiatives.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Formulated and delivered Fraud Detection automation system for the Fraud Operations Team: successfully preventing losses of approximately $5 million USD.
- Prepared insights and reports using statistical tools and data visualization for cross-functional business stakeholders.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted labor research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### PROJECTS

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built hospital capacity planning simulation tool: replays 7,402 procedures across 260 operating days, outputs recommended bay count, optimal closing time, and best scheduling policy with full cost analysis. Stack: Python, Streamlit.

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI prototype automating prior authorization processes: AI extracts data from documents, applies governance rules, and generates submission-ready packets. Stack: HTML/JS, LLM.

### SKILLS

**Project Governance & Delivery** | | Advanced
**Agile & Waterfall Methodology** | | Advanced
**Technology Transformation & SDLC** | | Advanced
**Resource & Risk Management** | | Advanced
**Tableau** | | Advanced
**PowerBI** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Mixpanel – Application Tracking** | | Advanced
**Braze – Application Tracking** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "jj",
    label:     "J&J \u2013 Sr. PM Robotics",
    company:   "Johnson & Johnson",
    role:      "Sr. PM Robotics",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    coverLetter: `Dear Hiring Team,

I am writing to express my strong interest in the Senior Program Manager, Robotics role at Johnson & Johnson. Having worked within J&J's ecosystem as an AI consultant, and having spent nearly two years leading technology programs at GE Healthcare — a fellow regulated medical device environment — I bring a specific combination of healthcare technology expertise, Agile program management, and cross-functional delivery that this role requires.

At GE Healthcare, I drove end-to-end program delivery across 20 countries in a regulated environment: managing risk assessments, tradeoff evaluations, and milestone accountability for concurrent complex initiatives including AI/ML systems and medical device service technology. At Alodokter, I led a healthcare AI platform delivering 6 AI/ML products from ideation through launch — including systems scaling to 1 million users per month — with consistent focus on compliance, testing, and quality.

Outside of my professional roles, I have continued to build in healthcare: my ColpoAI project — a clinical decision support tool for cervical cancer detection, affiliated with a University of Limpopo research study — reflects my commitment to applying AI rigorously in regulated clinical contexts.

I am completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 4.0, graduating 2026) and am excited about the opportunity to contribute to J&J's robotics innovation pipeline.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and technology expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
- Led end-to-end program delivery: knowledge architecture design, content curation, AI model validation, Microsoft Copilot + Teams deployment, and global user adoption.
- Defined acceptance criteria and validated AI response accuracy against real user questions prior to launch; drove onboarding across the global team.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Led technology programs within a regulated medical device environment, driving end-to-end development lifecycle across multi-disciplinary technical teams spanning 20 countries across Asia, Africa, Latin America, Australia, Europe, the UK, and the Middle East.
- Championed hybrid Agile methodology to define and deliver quarterly objectives, track milestones, and manage tradeoff evaluations across concurrent complex programs including AI/ML Service Renewal Automation, CRM, ServiceMax, and System Migration.
- Developed comprehensive risk assessment and contingency planning frameworks, enabling proactive resolution of cross-functional dependencies and accountability across product, engineering, and commercial stakeholders.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Led end-to-end program lifecycle for 2 software-integrated AI automation products — from cross-functional requirement alignment, technical development, tradeoff evaluation, and user adoption through iteration:
  - Chatbot-Order Taking Automation: 10k on boarded merchant and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k on boarded merchant and 20bio revenue in 3 months.
- Established governance framework and roadmap for Datalake, Data Governance, and User Governance: defining policies, standards, and accountability structures for data integrity.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Led program roadmap and quarterly objectives for AI/ML initiatives in a healthcare technology environment — organising and aligning 6 engineers and 2 data scientists across concurrent technical workstreams.
- Drove end-to-end delivery of 6 software-integrated AI products — from ideation through technical development, testing, and launch — applying Agile methodology with consistent milestone accountability:
  - Chatbot Automation: using Binary Classification and Multi-class classification, scaling for 1 million users per month during Covid-19.
  - Aloweb Recommender System: Doctors' Recommender (Clustering).
  - Almobile Recommender System: Health Articles Recommender (using Clustering and CTR).
  - Ads Topic Classification with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Spam Review Flagging with Qtagger: Fasttext and SKlearn — Naive Bayes and linear model.
  - Feeds Recommender: Collaborative Filtering Based, Content Based and Hybrid Based-LightFM.
- Managed risk identification, contingency planning, and technical tradeoff evaluations across multi-disciplinary teams.
- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Prepared and delivered course materials on Technical Project Management, Data Analytics, Design Thinking, and Data Visualization — coaching students on structured problem-solving and delivery methodologies.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Led cross-functional Agile program for Data Pipeline/Log Stream deployment: defined work plans, managed resources, tracked milestones and acceptance criteria across Engineering, Marketing, Operations, and Finance teams.
- Reported to CTO: drove accountability on data governance, data quality, and accuracy; managed cross-team dependencies and risk resolution with urgency.
- Delivered key milestones: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation, eKYC Process, and Finance Reporting.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Leveraged end-to-end data analysis to define metrics, validate technical requirements, and deliver scalable ongoing reports supporting leadership decisions across growth, retention, and revenue.
- Led AI-driven automation initiatives (eKYC Automation, User Segmentation RFM) coordinating across Product, Marketing, and Sales Operations teams.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Formulated Fraud Detection automation system for the Fraud Operations Team — modelled behaviour patterns, defined metrics, and drove cross-functional alignment — preventing losses of approximately $5 million USD.
- Prepared insights and reports using statistical tools and data visualisation for cross-functional business stakeholders.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### PROJECTS

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo | 2025
- Built clinical decision support tool for detecting pre-cancerous cervical lesions at colposcopy in a regulated healthcare research context — designed AI model, confidence scoring with explainability layer, and nurse + GP workflow interface. Stack: HTML/JS, GenAI.
- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built hospital capacity planning simulation tool for a joint EP/Cath lab — replays 7,402 procedures across 260 simulated operating days; outputs optimal bay count, closing time, and scheduling policy with risk-based cost analysis. Stack: Python, Streamlit.

### SKILLS

**R&D Program Management & Regulated Environments** | | Advanced
**Hybrid Agile Methodology & Milestone Tracking** | | Advanced
**Risk Assessment, Contingency Planning & Tradeoff Evaluation** | | Advanced
**Cross-Functional & Multi-Disciplinary Team Leadership** | | Advanced
**End-to-End Product & Technology Delivery** | | Advanced
**Medical Device & Healthcare Technology (GE Healthcare)** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Jira / Agile Project Management Tools** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "sh",
    label:     "Siemens Healthineers \u2013 Sr. Clinical Data Manager",
    company:   "Siemens Healthineers",
    role:      "Sr. Clinical Data Manager",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    coverLetter: `Dear Hiring Team,

I am applying for the Senior Clinical Data Manager role at Siemens Healthineers. My background combines formal training in Medical Informatics at Stanford with hands-on experience managing clinical data governance, validation frameworks, and data quality operations across regulated healthcare technology environments.

At GE Healthcare, I built and managed data governance systems for medical device service data across 20 countries: establishing validation protocols, data cleaning workflows, query resolution processes, and acceptance criteria for complex database builds. I coordinated cross-functional teams — engineering, clinical operations, and regulatory specialists — and trained regional teams across multiple geographies on data standards and reporting systems. At Alodokter, I led data governance for a healthcare AI platform serving 1 million users per month, managing validation pipelines, anomaly resolution, and data quality review cycles in collaboration with data scientists and engineers.

My Stanford coursework in clinical data standards, health information systems, and regulatory frameworks gives me a strong theoretical foundation to complement this operational experience. My ColpoAI project — a clinical decision support tool affiliated with a formal colposcopy research study using histopathology as ground truth — reflects my ability to apply rigorous data standards in clinical research contexts.

I am graduating in 2026 and am excited to bring this combination of academic depth and industry experience to Siemens Healthineers.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00
- Coursework in clinical data standards, health information systems, regulatory frameworks, and medical data governance.

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and data expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
- Built and governed the knowledge repository: curated, validated, and maintained marketing content — ensuring data accuracy, currency, and integrity across global markets.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams; validated AI response accuracy through systematic testing against real user queries before launch.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Led data management and system deployment in a regulated medical device environment, maintaining high data quality standards and regulatory compliance across 20 countries spanning Asia, Africa, Latin America, Australia, Europe, the UK, and the Middle East.
- Developed and implemented data management plans and governance frameworks for medical device service data: establishing validation protocols, data cleaning processes, query resolution workflows, and reporting standards across Service and Commercial Business Groups.
- Coordinated cross-functional teams — engineering, clinical operations, and regulatory specialists — to define data collection requirements, case report form equivalents, validation rules, and system acceptance criteria.
- Managed database builds and data repository architecture (CRM, ServiceMax, iCenter), overseeing data integrity, processing pipelines, and migration quality for concurrent complex programs.
- Provided training and onboarding to internal teams, regional coordinators, and vendor partners across 20 countries on data systems, governance standards, and reporting tools.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Developed and implemented a data governance framework and roadmap for Datalake and reporting systems: establishing validation rules, data integrity protocols, and standards for data collection, processing, and query resolution.
- Coordinated with cross-functional stakeholders (finance, operations, data engineering) to define data management plans and ensure end-to-end data accuracy and compliance.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Led data governance and quality management for a healthcare technology platform: defining data collection standards, validation pipelines, and processing frameworks across 6 data systems serving 1 million users per month.
- Managed data validation and cleaning processes: established acceptance criteria, data quality checks, anomaly resolution workflows, and ongoing data review cycles in collaboration with 6 engineers and 2 data scientists.
- Coordinated with clinical content specialists, product, and engineering teams to develop and maintain data management plans and ensure consistent data standards across health platform initiatives.
- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Developed and delivered training materials covering Data Governance, ETL, Data Processing, Data Modeling, Data Validation, and Data Analytics — coaching undergraduate students on data management methodologies and quality standards.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Implemented and monitored data governance processes: deploying SDK tracking systems to validate data collection quality, integrity, and accuracy for user journey metrics using MixPanel and Braze.
- Led end-to-end data analysis including data gathering, validation, cleaning, and processing to support business reporting across growth, retention, and revenue functions.
- Led Automation Projects by utilizing Artificial Intelligence to implement growth initiatives with Product, Marketing and Sales Operations Teams:
  - Users' eKYC Automation (tampered, deblurring, 4 Points Transformation) – automating 80% process.
  - User Segmentation: Mapping and Analyzing Recency, Frequency and Monetary (RFM).

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional data pipeline project: overseeing data collection requirements, validation criteria, quality standards, and delivery milestones across Engineering, Marketing, Operations, and Finance teams.
- Reported to CTO: monitored data governance, data quality, and accuracy; defined and delivered acceptance criteria for Fraud Alert Monitoring, Marketing Automation, eKYC Processing, and Finance Reporting.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Conducted end-to-end data validation and quality analysis: gathering, cleaning, and processing transactional and behavioural data to detect fraud patterns and support business reporting.
- Prepared insights using statistical tools and data visualization; prevented losses of approximately $5 million USD through rigorous data-driven analysis.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted data collection and survey management for the Indonesia Worker Survey in the Garment Industry (Java); prepared annual reports for key development partners including governments and international sponsors.

### PROJECTS

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo | 2025
- Built clinical decision support tool for cervical lesion detection at colposcopy: designed data validation pipeline, AI confidence scoring, and structured clinical output (4-class classification with explainability). Stack: HTML/JS, GenAI.
- Affiliated with formal research study at University of Limpopo; data sourced from histopathology (LLETZ/cone biopsy) as gold standard. Funded by SAfAIDS and ASCCP.

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built hospital capacity planning simulation managing clinical data across 7,402 procedures and 260 operating days — data validation, quality metrics, and acceptance criteria for holding bay and scheduling recommendations. Stack: Python, Streamlit.

### SKILLS

**Clinical Data Management & Governance** | | Advanced
**Data Validation, Cleaning & Query Resolution** | | Advanced
**Regulatory & Compliance Frameworks (Medical Device)** | | Advanced
**Data Management Plans & Acceptance Criteria** | | Advanced
**Database & Data Repository Management** | | Advanced
**Cross-Functional Coordination (Clinical, Engineering, Regulatory)** | | Advanced
**Training & Team Onboarding** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Microsoft Office Suite** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Statistics** | IBM | 2018
**Data Science Math Skills** | Duke University | 2019`
  },
  {
    key:       "meta-pm-pdo",
    label:     "Meta – PM, Product Data Operations",
    company:   "Meta",
    role:      "Project Manager, Product Data Operations - MSL",
    jdUrl:     "https://www.linkedin.com/jobs/view/4380215581/",
    dateAdded: "2026-03-13",
    coverLetter: `Dear Hiring Team,

I am excited to apply for the Project Manager, Product Data Operations role at Meta. My experience spans large-scale data operations, annotation program management, vendor coordination, and quality governance — across AI/ML platforms in healthcare, fintech, and consumer technology.

At GE Healthcare, I managed distributed vendor teams and regional coordinators across 20 countries, establishing KPIs, program governance frameworks, and quality standards while reporting progress to executive leadership. At Alodokter, I operated as the program lead for a clinical data annotation operation: defining annotation guidelines, quality standards, and validation workflows across 6 AI products and a workforce of engineers and data scientists — with products serving 1 million users per month. I have consistently built the infrastructure — guidelines, acceptance criteria, anomaly workflows, and performance tracking — that makes large-scale data operations reliable and scalable.

Outside of my professional roles, I have built data pipeline products independently: my VibesCheck project is a 13-step LLM pipeline that processes raw chat data through sessionization, annotation, 28-dimension extraction, and quality scoring — the same kind of structured data operations thinking that Meta's product data teams require.

I am currently completing a Master's in Medical Informatics at Stanford (GPA 4.0, graduating 2026) and would be glad to bring this combination of operational scale and technical depth to Meta's data operations team.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Engaged as external AI and program expert to design and deploy an AI-powered knowledge management system for J&J's Global Marketing team.
- Built the data operations infrastructure: curated, structured, and governed marketing content — brand guidelines, SOPs, product information — as a validated single source of truth for global users.
- Deployed AI chatbot via Microsoft Copilot integrated into Microsoft Teams; defined quality standards, validated AI outputs against real user queries, and led adoption across the global team.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Provided strategic leadership and oversight for the planning, execution, and delivery of technology programs in a regulated environment — managing distributed vendor teams and regional coordinators across 20 countries in Asia, Africa, Latin America, Australia, Europe, the UK, and the Middle East.
- Established KPIs and program governance frameworks to monitor quality, efficiency, and milestone accountability; reported program progress, insights, and recommendations to executive leadership across concurrent programs: AI/ML Service Renewal Automation, CRM, ServiceMax, and System Migration.
- Managed onshore and offshore vendor relationships, defining program guidelines, driving cross-functional alignment, and ensuring accountability from engineering and commercial stakeholders.
- Proactively identified program risks, developed mitigation strategies, and communicated updates and rationale to stakeholders at all levels — navigating ambiguity across complex, multi-stakeholder environments.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Initiated and scaled 2 AI automation programs from 0-to-1: led end-to-end program lifecycle from requirements alignment, operational guidelines development, vendor onboarding, and continuous iteration:
  - Chatbot-Order Taking Automation: 10k onboarded merchants and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k onboarded merchants and 20bio revenue in 3 months.
- Established data governance framework and operational guidelines for Datalake and reporting systems: defining data quality standards, validation rules, and accountability structures across stakeholders.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Managed large-scale clinical data annotation operations for a healthcare AI platform — defining annotation guidelines, quality standards, and validation workflows for doctor-patient interaction data, health content, and medical classification tasks across 6 AI products serving 1 million users per month.
- Coordinated annotation workforce of 6 engineers and 2 data scientists; developed and implemented project guidelines, acceptance criteria, anomaly resolution workflows, and continuous improvement processes for annotated clinical datasets.
- Drove 0-to-1 delivery of 6 AI products through structured program governance: Chatbot Automation (doctor-patient triage), Doctor Recommender System, Health Article Recommender, Medical Topic Classification, Spam Review Flagging, and Feeds Recommender.
- Other Projects: ETL Migration, Data Governance, A/B Testing and DevOps Migration using Kubernetes.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Prepared and delivered course materials on Data Analytics, Data Governance, ETL, and Data Modeling — coaching students on structured problem-solving and delivery methodologies.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional program for large-scale Data Pipeline/Log Stream deployment: established program guidelines, defined KPIs and acceptance criteria, and drove milestone accountability across Engineering, Marketing, Operations, and Finance teams.
- Reported to CTO: implemented and monitored data governance, quality standards, and accuracy; delivered key milestones including Fraud Alert Monitoring, Marketing Automation, eKYC Processing, and Finance Reporting.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Led data governance and quality operations: deployed SDK tracking to validate data collection integrity for user journey metrics using MixPanel and Braze; established data standards and acceptance criteria across growth, retention, and revenue functions.
- Led AI-driven automation initiatives (eKYC Automation — 80% process automation, User Segmentation RFM) coordinating across Product, Marketing, and Sales Operations teams.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Developed Fraud Detection automation system for Fraud Operations Team — establishing data quality metrics, analytical frameworks, and detection models; preventing losses of approximately $5 million USD.
- Prepared insights and reports using statistical tools and data visualization for cross-functional business stakeholders.

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – Dec 2015
- Conducted research and data collection in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### PROJECTS

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI prototype managing large-scale document data operations: AI extracts structured clinical data from unstructured documents, validates against payer-specific quality rules, and assembles submission-ready packets. Stack: HTML/JS, LLM.

**VibesCheck — Relationship Health Analyser** | Personal Research | 2025
- Designed 13-step LLM data pipeline processing chat exports across 28 dimensions and 13 traits — auto-tuned sessionizer, structured data extraction, quality annotation, scoring, and narrative synthesis. Produces ORHS (0–100) with confidence intervals.

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo | 2025
- Built clinical AI product managing structured data operations: image-based classification pipeline, confidence scoring, and annotated clinical output. Affiliated with formal research study funded by SAfAIDS and ASCCP.

### SKILLS

**Program Management & 0-to-1 Execution** | | Advanced
**Large-Scale Data Operations & Quality Management** | | Advanced
**Vendor & Distributed Workforce Management (Onshore/Offshore)** | | Advanced
**Risk Identification, Mitigation & Stakeholder Communication** | | Advanced
**KPI Development & Program Performance Monitoring** | | Advanced
**AI/ML Program & Product Management** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Cross-Functional Collaboration & Executive Reporting** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "nuro",
    label:     "Nuro \u2013 Technical Program Manager, Systems",
    company:   "Nuro",
    role:      "Software Technical Program Manager, Systems",
    jdUrl:     "https://www.linkedin.com/jobs/view/4383987576/",
    dateAdded: "2026-03-16",
    coverLetter: `Dear Nuro Hiring Team,

I am applying for the Software Technical Program Manager, Systems role at Nuro. While my domain is AI/ML systems rather than autonomous vehicles, the core competency you are hiring for — technical program ownership of scenario coverage, simulation campaign design, requirements traceability, and V&V methodology — is where I have consistently worked.

The most direct evidence is a project I built independently: the EP/CATH Lab Planning Simulator, a scenario-based simulation framework that replays 7,402 medical procedures across 260 simulated operating days to validate capacity planning decisions. I designed the scenario selection framework, defined coverage metrics (P95 peak demand, overflow edge cases, close-time boundary conditions), ran five distinct policy campaigns with controlled parameters, and tied simulation outputs back to system requirements. When results were inconclusive or boundary cases were hit, I traced them back to root causes in the simulation logic and requirements definitions. This is the V&V methodology your role requires — not administrative coordination, but technical ownership of what is being validated and whether the evidence is sufficient.

At GE Healthcare, I served as the technical bridge for a 20-country system deployment — maintaining requirements traceability across concurrent workstreams (CRM, AI/ML automation, data migration, system migration), managing interface dependencies between engineering and regional execution teams, and driving milestone accountability from requirements definition through integration testing and launch. When systems failed acceptance criteria, I owned the root-cause process and drove resolution with engineering.

I recognise that autonomous vehicle validation is a specialised domain and I take that seriously. I bring systems engineering program management rigour to a team that needs someone who can own the technical framework, not just track milestones. I am completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 4.0, Class of 2026) and would welcome the opportunity to discuss how my background applies.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Defined system requirements and validation criteria for an AI-powered knowledge management system; led testing of AI outputs against real-world user queries before launch to ensure response accuracy and reliability.
- Maintained requirements traceability from content governance standards through AI configuration, testing, and rollout — ensuring alignment between specification and deployed behaviour across J&J's Global Marketing team.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Served as technical bridge between engineering and cross-functional stakeholders across a 20-country system deployment program — owning requirements traceability, dependency management, and milestone accountability across concurrent workstreams: CRM, AI/ML Service Renewal Automation, System Migration, and Data Governance.
- Defined and maintained alignment between system requirements, test definitions, and acceptance criteria across the full SDLC: from requirements authoring through integration testing, validation, and production launch.
- Led root-cause analysis and resolution when systems failed acceptance criteria; managed interface dependencies between engineering teams and regional execution to unblock delivery.
- Drove program performance through structured metrics, risk identification, and executive-level reporting for Asia, Africa, Latin America, Australia, Europe, the UK, and the Middle East.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Designed and managed validation framework for 2 AI automation products: defined test scenarios, success criteria, and failure conditions; oversaw iterative testing cycles prior to each production milestone.
- Established data governance and quality standards ensuring traceable, auditable data pipelines for finance and reporting.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Owned technical program management for 6 concurrent AI/ML products — maintained requirements documentation, coordinated validation cycles between data scientists and engineers, and managed workstream dependencies across a team of 6 engineers and 2 data scientists.
- Designed and executed A/B testing frameworks and model validation protocols; traced ML model behaviours back to requirements and escalated root-cause findings to technical leads.
- Translated complex technical requirements (classification thresholds, clustering parameters, collaborative filtering design) into structured specifications and acceptance criteria for cross-functional review.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Led requirements definition and traceability for a Data Pipeline/Log Stream program: authored acceptance criteria, managed interface dependencies across Fraud, Marketing, Operations, and Finance groups, and reported data quality and accuracy metrics directly to CTO.
- Delivered key technical milestones: Fraud Alert Monitoring, DevOps Log Monitoring, eKYC Automation, and Finance Reporting — each with defined requirements, validation evidence, and sign-off criteria.

**Senior Data Analyst** | LinkAja – Big Data, AI and Anti-Fraud Eng. | 2020 – 2022
- Defined and monitored system-level KPIs and data quality metrics; led root-cause analysis of anomalous system behaviours and translated findings into structured engineering requirements.
- Built and validated AI-driven automation systems (eKYC document processing, User Segmentation RFM) — designed failure-condition test cases and tracked model behaviour against specification.

**Business Intelligence Analyst** | GOJEK – Data Science | 2019
- Designed fraud detection automation system: modelled failure-condition behaviour patterns across users, drivers, and merchants; defined detection criteria and validated against ground truth — preventing approximately $5 million USD in losses.

### PROJECTS

**EP/CATH Lab Planning Simulator** | Personal | 2025
- Built a scenario-based simulation framework replaying 7,402 medical procedures across 260 simulated operating days to validate capacity planning decisions under varying scheduling policies and operational parameters.
- Designed scenario coverage strategy: defined 5 scheduling policy campaigns, coverage metrics (P95 peak demand, overflow edge cases, boundary close-time conditions), and identified when simulation results were inconclusive or required root-cause investigation.
- Maintained traceability between system requirements (bay count, close-time thresholds, overflow constraints) and simulation outputs — producing structured validation evidence for each planning decision. Stack: Python, Streamlit.

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo Collaboration | 2025
- Built clinical AI decision support tool with 4-class classification output, confidence scoring, and transparent explainability layer — designed validation criteria and failure-mode outputs to support safe clinical use in low-resource settings.
- Affiliated with formal research study at University of Limpopo; funded by SAfAIDS and ASCCP.

**Prior Auth Auto-Assembler** | Personal | 2025
- Built agentic AI system with payer-specific rules validation: defined requirements, failure conditions, and test cases for clinical evidence extraction and submission-packet assembly. Stack: HTML/JS, LLM.

### SKILLS

**Systems Engineering & Requirements Traceability** | | Advanced
**Scenario-Based Validation & Simulation Design** | | Advanced
**V&V Methodology & Acceptance Criteria Definition** | | Advanced
**Technical Program Management (Complex Multi-Workstream)** | | Advanced
**Root-Cause Analysis & Failure-Condition Diagnosis** | | Advanced
**Cross-Functional Technical Bridge & Stakeholder Communication** | | Advanced
**Python** | | Intermediate
**SQL – BigQuery** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  },
  {
    key:       "ge-ai-program-leader-pc",
    label:     "GE Healthcare – AI Program Leader, People & Culture",
    company:   "GE Healthcare",
    role:      "AI Program Leader - People & Culture",
    jdUrl:     "https://careers.gehealthcare.com/global/en/job/GEVGHLGLOBALR4037879EXTERNALENGLOBAL/AI-Program-Leader-People-Culture?utm_source=linkedin&utm_medium=phenom-feeds",
    dateAdded: "2026-03-28",
    coverLetter: `Dear GE Healthcare Hiring Team,

I am applying for the AI Program Leader - People & Culture role. I know GE Healthcare from the inside — I spent nearly two years there as a Senior Technical Project Manager, leading AI and technology transformation programs across 20 countries. I understand the internal culture, how decisions get made, and what it actually takes to land a program inside GE. That experience, combined with a consistent track record of deploying AI capabilities that get adopted and sustained, is what I bring to this role.

The clearest parallel to what this role requires is my engagement at Johnson & Johnson, where I was brought in to build and deploy an AI-powered knowledge management system for the Global Marketing function from scratch. I designed the use case, built the program architecture, deployed an AI chatbot via Microsoft Copilot integrated into Microsoft Teams, and owned the full change management — hands-on training, governance, AI response validation, global onboarding, and adoption tracking through to completion. That is exactly the mandate here: identify high-value AI use cases within P&C, build and execute the program, enable the team to use the tools confidently, and drive adoption until the change is embedded.

I understand that P&C transformation through AI means going beyond tools — it means changing how people in a function work, how they think about their processes, and how they interact with AI day to day. My experience teaching data analytics as a university lecturer, combined with years of designing and leading adoption programs for AI products across thousands of users, has given me a practical understanding of how adults learn new technology and what it takes to shift behavior at scale — not just in theory, but in practice.

At Philip Morris International, I managed the deployment and user adoption of two AI automation products from zero to production in under three months — onboarding 10,000+ merchants while running data governance and product iteration in parallel. At GE Healthcare, I managed the full AI and technology innovation roadmap across the Service and Commercial Business Groups internationally, including AI/ML Service Renewal Automation and Data Governance, coordinating cross-functional and cross-regional teams to deliver outcomes.

I am hands-on with the tools this role centres on: Microsoft Copilot, ChatGPT, Claude, and Gemini. I have independently built and deployed agentic AI systems. I approach AI adoption as a sustained change management program — and I have the track record to show it.

I am completing a Master's in Medical Informatics at Stanford University School of Medicine (GPA 4.0, Class of 2026) and am ready to contribute from day one.

Sincerely,
Silvia Adinda`,
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // github.com/5ilvi4 // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford Univ. School of Medicine | Class of 2026
- Full Ride Scholarship by Indonesia Endowment Fund · GPA 3.775/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EXPERIENCE

**AI Consultant — Knowledge Management** | Johnson & Johnson | 2025
- Designed and led an end-to-end AI program for J&J's Global Marketing function: identified the AI use case, built the program architecture from zero, deployed AI capability via Microsoft Copilot integrated into Microsoft Teams, and drove full organizational adoption across the global team.
- Built and governed the knowledge repository underpinning the AI system: curated and structured marketing content — brand guidelines, campaign assets, SOPs, product information, and presentations — ensuring accuracy and currency across global markets.
- Owned the change management and capability-building program: provided hands-on training and support to team members on AI tools, validated AI response accuracy against real user queries, led onboarding across regions, and tracked adoption metrics through to full rollout — ensuring the AI capability was embedded into daily workflows, not just deployed.

**Senior Technical Project Manager** | General Electric Healthcare | Sept 2023 – May 2025
- Led AI and technology Innovation Roadmap across GE Healthcare's Service and Commercial Business Groups — 20 countries across Asia, Africa, Latin America, New Zealand, Australia, Europe, the UK, and the Middle East. Built the cross-functional program infrastructure that made first-time deployments land: process alignment, stakeholder coordination, user adoption, and change management at international scale.
- Led end-to-end system deployment: global business process alignment, system ideation, technical development, user adoption preparation, and launch across the Service and Commercial Business Groups.
- Projects: CRM, ServiceMax – Salesforce, iCenter, Service Board, Enterprise System Migration, AI/ML Service Renewal Automation, Data Migration and Governance.
- Awards: The Five Heartbeats Award in the category of "Deliver the Future of Healthcare" 2025

**Sabbatical Leave** | Caregiving | May 2023 – Aug 2023
- Caregiving sabbatical to attend to my father's well-being following a significant cardiac event.

**Digital Transformation Manager (AI/ML)** | Philip Morris International | Jan 2023 – April 2023
- Led the ideation, development, and execution of 2 AI products that transformed core business processes — managing full program lifecycle from deployment through user adoption and product iteration:
  - Chatbot-Order Taking Automation: 10k merchants onboarded and 250bio revenue in 3 months.
  - Call-bot Order Taking Automation: 2k merchants onboarded and 20bio revenue in 3 months.
- Organised and managed the framework and roadmap for Datalake, Data Governance, and User Governance for finance and reporting: established policies and standards for data integrity, security, and data handling.

**AI/ML and Analytics - Senior Product Manager** | Alodokter | Jan 2022 – 2023
- Led the AI/ML roadmap for a digital health platform — driving the ideation, development, and execution of AI use cases that automated and improved core processes, coordinating 6 engineers and 2 data scientists across 6 AI/ML products in production (including AI Chatbot scaling to 1M users/month, Recommender Systems, and Feeds Recommender using Collaborative Filtering and Hybrid LightFM).
- Used data analysis and A/B testing to generate actionable insights that informed product strategy and business decisions; led ETL Migration, Data Governance, and Kubernetes-based DevOps migration.

**Adjunct Lecturer - Data Analytics** | Binus (Bina Nusantara) University | June 2021 – June 2022
- Designed curriculum and taught undergraduate students on Technical Project Management, Data Analytics, Data Governance, ETL, Design Thinking, and Data Visualization — applying adult learning principles to build genuine AI and data literacy, not just awareness.

**Project Manager – Log Stream** | LinkAja – Tech Group | 2020 – 2021
- Managed cross-functional Agile program for Data Pipeline/Log Stream deployment across Fraud, Marketing, Operations, and Finance groups; reported to CTO on data governance, quality, and milestone accountability.
- Delivered: Fraud Alert Monitoring, DevOps Log Monitoring, Marketing Automation, eKYC Process Automation, and Finance Reporting.

**Senior Data Analyst** | LinkAja / GOJEK | 2019 – 2022
- Led AI automation projects: eKYC identity verification automation (80% process automated), RFM-based user segmentation, and Fraud Detection system preventing ~$5M USD in losses (GOJEK).
- Governed data quality and analytics infrastructure across growth, retention, and revenue functions using MixPanel, Braze, SQL/BigQuery.

### PROJECTS

**Prior Auth Auto-Assembler** | Personal | 2025
- Built an agentic AI system end-to-end: designed the use case, built AI agent logic with payer-specific rules validation (Medicare, MA plans), and delivered production-ready automation for prior authorisation packet assembly. Stack: HTML/JS, LLM.

**ColpoAI — AI Cervical Cancer Detection** | Personal / University of Limpopo | 2025
- Built AI clinical decision support tool for cervical lesion detection with 4-class classification output and transparent explainability layer. Affiliated with formal research study; funded by SAfAIDS and ASCCP. Stack: HTML/JS, GenAI.

**VibesCheck — Relationship Health Analyser** | Personal Research | 2025
- Designed a 13-step LLM pipeline analysing communication data across 28 dimensions and 13 interpersonal traits — producing a scored output with confidence intervals and relationship stage prediction.

### SKILLS

**AI Program Management & P&C Process Transformation** | | Advanced
- Proven track record designing and running AI programs from use case ideation through deployment, adoption, and sustained change across multiple industries.
**AI Use Case Ideation, Development & Execution** | | Advanced
- Independently ideated, built, and shipped AI/ML products in healthcare, fintech, and consumer technology contexts.
**Change Management, User Adoption & Organisational Enablement** | | Advanced
- Delivered hands-on training, onboarding programs, and adoption tracking across thousands of users at J&J, PMI, GE Healthcare, and Alodokter.
**Agentic AI & LLM System Design** | | Advanced
- Independently built and deployed agentic AI systems; hands-on with Microsoft Copilot, ChatGPT, Claude, and Gemini.
**Data Analysis & Stakeholder Communication** | | Advanced
- End-to-end data analysis for business decisions; presenting insights and program outcomes to senior leadership.
**Python** | | Intermediate
**SQL – BigQuery** | | Advanced

### CERTIFICATIONS

**Computational Thinking** | University of Pennsylvania | 2019
**Data Science Math Skills** | Duke University | 2019
**Computer Science 101** | Stanford University | 2016 – 2018`
  }
];

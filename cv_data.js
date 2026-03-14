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
## https://id.linkedin.com/in/silviatariganadinda // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford University School of Medicine | School of Medicine
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 4.018/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EMPLOYMENT

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

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – December 2015
- Conducted research and assessment in Garment Industry to analyze the current condition of Labor in Indonesia from selected companies in Indonesia Worker Survey (Java).
- Prepared annual report with Better Work Indonesia and Tuft University for Key Development Partners: Governments and Sponsors.

### COURSES (ONLINE) & CERTIFICATION

**Computational Thinking** | University of Pennsylvania | November 2019
- Applied the pillars of computational thinking, developed and analyzed algorithms, and how solutions can be realized on a computer using the Python programming language.

**Computer Science 101** | Stanford University | April 2016 – July 2018
- Performed the understanding and practical application of basic coding.

**Statistics** | IBM | July 2018
- Demonstrates an understanding of descriptive statistics, normal distribution, standard deviation, variance, correlation, and best practices for data visualization.

**Data Science Foundations** | IBM | July 2018
- Demonstrated an understanding of the possibilities and opportunities that data science, analytics and big data bring to new applications in any industry.

**Big Data Foundation** | IBM | July 2018
- Demonstrated an understanding of how Big Data should be processed in a platform that can handle the variety, velocity, and the volume of data by using components that require integration and data governance.

**Data Science Math Skills** | Duke University | September 2019
- Applied basic math skills for Data Science such as: set theory, graphing and describing functions and their inverses on the x-y plane, rate of change and tangent lines to a curve, exponents, logarithms, and the natural log function, probability theory, including Bayes' theorem.

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
- Experienced in application tracking, metrics creation, events and attributes creation for various features and products.`
  },
  {
    key:       "x",
    label:     "X \u2013 Program Manager, Early Stage",
    company:   "X",
    role:      "Program Manager, Early Stage",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford University School of Medicine | School of Medicine
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 4.018/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EMPLOYMENT

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

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – December 2015
- Conducted research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### COURSES (ONLINE) & CERTIFICATION

**Computational Thinking** | University of Pennsylvania | November 2019
**Computer Science 101** | Stanford University | April 2016 – July 2018
**Data Science Foundations** | IBM | July 2018
**Big Data Foundation** | IBM | July 2018
**Data Science Math Skills** | Duke University | September 2019

### SKILLS

**Program Management & 0-to-1 Execution** | | Advanced
**Strategic Partnership & Stakeholder Management** | | Advanced
**AI/ML Product & Program Management** | | Advanced
**Systems Design & Process Automation** | | Advanced
**Metrics Definition & Performance Tracking** | | Advanced
**Agile Methodology & Roadmap Planning** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Jira / Asana / Project Management Tools** | | Advanced`
  },
  {
    key:       "ey",
    label:     "EY \u2013 Digital Grid Manager",
    company:   "EY",
    role:      "Digital Grid Manager",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford University School of Medicine | School of Medicine
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 4.018/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EMPLOYMENT

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

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – December 2015
- Conducted labor research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### COURSES (ONLINE) & CERTIFICATION

**Computational Thinking** | University of Pennsylvania | November 2019
**Computer Science 101** | Stanford University | April 2016 – July 2018
**Data Science Foundations** | IBM | July 2018
**Big Data Foundation** | IBM | July 2018
**Data Science Math Skills** | Duke University | September 2019

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
**Braze – Application Tracking** | | Advanced`
  },
  {
    key:       "jj",
    label:     "J&J \u2013 Sr. PM Robotics",
    company:   "Johnson & Johnson",
    role:      "Sr. PM Robotics",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford University School of Medicine | School of Medicine
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 4.018/4.00

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EMPLOYMENT

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

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – December 2015
- Conducted research and assessment in the Garment Industry; prepared annual reports for key development partners including governments and international sponsors.

### COURSES (ONLINE) & CERTIFICATION

**Computational Thinking** | University of Pennsylvania | November 2019
**Computer Science 101** | Stanford University | April 2016 – July 2018
**Data Science Foundations** | IBM | July 2018
**Big Data Foundation** | IBM | July 2018
**Data Science Math Skills** | Duke University | September 2019

### SKILLS

**R&D Program Management & Regulated Environments** | | Advanced
**Hybrid Agile Methodology & Milestone Tracking** | | Advanced
**Risk Assessment, Contingency Planning & Tradeoff Evaluation** | | Advanced
**Cross-Functional & Multi-Disciplinary Team Leadership** | | Advanced
**End-to-End Product & Technology Delivery** | | Advanced
**Medical Device & Healthcare Technology (GE Healthcare)** | | Advanced
**SQL – BigQuery** | | Advanced
**Python** | | Intermediate
**Jira / Agile Project Management Tools** | | Advanced`
  },
  {
    key:       "sh",
    label:     "Siemens Healthineers \u2013 Sr. Clinical Data Manager",
    company:   "Siemens Healthineers",
    role:      "Sr. Clinical Data Manager",
    jdUrl:     "",
    dateAdded: "2026-03-13",
    cv: `# SILVIA ADINDA
## https://id.linkedin.com/in/silviatariganadinda // 650 305 6683 // silviadindatarigan@gmail.com

### EDUCATION & HONORS

**Master in Medical Informatics** | Stanford University School of Medicine | School of Medicine
- Class of 2026 with Full Ride Scholarship by Indonesia Endowment Fund 2025-2026 GPA 4.018/4.00
- Coursework in clinical data standards, health information systems, regulatory frameworks, and medical data governance.

**Bachelor's in Management** | Universitas Indonesia | July 2018
- Full Ride Scholarship by Ministry of Education, Culture, and Technology
- The Most Outstanding/Potential Student: awarded for outstanding achievements of the Year 2015

### EMPLOYMENT

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

**Research Assistant** | United Nation – ILO Jakarta Office | Aug 2014 – December 2015
- Conducted data collection and survey management for the Indonesia Worker Survey in the Garment Industry (Java); prepared annual reports for key development partners including governments and international sponsors.

### COURSES (ONLINE) & CERTIFICATION

**Computational Thinking** | University of Pennsylvania | November 2019
**Computer Science 101** | Stanford University | April 2016 – July 2018
**Statistics** | IBM | July 2018
**Data Science Foundations** | IBM | July 2018
**Big Data Foundation** | IBM | July 2018
**Data Science Math Skills** | Duke University | September 2019

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
**Microsoft Office Suite** | | Advanced`
  }
];

// Raw <a> hrefs don't get Next's basePath automatically (GitHub Pages serves under /<repo>).
export const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Karim_Khalil_Resume.docx`;

export const site = {
  name: "Karim Khalil",
  title: "AI Engineer: Computer Vision, LLM Applications & AI Automation",
  location: "AlUla, Saudi Arabia",
  email: "kareemkhalil182@gmail.com",
  phone: "+966 53 721 3482",
  linkedin: "https://www.linkedin.com/in/karim-khalil-091830201/",
  github: "", // TODO: add GitHub profile URL
  url: "https://kareemkhalill.github.io/portfolio",
  tagline:
    "I build production AI systems in Saudi Arabia: real-time computer vision and LLM-powered automation that turn manual work into seconds.",
};

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: "Computer Vision" | "LLM & Automation" | "Full-Stack & AI Product";
  demoUrl?: string;
  oneLiner: string;
  problem: string;
  solution: string;
  architecture: { step: string; detail: string }[];
  challenges: string[];
  impact: string[];
  metrics: Metric[];
  stack: string[];
  driveVideoId?: string;
  simulated?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "clientflow-pro",
    name: "ClientFlow Pro",
    shortName: "ClientFlow Pro",
    category: "Full-Stack & AI Product",
    featured: true,
    demoUrl: "https://clientflow-pro-demo.onrender.com",
    oneLiner:
      "A bilingual (English/Arabic) self-hosted CRM, booking, quoting, and invoicing platform for service businesses, with an AI follow-up assistant, WhatsApp integration, a passwordless customer portal, and 222 automated tests.",
    problem:
      "Service businesses run their operation across disconnected tools: a CRM here, a booking calendar there, quotes in documents, invoices in spreadsheets, follow-ups in someone's head. Arabic-first businesses are doubly underserved: most affordable tools have no real RTL support. And subscription SaaS means their client data lives on someone else's servers.",
    solution:
      "I designed and built ClientFlow Pro end-to-end: one self-hosted platform covering the entire client lifecycle, from leads and pipeline to appointment booking with conflict prevention, quotes that convert to invoices with PDF export and token-secured public pages, payments tracking, tasks, support tickets, expenses, automations, and analytics. Fully localized in English and Arabic with true RTL layout. Optional AI (OpenAI/Anthropic) drafts follow-up messages from each client's history, and WhatsApp integration (Meta Cloud API) delivers bookings, quotes, and invoices where clients actually are, both dormant until the owner adds their own keys.",
    architecture: [
      { step: "Laravel 12 Monolith", detail: "PHP 8.4, Blade + Livewire 3 + Alpine.js reactive UI, Tailwind CSS, deployable on ordinary shared hosting via a self-locking browser install wizard." },
      { step: "Roles & Permissions", detail: "Owner / Manager / Staff / Accountant with staff-scoped data visibility (Spatie Permission), plus an opt-in audit log of who changed what." },
      { step: "Booking Engine", detail: "Staff availability, unavailable-date exceptions, double-booking prevention, drag-to-reschedule time-grid calendar, and a rate-limited public booking page." },
      { step: "Quotes → Invoices Lifecycle", detail: "Line items, proposal sections, PDF export, email delivery, typed-signature acceptance on token-gated public pages, one-click conversion, payment tracking with automatic status rollup." },
      { step: "Integrations Layer", detail: "WhatsApp (Meta Cloud API), AI follow-up drafting (OpenAI/Anthropic), SMTP: all off by default, secrets encrypted, failures logged without breaking the triggering flow." },
      { step: "Extensibility & Ops", detail: "Sanctum REST API, HMAC-signed webhooks, owner-defined automations, one-click backups, maintenance mode, system-health dashboard, verified by 222 PHPUnit tests." },
    ],
    challenges: [
      "True bilingual product: every screen works in English and Arabic with real RTL layout, not a bolted-on translation.",
      "A passwordless customer portal: signed, time-limited magic links give clients access to appointments, quotes, invoices, and documents with no password to leak.",
      "Integrations that fail safely: WhatsApp/AI/email calls are real HTTP integrations, but a send failure can never break the booking or invoice flow that triggered it.",
      "Shipping as a product, not a project: install wizard, buyer docs, demo seed data, packaging, and license activation for marketplace distribution.",
    ],
    impact: [
      "Replaces four or five separate SaaS subscriptions with one self-hosted install the business owns outright.",
      "AI-drafted follow-ups turn each client's pipeline status and history into a ready-to-review message, in the business's language.",
      "WhatsApp delivery meets clients on the channel Gulf businesses actually use.",
      "222 automated tests across every module make it safe to extend: engineering discipline most portfolio projects never show.",
    ],
    metrics: [
      { value: "222", label: "automated tests (PHPUnit)" },
      { value: "EN + AR", label: "full bilingual with true RTL" },
      { value: "v1.1", label: "packaged, documented release" },
    ],
    stack: ["Laravel 12", "PHP 8.4", "Livewire 3", "Alpine.js", "Tailwind CSS", "MySQL", "Sanctum", "DomPDF"],
  },
  {
    slug: "whatsapp-reporting-assistant",
    name: "AI-Powered WhatsApp Reporting Assistant",
    shortName: "WhatsApp AI Assistant",
    category: "LLM & Automation",
    featured: true,
    oneLiner:
      "An LLM-powered assistant that lets teams request operational reports in plain language over WhatsApp, and receive them in seconds instead of waiting on manual compilation.",
    problem:
      "Operational teams depend on recurring reports, but producing and distributing them is manual, repetitive work. Requests queue up, analysts context-switch, and decision-makers wait hours for data they need immediately, often while away from a desk.",
    solution:
      "I built an AI assistant that meets people where they already are: WhatsApp. Users send a plain-language request; an LLM interprets the intent, the automation layer generates the report, and the result is delivered back in the same chat. Built with OpenClaw and Replit with LLM capabilities integrated end-to-end.",
    architecture: [
      { step: "WhatsApp Gateway", detail: "Inbound messages are received and routed to the assistant." },
      { step: "LLM Intent Layer", detail: "A large language model interprets the request: what report, what scope, what format." },
      { step: "Automation Engine", detail: "OpenClaw workflows generate the requested report from operational data." },
      { step: "Delivery", detail: "The finished report is returned to the requester directly in WhatsApp." },
    ],
    challenges: [
      "Interpreting loosely-worded, real-world requests reliably enough to trigger the right workflow.",
      "Keeping the round trip fast enough to feel conversational rather than like a ticket queue.",
      "Making the system dependable enough that teams trust it over the manual process.",
    ],
    impact: [
      "Removes the manual report-generation loop entirely for supported reports.",
      "Gives non-technical stakeholders self-service access to operational data through a familiar interface.",
      "Frees analyst time for higher-value work instead of repetitive compilation.",
    ],
    metrics: [
      { value: "Seconds", label: "from request to delivered report" },
      { value: "24/7", label: "self-service availability" },
      { value: "Zero", label: "manual steps for supported reports" },
    ],
    stack: ["Python", "OpenClaw", "Replit", "LLM Integration", "WhatsApp", "Workflow Automation"],
    simulated: true,
  },
  {
    slug: "driver-inattention-monitoring",
    name: "Driver Inattention Monitoring System (DIMS)",
    shortName: "Driver Monitoring",
    category: "Computer Vision",
    featured: true,
    oneLiner:
      "Real-time in-cabin AI that detects driver fatigue and distraction before they become accidents.",
    problem:
      "Driver fatigue and distraction are leading causes of road accidents, and fleets have no visibility into driver state until after an incident. Human supervision doesn't scale to every vehicle, every minute.",
    solution:
      "I developed a real-time monitoring system that combines CNNs with facial landmark tracking to continuously read the driver's state, including eye closure, head pose, and attention, and flag fatigue or distraction the moment it appears. The pipeline is multi-threaded and optimized for continuous on-device processing.",
    architecture: [
      { step: "Video Capture", detail: "Continuous in-cabin camera stream." },
      { step: "Face & Landmark Detection", detail: "Dlib facial landmark tracking locates eyes, mouth, and head pose per frame." },
      { step: "CNN State Classifier", detail: "A convolutional network classifies fatigue and distraction signals." },
      { step: "Multi-threaded Inference", detail: "Parallelized processing keeps detection real-time on continuous video." },
      { step: "Alerting", detail: "Inattention events trigger immediate alerts." },
    ],
    challenges: [
      "Sustaining real-time performance on a continuous video stream, solved with a multi-threaded inference pipeline.",
      "Distinguishing genuine fatigue signals (sustained eye closure, head droop) from normal blinking and glances.",
    ],
    impact: [
      "Enables proactive safety intervention instead of post-incident review.",
      "Scales driver supervision across a fleet without added headcount.",
    ],
    metrics: [
      { value: "~20%", label: "faster detection responsiveness after optimization" },
      { value: "Real-time", label: "continuous in-cabin inference" },
    ],
    stack: ["Python", "PyTorch", "OpenCV", "Dlib", "Multi-threading", "NumPy"],
    driveVideoId: "1S-tPYAkL5Ikeus1xdNrYLuKpkVzK1Kyk",
  },
  {
    slug: "ppe-compliance-detection",
    name: "PPE Compliance Detection System",
    shortName: "PPE Compliance",
    category: "Computer Vision",
    featured: true,
    oneLiner:
      "YOLOv8-based monitoring that automatically verifies protective-equipment compliance on industrial sites, cutting manual monitoring by ~30%.",
    problem:
      "Industrial sites are required to enforce PPE compliance (helmets, vests, protective gear), but enforcement relies on safety officers physically watching workers or reviewing footage: slow, expensive, and full of blind spots.",
    solution:
      "I implemented YOLOv8 object-detection models trained and validated on custom datasets to monitor PPE compliance directly from site cameras. The system continuously checks live video for missing protective equipment and surfaces violations as they happen.",
    architecture: [
      { step: "Site Camera Streams", detail: "Live video from industrial environments." },
      { step: "YOLOv8 Detection", detail: "Custom-trained models detect workers and individual PPE items per frame." },
      { step: "Compliance Logic", detail: "Person-equipment association determines who is and isn't compliant." },
      { step: "Violation Alerts", detail: "Non-compliance events are flagged for safety teams in real time." },
    ],
    challenges: [
      "Building and labeling custom datasets that reflect real site conditions: angles, occlusion, lighting.",
      "Validating model performance rigorously enough to trust it as a compliance signal.",
    ],
    impact: [
      "Reduced manual monitoring workload by approximately 30%.",
      "Turns PPE enforcement from spot-checks into continuous, camera-wide coverage.",
      "Creates an auditable safety-compliance record for site management.",
    ],
    metrics: [
      { value: "~30%", label: "reduction in manual monitoring" },
      { value: "Custom", label: "datasets trained & validated" },
      { value: "Live", label: "continuous compliance checking" },
    ],
    stack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "LabelImg"],
    driveVideoId: "1plA7H74tuz4CIt7p-V5DJ_ZywWko-SsJ",
  },
  {
    slug: "restricted-area-intrusion-detection",
    name: "Restricted Area Intrusion Detection System",
    shortName: "Intrusion Detection",
    category: "Computer Vision",
    featured: true,
    oneLiner:
      "An AI security layer for factory surveillance that detects intrusions into restricted zones and alerts in real time, improving response time by ~25%.",
    problem:
      "Factories and secure facilities rely on guards watching camera walls to catch intrusions into restricted areas. Attention fades, incidents get missed, and response starts only after someone happens to notice.",
    solution:
      "I developed an AI security system combining YOLOv8 object detection with motion analysis to watch restricted zones continuously. When a person enters a protected area, the system generates an immediate alert with visual overlays showing exactly where and what was detected.",
    architecture: [
      { step: "Surveillance Feeds", detail: "Live camera streams covering restricted zones." },
      { step: "Detection + Motion Analysis", detail: "YOLOv8 detection fused with motion analysis to identify genuine intrusions." },
      { step: "Zone Logic", detail: "Configurable restricted-area boundaries evaluated per frame." },
      { step: "Real-time Alerts", detail: "Flask-served alerts with visual overlays for security teams." },
    ],
    challenges: [
      "Suppressing false triggers from motion that isn't an intrusion (shadows, machinery, authorized paths).",
      "Rendering alert overlays fast enough that security teams see incidents as they unfold.",
    ],
    impact: [
      "Improved incident response time by approximately 25%.",
      "Converts passive camera coverage into an active, always-on security layer.",
    ],
    metrics: [
      { value: "~25%", label: "faster incident response" },
      { value: "24/7", label: "automated zone monitoring" },
    ],
    stack: ["Python", "OpenCV", "YOLOv8", "NumPy", "Flask"],
    driveVideoId: "12M2V0AGHN-YQ-ElcuuPmdAj8UctHeBg4",
  },
  {
    slug: "people-detection-counting",
    name: "Restricted Area People Detection & Counting System",
    shortName: "People Counting",
    category: "Computer Vision",
    oneLiner:
      "Computer-vision system that detects and counts people inside restricted areas, giving operations teams live occupancy awareness.",
    problem:
      "Knowing how many people are inside a restricted or capacity-limited area matters for safety, security, and compliance, but manual headcounts are unreliable and impossible to maintain continuously.",
    solution:
      "I built a detection-and-counting system that identifies people in restricted zones from live video and maintains an accurate count over time, giving operators continuous occupancy visibility without manual checks.",
    architecture: [
      { step: "Camera Streams", detail: "Live video covering the monitored area." },
      { step: "Person Detection", detail: "Object-detection models locate every person per frame." },
      { step: "Counting Logic", detail: "Zone-aware counting maintains a live occupancy figure." },
      { step: "Operator View", detail: "Counts and detections rendered as live visual overlays." },
    ],
    challenges: [
      "Keeping counts stable when people overlap, enter, and exit the frame.",
      "Defining zone boundaries that match real operational areas.",
    ],
    impact: [
      "Continuous occupancy awareness for safety and capacity compliance.",
      "Removes the need for manual headcounts in monitored zones.",
    ],
    metrics: [
      { value: "Live", label: "occupancy counting" },
      { value: "Zone-aware", label: "restricted-area logic" },
    ],
    stack: ["Python", "OpenCV", "Object Detection", "NumPy"],
    driveVideoId: "1aJ2JZnSe37kNoiXQk0MFxts8G3FhLVsS",
  },
  {
    slug: "human-activity-detection",
    name: "Human Activity Detection System",
    shortName: "Activity Detection",
    category: "Computer Vision",
    oneLiner:
      "Activity-recognition models built on temporal video for elderly safety and posture monitoring, with real-time inference for continuous alerting.",
    problem:
      "Elderly individuals living or being cared for alone face risks such as falls, abnormal posture, and inactivity that go unnoticed without constant human observation, which is impractical and intrusive.",
    solution:
      "I built activity-recognition models using transfer learning on temporal video data to understand what a person is doing over time, not just in a single frame. The system runs real-time inference suitable for continuous surveillance and triggers alerts on safety-relevant activity patterns.",
    architecture: [
      { step: "Temporal Video Input", detail: "Sequences of frames capture movement over time." },
      { step: "Transfer-Learning Backbone", detail: "Pretrained networks fine-tuned for activity classes." },
      { step: "Activity Classification", detail: "TensorFlow/Keras models recognize posture and activity patterns." },
      { step: "Continuous Alerting", detail: "Real-time inference feeds an alerting loop for caregivers." },
    ],
    challenges: [
      "Modeling activities across time rather than single frames, since motion context is the signal.",
      "Achieving real-time inference speeds compatible with continuous monitoring.",
    ],
    impact: [
      "Enables non-intrusive, continuous safety monitoring for vulnerable individuals.",
      "Alerts caregivers to posture and activity anomalies without requiring constant observation.",
    ],
    metrics: [
      { value: "Real-time", label: "continuous inference" },
      { value: "Temporal", label: "video-sequence modeling" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn"],
    driveVideoId: "1E5qC72P_uiTMVxvM5qlE-LFISMfvXAnd",
  },
  {
    slug: "fire-smoke-detection",
    name: "Fire & Smoke Detection System",
    shortName: "Fire & Smoke Detection",
    category: "Computer Vision",
    oneLiner:
      "A CNN-based early-warning classifier that spots fire and smoke across varied environments, optimized for low-latency smart-surveillance deployment.",
    problem:
      "Conventional fire detection reacts to heat and smoke reaching a physical sensor, by which time a fire is established. Cameras see fire far earlier, but only if something is watching them intelligently.",
    solution:
      "I engineered a CNN-based classifier that detects fire and smoke visually across varied environments and lighting conditions, and optimized it for low-latency deployment inside smart surveillance pipelines, turning existing cameras into early-warning fire sensors.",
    architecture: [
      { step: "Surveillance Input", detail: "Frames from existing camera infrastructure." },
      { step: "CNN Classifier", detail: "TensorFlow/Keras network trained to recognize fire and smoke signatures." },
      { step: "Low-latency Pipeline", detail: "Optimized inference path for early-warning speed." },
      { step: "Alert Output", detail: "Detections feed surveillance alerting systems." },
    ],
    challenges: [
      "Generalizing across environments (indoor, outdoor, day, night) without false alarms from fire-like visuals.",
      "Squeezing inference latency low enough for genuine early warning.",
    ],
    impact: [
      "Earlier fire detection than sensor-based systems, using cameras already in place.",
      "Low-latency design fits real surveillance deployments, not just lab conditions.",
    ],
    metrics: [
      { value: "Early", label: "visual detection before sensor triggers" },
      { value: "Low-latency", label: "optimized deployment pipeline" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Pandas", "NumPy"],
    driveVideoId: "1PGT0SvGFI0hYbmnhQ8Gz2_UIoVF2XES8",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  mode: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Platfarm | Royal Commission for AlUla (RCU)",
    role: "Platform Operation & Data Analyst",
    period: "Jun 2026 - Present",
    location: "AlUla, Saudi Arabia",
    mode: "On-site",
    bullets: [
      "Build AI applications and automated workflows using Python, Replit, OpenClaw, and LLM technologies.",
      "Manage platform operations, ensuring data accuracy and system reliability for a Royal Commission platform.",
      "Validate dashboards and reports to guarantee data quality and consistency for decision-makers.",
      "Work directly with stakeholders to gather requirements and improve business processes.",
    ],
  },
  {
    company: "Nasam Technology",
    role: "AI Engineer",
    period: "May 2025 - Apr 2026",
    location: "Raidah, Saudi Arabia",
    mode: "Remote",
    bullets: [
      "Delivered production-ready computer vision and geospatial AI models, cutting manual analysis time and enabling real-time internal decision-making.",
      "Developed an oil spill detection solution using deep learning and satellite/aerial imagery to support environmental monitoring and rapid incident detection.",
      "Built NDVI (Normalized Difference Vegetation Index) analysis workflows to assess crop health, vegetation stress, and agricultural conditions from remote sensing data.",
    ],
  },
  {
    company: "Omni Clouds",
    role: "AI Engineer",
    period: "Jul 2024 - Feb 2025",
    location: "Dubai, UAE",
    mode: "Remote",
    bullets: [
      "Developed and deployed computer-vision models for real-time video monitoring, containerized with Docker for production.",
      "Implemented YOLO-based object-detection pipelines for live streams, reducing false alerts by ~20%.",
      "Integrated AI models into internal systems alongside software engineers for continuous real-time inference.",
    ],
  },
];

export const capabilities = [
  {
    title: "LLM Applications & AI Agents",
    description:
      "Assistants and agents that automate real workflows, from report generation to data access and operational tasks, built with LLM integrations, OpenClaw, and Python.",
  },
  {
    title: "Computer Vision Systems",
    description:
      "Production YOLOv8 and CNN pipelines for safety, security, and monitoring: PPE compliance, intrusion detection, fire detection, driver monitoring.",
  },
  {
    title: "AI-Powered APIs",
    description:
      "FastAPI services that expose real-time model inference to internal systems: tested, validated, and containerized with Docker.",
  },
  {
    title: "WhatsApp AI Solutions",
    description:
      "AI delivered where teams already work: conversational assistants that take requests and return results inside WhatsApp.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automation that removes repetitive manual work, from report compilation to data validation, using Python and LLM-driven workflows.",
  },
  {
    title: "Data & BI Reliability",
    description:
      "Dashboard validation, data quality assurance, and business-process improvement that make analytics trustworthy for decision-makers.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "AI & Generative AI",
    items: [
      "Large Language Models (LLMs)",
      "AI Agents",
      "Prompt Engineering",
      "LangChain",
      "RAG Concepts",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    group: "Programming & APIs",
    items: ["Python", "SQL", "FastAPI", "REST APIs", "Postman"],
  },
  {
    group: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow", "Keras", "YOLOv8", "OpenCV", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    group: "Data & Analytics",
    items: ["Data Analysis", "Data Validation", "Business Intelligence", "Dashboard Validation", "Data Visualization"],
  },
  {
    group: "Tools & Platforms",
    items: ["Docker", "Git", "GitHub", "OpenClaw", "Replit"],
  },
];

export const certifications = [
  { name: "AI For Everyone", issuer: "Coursera" },
  { name: "Data Analysis", issuer: "egFWD" },
  { name: "Competitive Programming Level 1", issuer: "Coach Academy EG" },
  { name: "GIS Professional", issuer: "NARSS" },
  { name: "Communication Skills", issuer: "Canadian International College" },
];

export const education = {
  degree: "B.Sc. Computer Science",
  school: "Canadian International College (CIC)",
  year: "2024",
};

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
  tagline: "Computer vision and LLM systems. Built, deployed, running.",
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
      "Bilingual CRM, booking, and invoicing platform. Self-hosted, AI follow-ups, 222 tests.",
    problem:
      "Service businesses run their operation across tools that don't talk to each other: a CRM here, a booking calendar there, quotes in documents, invoices in spreadsheets, follow-ups tracked in someone's memory. Arabic-first businesses have it worse: most affordable software treats right-to-left layout as an afterthought. And subscription SaaS means the business's own client data lives on someone else's servers.",
    solution:
      "I designed and built ClientFlow Pro end-to-end: a single self-hosted platform covering the whole client lifecycle, from leads and pipeline through appointment booking with conflict prevention, to quotes that convert into invoices with PDF export and token-secured public pages, payments, tasks, support tickets, expenses, automations, and analytics. Every screen works in English and Arabic with genuine right-to-left layout, not a translated skin. An optional AI layer (OpenAI or Anthropic) drafts follow-up messages from a client's history, and a WhatsApp integration delivers bookings, quotes, and invoices straight to the client's phone. Both stay dormant until the business owner supplies their own API keys.",
    architecture: [
      { step: "Laravel 12 Monolith", detail: "PHP 8.4, Blade with Livewire 3 and Alpine.js for the reactive UI, Tailwind CSS throughout, deployable on ordinary shared hosting via a self-locking browser install wizard." },
      { step: "Roles & Permissions", detail: "Owner, Manager, Staff, and Accountant roles with staff-scoped data visibility (Spatie Permission), plus an opt-in audit log of who changed what and when." },
      { step: "Booking Engine", detail: "Staff availability, unavailable-date exceptions, double-booking prevention, a drag-to-reschedule time-grid calendar, and a rate-limited public booking page." },
      { step: "Quotes to Invoices Lifecycle", detail: "Line items, proposal sections, PDF export, email delivery, typed-signature acceptance on token-gated public pages, one-click conversion, and payment tracking with automatic status rollup." },
      { step: "Integrations Layer", detail: "WhatsApp via Meta's Cloud API, AI follow-up drafting through OpenAI or Anthropic, and SMTP, all off by default, secrets encrypted, failures logged without breaking the flow that triggered them." },
      { step: "Extensibility & Ops", detail: "A Sanctum REST API, HMAC-signed webhooks, owner-defined automations, one-click backups, maintenance mode, and a system-health dashboard, all verified by 222 PHPUnit tests." },
    ],
    challenges: [
      "Building a genuinely bilingual product: every screen works in English and Arabic with real right-to-left layout, not a bolted-on translation.",
      "Designing a passwordless customer portal where signed, time-limited magic links give clients access to appointments, quotes, invoices, and documents with nothing to leak.",
      "Making third-party integrations fail safely: WhatsApp, AI, and email calls are real HTTP integrations, but a failed send can never break the booking or invoice flow that triggered it.",
      "Shipping it as a product rather than a project: an install wizard, buyer documentation, demo seed data, packaging, and license activation built for marketplace distribution.",
    ],
    impact: [
      "Replaces four or five separate SaaS subscriptions with one self-hosted install the business owns outright.",
      "Turns each client's pipeline status and history into a ready-to-review follow-up message, drafted in the business's own language.",
      "Delivers bookings, quotes, and invoices over WhatsApp, the channel Gulf businesses actually use.",
      "222 automated tests across every module make the codebase safe to extend, the kind of engineering discipline most portfolio projects skip.",
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
      "Ask for a report on WhatsApp. Get it back in seconds.",
    problem:
      "Operational teams depend on recurring reports, but producing and distributing them is manual, repetitive work. Requests queue up, analysts get pulled off other work to compile them, and decision-makers wait hours for numbers they need right now, often while they're away from a desk entirely.",
    solution:
      "I built an AI assistant that meets people where they already are: WhatsApp. A user sends a plain-language request, an LLM interprets the intent, an automation layer generates the report, and the result lands back in the same chat thread. Built with OpenClaw and Replit, with LLM reasoning wired in end to end.",
    architecture: [
      { step: "WhatsApp Gateway", detail: "Inbound messages are received and routed to the assistant." },
      { step: "LLM Intent Layer", detail: "A large language model interprets the request: which report, what scope, what format." },
      { step: "Automation Engine", detail: "OpenClaw workflows generate the requested report from live operational data." },
      { step: "Delivery", detail: "The finished report lands back with the requester, directly inside WhatsApp." },
    ],
    challenges: [
      "Interpreting loosely worded, real-world requests reliably enough to trigger the correct workflow every time.",
      "Keeping the round trip fast enough to feel like a conversation, not a support ticket.",
      "Earning enough trust that teams choose the assistant over the manual process out of habit.",
    ],
    impact: [
      "Removes the manual report-generation loop entirely for every supported report type.",
      "Gives non-technical stakeholders self-service access to operational data through an interface they already use daily.",
      "Frees analyst time for work that actually needs a person, instead of repetitive compilation.",
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
      "Catches driver fatigue and distraction before the accident, not after.",
    problem:
      "Driver fatigue and distraction rank among the leading causes of road accidents, yet fleets have no visibility into a driver's state until after something has already gone wrong. Human supervision simply doesn't scale to every vehicle, every minute of every shift.",
    solution:
      "I built a real-time monitoring system that pairs CNNs with facial landmark tracking to read a driver's state continuously: eye closure, head pose, attention, and flags fatigue or distraction the moment it appears. The pipeline runs multi-threaded and is tuned for continuous on-device processing.",
    architecture: [
      { step: "Video Capture", detail: "A continuous in-cabin camera stream feeds the pipeline." },
      { step: "Face & Landmark Detection", detail: "Dlib facial landmark tracking locates eyes, mouth, and head pose on every frame." },
      { step: "CNN State Classifier", detail: "A convolutional network classifies fatigue and distraction signals frame by frame." },
      { step: "Multi-threaded Inference", detail: "Parallelized processing keeps detection real time on continuous video." },
      { step: "Alerting", detail: "Inattention events trigger an alert the instant they're detected." },
    ],
    challenges: [
      "Sustaining real-time performance on a continuous video stream, solved with a multi-threaded inference pipeline.",
      "Telling genuine fatigue signals (sustained eye closure, head droop) apart from ordinary blinking and glancing away.",
    ],
    impact: [
      "Turns safety response from reactive post-incident review into proactive intervention.",
      "Scales driver supervision across an entire fleet without adding headcount.",
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
      "YOLOv8 checks PPE compliance on site. 30% less manual monitoring.",
    problem:
      "Industrial sites are required to enforce PPE compliance, helmets, vests, protective gear, but enforcement usually falls on safety officers physically watching workers or scrubbing through footage after the fact. That's slow, expensive, and leaves plenty of blind spots.",
    solution:
      "I implemented YOLOv8 object-detection models, trained and validated on custom datasets, to monitor PPE compliance directly from site cameras. The system checks live video continuously for missing protective equipment and surfaces violations the moment they happen.",
    architecture: [
      { step: "Site Camera Streams", detail: "Live video feeds from across the industrial environment." },
      { step: "YOLOv8 Detection", detail: "Custom-trained models detect workers and individual PPE items in every frame." },
      { step: "Compliance Logic", detail: "Person-to-equipment association determines who is and isn't compliant." },
      { step: "Violation Alerts", detail: "Non-compliance events are flagged for safety teams in real time." },
    ],
    challenges: [
      "Building and labeling custom datasets that reflect real site conditions: awkward angles, occlusion, and inconsistent lighting.",
      "Validating model performance rigorously enough that it can be trusted as a genuine compliance signal.",
    ],
    impact: [
      "Cut manual monitoring workload by roughly 30%.",
      "Turned PPE enforcement from occasional spot-checks into continuous, camera-wide coverage.",
      "Creates an auditable safety-compliance record site management can actually rely on.",
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
      "Flags intrusions into restricted zones instantly. 25% faster response.",
    problem:
      "Factories and secure facilities rely on guards watching walls of camera feeds to catch intrusions into restricted areas. Attention fades over a long shift, incidents slip through, and response only starts once someone happens to notice.",
    solution:
      "I built an AI security system that fuses YOLOv8 object detection with motion analysis to watch restricted zones around the clock. The moment a person enters a protected area, the system fires an immediate alert with visual overlays showing exactly where and what was detected.",
    architecture: [
      { step: "Surveillance Feeds", detail: "Live camera streams covering every restricted zone." },
      { step: "Detection + Motion Analysis", detail: "YOLOv8 detection fused with motion analysis to confirm genuine intrusions and filter out noise." },
      { step: "Zone Logic", detail: "Configurable restricted-area boundaries evaluated on every frame." },
      { step: "Real-time Alerts", detail: "Flask-served alerts with visual overlays reach security teams instantly." },
    ],
    challenges: [
      "Suppressing false triggers from motion that isn't an intrusion: shadows, machinery, authorized foot traffic.",
      "Rendering alert overlays fast enough that security teams see incidents as they're still unfolding.",
    ],
    impact: [
      "Cut incident response time by roughly 25%.",
      "Converted passive camera coverage into an active, always-on security layer.",
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
      "Live headcount inside restricted zones. No manual counting.",
    problem:
      "Knowing exactly how many people are inside a restricted or capacity-limited area matters for safety, security, and compliance, but manual headcounts are unreliable and impossible to keep up continuously.",
    solution:
      "I built a detection-and-counting system that identifies people in restricted zones from live video and maintains an accurate running count, giving operators continuous occupancy visibility without a single manual check.",
    architecture: [
      { step: "Camera Streams", detail: "Live video covering the monitored area." },
      { step: "Person Detection", detail: "Object-detection models locate every person in every frame." },
      { step: "Counting Logic", detail: "Zone-aware counting maintains a live, accurate occupancy figure." },
      { step: "Operator View", detail: "Counts and detections render as live visual overlays for operators." },
    ],
    challenges: [
      "Keeping counts stable as people overlap, enter, and exit the frame in quick succession.",
      "Defining zone boundaries that actually match the real operational areas on the ground.",
    ],
    impact: [
      "Gives safety and capacity compliance continuous occupancy awareness, not a snapshot.",
      "Removes the need for manual headcounts in monitored zones entirely.",
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
      "Reads activity over time for elderly safety and posture alerts.",
    problem:
      "Elderly individuals living or cared for alone face risks like falls, abnormal posture, and prolonged inactivity that go unnoticed without constant human observation, which is both impractical and intrusive to provide.",
    solution:
      "I built activity-recognition models using transfer learning on temporal video data to understand what a person is doing over time, not just what a single frame shows. The system runs real-time inference suitable for continuous surveillance and triggers alerts on safety-relevant activity patterns.",
    architecture: [
      { step: "Temporal Video Input", detail: "Sequences of frames capture movement as it unfolds over time." },
      { step: "Transfer-Learning Backbone", detail: "Pretrained networks fine-tuned specifically for activity classes." },
      { step: "Activity Classification", detail: "TensorFlow and Keras models recognize posture and activity patterns." },
      { step: "Continuous Alerting", detail: "Real-time inference feeds a live alerting loop for caregivers." },
    ],
    challenges: [
      "Modeling activity across time rather than single frames, since motion context carries the actual signal.",
      "Hitting real-time inference speeds compatible with genuinely continuous monitoring.",
    ],
    impact: [
      "Delivers non-intrusive, continuous safety monitoring for people who need it but shouldn't feel watched.",
      "Alerts caregivers to posture and activity anomalies without requiring constant manual observation.",
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
      "Spots fire and smoke on camera, long before a sensor trips.",
    problem:
      "Conventional fire detection reacts only once heat or smoke physically reaches a sensor, by which point the fire is already established. Cameras can see fire far earlier than that, but only if something is watching them intelligently.",
    solution:
      "I engineered a CNN-based classifier that visually detects fire and smoke across varied environments and lighting conditions, then optimized it for low-latency deployment inside smart surveillance pipelines, turning cameras already on site into early-warning fire sensors.",
    architecture: [
      { step: "Surveillance Input", detail: "Frames pulled from existing camera infrastructure, no new hardware required." },
      { step: "CNN Classifier", detail: "A TensorFlow/Keras network trained to recognize fire and smoke signatures." },
      { step: "Low-latency Pipeline", detail: "An inference path optimized specifically for early-warning speed." },
      { step: "Alert Output", detail: "Detections feed directly into existing surveillance alerting systems." },
    ],
    challenges: [
      "Generalizing across environments (indoor, outdoor, day, night) without triggering false alarms on fire-like visuals.",
      "Squeezing inference latency down far enough to deliver a genuine early warning.",
    ],
    impact: [
      "Detects fire earlier than sensor-based systems, using cameras that are already in place.",
      "A low-latency design that fits real surveillance deployments, not just lab conditions.",
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
      "Manage platform operations, keeping data accurate and systems reliable for a Royal Commission platform.",
      "Validate dashboards and reports so decision-makers can trust the data behind every call they make.",
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
      "Developed an oil spill detection solution using deep learning and satellite and aerial imagery for environmental monitoring and rapid incident detection.",
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
      "Implemented YOLO-based object-detection pipelines for live streams, cutting false alerts by roughly 20%.",
      "Integrated AI models into internal systems alongside software engineers to keep real-time inference stable in production.",
    ],
  },
];

export const capabilities = [
  {
    title: "LLM Applications & AI Agents",
    description: "Assistants that run real workflows, not chat demos.",
  },
  {
    title: "Computer Vision Systems",
    description: "YOLOv8 and CNN pipelines on live video, in production.",
  },
  {
    title: "AI-Powered APIs",
    description: "FastAPI inference services, tested and containerized.",
  },
  {
    title: "WhatsApp AI Solutions",
    description: "AI delivered where teams already work.",
  },
  {
    title: "Workflow Automation",
    description: "Manual work removed, from reporting to validation.",
  },
  {
    title: "Data & BI Reliability",
    description: "Dashboards decision-makers can trust.",
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

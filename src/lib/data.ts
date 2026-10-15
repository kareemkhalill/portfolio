// Raw <a> hrefs don't get Next's basePath automatically (GitHub Pages serves under /<repo>).
export const resumeHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/Karim_Khalil_CV.pdf`;

export const site = {
  name: "Karim Khalil",
  title: "AI Engineer: LLM Applications, AI Automation & Full-Stack Products",
  location: "AlUla, Saudi Arabia",
  email: "kareemkhalil182@gmail.com",
  phone: "+966 53 721 3482",
  linkedin: "https://www.linkedin.com/in/karim-khalil-091830201/",
  github: "", // TODO: add GitHub profile URL
  url: "https://kareemkhalill.github.io/portfolio",
  tagline: "LLM apps, automation, and full-stack AI products. Built, deployed, running.",
};

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: "Computer Vision" | "LLM & Automation";
  demoUrl?: string;
  repoUrl?: string;
  embedDemo?: boolean;
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
    slug: "date-palm-detection",
    name: "Date Palm Detection & Counting (YOLO26)",
    shortName: "Date Palm AI",
    category: "Computer Vision",
    featured: true,
    demoUrl: "https://kareemkhalill.github.io/date-palm-ai/",
    repoUrl: "https://github.com/kareemkhalill/date-palm-ai",
    embedDemo: true,
    oneLiner:
      "Custom-trained YOLO26 counts every date palm in aerial imagery, per image or per farm polygon.",
    problem:
      "Date farms in AlUla are counted by hand or estimated from records. Walking thousands of farms is slow and expensive, numbers go stale, and there is no consistent way to compare one farm or region against another.",
    solution:
      "I trained a YOLO26 detector on aerial palm imagery and wrapped it in a FastAPI application. A user uploads an aerial image, or picks farm polygons on a map, and gets a count plus a labelled image with one marker per palm crown. For farms, the app drives Google Earth Pro to capture the polygon at a fixed camera range, georeferences the capture, and counts only the palms whose centre falls inside the farm boundary.",
    architecture: [
      { step: "Imagery Sources", detail: "Uploaded JPG/PNG, live captures driven from Google Earth Pro, or stored captures reused offline." },
      { step: "Automatic Scale", detail: "The app measures median palm width and tiles the image so palms appear about 24 px wide at the model's 640 px input." },
      { step: "YOLO26 Inference", detail: "Overlapping tiles run through the trained model on GPU with CPU fallback; detections from neighbouring tiles are merged." },
      { step: "Farm Polygons", detail: "KML farm boundaries are georeferenced to the capture, so only palms inside a farm's polygon count toward its total." },
      { step: "Farm Map & Export", detail: "A Leaflet map shows every farm coloured by count, with labelled images and a per-farm CSV export." },
    ],
    challenges: [
      "Palm size in pixels changes with zoom, and counts swing with it, so scale is measured per image and tiling is chosen to match.",
      "Dark or hazy imagery hides palms: the app measures brightness inside the polygon, brightens before detection, and warns that the count is an underestimate.",
      "Dense plantations with touching crowns need a lower confidence threshold and cross-tile merging to avoid missed or double-counted palms.",
      "Capturing thousands of farms reliably by automating Google Earth Pro, with georeferencing and stitching for large polygons.",
    ],
    impact: [
      "Replaces a manual farm-by-farm count with a result in seconds per image.",
      "Gives every farm a consistent, repeatable count that can be compared across farms, regions and imagery dates.",
      "Stored captures keep the system working without Google Earth, so past counts can be re-run.",
    ],
    metrics: [
      { value: "7,124", label: "farm polygons across 16 regions" },
      { value: "~900", label: "palms counted in one dense scene" },
      { value: "Seconds", label: "per image on a laptop GPU" },
    ],
    stack: ["Python", "YOLO26", "PyTorch", "OpenCV", "FastAPI", "Leaflet", "KML / GIS"],
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
    slug: "whatsapp-email-assistant",
    name: "WhatsApp Email Assistant",
    shortName: "Email Assistant",
    category: "LLM & Automation",
    featured: true,
    driveVideoId: "1OnAOucNE3fd7dJo-ijxX2jEEITO-SR1n",
    oneLiner:
      "Every new email arrives on WhatsApp. Reply there, get an LLM-drafted response, and send it from the mailbox.",
    problem:
      "A manager's inbox is a decision center they can't leave behind: requests, approvals, and client replies pile up, but the mailbox only lives on the desk. Checking email means opening the laptop, drafting each reply from scratch, and juggling tone and wording for every one. On the move, the mailbox effectively stops working — until the manager is back at the desk and the messages have gone cold.",
    solution:
      "I built a mailbox-to-WhatsApp assistant that moves the inbox to the channel the manager already answers from. New mail is detected the moment it lands and delivered to WhatsApp with the full body; the manager replies in plain language, an LLM drafts a professional response with a confidence score, and one tap approves and sends it back through the real mailbox. Voice notes are transcribed and treated as instructions, so replies can be dictated while driving. The whole conversation runs as a strict state machine, and every message flows through a durable, retried pipeline so nothing gets lost.",
    architecture: [
      { step: "Mailbox Ingestion", detail: "Microsoft 365 Graph change notifications plus delta polling detect new mail as it lands." },
      { step: "WhatsApp Gateway", detail: "A Baileys gateway pairs the manager's number and delivers each email as a WhatsApp message." },
      { step: "Conversation FSM", detail: "A strict state machine routes every inbound message: Reply, Edit Draft, Add CC, Send, Cancel." },
      { step: "LLM Drafting", detail: "An LLM (Ollama qwen2.5) drafts a professional reply from the email thread, with a confidence score." },
      { step: "Voice Input", detail: "faster-whisper transcribes voice notes into the same instruction path as typed text." },
      { step: "Durable Outbox", detail: "Postgres-backed queue with retries and encrypted-at-rest WhatsApp credentials keep delivery reliable." },
    ],
    challenges: [
      "Keeping a free-form chat thread reliable: the conversation is a strict FSM so a natural back-and-forth can never drift into an ambiguous state.",
      "Pairing WhatsApp so credentials survive restarts: encrypted at rest, re-pair via QR when needed.",
      "Making the voice path a real input: a voice note must be transcribed and treated as an instruction, not a second-class feature.",
      "Guaranteeing delivery: every email, draft, and send flows through a durable, retried pipeline so nothing is dropped.",
    ],
    impact: [
      "Turns the mailbox into something that works from anywhere, answered on the channel the manager already uses.",
      "Every reply is drafted professionally by an LLM and human-approved before it leaves the mailbox.",
      "Attachments arrive on WhatsApp as files, so nothing requires a laptop to be seen.",
      "An automated suite of 90 tests keeps the FSM and delivery pipeline safe to extend.",
    ],
    metrics: [
      { value: "90", label: "automated unit & integration tests" },
      { value: "Strict", label: "conversation FSM" },
      { value: "Voice", label: "transcribed voice-note replies" },
    ],
    stack: ["TypeScript", "Node.js", "Fastify", "Microsoft Graph", "Baileys", "PostgreSQL", "Ollama", "n8n", "faster-whisper"],
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
    title: "WhatsApp AI Solutions",
    description: "AI delivered where teams already work.",
  },
  {
    title: "Workflow Automation",
    description: "Manual work removed, from reporting to validation.",
  },
  {
    title: "Full-Stack AI Products",
    description: "Complete platforms, from database to deploy.",
  },
  {
    title: "AI-Powered APIs",
    description: "FastAPI inference services, tested and containerized.",
  },
  {
    title: "Computer Vision Systems",
    description: "YOLOv8 and CNN pipelines on live video, in production.",
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

const projectData = {
    "1": {
        title: "Tuition Management System",
        tag: "SaaS / Management",
        description: "A comprehensive solution designed for educators and private tutors to manage their daily operations. The system automates student enrollment, fee tracking, and attendance management, reducing administrative overhead by 40%. It features a responsive dashboard for real-time performance tracking and automated SMS reminders for parents.",
        tech: ["Python", "SQL", "Flask", "Bootstrap"],
        image: "tuition_mgmt_mockup_1776151601678.png",
        goals: [
            "Centralize student data",
            "Automate fee collection reminders",
            "Generate monthly attendance reports"
        ]
    },
    "2": {
        title: "Gym Management System",
        tag: "Management",
        description: "Streamlining fitness center operations with a focused member tracking system. This project addressed the common challenges of manual membership tracking by implementing an automated renewal alert system and a lightweight dashboard for trainers to track member progress and check-ins.",
        tech: ["Python", "SQL", "Custom CSS", "Java"],
        image: "gym_mgmt_mockup_1776151620337.png",
        goals: [
            "Track member membership status",
            "Manage trainer schedules",
            "Analyze monthly revenue growth"
        ]
    },
    "3": {
        title: "Mobile Shop Storefront",
        tag: "E-Commerce",
        description: "Developed a professional online presence for a local mobile retail shop to expand their customer reach beyond geographical limits. The platform features an intuitive product grid, real-time inventory status, and a seamless inquiry system that connects customers directly to shop owners via WhatsApp API integration.",
        tech: ["HTML5", "CSS3", "JavaScript", "React.js"],
        image: "mobile_shop_mockup_retry_1776151662197.png",
        goals: [
            "Showcase latest smartphone inventory",
            "Enable direct customer-to-owner chat",
            "Mobile-first responsive design"
        ]
    },
    "4": {
        title: "Real-time RAG Chatbots",
        tag: "AI / NLP",
        description: "Advanced AI agents built using the Retrieval-Augmented Generation (RAG) framework. These bots utilize Langchain and Langgraph to retrieve relevant information from local documents in real-time, providing highly accurate and context-aware responses. Integrated with n8n for automated data fetching and preprocessing.",
        tech: ["Langchain", "Langgraph", "n8n", "OpenAI"],
        image: "rag_chatbot_mockup_retry_1776151678717.png",
        goals: [
            "Reduce response hallucination",
            "Instant document retrieval",
            "Multi-agent workflow orchestration"
        ]
    },
    "5": {
        title: "QR Certificate Generator",
        tag: "Web Tool",
        description: "A secure web application designed to combat certificate forgery. It generates digital certificates embedded with unique QR codes. When scanned, these codes redirect to a verification page that cross-references the student's ID against a secure database, confirming authenticity in seconds.",
        tech: ["JavaScript", "QR Engine", "Node.js", "SQL"],
        image: "qr_cert_mockup_final_1776151733128.png",
        goals: [
            "Instant credential verification",
            "Automated PDF generation",
            "Secure verification portal"
        ]
    },
    "6": {
        title: "Automated Payslip Generator",
        tag: "Automation",
        description: "A hybrid payroll tool that simplifies the generation of monthly payslips for small to medium-sized teams. The system allows for both manual adjustments and bulk automated generation from CSV/Excel data. It exports clean, professional PDFs ready for distribution with zero manual formatting required.",
        tech: ["Python", "PDFKit", "Excel Automator", "CSS"],
        image: "payslip_final_attempt_1776151974575.png",
        goals: [
            "Eliminate manual calculation errors",
            "Support bulk PDF generation",
            "Customizable earning/deduction fields"
        ]
    }
};

export default projectData;

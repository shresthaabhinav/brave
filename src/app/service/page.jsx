import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/sections/footer";

export default function ServiceList() {
  const services = [
    {
      img: "/img2/software.jpg",
      title: "Custom Software Development",
      subtitle: "Built around the way your business actually works",
      desc: "We create tailor-made software solutions that solve real operational challenges. Instead of forcing your team to adapt to generic tools, we design systems that fit your workflows, automate repetitive tasks, reduce human error, and make daily processes easier to manage.",
      details: [
        "ERP, CRM, HRM, and inventory management systems",
        "Workflow automation for departments and internal teams",
        "Scalable architecture for future growth",
        "Secure, maintainable, and business-focused solutions",
      ],
      tag: "01",
    },
    {
      img: "/img2/web.jpg",
      title: "Professional Web Development",
      subtitle: "Fast, modern, and conversion-focused digital experiences",
      desc: "Your website is often the first interaction customers have with your business, so it needs to make a powerful impression. We build high-performance websites that are responsive, visually polished, and optimized for speed, SEO, and usability.",
      details: [
        "Corporate websites and landing pages",
        "Custom business portals and web applications",
        "Responsive design for desktop, tablet, and mobile",
        "SEO-ready structure and performance optimization",
      ],
      tag: "02",
    },
    {
      img: "/img2/ui.jpg",
      title: "UI/UX Design",
      subtitle: "Design that feels intuitive, elegant, and human",
      desc: "A strong digital product is not only about how it looks, but also about how it feels to use. Our UI/UX design process focuses on creating experiences that are clear, user-friendly, and aligned with your brand identity.",
      details: [
        "User interface design for web and mobile products",
        "Wireframing, prototyping, and user journey planning",
        "Brand-consistent digital design systems",
        "Usability-first design decisions for better engagement",
      ],
      tag: "03",
    },
    {
      img: "/img2/mobile.jpg",
      title: "Digital Marketing & Ad Campaigns",
      subtitle: "Reach the right people and turn attention into growth",
      desc: "Growth needs more than visibility — it needs strategy. We help businesses attract, engage, and convert their ideal audience through carefully planned digital marketing campaigns driven by data, creativity, and clear business goals.",
      details: [
        "SEO strategy and search visibility improvement",
        "Google Ads and Meta Ads campaign management",
        "Social media growth and brand positioning",
        "Content planning focused on lead generation",
      ],
      tag: "04",
    },
    {
      img: "/img2/video.jpg",
      title: "Professional Video Production",
      subtitle: "Visual storytelling that strengthens your brand presence",
      desc: "Video has become one of the most powerful tools for communication, promotion, and engagement. We produce high-quality visual content that helps brands communicate clearly and stand out in a competitive market.",
      details: [
        "Corporate videos and promotional content",
        "Motion graphics and branded visual storytelling",
        "4K editing for modern digital platforms",
        "Content tailored for social media and campaigns",
      ],
      tag: "05",
    },
    {
      img: "/img2/hardware.jpg",
      title: "IT Infrastructure & Hardware",
      subtitle: "Reliable physical systems that support business continuity",
      desc: "Behind every efficient office is a dependable technical foundation. We provide IT infrastructure solutions that keep businesses connected, secure, and ready for scale.",
      details: [
        "Structured cabling and network deployment",
        "Office hardware planning and installation",
        "Server room setup and system organization",
        "Security systems and technical infrastructure support",
      ],
      tag: "06",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --purple: #7c3aed;
          --purple-light: #9d65f5;
          --purple-bg: #f5f0ff;
          --purple-border: #ede5ff;
          --ink: #0e0a1a;
          --ink-muted: #4a4060;
          --surface: #ffffff;
          --surface-2: #faf8ff;
        }

        .sl-root {
          background: var(--surface);
          color: var(--ink);
        }

        .sl-services {
          padding: clamp(8px, 2vw, 20px) 0 clamp(4px, 2vw, 20px);
        }

        .sl-service {
          max-width: 1600px;
          margin: 0 auto;
          padding: clamp(40px, 5vw, 72px) clamp(24px, 5vw, 72px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 4vw, 72px);
          align-items: center;
          border-bottom: 1px solid #f0ebff;
        }

        .sl-service:last-child {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .sl-service {
            grid-template-columns: 1fr;
          }

          .sl-service-img-wrap {
            order: 0 !important;
          }
        }

        .sl-service.reversed .sl-service-img-wrap {
          order: 2;
        }

        .sl-service.reversed .sl-service-content {
          order: 1;
        }

        .sl-service-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          min-height: 520px;
        }

        .sl-service-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            transparent 40%,
            rgba(124, 58, 237, 0.35) 100%
          );
        }

        .sl-service-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .sl-service-content {
          display: flex;
          flex-direction: column;
        }

        .sl-service-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--purple);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sl-service-eyebrow::before {
          content: '';
          width: 24px;
          height: 2px;
          background: var(--purple);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .sl-service-title {
          font-size: clamp(24px, 2.5vw, 40px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--ink);
          margin: 0 0 20px;
          letter-spacing: -0.025em;
        }

        .sl-service-desc {
          font-size: 15px;
          line-height: 1.85;
          color: var(--ink-muted);
          font-weight: 300;
          margin: 0 0 28px;
        }

        .sl-service-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sl-service-detail {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          background: var(--surface-2);
          border: 1px solid var(--purple-border);
          border-radius: 10px;
          transition: border-color 0.2s, background 0.2s;
        }

        .sl-service-detail:hover {
          border-color: var(--purple-light);
          background: var(--purple-bg);
        }

        .sl-service-detail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--purple);
          flex-shrink: 0;
          margin-top: 6px;
        }

        .sl-service-detail-text {
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-muted);
          margin: 0;
        }
      `}</style>

      <Navbar />

      <main className="sl-root">
        <section className="sl-services" id="services">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`sl-service${index % 2 !== 0 ? " reversed" : ""}`}
            >
              <div className="sl-service-img-wrap">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <span className="sl-service-tag">{service.tag}</span>
              </div>

              <div className="sl-service-content">
                <p className="sl-service-eyebrow">{service.subtitle}</p>
                <h3 className="sl-service-title">{service.title}</h3>
                <p className="sl-service-desc">{service.desc}</p>

                <div className="sl-service-details">
                  {service.details.map((item) => (
                    <div key={item} className="sl-service-detail">
                      <div className="sl-service-detail-dot" />
                      <p className="sl-service-detail-text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
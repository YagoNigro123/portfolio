import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./styles/contact.css";

type FormErrors = {
  email?: string;
  linkedin?: string;
  captcha?: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        }
      ) => void;
    };
  }
}

function loadTurnstileScript() {
  if (document.querySelector('script[data-turnstile-sdk]')) return;

  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
  script.async = true;
  script.defer = true;
  script.setAttribute("data-turnstile-sdk", "true");
  document.head.appendChild(script);
}

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const turnstileRenderedRef = useRef(false);

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY as
    | string
    | undefined;

  const handleCaptcha = useCallback((token: string) => {
    setCaptchaToken(token);
    setErrors((prev) => ({ ...prev, captcha: undefined }));
  }, []);

  useEffect(() => {
    if (!siteKey) {
      console.warn("Falta VITE_TURNSTILE_SITE_KEY");
      return;
    }

    loadTurnstileScript();

    const interval = setInterval(() => {
      if (
        window.turnstile &&
        turnstileRef.current &&
        !turnstileRenderedRef.current
      ) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: handleCaptcha,
          "error-callback": () => {
            setErrors((prev) => ({
              ...prev,
              captcha:
                "Error al cargar el captcha. Revisá tu conexión o bloqueadores.",
            }));
          },
          "expired-callback": () => {
            setCaptchaToken(null);
            setErrors((prev) => ({
              ...prev,
              captcha: "El captcha expiró, volvé a validarlo.",
            }));
          },
        });
        turnstileRenderedRef.current = true;
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [handleCaptcha, siteKey]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const email = String(formData.get("email") ?? "").trim();
    const linkedin = String(formData.get("linkedin") ?? "").trim();

    const newErrors: FormErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Ingresá un email con un dominio válido.";
    }

    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/.+/i;
    if (linkedin && !linkedinRegex.test(linkedin)) {
      newErrors.linkedin = "Solo se permiten URLs de LinkedIn.";
    }

    if (!captchaToken) {
      newErrors.captcha = "Tenés que completar el captcha.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as
      | string
      | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
      | string
      | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
      | string
      | undefined;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Faltan variables de entorno de EmailJS");
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");
      setErrors({});

      if (!formRef.current.querySelector('input[name="cf_turnstile_token"]')) {
        const hidden = document.createElement("input");
        hidden.type = "hidden";
        hidden.name = "cf_turnstile_token";
        hidden.value = captchaToken ?? "";
        formRef.current.appendChild(hidden);
      } else {
        (
          formRef.current.querySelector(
            'input[name="cf_turnstile_token"]'
          ) as HTMLInputElement
        ).value = captchaToken ?? "";
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      formRef.current.reset();
      setCaptchaToken(null);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Error EmailJS:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="contact-kicker">Contacto</p>
        <h2 className="contact-title">Contacto profesional</h2>
        <p className="contact-subtitle">
          Si tenés una oportunidad, colaboración o simplemente querés hablar,
          escribime por acá.
        </p>
      </div>

      {status === "success" && (
        <div className="contact-msg contact-msg--success">
          Mensaje enviado. Te respondo lo antes posible.
        </div>
      )}

      {status === "error" && (
        <div className="contact-msg contact-msg--error">
          Hubo un error al enviar. Probá de nuevo más tarde.
        </div>
      )}

      <form
        ref={formRef}
        className="contact-form-shell"
        onSubmit={handleSubmit}
      >
        <div className="contact-form">
          <div className="contact-field">
            <label htmlFor="name" className="contact-label">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact-input"
              placeholder="Juan Pérez"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email" className="contact-label">
              Email de contacto
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact-input"
              placeholder="tuemail@empresa.com"
              required
            />
            {errors.email && (
              <p className="contact-error">{errors.email}</p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="linkedin" className="contact-label">
              LinkedIn / Portfolio (opcional)
            </label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              className="contact-input"
              placeholder="https://linkedin.com/in/tu-perfil"
            />
            {errors.linkedin && (
              <p className="contact-error">{errors.linkedin}</p>
            )}
          </div>

          <div className="contact-field">
            <label htmlFor="subject" className="contact-label">
              Motivo de contacto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="contact-input"
              placeholder="Oportunidad laboral, colaboración, networking…"
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message" className="contact-label">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="contact-input contact-textarea"
              placeholder="Contame sobre el rol, equipo o expectativa que tenés."
              required
            />
          </div>

          <div className="contact-field contact-field--captcha">
            <span className="contact-label">Verificación</span>
            <div className="contact-captcha" ref={turnstileRef} />
            {errors.captcha && (
              <p className="contact-error">{errors.captcha}</p>
            )}
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </form>
    </section>
  );
};

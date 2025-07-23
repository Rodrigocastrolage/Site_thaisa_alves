"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

export function useConversionTracking() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Wait for scripts to load
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const trackWhatsAppClick = () => {
    if (!isLoaded) return

    // GTM DataLayer Event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        event_category: "Contact",
        event_action: "Click",
        event_label: "WhatsApp Button",
        contact_method: "WhatsApp",
        value: 1.0,
        currency: "BRL",
      })
    }

    // Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17383698586/whatsapp_click",
        value: 1.0,
        currency: "BRL",
      })

      // GA4 Event
      window.gtag("event", "generate_lead", {
        currency: "BRL",
        value: 1.0,
        method: "WhatsApp",
      })
    }

    // Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "WhatsApp Click",
        content_category: "Contact",
      })
    }

    console.log("WhatsApp click tracked")
  }

  const trackPhoneClick = () => {
    if (!isLoaded) return

    // GTM DataLayer Event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        event_category: "Contact",
        event_action: "Click",
        event_label: "Phone Button",
        contact_method: "Phone",
        value: 1.0,
        currency: "BRL",
      })
    }

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17383698586/phone_click",
        value: 1.0,
        currency: "BRL",
      })

      // GA4 Event
      window.gtag("event", "generate_lead", {
        currency: "BRL",
        value: 1.0,
        method: "Phone",
      })
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Phone Click",
        content_category: "Contact",
      })
    }

    console.log("Phone click tracked")
  }

  const trackEmailClick = () => {
    if (!isLoaded) return

    // GTM DataLayer Event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "email_click",
        event_category: "Contact",
        event_action: "Click",
        event_label: "Email Button",
        contact_method: "Email",
        value: 1.0,
        currency: "BRL",
      })
    }

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17383698586/email_click",
        value: 1.0,
        currency: "BRL",
      })

      // GA4 Event
      window.gtag("event", "generate_lead", {
        currency: "BRL",
        value: 1.0,
        method: "Email",
      })
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Email Click",
        content_category: "Contact",
      })
    }

    console.log("Email click tracked")
  }

  const trackScheduleClick = () => {
    if (!isLoaded) return

    // GTM DataLayer Event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "schedule_click",
        event_category: "Appointment",
        event_action: "Click",
        event_label: "Schedule Button",
        contact_method: "Schedule",
        value: 5.0,
        currency: "BRL",
      })
    }

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17383698586/schedule_click",
        value: 5.0,
        currency: "BRL",
      })

      // GA4 Event
      window.gtag("event", "begin_checkout", {
        currency: "BRL",
        value: 5.0,
        method: "Schedule",
      })
    }

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Schedule", {
        content_name: "Session Schedule",
        content_category: "Appointment",
      })
    }

    console.log("Schedule click tracked")
  }

  const trackLeadFormSubmit = () => {
    if (!isLoaded) return

    // GTM DataLayer Event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "lead_form_submit",
        event_category: "Lead Generation",
        event_action: "Submit",
        event_label: "Lead Form",
        form_type: "Lead Generation",
        value: 1.0,
        currency: "BRL",
      })
    }

    // Google Ads conversion - Event snippet for Enviar formulário de lead
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17383698586/ErmLCLDf1PUaEJrhmOFA",
        value: 1.0,
        currency: "BRL",
      })

      // GA4 Event
      window.gtag("event", "generate_lead", {
        currency: "BRL",
        value: 1.0,
        method: "Form",
      })
    }

    // Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "Lead Form Submit",
        content_category: "Lead Generation",
        value: 1.0,
        currency: "BRL",
      })
    }

    console.log("Lead form submit tracked")
  }

  return {
    trackWhatsAppClick,
    trackPhoneClick,
    trackEmailClick,
    trackScheduleClick,
    trackLeadFormSubmit,
  }
}

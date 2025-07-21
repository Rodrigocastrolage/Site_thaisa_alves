"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
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

    // Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-979108488/whatsapp_click",
        value: 1.0,
        currency: "BRL",
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

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-979108488/phone_click",
        value: 1.0,
        currency: "BRL",
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

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-979108488/email_click",
        value: 1.0,
        currency: "BRL",
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

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-979108488/schedule_click",
        value: 5.0,
        currency: "BRL",
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

  return {
    trackWhatsAppClick,
    trackPhoneClick,
    trackEmailClick,
    trackScheduleClick,
  }
}

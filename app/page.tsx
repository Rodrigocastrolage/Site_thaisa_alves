"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Shield, Users, Heart, Brain, Phone, Mail, MessageCircle } from "lucide-react"
import { useConversionTracking } from "@/components/conversion-tracking"

export default function Home() {
  const { trackWhatsAppClick, trackPhoneClick, trackEmailClick, trackScheduleClick } = useConversionTracking()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f8f3f0] to-[#f0e8e3] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge variant="secondary" className="bg-[#d9a6a0]/10 text-[#8b5a52] border-[#d9a6a0]/20">
                {"✨ Psicóloga CRP: 02/26867"}
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-800 leading-tight">
                  Sua saúde mental merece{" "}
                  <span className="text-[#d9a6a0] relative">
                    prioridade
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#d9a6a0]/30 rounded-full"></div>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Se você está em busca de equilíbrio emocional e bem-estar, meu atendimento psicológico online pode te
                  ajudar a viver com mais leveza e saúde mental.
                </p>
              </div>

              <div className="btn-highlight-box">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary-cta text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a
                      href="https://wa.me/5587999489597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                      onClick={trackWhatsAppClick}
                    >
                      <MessageCircle className="w-6 h-6 icon-bounce" />
                      Quero conversar agora
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-secondary-cta text-[#d9a6a0] hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-transparent"
                    asChild
                  >
                    <a href="#sobre" className="flex items-center gap-3">
                      <Heart className="w-6 h-6 icon-bounce" />
                      Conhecer mais
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Pacientes atendidas</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">5 anos</div>
                  <div className="text-sm text-gray-600">De experiência</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Online</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d9a6a0]/20 to-transparent rounded-2xl"></div>
                <Image
                  src="/images/thaisa-hero.jpeg"
                  alt="Dra. Thaisa Alves - Psicóloga especializada em terapia online"
                  fill
                  className="object-cover object-top rounded-2xl shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-800">5.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">"Transformou completamente minha relação com a ansiedade"</p>
                <p className="text-xs text-gray-500 mt-1">- Maria, 28 anos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-[#d9a6a0]/10 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
              Como funciona
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
              Atendimento psicológico online para todo o Brasil
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo terapêutico completo, seguro e eficaz, no conforto da sua casa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "100% online",
                description: "Atendimento por videochamada com total privacidade e flexibilidade de horários",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Sessões de 50 minutos",
                description: "Tempo adequado para um atendimento completo e eficaz",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Abordagem personalizada",
                description: "Tratamento adaptado às suas necessidades específicas",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Sigilo profissional",
                description: "Ambiente seguro e confidencial seguindo o código de ética",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#f8f3f0] to-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d9a6a0] to-[#c79690] flex items-center justify-center mb-6 mx-auto text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Você não precisa enfrentar tudo sozinha section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="grid grid-cols-2 gap-6 h-[500px] relative">
              <div className="col-span-1 row-span-1 relative">
                <Image
                  src="/images/person-alone.jpeg"
                  alt="Pessoa lidando com dificuldades emocionais"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="col-span-1 row-span-1 relative mt-12">
                <Image
                  src="/images/person-silhouette.jpeg"
                  alt="Pessoa buscando ajuda e esperança"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="bg-[#d9a6a0]/10 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
                  Você não está sozinha
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
                  Transforme seus desafios em crescimento pessoal
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Se você se sente ansiosa, sobrecarregada, insegura ou em dúvida sobre o rumo da sua vida, saiba que a
                  terapia pode te ajudar a retomar o controle emocional e viver com mais leveza.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Trabalhar a ansiedade e o estresse",
                  "Melhorar a autoestima",
                  "Romper ciclos de autossabotagem",
                  "Lidar com pensamentos negativos",
                  "Desenvolver inteligência emocional",
                  "Construir relacionamentos saudáveis",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#d9a6a0] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="btn-highlight-box">
                <Button
                  asChild
                  size="lg"
                  className="btn-primary-cta text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
                >
                  <a
                    href="https://wa.me/5587999489597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                    onClick={trackScheduleClick}
                  >
                    <MessageCircle className="w-6 h-6 icon-bounce" />
                    Começar minha jornada
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre" className="py-20 bg-gradient-to-br from-[#f8f3f0] to-[#f0e8e3]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="bg-white/50 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
                  Sobre mim
                </Badge>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
                  Sou a Dra. Thaisa Alves
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Psicóloga especializada em atendimento online, com foco no bem-estar emocional de mulheres. Minha
                    missão é ajudar você a transformar padrões de pensamento limitantes e desenvolver habilidades
                    emocionais para uma vida mais equilibrada.
                  </p>
                  <p>
                    Meu trabalho é pautado pela ética, acolhimento e empatia, criando um espaço seguro onde você pode se
                    expressar livremente e encontrar seu caminho para o bem-estar.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "FORMAÇÃO",
                    description: "Graduada em Psicologia com especializações em terapia online",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "REGISTRO",
                    description: "CRP: 02/26867",
                  },
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "ABORDAGEM",
                    description: "Psicoterapia humanizada e personalizada",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "ESPECIALIDADE",
                    description: "Atendimento exclusivo para mulheres",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl">
                    <div className="h-12 w-12 rounded-full bg-[#d9a6a0] flex items-center justify-center text-white flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] lg:h-[600px] w-full">
                <Image
                  src="/images/thaisa-about.jpeg"
                  alt="Dra. Thaisa Alves - Psicóloga especializada em terapia online"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-[#d9a6a0] mb-6 opacity-50">"</div>
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-6">
              Pedir ajuda não é sinal de fraqueza, é um passo corajoso para a cura e o crescimento pessoal.
            </blockquote>
            <cite className="text-lg text-gray-300">— Dra. Thaisa Alves</cite>
          </div>
        </div>
      </section>

      {/* Problems section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="bg-[#d9a6a0]/10 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
              Áreas de atuação
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
              Você se identifica com alguns desses desafios?
            </h2>
            <p className="text-lg text-gray-600 mb-8">Trabalho com diversas questões emocionais e comportamentais</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
            {[
              "Ansiedade",
              "Baixa autoestima",
              "Crises de pânico",
              "Dificuldade em lidar com emoções",
              "Transtornos de ansiedade",
              "Depressão",
              "Insegurança e medos",
              "Estresse e burnout",
              "Problemas de relacionamento",
              "Traumas",
              "Transtornos alimentares",
              "Luto e perdas",
              "Questões familiares",
              "Autoconhecimento",
              "Desenvolvimento pessoal",
            ].map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-800 text-white hover:bg-[#d9a6a0] transition-colors duration-300 px-4 py-2 text-sm cursor-default"
              >
                {item}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Se você se identificou com alguma dessas questões ou está passando por outros desafios emocionais, saiba
              que a terapia pode te ajudar a encontrar caminhos para o bem-estar e crescimento pessoal.
            </p>

            <div className="btn-highlight-box max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="btn-primary-cta text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
              >
                <a
                  href="https://wa.me/5587999489597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                  onClick={trackScheduleClick}
                >
                  <MessageCircle className="w-6 h-6 icon-bounce" />
                  Quero agendar uma consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-[#d9a6a0]/10 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
                Terapia online
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
                Atendimento Psicológico Online
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Terapia de qualidade, acessível de qualquer lugar do Brasil
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Por que escolher a terapia online?</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Sessões realizadas por videochamada em ambiente virtual seguro e sigiloso, com o mesmo acolhimento e
                    qualidade do atendimento presencial.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Clock className="w-5 h-5" />,
                      title: "Flexibilidade total",
                      description: "Horários que se adaptam à sua rotina",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Privacidade",
                      description: "Conforto e segurança do seu lar",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Acessibilidade",
                      description: "Disponível em todo o Brasil",
                    },
                    {
                      icon: <Heart className="w-5 h-5" />,
                      title: "Menos barreiras",
                      description: "Maior facilidade para se abrir",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                      <div className="h-10 w-10 rounded-full bg-[#d9a6a0]/10 flex items-center justify-center text-[#d9a6a0] flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="btn-highlight-box">
                  <Button
                    asChild
                    size="lg"
                    className="btn-primary-cta text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    <a
                      href="https://wa.me/5587999489597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                      onClick={trackScheduleClick}
                    >
                      <MessageCircle className="w-6 h-6 icon-bounce" />
                      Agendar primeira sessão
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[500px] w-full">
                  <Image
                    src="/images/thaisa-smile.jpeg"
                    alt="Dra. Thaisa Alves - Terapia Online especializada"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-20 bg-gradient-to-br from-[#f8f3f0] to-[#f0e8e3]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-white/50 text-[#8b5a52] border-[#d9a6a0]/20 mb-4">
                Dúvidas frequentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">Perguntas Frequentes</h2>
              <p className="text-lg text-gray-600">Esclarecendo suas principais dúvidas sobre o processo terapêutico</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Como funciona a primeira sessão?",
                  answer:
                    "Na primeira sessão, faremos um acolhimento inicial onde você poderá compartilhar suas demandas e expectativas. É um momento para nos conhecermos e eu explicar como funciona o processo terapêutico. Você ficará à vontade para tirar todas as suas dúvidas.",
                },
                {
                  question: "Quanto tempo dura o tratamento?",
                  answer:
                    "A duração varia de acordo com cada pessoa, os objetivos definidos e a complexidade das questões abordadas. Algumas pessoas sentem melhorias significativas em poucas sessões, enquanto outras preferem um acompanhamento mais longo para um trabalho mais profundo.",
                },
                {
                  question: "Como funcionam as sessões online?",
                  answer:
                    "As sessões são realizadas por videochamada através de plataformas seguras que garantem total confidencialidade. Você precisará de um dispositivo com câmera e microfone e uma conexão estável com a internet. O processo terapêutico mantém a mesma qualidade e eficácia do presencial.",
                },
                {
                  question: "A terapia online é realmente eficaz?",
                  answer:
                    "Sim! Estudos científicos comprovam que a terapia online tem eficácia equivalente à presencial. Muitas pacientes relatam se sentir mais confortáveis e abertas no ambiente familiar de suas casas, o que pode até potencializar os resultados.",
                },
                {
                  question: "Qual o valor das sessões?",
                  answer:
                    "Os valores são personalizados de acordo com cada caso e modalidade de atendimento. Entre em contato pelo WhatsApp para conhecer as opções de investimento e formas de pagamento disponíveis.",
                },
                {
                  question: "Como agendar uma sessão?",
                  answer:
                    "Você pode agendar clicando nos botões desta página ou entrando em contato diretamente pelo WhatsApp. Respondo rapidamente e podemos agendar sua primeira sessão para o horário que for mais conveniente para você.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-sm border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#f8f3f0] to-[#f0e8e3] rounded-3xl p-8 md:p-12">
              <Badge variant="secondary" className="bg-white/50 text-[#8b5a52] border-[#d9a6a0]/20 mb-6">
                Pronta para começar?
              </Badge>

              <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6">
                Vamos conversar sobre sua jornada de bem-estar?
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Vamos entender juntas se a terapia comigo faz sentido para o seu momento atual e de que forma posso te ajudar nesse processo.
              </p>

              <div className="btn-highlight-box">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button
                    asChild
                    size="lg"
                    className="btn-whatsapp text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a
                      href="https://wa.me/5587999489597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                      onClick={trackWhatsAppClick}
                    >
                      <MessageCircle className="w-6 h-6 icon-bounce" />
                      Conversar no WhatsApp
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="btn-phone text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                    asChild
                  >
                    <a href="tel:+5587999489597" className="flex items-center gap-3" onClick={trackPhoneClick}>
                      <Phone className="w-6 h-6 icon-bounce" />
                      Ligar agora
                    </a>
                  </Button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Outras formas de contato</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="https://wa.me/5587999489597"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#d9a6a0] transition-colors duration-200"
                    onClick={trackWhatsAppClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:contato@thaisaalves.com"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#d9a6a0] transition-colors duration-200"
                    onClick={trackEmailClick}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">E-mail</span>
                  </a>
                  <a
                    href="tel:+5587999489597"
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#d9a6a0] transition-colors duration-200"
                    onClick={trackPhoneClick}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Telefone</span>
                  </a>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-medium">CRP: 02/26867</p>
                  <p className="text-gray-500">Atendimento psicológico online para todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif font-medium mb-4">Dra. Thaisa Alves</h3>
              <p className="text-gray-300 mb-6">Psicóloga especializada em terapia online • CRP: 02/26867</p>

              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-[#d9a6a0] hover:bg-[#c79690] flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/psi_thaisaalves/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-[#d9a6a0] hover:bg-[#c79690] flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.073-1.689-.073-4.948 0-3.204.013-3.668.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.689-.073 4.948-.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-12 w-12 rounded-full bg-[#d9a6a0] hover:bg-[#c79690] flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <h4 className="font-semibold mb-3">Contato</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>WhatsApp: (87) 99948-9597</p>
                    <p>E-mail: contato@thaisaalves.com</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Atendimento</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>100% Online</p>
                    <p>Todo o Brasil</p>
                    <p>Horários flexíveis</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Especialidades</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Ansiedade e Estresse</p>
                    <p>Autoestima</p>
                    <p>Desenvolvimento Pessoal</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Dra. Thaisa Alves. Todos os direitos reservados.
                </p>
                <p className="text-gray-500 text-sm mt-2">Desenvolvido com ❤️ para cuidar da sua saúde mental</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

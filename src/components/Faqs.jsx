import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is an ERP?',
      answer:
        'Software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.',
    },
    {
      question: 'What makes our ERP the best option?',
      answer: 'We boast of a diverse experience, understanding of our client’s needs, and detailed execution to meet our client’s high expectations. Efficiency is at the core of our development.',
    },
    {
      question: 'Who is it meant for?',
      answer:
        'Our ERPs can be designed to fit any business ranging from learning institutions and saccos to hospitals.',
    },
  ],
  [
    {
      question: 'What was that testimonial about tax fraud all about?',
      answer:
        'TaxPal is just a software application, ultimately your books are your responsibility.',
    },
    {
      question:
        'How much does it cost?',
      answer:
        'Our ERPs are affordable but the prices vary in relation to the modules the client needs installed on their system.',
    },
    {
      question:
        'Does the ERP fit all types of instituitions?',
      answer:
        'Currently, the school based ERP can be modified to fit high schools, TVETs and Colleges.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'Our reports are generated in excel format.',
    },
    {
      question: 'Can we expect more features?',
      answer: 'Our team of developers are ever busy coming up with new ideas and updates for the system.',
    },
    {
      question: 'How secure is the system?',
      answer:
        'The system has been thoroughly tested by cyber security experts from our company to ensure that it is secure.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useContactForm } from "@/hooks/useContactForm";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  phone: z.string().min(10, "Informe um telefone com DDD."),
  message: z.string().min(10, "Conte um pouco sobre o projeto (mín. 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

export function FinalCta() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const { handleSubmit: handleContactSubmit } = useContactForm();

  function onSubmit(values: FormValues) {
    handleContactSubmit(values);
    form.reset();
  }

  return (
    <section className="section-pad relative overflow-hidden" id="contato">
      <div aria-hidden className="aura top-1/4 left-1/2 size-[34rem] -translate-x-1/2 opacity-25" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Pronto para transformar <span className="text-gradient">visitantes em clientes?</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Conte sobre o seu projeto e receba um orçamento personalizado em até 24 horas.
          </p>
          <WhatsAppButton size="lg" className="glow mt-6 h-14 rounded-full px-8 text-base">
            Solicitar orçamento no WhatsApp
          </WhatsAppButton>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass rounded-3xl p-7 sm:p-9">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="voce@empresa.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sobre o projeto</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Qual é o seu negócio e o que você precisa?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="h-12 w-full rounded-full text-base">
                  Quero meu orçamento
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

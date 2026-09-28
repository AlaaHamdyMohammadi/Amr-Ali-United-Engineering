"use client";

import { useState } from "react";
import { Card, Form, Input, message } from "antd";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Breadcrumbs from "../ui/Breadcrumbs";
import MainButton from "../ui/MainButton";

const EMAILS = ["AmrAli@gmail.com", "AmrAli@amail.net"];
const PHONES = ["+2010231231234", "+2010231231234"];
const MESSAGE_MAX = 50;
const EASE = [0.22, 1, 0.36, 1] as const;

interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const inputClass = "!h-14 !rounded-2xl !border-[#242424]";
const cardClassNames = { body: "!p-4" };
const cardClass =
  "!rounded-3xl !border-[#CDCDCD] !shadow-none !bg-transparent hover:!border-clay-500";

export default function ContactContent() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const reduce = useReducedMotion();
  const [form] = Form.useForm<ContactFormValues>();
  const [messageApi, contextHolder] = message.useMessage();
  const [submitting, setSubmitting] = useState(false);

  const messageValue = Form.useWatch("message", form) ?? "";
  const nearLimit = messageValue.length >= MESSAGE_MAX * 0.9;
  const locations = t.raw("locations.items") as {
    name: string;
    address: string;
  }[];

  // ---- Motion setup ----
  // Offsets collapse to 0 for users with "reduce motion" enabled.
  const slideX = reduce ? 0 : 60;
  const riseY = reduce ? 0 : 18;
  // The "start" edge flips in RTL, so each column always enters from its own side.
  const startX = locale === "ar" ? slideX : -slideX;
  const nudgeX = locale === "ar" ? -4 : 4;

  const inView = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.15 },
  } as const;

  const infoColumnVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
  };

  const infoCardVariants: Variants = {
    hidden: { opacity: 0, x: startX },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: riseY / 2 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  };

  const pinVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 420, damping: 14 },
    },
  };

  const formCardVariants: Variants = {
    hidden: { opacity: 0, x: -startX },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: EASE,
        delay: 0.2,
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, y: riseY },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  const titleLineVariants: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.9, ease: EASE } },
  };

  async function onFinish(values: ContactFormValues) {
    setSubmitting(true);
    // No backend yet — swap this for a real request later.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Contact form submitted:", values);
    messageApi.success(t("form.success"));
    form.resetFields();
    setSubmitting(false);
  }

  return (
    // overflow-x-clip: the slide-in offsets briefly sit outside the layout,
    // this stops them from flashing a horizontal scrollbar on narrow screens.
    <section className="section overflow-x-clip">
      {contextHolder}

      <motion.div
        className="px-4 py-6 sm:px-12"
        initial={{ opacity: 0, y: reduce ? 0 : -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <Breadcrumbs />
      </motion.div>

      <div className="container-page pt-6 pb-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
          {/* Left: info cards */}
          <motion.div
            className="flex flex-col gap-6"
            variants={infoColumnVariants}
            {...inView}
          >
            <motion.div
              variants={infoCardVariants}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className={cardClass} classNames={cardClassNames}>
                <motion.h3
                  variants={itemVariants}
                  className="pb-6 text-lg font-extrabold text-[#292929]"
                >
                  {t("locations.title")}
                </motion.h3>
                <div className="flex flex-col gap-6">
                  {locations.map((loc) => (
                    <motion.div
                      key={loc.name}
                      variants={itemVariants}
                      className="flex items-start gap-2"
                    >
                      <motion.span
                        variants={pinVariants}
                        className="mt-0.5 shrink-0"
                      >
                        <MapPin size={16} className="text-clay-600" />
                      </motion.span>
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-[#292929]">
                          {loc.name}
                        </span>
                        <span className="text-[#707070]">{loc.address}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={infoCardVariants}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className={cardClass} classNames={cardClassNames}>
                <motion.h3
                  variants={itemVariants}
                  className="pb-4 text-lg font-extrabold text-[#292929]"
                >
                  {t("emails.title")}
                </motion.h3>
                <div className="flex flex-col gap-6">
                  {EMAILS.map((email, i) => (
                    <motion.a
                      key={i}
                      href={`mailto:${email}`}
                      variants={itemVariants}
                      whileHover={reduce ? undefined : { x: nudgeX }}
                      className="w-fit text-[#292929]! hover:text-clay-600!"
                    >
                      {email}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={infoCardVariants}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Card className={cardClass} classNames={cardClassNames}>
                <motion.h3
                  variants={itemVariants}
                  className="pb-4 text-lg font-extrabold text-[#292929]"
                >
                  {t("phones.title")}
                </motion.h3>
                <div className="flex flex-col gap-2">
                  {PHONES.map((phone, i) => (
                    <motion.a
                      key={i}
                      href={`tel:${phone}`}
                      variants={itemVariants}
                      whileHover={reduce ? undefined : { x: nudgeX }}
                      // dir="ltr"
                      className="w-fit text-[#292929]! hover:text-clay-600!"
                    >
                      {phone}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={formCardVariants} {...inView}>
            <Card className={cardClass} classNames={{ body: "!p-6" }}>
              <div className="relative mb-6 border-b border-[#E7E7E7]">
                <h2 className="text-[32px] font-bold text-[#414141]">
                  {t("form.title")}
                </h2>
                {/* Accent line that draws in along the title's underline */}
                <motion.span
                  variants={titleLineVariants}
                  style={{ originX: locale === "ar" ? 1 : 0 }}
                  className="absolute -bottom-px start-0 h-0.5 w-28 bg-clay-500"
                />
              </div>

              <Form<ContactFormValues>
                form={form}
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
                className="[&_.ant-form-item-label_label]:!text-base  [&_.ant-form-item-label_label]:!font-bold"
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <Form.Item
                      name="firstName"
                      label={t("form.firstName")}
                      rules={[{ required: true, message: t("form.required") }]}
                      className="text-[#292929]!"
                    >
                      <Input
                        className={inputClass}
                        placeholder={t("form.firstNamePlaceholder")}
                      />
                    </Form.Item>
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <Form.Item
                      name="lastName"
                      label={t("form.lastName")}
                      rules={[{ required: true, message: t("form.required") }]}
                      className="text-[#292929]!"
                    >
                      <Input
                        className={inputClass}
                        placeholder={t("form.lastNamePlaceholder")}
                      />
                    </Form.Item>
                  </motion.div>
                </div>

                <motion.div variants={fieldVariants}>
                  <Form.Item
                    name="email"
                    label={t("form.email")}
                    rules={[
                      { required: true, message: t("form.required") },
                      { type: "email", message: t("form.emailInvalid") },
                    ]}
                    className="text-[#292929]!"
                  >
                    <Input
                      className={inputClass}
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </Form.Item>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <Form.Item
                    name="phone"
                    label={t("form.phone")}
                    rules={[
                      { required: true, message: t("form.required") },
                      {
                        pattern: /^[0-9\s]{8,12}$/,
                        message: t("form.phoneInvalid"),
                      },
                    ]}
                    className="text-[#292929]!"
                  >
                    <Input
                      dir="ltr"
                      className={inputClass}
                      prefix={
                        <span className="text-sm text-navy-900/70">+20</span>
                      }
                      placeholder="000 000 0000"
                    />
                  </Form.Item>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <Form.Item
                    name="message"
                    label={t("form.message")}
                    rules={[{ required: true, message: t("form.required") }]}
                    className="!mb-1 text-[#292929]"
                  >
                    <Input.TextArea
                      rows={5}
                      maxLength={MESSAGE_MAX}
                      className="!resize-none !rounded-2xl !border-navy-600"
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </Form.Item>
                </motion.div>

                <motion.div
                  variants={fieldVariants}
                  className="mb-6 text-end text-xs"
                >
                  {/* Counter warms to the brand orange as you near the limit */}
                  <motion.span
                    initial={false}
                    animate={{
                      color: nearLimit ? "#EA7317" : "rgba(11,23,48,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {messageValue.length}/{MESSAGE_MAX}
                  </motion.span>
                </motion.div>

                <motion.div
                  variants={fieldVariants}
                  whileHover={reduce ? undefined : { scale: 1.01 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <MainButton
                    htmlType="submit"
                    block
                    loading={submitting}
                    className="!h-12 !bg-navy-750 hover:!opacity-90"
                  >
                    {t("form.submit")}
                  </MainButton>
                </motion.div>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

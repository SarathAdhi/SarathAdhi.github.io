"use client";

import WavyText from "@components/WavyText";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@components/ui/button";
import { toast } from "react-hot-toast";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { motion } from "framer-motion";
import { AnimatedContainer } from "@components/AnimatedContainer";
import { Send } from "lucide-react";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0 },
  }),
};

const ContactSection = () => {
  const [details, setDetails] = useState({
    from_name: "",
    from_email: "",
    message: "Hey Sarath, Nice portfolio.",
  });

  const { from_name, from_email, message } = details;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!from_name || !from_email || !message)
      return toast.error("Please fill all the required fields.");

    const templateParams = {
      from_name,
      from_email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        "template_yacrpaq",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        function () {
          toast.success("Hey, thanks for your response.");
        },
        function (error) {
          toast.error("Something went wrong...", error);
        }
      );
  };

  return (
    <div id="contact" className="sm:space-y-4 min-h-screen flex flex-col">
      <div className="parallax-text">
        <h1>Contact</h1>

        <WavyText as="h2" text="Contact" />
      </div>

      <motion.form
        className="flex-1 mt-14 pd container w-[600px] max-w-full flex flex-col items-center justify-center gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Input
          label="Name"
          name="name"
          placeholder="Sarath Adhithya"
          value={from_name}
          onChange={(e) =>
            setDetails({
              ...details,
              from_name: e.target.value,
            })
          }
          required
        />

        <Input
          label="Email"
          name="email"
          placeholder="s.sarathadhithya@gmail.com"
          value={from_email}
          onChange={(e) =>
            setDetails({
              ...details,
              from_email: e.target.value,
            })
          }
          required
        />

        <Textarea
          label="Message"
          name="message"
          placeholder="Write me some message..."
          rows={5}
          value={message}
          onChange={(e) =>
            setDetails({
              ...details,
              message: e.target.value,
            })
          }
          required
        />

        <AnimatedContainer>
          <Button
            className="flex items-center gap-2"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
            <Send size={15} />
          </Button>
        </AnimatedContainer>
      </motion.form>
    </div>
  );
};

export default ContactSection;

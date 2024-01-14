"use client";
import React, {MouseEventHandler, useState} from "react";
import {useFormik} from "formik";
import {formFieldProps, formikProps} from "@/utils/formik";
import {  object, string } from "yup";
import {TextInput} from "@/components/ui/TextInput";
import {TextArea} from "@/components/ui/TextArea";

type Form = {
  email: string;
  subject: string;
  message: string;
};
export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const { values, errors, setFieldError, setFieldValue, handleSubmit } = useFormik<Form>({
    onSubmit: async (data) => {
      console.debug({data})
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
      
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
      
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    },
    ...formikProps,
    validationSchema: object({
      email: string().email().required(),
      subject: string().required(),
      message: string().required()
    }),
    initialValues: {
      email: '',
      subject: '',
      message: ''
    }
  })
  
  const fieldProps = formFieldProps(errors, values, setFieldError, setFieldValue)

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/*<Link href="github.com">*/}
          {/*  <Image src={GithubIcon} alt="Github Icon" />*/}
          {/*</Link>*/}
          {/*<Link href="linkedin.com">*/}
          {/*  <Image src={LinkedinIcon} alt="Linkedin Icon" />*/}
          {/*</Link>*/}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <div className="flex flex-col">
            <TextInput {...fieldProps('email')} placeholder={"mariorossi@gmail.com"} label={"Your email"} />
            <TextInput {...fieldProps('subject')} placeholder={"Just saying hi"} label={"Subject"} />
            <TextArea {...fieldProps('message')} placeholder={"Let's talk about..."} label={"Message"} />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              onClick={() => handleSubmit()}
            >
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

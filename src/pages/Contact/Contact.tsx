import { CardContent, Grid } from "@mui/material";
import AppButton from "../../components/AppButton/AppButton";
import InputTextField from "../../components/AppInputText/AppInputText";
import st from "./style.module.scss";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ChangeEvent, FormEvent, useState } from "react";
import { EmailForm } from "../../types/types";

const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID || "";
const templateId = process.env.REACT_APP_TEMPLATE_ID || "";
const publicKey = process.env.REACT_APP_EMAIL_KEY || "";

const Contact = () => {
  const [showEmailSentLabel, setEmailSentLabel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState<EmailForm>({
    from_name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey).then(
        (result: EmailJSResponseStatus) => {
          setLoading(false);
          if (result.text === "OK") setEmailSentLabel(true);
          setDataForm({
            from_name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setEmailSentLabel(false);
        },
      );
    } catch (error) {
    }
  };

  return (
    <>
      <h1>Contact me!</h1>
      <CardContent>
        <h2>Fill up the form and get in touch.</h2>
        {showEmailSentLabel && (
          <h2 className={st.emailSentLabel}>
            Email sent successfully ✓
            <span
              onClick={() => {
                setEmailSentLabel(false);
              }}
              className={st.close}>
              x
            </span>
          </h2>
        )}
        <form
          className={st.container}
          onSubmit={(e: FormEvent<HTMLFormElement>) => sendEmail(e)}>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <InputTextField
                placeholder='Enter first name'
                label='First Name'
                variant='outlined'
                fullWidth={true}
                required={true}
                value={dataForm["from_name"]}
                name='from_name'
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                type='email'
                placeholder='Enter email'
                label='Email'
                variant='outlined'
                value={dataForm["email"]}
                name='email'
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputTextField
                label='Message'
                multiline
                rows={4}
                placeholder='Type your message here'
                variant='outlined'
                value={dataForm["message"]}
                name='message'
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <AppButton loading={loading} label='SEND' />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </>
  );
};

export default Contact;

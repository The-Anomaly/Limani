import axios from "axios";
import { HomeUI, GetStartedUI, Preloader, Toast } from "component";
import { MAILJET_API_KEY, MAILJET_SECRET_KEY } from "config";
import * as React from "react";

const Home = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [clear, setClear] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });
  const sendEmail = (data: any) => {
    setLoading(true);
    axios
      .post(
        "https://anomaly-mailer.netlify.app/.netlify/functions/server/mailjet",
        {
          messages: [
            {
              From: {
                Email: "zenna@zitrainvestments.com",
                Name: "Zenna",
              },
              To: [
                {
                  Email: "info@limaninigeria.com",
                  Name: "Limani",
                },
              ],
              Subject: "New Form Submission from limaninigeria.com",
              // TextPart: "My first Mailjet email",
              HTMLPart: `<h3>Hello Limani Admin,</h3>
            <p style="font-size:14px">You have received a form submission on your website. <br /> The details are below:</p>
            <ul style="font-size:14px">
            <li>First name: <b>${data.fullName}</b></li>
            <li>Email address: <b>${data.email}</b></li>
          ${
            data.message
              ? `<li>
                Message: <b>${data.message}</b>
              </li>`
              : ""
          }
            </ul>
            Best regards.
          `,
              CustomID: "AppGettingStartedTest",
            },
          ],
        },
        {
          headers: {
            "private-key": MAILJET_API_KEY,
            "secret-key": MAILJET_SECRET_KEY,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setClear(!clear);
          setShowForm(false);
          setToast({
            show: true,
            type: true,
            title: "Great",
            text: res.data.message,
          });
        }
      })
      .catch((err) => {
        setToast({
          show: true,
          type: false,
          title: "Error",
          text: err.response.data.message,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Preloader loading={loading} light={true} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <GetStartedUI
        show={showForm}
        closeModal={() => setShowForm(false)}
        submit={(data) => sendEmail(data)}
        clearForm={clear}
      />
      <HomeUI getStarted={() => setShowForm(true)} />
    </>
  );
};

export { Home };

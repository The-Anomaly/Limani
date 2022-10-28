import { MenuClose, SendIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

interface GetStartedData {
  fullName: string;
  email: string;
  message: string;
}

const initialValues: GetStartedData = {
  fullName: "",
  email: "",
  message: "",
};

const formSchema = yup
  .object({
    fullName: yup.string().required("Required"),
    message: yup.string().notRequired(),
    email: yup.string().email("Enter a valid email").required("Required"),
  })
  .required();

interface ApplyProps {
  show: boolean;
  closeModal: () => void;
  submit: (data: GetStartedData) => void;
  clearForm: boolean;
}

const GetStartedUI: React.FC<ApplyProps> = ({
  show,
  closeModal,
  submit,
  clearForm,
}) => {
  const modalBody = React.useRef(null);
  useOutsideAlerter(modalBody, closeModal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GetStartedData>({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<GetStartedData> = (data: GetStartedData) =>
    submit(data);

  React.useEffect(() => {
    reset();
  }, [clearForm]);

  if (!show) return null;

  return (
    <aside className={styles.dialog} role={"dialog"}>
      <div ref={modalBody} className={styles.body}>
        <MenuClose
          onClick={closeModal}
          className={styles.closeBtn}
          role="button"
        />
        <p className={styles.ttl}>Lets get you started</p>
        <p className={styles.txt}>
          Get in touch with us and we will take it from there
        </p>
        <form className={styles.contactForm}>
          <div className={`${styles.inputWrap}`}>
            <label>Full name</label>
            <input
              placeholder="Olivia Adebowale"
              type={"text"}
              {...register("fullName", {
                required: true,
              })}
            />
            {errors.fullName?.message ? (
              <p className={styles.errorMessage}>{errors.fullName?.message}</p>
            ) : (
              ""
            )}
          </div>

          <div className={styles.inputWrap}>
            <label>Email Address</label>
            <input
              placeholder="user@email.com"
              type={"text"}
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.message ? (
              <p className={styles.errorMessage}>{errors.email?.message}</p>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.inputWrap}`}>
            <label>Your message (optional)</label>
            <textarea
              placeholder="Enter message here"
              {...register("message", {
                required: true,
              })}
            />
            {errors.message?.message ? (
              <p className={styles.errorMessage}>{errors.message?.message}</p>
            ) : (
              ""
            )}
          </div>
          <button
            className={styles.contactBtn}
            onClick={handleSubmit(onSubmit)}
          >
            Send message <SendIcon />
          </button>
        </form>
      </div>
    </aside>
  );
};

export { GetStartedUI };

export const useOutsideAlerter = (ref: any, closeFunction: () => any) => {
  React.useEffect(() => {
    /**
     * Hide if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunction && closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

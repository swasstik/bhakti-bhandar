import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { BiTimeFive } from "react-icons/bi";
import * as yup from "yup";
import { useSearchParams } from "next/navigation";

import classes from "./form.module.css";

interface InitialValues {
  fullname: string;
  product: string;
  phone: string;
  add1: string;
  add2: string;
  city: string;
  state: string;
  pincode: number | null;
  quantity: number | null;
  sendby?: string | null;
}

const formValidation = yup.object({
  fullname: yup.string().required("Full Name is required!"),
  product: yup.string().required("Product is required!"),
  phone: yup.string().required("Phone Number is required!"),
  add1: yup.string().required("Address Line 1 is required!"),
  city: yup.string().required("City is required!"),
  state: yup.string().required("State is required!"),
  pincode: yup
    .number()
    .nullable()
    .typeError("Pin Code must be a number!")
    .required("Pin Code is required!"),
  quantity: yup
    .number()
    .nullable()
    .typeError("Quantity must be a number!")
    .required("Quantity is required!"),
});

interface FormProps {
  formattedTime: string;
}

const BasicInfoForm: React.FC<FormProps> = ({ formattedTime }) => {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [sucsess, setSuccess] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const dataArray = [
    { id: "14", value: "Activists of Pradeep ji Mishra page" },
    { id: "15", value: "Pandit Pradeep Mishra page" },
    { id: "16", value: "Atharv Tv" },
    { id: "17", value: "Sukhdeshwar Mahadev" },
    { id: "18", value: "Praveen Khire" },
    { id: "19", value: "Mohit Parmar Sanatani" },
    { id: "20", value: "Ravi Prakash Gupta" },
    { id: "21", value: "Monika Gupta" },
  ];

  useEffect(() => {
    const value = searchParams.get("id");
    setCurrentId(value);
  }, [searchParams]);

  const findValueById = (id: string | null) => {
    const item = dataArray.find((elem) => elem.id === id);
    return item ? item.value : "Organic";
  };

  const initialValues: InitialValues = {
    fullname: "",
    phone: "",
    city: "",
    add1: "",
    add2: "",
    state: "",
    pincode: null,
    product: "",
    quantity: null,
    sendby: "",
  };

  // Function to format the current date in a readable format
  const formatCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  // Function to make API call
  const submitToAPI = async (values: InitialValues, resetForm: () => void) => {
    setLoading(true);
    try {
      // Get the current date and time
      const currentDate = formatCurrentDate();

      // Determine the value of 'sendby' at the time of submission
      const sendbyValue = findValueById(currentId);

      // Include 'sendby', 'currentDate', and 'currentDateTime' in the data to be sent
      const dataToSend = {
        ...values,
        sendby: sendbyValue,
        currentDate,
      };

      const response = await fetch("https://sheetdb.io/api/v1/jd5", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataToSend }),
      });
      if (response.ok) {
        await response.json();
        resetForm();
        setSuccess(true);
      } else {
        console.log("Failed:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading to false when API call finishes
    }
  };

  return (
    <div className={classes.formBox}>
      {!sucsess ? (
        <>
          <p className={classes.Line1}>*अभी बुक करें और लें 40% ऑफ़*</p>
          <p className={classes.Line2}>
            नर्मदेश्वर शिवलिंग, मूल कीमत <del>&#x20b9; 1655 </del>, अब सिर्फ 999
            रुपये में।
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={formValidation}
            onSubmit={(values, { resetForm }) => {
              submitToAPI(values, resetForm);
            }}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit} className={classes.form}>
                <div className={classes.formField}>
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                  <ErrorMessage
                    className={classes.error}
                    component="div"
                    name="fullname"
                  />
                </div>
                <div className={classes.formField}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  <ErrorMessage
                    className={classes.error}
                    component="div"
                    name="phone"
                  />
                </div>
                <div className={classes.productAndQuantity}>
                  <div className={classes.product}>
                    <label htmlFor="product">Product</label>
                    <select
                      id="product"
                      name="product"
                      onChange={formik.handleChange}
                      value={formik.values.product}
                    >
                      <option value="" label="Select option" />
                      <option
                        value="फ्लैट जलाधारी नर्मदेश्वर शिवलिंग"
                        label="फ्लैट जलाधारी नर्मदेश्वर शिवलिंग &#x20b9; 949"
                      />
                      <option
                        value="फ्लैट जलाधारी नर्मदेश्वर शिवलिंग + नंदी"
                        label="फ्लैट जलाधारी नर्मदेश्वर शिवलिंग + नंदी &#x20b9; 999"
                      />
                      <option
                        value="डमरू जलाधारी नर्मदेश्वर शिवलिंग + नंदी"
                        label="डमरू जलाधारी नर्मदेश्वर शिवलिंग + नंदी &#x20b9; 1399"
                      />
                    </select>
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="product"
                    />
                  </div>
                  <div className={classes.quantity}>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1" // optionally set a minimum value
                      onChange={formik.handleChange}
                      value={
                        formik.values.quantity !== null
                          ? formik.values.quantity
                          : ""
                      }
                    />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="quantity"
                    />
                  </div>
                </div>
                <div className={classes.addressLines}>
                  <div className={classes.addressLine}>
                    <label htmlFor="add1">Address Line 1</label>
                    <input
                      id="add1"
                      name="add1"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.add1}
                    />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="add1"
                    />
                  </div>
                  <div className={classes.addressLine}>
                    <label htmlFor="add2">Address Line 2</label>
                    <input
                      id="add2"
                      name="add2"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.add2}
                    />
                  </div>
                </div>
                <div className={classes.formField}>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                  />
                  <ErrorMessage
                    className={classes.error}
                    component="div"
                    name="city"
                  />
                </div>
                <div className={classes.formField}>
                  <label htmlFor="pincode">Pin Code</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="number"
                    onChange={formik.handleChange}
                    value={
                      formik.values.pincode !== null
                        ? formik.values.pincode
                        : ""
                    }
                  />
                  <ErrorMessage
                    className={classes.error}
                    component="div"
                    name="pincode"
                  />
                </div>
                <div className={classes.formField}>
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                  />
                  <ErrorMessage
                    className={classes.error}
                    component="div"
                    name="state"
                  />
                </div>

                <div className={classes.timeleft}>
                  <span>
                    <BiTimeFive
                      style={{
                        paddingTop: "5px",
                        width: "20px",
                        height: "24px",
                      }}
                    />
                  </span>
                  <span>Sales Ending </span>
                  <span> {formattedTime}</span>
                </div>

                <div className={classes.submitBtnBox}>
                  {loading ? (
                    <div className={classes.loader}>Loading...</div> // Replace this with your own loader component
                  ) : (
                    <button type="submit" className={classes.submitBtn}>
                      Book Now
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <div className={classes.afterSubmitSuccess}>
          <p className={classes.shreeman}>श्रीमान/श्रीमती,</p>
          <p className={classes.confirmPara}>
            आपका ऑर्डर हमारे पास सफलतापूर्वक पंजीकृत हो चुका है। जल्द ही हम आपसे
            संपर्क कर ऑर्डर की पुष्टि और डिलीवरी की जानकारी देंगे।
          </p>
          <p>धन्यवाद</p>
          <p className={classes.coName}>Bhakti Bhandar</p>
        </div>
      )}
    </div>
  );
};

export default BasicInfoForm;

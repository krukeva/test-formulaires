import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

import {
  MyTextInput,
  MySelect,
  MyCheckbox,
  MyTextarea,
  MyRadioSelection,
} from "./StyledInput"

const Title = styled.h1`
  width: 100%;
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 1.5em;
`

const PageWrapper = styled.div`
  width: 500px;
  margin: auto;
`

const MyForm = styled(Form)`
  margin-top: 2em;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  margin-top: 2em;
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`

const SignupForm = () => {
  return (
    <PageWrapper>
      <Title>Subscribe!</Title>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
          message: "",
          choix: "un",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
          message: Yup.string()
            .min(15, "Must be 15 characters or more")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <MyForm>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyTextarea
            label="Message"
            name="message"
            placeholder="Un gentil message..."
          />

          <MyRadioSelection
            label="Choix cornélien"
            name="choix"
            values={[
              { label: "un", value: "un" },
              { label: "deux", value: "deux" },
              { label: "trois", value: "trois" },
              { label: "quatre", value: "quatre" },
              { label: "cinq", value: "cinq" },
              { label: "six", value: "six" },
              { label: "sept", value: "sept" },
              { label: "huit", value: "huit" },
              { label: "neuf", value: "neuf" },
              { label: "dix", value: "dix" },
              { label: "onze", value: "onze" },
              { label: "douze", value: "douze" },
            ]}
          />

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <Button type="submit">Submit</Button>
        </MyForm>
      </Formik>
    </PageWrapper>
  )
}

export default SignupForm

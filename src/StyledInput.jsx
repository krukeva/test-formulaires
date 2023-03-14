import { useField } from "formik"

import styled from "styled-components"

const FieldWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 300px;
  height: 35px;
  padding-left: 1em;
  border: ${(props) => props.border || "1px solid #ccc"};
  background-color: #fff;
`
const Select = styled.select`
  width: 300px;
  height: 35px;
  padding-left: 1em;
  border: ${(props) => props.border || "1px solid #ccc"};
  background-color: #fff;
`
const Checkbox = styled.input`
  margin-right: 2em;
  border: ${(props) => props.border || "1px solid #ccc"};
  background-color: #fff;
`
const Textarea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 0.5em;
  border: ${(props) => props.border || "1px solid #ccc"};
  background-color: #fff;
`

const Text = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 2em;
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.color || "#4d4d4d"};
`
const CheckboxText = styled(Text)`
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0 0 5px 0;
`

const Label = styled.label`
  display: flex;
  flex-direction: line;
  justify-content: space-between;
  align-items: center;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0 0 5px 0;
  padding: 0;
  position: relative;
`

const CheckboxLabel = styled.label`
  width: 300px;
  height: 35px;
  display: flex;
  align-items: center;
  flex-direction: line;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
`
const OptionWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: line;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
`
const OptionLabel = styled.label`
  padding: 1em;
  margin-right: 1em;
  flex-grow: 1;
  flex-shrink: 0;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  flex-basis: 50px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

export const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)

  const [field, meta] = useField(props)

  return (
    <FieldWrapper>
      <Label htmlFor={props.id || props.name}>
        {label}
        {meta.touched && meta.error ? (
          <Text color="red">{meta.error}</Text>
        ) : null}
      </Label>
      <Input
        {...field}
        {...props}
        border={meta.touched && meta.error && "1px solid red"}
      />
    </FieldWrapper>
  )
}

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" })

  return (
    <FieldWrapper>
      {meta.touched && meta.error ? (
        <CheckboxText color="red" className="error">
          {meta.error}
        </CheckboxText>
      ) : null}
      <CheckboxLabel>
        <Checkbox type="checkbox" {...field} {...props} />
        {children}
      </CheckboxLabel>
    </FieldWrapper>
  )
}

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FieldWrapper>
      <Label htmlFor={props.id || props.name}>
        {label}{" "}
        {meta.touched && meta.error ? (
          <Text color="red">{meta.error}</Text>
        ) : null}
      </Label>
      <Select
        {...field}
        {...props}
        border={meta.touched && meta.error && "1px solid red"}
      />
    </FieldWrapper>
  )
}

export const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <FieldWrapper>
      <Label htmlFor={props.id || props.name}>
        {label}{" "}
        {meta.touched && meta.error ? (
          <Text color="red">{meta.error}</Text>
        ) : null}
      </Label>
      <Textarea
        {...field}
        {...props}
        border={meta.touched && meta.error && "1px solid red"}
      />
    </FieldWrapper>
  )
}

// Radio input using a table for values
const MyRadioInput = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" })

  return (
    <OptionLabel>
      {label}
      <input type="radio" {...field} {...props} />
    </OptionLabel>
  )
}
export const MyRadioSelection = ({ label, name, values, ...props }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <OptionWrapper>
        {values.map((value, index) => {
          return (
            <MyRadioInput
              key={index}
              name={name}
              label={value.label}
              value={value.value}
            />
          )
        })}
      </OptionWrapper>
    </FieldWrapper>
  )
}

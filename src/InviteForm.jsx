import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik"

import styled from "styled-components"

const FormWrapper = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 50px;
  align-items: center;
  justify-items: center;
  gap: 25px;
`

const Col = styled.div`
  width: 100%;
  background-color: red;
`

const Button = styled.button`
  margin-top: 2em;
`

const initialValues = {
  friends: [
    {
      name: "",
      email: "",
    },
  ],
}

const InviteFriends = () => (
  <FormWrapper>
    <h1>Invite friends</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="friends">
            {({ insert, remove, push }) => (
              <TableWrapper>
                {values.friends.length > 0 &&
                  values.friends.map((friend, index) => (
                    <Row key={index}>
                      <Col>
                        <label htmlFor={`friends.${index}.name`}>Name</label>
                        <Field
                          name={`friends.${index}.name`}
                          placeholder="Jane Doe"
                          type="text"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </Col>
                      <Col>
                        <label htmlFor={`friends.${index}.email`}>Email</label>
                        <Field
                          name={`friends.${index}.email`}
                          placeholder="jane@acme.com"
                          type="email"
                        />
                        <ErrorMessage
                          name={`friends.${index}.name`}
                          component="div"
                          className="field-error"
                        />
                      </Col>
                      <Col>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          X
                        </button>
                      </Col>
                    </Row>
                  ))}
                <Button
                  type="button"
                  onClick={() => push({ name: "", email: "" })}
                >
                  Add Friend
                </Button>
              </TableWrapper>
            )}
          </FieldArray>
          <Button type="submit">Invite</Button>
        </Form>
      )}
    </Formik>
  </FormWrapper>
)

export default InviteFriends

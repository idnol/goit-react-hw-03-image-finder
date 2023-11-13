import { Field, Form, Formik } from 'formik';

export const Searchbar = ({submit}) => {
  return <Formik
    initialValues = {{
      query: '',
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      submit(values);
    }}>
    <header className="searchbar">
      <Form className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <Field
          name="query"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </header>
  </Formik>
}

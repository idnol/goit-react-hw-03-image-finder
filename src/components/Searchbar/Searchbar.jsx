import { Formik } from 'formik';
import { SearchButton, SearchButtonLabel, Field, Form, SearchStyled } from './Search.styled';

export const Searchbar = ({submit}) => {
  return <Formik
    initialValues = {{
      query: '',
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      submit(values);
    }}>
    <SearchStyled className="searchbar">
      <Form className="form">
        <SearchButton type="submit" className="button">
          <SearchButtonLabel className="button-label">Search</SearchButtonLabel>
        </SearchButton>
          <Field
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
      </Form>
    </SearchStyled>
  </Formik>

}

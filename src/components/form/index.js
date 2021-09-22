import './form.scss'; // import css

function Form({ submitButtonName }) {

  return (

  <div className="form">
    <form
      name="signup-form" 
      action="#"
    >
        <p>
          <label htmlFor="name">Name</label>
          <input 
              type="text" 
              name="name" 
              autoComplete="name" 
              aria-label="name"
              aria-required="true"
              aria-invalid="true"
              placeholder="name"
              required 
          />
        </p>

        <p>
          <label htmlFor="email">E-mail</label>
          <input 
              type="email" 
              name="email"
              autoComplete="email" 
              aria-label="email"
              aria-required="true"
              aria-invalid="true" 
              placeholder="name@example.com"
              required 
          />
        </p>

        <p className="btn">
          <input type="submit" value={submitButtonName} />
        </p>

    </form>
  </div>

  );
}

export default Form;

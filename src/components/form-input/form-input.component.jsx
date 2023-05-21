import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' { ...otherProps} />
      { label &&
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  )
}

export default FormInput

/*
Do it as an object instead of a spread 
const FormInput = ({ label, inputOptions }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
          >
          {lable}
          </label>
      )}
    </div>
  )
}
*/

// On the actual form page It would look like this
//   <FormInput
//    label = 'Display Name'
//    inputOptions = {{
//    type: 'text',
//    required: true,
//    onChange: handleChange,
//    name: 'displayName',
//    value:displayName  
// }}
// />
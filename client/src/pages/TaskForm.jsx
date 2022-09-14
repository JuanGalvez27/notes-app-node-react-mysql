import {Form, Formik} from 'formik'

const TaskForm = () => {
  return (
    <div>
      <Formik>
        initialValues = {{
          title: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        {(handleChange, handleSubmit) => (
          <Form onSubmit={handleSubmit}>
          <label>Title</label>
          <input 
            type="text" 
            name='title' 
            placeholder='Write a title'
            onChange={handleChange}/>

          <label>Description</label>
          <textarea 
            name="description" 
            rows="3" 
            placeholder="Write a description"
            onChange={handleChange}
          ></textarea>
            <button>
              Save
            </button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm
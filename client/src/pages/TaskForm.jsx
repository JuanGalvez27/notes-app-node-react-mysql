import {Form, Formik} from 'formik'
import {createTaskRequest} from '../api/task.api.js'

const TaskForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try{
            const response = await createTaskRequest(values);
          } catch (error){
            console.error(error);
          }
        }}
      >
        {({handleChange, handleSubmit}) => (
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
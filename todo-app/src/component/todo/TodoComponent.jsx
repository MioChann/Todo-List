import { useNavigate, useParams } from "react-router-dom"
import { createApi, retrieveTodoApi, updateApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContex"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Formik } from "formik"
import { Form } from "formik"
import moment from "moment"
//update, create page 
export default function TodoComponent() {
    const { id } = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    const navigator = useNavigate()

    const authContex = useAuth()
    const username = authContex.username



    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos() {

        if (id != -1) {
            retrieveTodoApi(username, id)
                .then(response => {
                    //lấy giá trị description và targetDate từ api
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error => console.log(error))
        }

    }

    //submit form update Todo
    function onSubmit(values) {
        console.log(username)
        //like json in postman
        const todo = {
            id: id,
            username: 'Miochan',
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        if (id == -1) {
            //create Todo    
            createApi('Miochan', todo)
                .then(response => {
                    navigator('/todo')

                })
                .catch(error => console.log(error))
        }
        else {
            //update Todo 
            updateApi(username, id, todo)
                .then(response => {
                    navigator('/todo')

                })
                .catch(error => console.log(error))
        }

    }
    //valid các giá trị khi nhập 
    function validate(values) {
        let error = {
            //     description : 'Invalid description',
            //     targetDate :'Invalid targetdate'
        };
        if (values.description.length < 5) {
            error.description = 'enter at least 5 characters'
        }

        if (values.targetDate.length == null || values.targetDate == '' || !moment(values.targetDate).isValid()) {
            error.description = 'enter targetDate'
        }

        return error
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                >
                    {
                        (props) => (
                            <Form>

                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />


                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>

                                <div>
                                    <button type="submit" className="btn btn-success m-5" >Save</button>
                                </div>


                            </Form>
                        )}
                </Formik>
            </div>
        </div>
    )
}

import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ITask from '../../models/Task'
import { useAppDispatch } from '../../store/hooks'
import { addTask } from '../../store/slices/taskSlice'

interface TaskModalFormProps {
  show: boolean
  onHide: () => void
}

const TaskModalForm = (props: TaskModalFormProps) => {
  const [date, setDate] = useState(new Date())
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isValid, setIsValid] = useState(true)
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    let todaysDate = new Date()
    todaysDate.setHours(0, 0, 0, 0)
    if (date >= todaysDate) {
      setIsValid(true)
      const task: ITask = {
        id: nanoid(),
        title,
        description,
        date: date.toISOString().slice(0, 10),
        isActive: false,
        isDone: false,
      }

      dispatch(addTask(task))
      props.onHide()
    } else {
      setIsValid(false)
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Add new task</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task description</Form.Label>

            <Form.Control
              as="textarea"
              aria-label="With textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="date"
              name="duedate"
              placeholder="Due date"
              value={date.toISOString().slice(0, 10)}
              onChange={(e) => setDate(new Date(e.target.value))}
              isInvalid={!isValid}
            />
            {!isValid ? (
              <Form.Control.Feedback type="invalid">
                Date must be equal to or greater than the current date
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskModalForm

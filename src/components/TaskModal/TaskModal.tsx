import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ITask from '../../models/Task'

interface TaskModalProps {
  show: boolean
  onHide: () => void
  task: ITask
}

const TaskModal = (props: TaskModalProps) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.task.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.task.date}</h4>
        <p>{props.task.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TaskModal

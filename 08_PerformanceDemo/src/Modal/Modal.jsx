// creating a simple modal component that can be reused across the application
export default function Modal({ setIsOpen }) {
    return (
        <div className="modal" >
            <h2>Modal</h2>
            <p>This is a simple modal component.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>

        </div>
    )
}
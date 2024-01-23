import { doc, updateDoc, arrayRemove, arrayUnion, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../Config/firebase';
import { toast } from 'react-toastify';

// Handling status changing from complete,favourite and delete in the HomeRight Component
export const handleStatusChange = async (todoId, status, setShowSug) => {
    try {
        const todoDoc = doc(db, 'todos', todoId);
        setShowSug(false);

        const todoSnapshot = await getDoc(todoDoc);
        const currentStatusArray = todoSnapshot.data().status;

        if (currentStatusArray?.includes('Pending')) {
            await updateDoc(todoDoc, { status: arrayRemove('Pending') });
        }

        const statusExists = currentStatusArray?.includes(status);

        if (statusExists) {
            await updateDoc(todoDoc, { status: arrayRemove(status) });
        } else {
            if (status === 'Delete') {
                await updateDoc(todoDoc, { status: [status] });
                toast.success('deleted successfully')
                return
            }
            await updateDoc(todoDoc, { status: arrayUnion(status) });
            toast.success('updated successfully')
        }

        console.log('Status updated successfully');
    } catch (error) {
        console.error('Error updating status:', error);
    }
};

// Removing task from the list and database in the TodoItem component.

export const deleteTask = async (id, setShowSug) => {
    try {
        const todoDoc = doc(db, 'todos', id);
        await deleteDoc(todoDoc);
        setShowSug(false);
        toast.success('removed successfull')
        console.log(`Task with ID ${id} deleted successfully`);
    } catch (error) {
        toast.error('Error deleting task:', error)
        console.error('Error deleting task:', error);
    }
};


import Swal from "sweetalert2";
import apiClient from "../../../api/apiClient";
import Button from "../../../components/Button";
import IndexEntities from "../../../components/IndexEntities";
import { useEntities } from "../../../hooks/useEntities"
import type EditClaim from "../models/EditClaim.model";
import type User from "../models/User.model"

export default function IndexUsers() {

    const usersHook = useEntities<User>('/users/usersList');

    async function makeAdmin(email: string) {
        await editAdmin('/users/makeadmin', email);
    }

    async function removeAdmin(email: string) {
        await editAdmin('/users/removeadmin', email);
    }

    async function editAdmin(url: string, email: string) {
        const editClaimDTO: EditClaim = { email };

        await apiClient.post(url, editClaimDTO);
        Swal.fire({title: 'Success', icon: 'success', text: 'The operation was done successfully'});
    }

    return (
        <>
            <IndexEntities<User> title='Users' {...usersHook}>
                {(users) => <>
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col" className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => <tr key={user.email}>
                            <td>{user.email}</td>
                            <td className="text-end">
                                <Button onClick={() => makeAdmin(user.email)}>Make admin</Button>
                                <Button onClick={() => removeAdmin(user.email)} className="btn btn-danger ms-1">Remove admin</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </>}
            </IndexEntities>
        </>
    )
}
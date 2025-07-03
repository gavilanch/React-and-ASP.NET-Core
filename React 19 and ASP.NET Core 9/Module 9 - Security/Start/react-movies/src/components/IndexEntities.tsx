import { NavLink } from "react-router";
import apiClient from "../api/apiClient";
import Loading from "./Loading";
import Pagination from "./Pagination";
import GenericList from "./GenericList";
import Button from "./Button";
import customConfirm from "../utils/customConfirm";
import type React from "react";

export default function IndexEntities<T>(props: IndexEntitiesProps<T>) {
    async function deleteEntity(id: number) {
        await apiClient.delete(`${props.url}/${id}`);
        if (props.page === 1) {
            props.loadRecords();
        } else {
            props.setPage(1);
        }
    }

    const buildButtons = (editUrl: string, id: number) => <>
        <NavLink to={editUrl} className="btn btn-sm btn-outline-primary me-2">
            <i className="bi bi-pencil me-1"></i> Edit
        </NavLink>
        <Button onClick={() => customConfirm(() => deleteEntity(id))} className="btn btn-sm btn-outline-danger me-2">
            <i className="bi bi-trash me-1"></i> Delete
        </Button>
    </>

    return (
        <>
            <h3>{props.title}</h3>
            <div className="mb-2">
                <NavLink to={props.urlCreate} className="btn btn-primary">Create {props.entity}</NavLink>
            </div>

            {props.loading ? <Loading /> : <>
                <div className="mb-2">
                    <Pagination
                        totalAmountOfRecords={props.totalAmountOfRecords}
                        currentPage={props.page}
                        recordsPerPage={props.recordsPerPage}
                        onPaginateChange={(page, recordsPerPage) => {
                            props.setPage(page);
                            props.setRecordsPerPage(recordsPerPage);
                        }}
                        recordsPerPageOptions={[5, 20, 50]} />
                </div>

                <GenericList list={props.entities}>
                    <table className="table table-hover align-middle shadow-sm border rounded overflow-hidden">
                        {props.children(props.entities!, buildButtons)}
                    </table>
                </GenericList>
            </>}
        </>
    )
}

interface IndexEntitiesProps<T> {
    title: string;
    entity: string;
    entities?: T[];
    url: string;
    urlCreate: string;
    page: number;
    recordsPerPage: number;
    totalAmountOfRecords: number;
    loading: boolean;
    loadRecords: () => void;
    setPage: (page: number) => void
    setRecordsPerPage: (recordsPerPage: number) => void;
    children: (entities: T[], 
        buildButtons: (editUrl: string, id: number) => React.ReactNode
    ) => React.ReactNode
}
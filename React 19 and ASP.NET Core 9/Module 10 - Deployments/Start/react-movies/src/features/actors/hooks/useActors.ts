import { useState, useEffect, useCallback } from "react";
import apiClient from "../../../api/apiClient";
import type Actor from "../models/Actor.model";

export function useActors() {
    const [actors, setActors] = useState<Actor[]>();
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadRecords = useCallback(() => {
        apiClient.get(`/actors`, {
            params: { page, recordsPerPage }
        }).then(res => {

            const totalAmountOfRecords = parseInt(res.headers['total-records-count'], 10);
            setTotalAmountOfRecords(totalAmountOfRecords);

            setActors(res.data);
            setLoading(false);
        });
    }, [page, recordsPerPage]);

    useEffect(() => {
        setLoading(true);
        loadRecords();
    }, [loadRecords]);

    return { loading, page, recordsPerPage, totalAmountOfRecords, setPage, setRecordsPerPage, actors, loadRecords }
}
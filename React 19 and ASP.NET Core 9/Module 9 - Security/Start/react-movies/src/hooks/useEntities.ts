import { useState, useCallback, useEffect } from "react";
import apiClient from "../api/apiClient";

export function useEntities<T>(url: string) {
    const [entities, setEntities] = useState<T[]>();
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadRecords = useCallback(() => {
        apiClient.get(url, {
            params: { page, recordsPerPage }
        }).then(res => {

            const totalAmountOfRecords = parseInt(res.headers['total-records-count'], 10);
            setTotalAmountOfRecords(totalAmountOfRecords);

            setEntities(res.data);
            setLoading(false);
        });
    }, [page, recordsPerPage, url]);

    useEffect(() => {
        setLoading(true);
        loadRecords();
    }, [loadRecords]);

    return { loading, page, recordsPerPage, totalAmountOfRecords, 
        setPage, setRecordsPerPage, entities, loadRecords }
}
import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (
    defaultAxiosParams,
    onSuccess = (response) => {},
    onFailure = (error) => {},
    onLoading = (loading) => {}
) => {
    const [axiosParams, setAxiosParams] = useState({});
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (params) => {
        params = Object.assign({}, axiosParams, params);
        setResponse(undefined);
        setError(null);
        setLoading(true);
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (er) {
            if (er.response) {
                if (er.response.data.message) {
                    setError(er.response.data.message);
                } else {
                    setError(er.response.data);
                }
            } else if (er.request) {
                setError("The request was made but no response was received");
            } else {
                setError(er.message);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if ((response || !error) && response !== undefined) {
            onSuccess(response);
        }
    }, [response]);

    useEffect(() => {
        if (error) {
            onFailure(error);
        }
    }, [error]);

    useEffect(() => {
        onLoading(loading);
    }, [loading])

    useEffect(() => {
        setAxiosParams(defaultAxiosParams);
    }, []);

    return {
        request,
        response,
        error,
        loading,
    };
};

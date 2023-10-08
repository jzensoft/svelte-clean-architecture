class DataState<T>{
    data?: T | null;
    success: boolean;
    error?: string | null;

    constructor(data: T | null, success: boolean, error: string | null) {
        this.data = data
        this.success = success
        this.error = error
    }
}

export default DataState
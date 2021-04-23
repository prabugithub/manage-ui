

export enum HTTP_CODES {
    OK = 200,
    CREATE = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    NOT_AUTHERIZED = 401
}


export interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    workingPosition: WorkingPosition
}

export enum WorkingPosition {
    JUNIOR,
    PROGRAMMER,
    ENGINEER,
    EXPERT,
    MANAGER
}
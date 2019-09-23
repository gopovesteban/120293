export enum Status {
    PENDING = 'pending',
    rejected = 'rejected',
    APPROVED = 'approved'
}

export interface PoC {
    _id?: string;
    name: string;
    owner: string;
    collaborators: any[];
    presentationDate: Date;
    pathway: string;
    status: Status;
    description?: string;
    createdAt: Date;
}

export interface Worker {
    name: string;
    id: string;
    imgUrl: string;
    isOwner?: boolean;
}

export interface Pathway {
    name: string;
    owner: string;
}

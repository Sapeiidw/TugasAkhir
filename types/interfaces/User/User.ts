export interface User {
    _createdAt: Date;
    _id: string;
    _updatedAt: Date;
    email: string;
    facebook: string;
    firstName: string;
    google: string;
    isEmailVerified: boolean;
    lastName: string;
    phoneNumber: string;
    role: string[];
}
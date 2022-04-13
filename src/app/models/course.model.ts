export interface Course {
    id?: string;
    name?: string;
    direction?: string;
    description?: string;
    duration?: number;
    completed?: string;
    image?: string;
    themes?: Theme[];
}

export interface Theme {
    name?: string;
    order?: number;
    lessons?: Lesson[]
}

export interface Lesson {
    name?: string;
    order?: number;
    content?: string;
    completed?: boolean;
}

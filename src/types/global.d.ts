declare module '*.png' {
    const image: string;

    export default image;
}

type Course = {
    id: string;
    title: string;
    image: string;
    author: string;
    rating: number;

    finished: boolean;
    inProgress: boolean;
}
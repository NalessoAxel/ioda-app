export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'; 

export const fromImageToURl = (image) => {
    if(!image) {
        return null;
    }
    if(image.url.indexOf('/') === 0) {
        return `${API_URL}${image.url}`;
    }
    return image.url;
}
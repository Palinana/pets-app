import axios from 'axios';

/* ACTION TYPES */
const GET_PETS = 'GET_PETS';
const SELECT_IMAGE = 'SELECT_IMAGE';
const SELECT_ALL_IMAGES = 'SELECT_ALL_IMAGES';
const REMOVE_DOWNLOADED_IMAGES = 'REMOVE_DOWNLOADED_IMAGES';

/* ACTION CREATORS */
const getPets = (pets) => ({ type: GET_PETS, pets })
const selectImage = (image) => ({ type: SELECT_IMAGE, image })
const selectAllImages = () => ({ type: SELECT_ALL_IMAGES })
const removeDownloadedImages = () => ({ type: REMOVE_DOWNLOADED_IMAGES })


/* THUNK CREATORS */
export const fetch_pets = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://eulerity-hackathon.appspot.com/pets`);
        console.log(res);

        dispatch(getPets(res.data))
    } catch (err) {
        console.error(err)
    }
}

export const select_image = (image) => {
    return (dispatch) => {
        dispatch(selectImage(image));
    }
};

export const select_all_images = () => {
    return (dispatch) => {
        dispatch(selectAllImages());
    }
};

export const remove_downloaded_images = () => {
    return (dispatch) => {
        dispatch(removeDownloadedImages());
    }
};

const initialState = { 
    pets: [], 
    selectedImages: [] 
};

/* REDUCER */
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PETS:
            return {
                ...state, 
                pets: action.pets,
            }
        case SELECT_IMAGE:
            const imageCopy = state.selectedImages.find(image => {
                return image.url === action.image
            }); 
            if (!imageCopy) {
                return {
                    ...state, 
                    selectedImages: [...state.selectedImages, { url: action.image, selected: true }]
                }
            } 
        case SELECT_ALL_IMAGES:
            return {
                ...state, 
                selectedImages: state.pets
            }
        case REMOVE_DOWNLOADED_IMAGES:
            return {
                ...state, 
                selectedImages: []
            }
        default:
            return state
    }
}

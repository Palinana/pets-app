import React, { useEffect, useState,useRef } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import ImageList from '@mui/material/ImageList';
import axios from 'axios';
import { saveAs } from 'file-saver'

import { useDispatch, useSelector } from 'react-redux';
import { fetch_pets, select_image, select_all_images, remove_downloaded_images } from '../store/pets';

import PetCard from './pets/PetCard';

const Index = () => {
    const [isActive, setActive] = useState("false");
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const dispatch = useDispatch();
    const petsData = useSelector(state => state.pets.pets);

    const selectedImages = useSelector(state => state.pets.selectedImages);

    useEffect(() => {
        dispatch(fetch_pets())
    }, [dispatch]);

    const selectImage = (selectedImage) => {
        if (selectedImages) {
            dispatch(select_image(selectedImage));
        }
    };

    const existsInImages = (url) => {
        return selectedImages.some(image => image.url === url);
    };

    const unselectImages = () => {
        dispatch(remove_downloaded_images());
    };

    const downloadImages = () => {
        selectedImages.map(image => {
            saveAs(image.url + '.jpg'); 
        })
        dispatch(remove_downloaded_images());
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = petsData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
            })
            setFilteredResults(filteredData);
        }
        else{
            setFilteredResults(petsData);
        }
    }

    return (
        <div className="container">
            <div className="header-container">
                <div className="header-box header-search">
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Image"
                            inputProps={{ 'aria-label': 'search image' }}
                            onChange={(e) => searchItems(e.target.value)}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
            
                <div className="header-box header-buttons">
                    <Button 
                        style={{
                            border: '1px solid #f56a45',
                            color: '#F56A45',
                            '&:hover': {
                                backgroundColor: '#F56A45',
                            }
                        }}
                        variant="outlined"
                        onClick={() => dispatch(select_all_images())}
                    >
                        Select All
                     </Button>

                    <Button 
                        style={{
                            border: '1px solid #f56a45',
                            color: '#F56A45',
                            '&:hover': {
                                backgroundColor: '#F56A45',
                            }
                        }}
                        variant="outlined"
                        onClick={() => unselectImages()}
                    >
                        Unselect All
                    </Button>

                    <Button 
                        style={{
                            boxShadow: 'none',
                            backgroundColor: '#F56A45',
                            '&:hover': {
                                backgroundColor: '#F56A45',
                            }
                        }}
                        variant="contained"
                        onClick={() => downloadImages()}
                    >
                        Download Images
                    </Button>
                </div>
            </div>

            <div className="images-container">
                <ImageList variant="masonry" cols={3} gap={8}>
                    {searchInput.length > 1 ? (
                        filteredResults.map((pet, index) => {
                            return (
                                <PetCard 
                                    pet={pet} 
                                    onClick={e => selectImage(pet.url)} 
                                    key={index}
                                    existsInImages={existsInImages}
                                />
                            )
                        })
                    ) : (
                        petsData.map((pet, index) => {
                            return (
                                <PetCard 
                                    pet={pet} 
                                    onClick={e => selectImage(pet.url)} 
                                    key={index}
                                    existsInImages={existsInImages}
                                />
                            )
                        })
                    )}
                 </ImageList>
            </div>
        </div>
    )
}

export default Index;

import React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';

const PetCard = ({ pet, onClick, existsInImages }) => {
    return (
        <ImageListItem 
            key={pet.url} 
            onClick={onClick}
            className={`${existsInImages(pet.url) ? "selected" : ""}`}
        >
            <img
                src={`${pet.url}?w=248&fit=crop&auto=format`}
                srcSet={`${pet.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={pet.title}
                loading="lazy"
            />
            <ImageListItemBar position="below" align="center" title={pet.title} />  
        </ImageListItem>
    )
}

export default PetCard;

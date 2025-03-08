import React from 'react';
import { ArrowRight } from 'lucide-react';

// Define the shape of the item using PropTypes
import PropTypes from 'prop-types';

const ProjectItems = ({ item }) => {
    return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt={item.title} />
            <h3 className="project__title">{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="project__button">
                View Project <ArrowRight className="project__button-icon" size={16} />
            </a>
        </div>
    );
}

ProjectItems.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectItems;
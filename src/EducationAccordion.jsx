import { useState } from 'react';
import './EducationAccordion.css';

function EducationAccordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordion-section__title--open" : " ";
    return (
        <div className='accordion-section'>
        
        <button 
        className={`accordion-section__title ${openClass}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen ? "true" : "false"}
        >
        <span>{title}</span>    
        </button>
        { isOpen && (
            <div className='accordion-section__content'>
                {children}
            </div>
        )}
    </div>
    );
}

export default EducationAccordion;
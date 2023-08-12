import { useState } from 'react';
import './AccordionSection.css';

function AccordionSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openClass = isOpen ? "accordion-panel--open" : " ";
    return (

        <>
            <div className='expand-button'>
                <button
                    className={`accordion-panel ${openClass}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span>{title}</span>
                </button>
            </div>
            {isOpen && (
                <div className='accordion-panel__content'>
                    {children}
                </div>
            )}

        </>
    );
}

export default AccordionSection;
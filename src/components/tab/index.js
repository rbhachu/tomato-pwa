import React, { useState } from 'react';

function Tab({ data, arialabel, tableCaption }) {

const [activeID, setActiveID] = useState(1); // default tab index to show on page load - default is 1

  return (

    <div className="tabs">
        
        <div 
            role="tablist" 
            aria-label={arialabel}
            className="tab-list"
        >
            {data.map(({ dataId, dataTitle }) => (

                (
                    <button 
                        key={dataId}
                        role="tab" 
                        aria-selected={activeID === dataId ? ('true') : ('false')}
                        aria-controls={`panel-${dataId}`} 
                        id={`tab-${dataId}`} 
                        tabIndex={activeID === dataId ? ('0') : ('-1')}  
                        onClick={() => setActiveID(dataId)}
                        className={activeID === dataId ? ('tab-active') : ('tab-inactive')}                     
                    >
                        {dataTitle}
                        
                    </button>
                )

            ))}
        </div>

        <div className="tab-content">
            {data.map(({ dataId, dataContent }) => (
                ((activeID === dataId) ?
                    (
                        <div 
                            key={dataId}
                            id={`panel-${dataId}`} 
                            role="tabpanel" 
                            tabIndex="0"
                            aria-labelledby={`tab-${dataId}`}
                            className="tab-pane active"
                            //className="tab-content"
                            >
                            <div 
                                className="tab-content" 
                                dangerouslySetInnerHTML={{__html: `<p>${dataContent}</p>`}}>
                            </div>
                        </div>
                    )
                :
                    (
                        <div 
                            key={dataId}
                            id={`panel-${dataId}`} 
                            role="tabpanel" 
                            tabIndex="0"
                            aria-labelledby={`tab-${dataId}`}
                            className="tab-pane"
                            //className="tab-content hidden"
                            hidden
                        >
                            <div 
                                className="tab-content" 
                                dangerouslySetInnerHTML={{__html: `<p>${dataContent}</p>`}}>
                            </div>
                        </div>
                    )
                )
            ))}
        </div>

    </div>
  );
}

export default Tab;

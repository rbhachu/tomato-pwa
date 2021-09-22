import './table-2-column.scss'; // import css

function Table2Column({ data, tableCaptionHeading, tableCaptionSubHeading }) {
  return (
    <>

        <table>
            <caption>        
                <span className="sub-heading">{tableCaptionHeading}</span>
                {tableCaptionSubHeading}
            </caption>
            <tbody>

                {data.map(({ dataId, dataTitle, dataContent }) => (
                
                    ((dataId === 1) ?
                        (<tr className="table-header" key={dataId}>
                            <th>{dataTitle}</th>
                            <th>{dataContent}</th>
                        </tr>)
                    :
                        (<tr key={dataId} className="table-data">
                            <td>{dataTitle}</td>
                            <td>{dataContent}</td>
                        </tr>)
                    )

                ))}
                
            </tbody>
        </table>

    </>
  );
}

export default Table2Column;

import { Button } from 'antd';
import React from 'react'
import { useReactToPrint } from "react-to-print";


const PrintComponent = ({ componentRef }) => {
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Completed Requests',
        onAfterPrint: () => console.log('Printed PDF successfully!'),
    });
    return (
        <Button type="primary" onClick={handlePrint} style={{ float: 'right' }}>Generate Report</Button>
    )
}

export default PrintComponent
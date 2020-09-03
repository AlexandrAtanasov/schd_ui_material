import { MainLayout } from '../../layouts/second/MainLayout'
import TableComponent from '../../Components/Second/TableComponent'

export default function SCHDPage() {
    return (
        <MainLayout
            title='SCHD APP'
            description='Description for SCHD Page'
            pageName='SCHD'
        >
            <h1>SCHD Page</h1>
            <TableComponent />
        </MainLayout>
    )
} 
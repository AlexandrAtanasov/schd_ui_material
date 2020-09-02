import { MainLayout } from '../layouts/MainLayout'
import TableComponent from '../Components/TableComponent'

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
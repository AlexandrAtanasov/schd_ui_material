import { MainLayout } from '../layouts/MainLayout'
import InformationCard from '../Components/InformationCard'

export default function InformationPage() {
    return (
        <MainLayout
            title='Information'
            description='Description for information page'
            pageName='Information'
        >
            <h1>Information Page</h1>
            <div style={{margin: "1rem"}}>
                <InformationCard />

            </div>
        </MainLayout>
    )
} 
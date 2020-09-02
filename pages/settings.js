import { MainLayout } from '../layouts/MainLayout'
import SettingsPanelComponent from '../Components/SettingsPanelComponent'

export default function SettingsPage() {
    return (
        <MainLayout
            title='Settings'
            description='Description for settings page'
            pageName='Settings'
        >
            <SettingsPanelComponent />
        </MainLayout>
    )
} 
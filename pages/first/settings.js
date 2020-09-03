import { MainLayout } from '../../layouts/first/MainLayout'
import SettingsPanelComponent from '../../Components/First/SettingsPanelComponent'

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
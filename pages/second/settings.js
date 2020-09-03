import { MainLayout } from '../../layouts/second/MainLayout'
import SettingsPanelComponent from '../../Components/Second/SettingsPanelComponent'

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
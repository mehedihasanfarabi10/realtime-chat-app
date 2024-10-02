import { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingContext';

// ----------------------------------------------------------------------

const useSettings = () => {
    return useContext(SettingsContext);
}

export default useSettings;
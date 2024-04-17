import { useContext} from 'react';
import './App.css';

import { DataContext } from './context/DataContext';
import forms from './constants/forms';
import AfterSubmitting from './components/AfterSubmitting';
import NeoPopTiltedButton from './components/buttons/NeoPopTiltedButton';

const App: React.FC = () => {
  const {currentStep,isSubmitted,previousStep} = useContext(DataContext)

  if(isSubmitted) return <AfterSubmitting/>;
  return (
    <div className="max-w-5xl p-4 mx-auto">
      {currentStep > 0 && (
          <div className="block md:hidden my-6 md:my-0">
            <NeoPopTiltedButton onClick={previousStep}>Previous Screen</NeoPopTiltedButton>
          </div>
        )}
      <div className="mt-12">
        {forms[currentStep]}
      </div>
    </div>
  );
};

export default App;
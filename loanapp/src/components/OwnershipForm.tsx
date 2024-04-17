import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const OwnershipForm: React.FC = () => {
  const {setOwnershipDetails,ownershipDetails} = useContext(DataContext)
  const [ownershipPercentage, setOwnershipPercentage] = useState<number>(ownershipDetails.ownershipPercentage);
  const [isAuthorizedOwner, setIsAuthorizedOwner] = useState<boolean>(true);

  const handleOwnershipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnershipPercentage(parseFloat(event.target.value));
    setOwnershipDetails(
      {
        ownershipPercentage:parseFloat(event.target.value),
        isAuthorizedOwner
      }
    )
  };

  const handleAuthorizationClick = (isAuthorized: boolean) => {
    setIsAuthorizedOwner(isAuthorized);
    setOwnershipDetails(
      {
        ownershipPercentage,
        isAuthorizedOwner:isAuthorized
      }
    )
  };

  const verifyForm= ()=>{
    console.log(ownershipDetails)
    if(!(ownershipDetails.ownershipPercentage)){
      return {
        isValid:false,
        message:"please add ownership percentage",
      }
    }
    if(ownershipDetails.ownershipPercentage < 1){
      return{
        isValid:false,
        message:"your ownership percentage should be more than 0%"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="vis-5ir">
      <h2 className="mb-8">What's your ownership percentage?</h2>
      <div className="wrapper-p3a">
        <label htmlFor="loanAmount" className="text-lg my font-bold"> Ownership Percentage</label>
        <input
          type="number"
          id="ownershipPercentage"
          name="Ownership-pct"
          placeholder="100"
          style={{color:"black",textAlign:"left",padding:"8px"}}
          value={ownershipPercentage}
          onChange={handleOwnershipPercentageChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-492"></span>
        <div style={{ marginTop: '24px' }}>
          <label htmlFor="loanAmount" className="text-lg my font-bold"> Are you an authorized owner for this business?</label>

          <div style={{ display: 'flex',gap:"4px" }}>
            <button
              className={`button-yvf p-4 rounded-md text-xl ${isAuthorizedOwner ? 'bg-yellow-500' : 'bg-white'}`}
              onClick={() => handleAuthorizationClick(true)}
            >
              Yes
            </button>
            &nbsp;
            <button
              className={`button-yvf p-4 rounded-md text-xl ${!isAuthorizedOwner ? 'bg-yellow-500' : 'bg-white'}`}
              onClick={() => handleAuthorizationClick(false)}
            >
              No
            </button>
            <input type="hidden" id="Ownership-manager" name="Ownership-manager" value={isAuthorizedOwner ? '1' : '0'} />
          </div>
        </div>
      </div>
      <div className="dis-vo3"></div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default OwnershipForm;
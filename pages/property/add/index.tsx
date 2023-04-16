import BasicContainer from '@components/basic-container';
import { useGlobalContext } from 'contexts';
import React, { useReducer, useState } from 'react';
import get from 'lodash-es/get'

type AvailablityOption = 'Immediately' | 'Not Available' | 'After While';
const NewPropertyPage = () => {
  const { toggleHamBurger, isHamburgerOpen } = useGlobalContext();
  const [data, updateData] = useReducer((prev: any, next: any) => {
    return {...prev, ...next};
  }, {
    propertyName: null,
    state: null,
    city: null,
    lat: null,
    long: null,
    area: null,
    address: null,
    price: 0,
    deposit: 0,
    otherCharges: [],
    availablity: 'Immediately'
  })

  const [otherCharges, setOtherCharges] = useState<any>([]);
  const [availablity, setAvailablity] =
    useState<AvailablityOption>('Immediately');

  const handleAvailablityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAvailablity(event.target.value as AvailablityOption);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: any = get(e, 'target.name', null);
    const value = get(e, 'target.value', null);

    updateData({
      [name]: value
    })
  }

  const handleAddCharge = () => {
    setOtherCharges([...otherCharges, '']);
  };

  const handleOtherCharges = (e: any, index: any) => {
    const charges: any = [...otherCharges];
    charges[index] = e.target.value;
    setOtherCharges(charges);
  };

  return (
    <BasicContainer
      loggedin={true}
      isHamburgerOpen
      toggleHamBurger={() => toggleHamBurger(!isHamburgerOpen)}
    >
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Create a New Property</h2>
          <form className="grid grid-cols-2 gap-3 space-y-4" action="#">
            <div className="flex flex-col space-y-2 mt-3">
              <label htmlFor="property-name" className="font-medium">
                Property Name:
              </label>
              <input
                id="property-name"
                type="text"
                value={data.propertyName}
                onChange={(e) => handleChange(e)}
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="state" className="font-medium">
                State:
              </label>
              <select
                id="state"
                value={data.state}
                onChange={(e) => handleChange(e)}
                className="rounded-md border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2"
              >
                <option value=""></option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="city" className="font-medium">
                City:
              </label>
              <select
                id="city"
                value={data.city}
                onChange={(e) => handleChange(e)}
                className="rounded-md border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2"
              >
                <option value=""></option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York City">New York City</option>
                <option value="Houston">Houston</option>
                <option value="Miami">Miami</option>
              </select>
            </div>
            <div className="flex flex-row mb-4 gap-3">
              <div>Lat: <input type={`text`} onChange={(e) => handleChange(e)} value={data.lat} name={'lat'} className={'w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'} /></div>
              <div>Long: <input type={`text`} onChange={(e) => handleChange(e)} value={data.long} className={'w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'} /></div>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Address</label>
              <textarea
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={data.address}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Area</label>
              <textarea
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={data.area}
                onChange={(e) => handleChange(e)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Price</label>
              <input
                type="number"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={data.price}
                onChange={(e: any) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Deposit</label>
              <input
                type="number"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                value={data.deposit}
                onChange={(e: any) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2">Other Charges</label>
              {otherCharges.map((charge: any, index: number) => (
                <input
                  key={index}
                  type="text"
                  className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                  value={charge}
                  onChange={(e) => handleOtherCharges(e, index)}
                />
              ))}
              <button
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
                onClick={handleAddCharge}
                type="button"
              >
                Add
              </button>
            </div>
            <div className='space-y-2'>
              <label
                htmlFor="availablity"
                className="block text-sm font-medium text-gray-700"
              >
                Availablity
              </label>
              <div className="mt-1">
                <select
                  id="availablity"
                  name="availablity"
                  value={availablity}
                  onChange={handleAvailablityChange}
                  className="rounded-md border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full p-2"
                >
                  <option value="Immediately">Immediately</option>
                  <option value="Not Available">Not Available</option>
                  <option value="After While">After While</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </BasicContainer>
  );
};

export async function getStaticProps(context) {
  
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default NewPropertyPage;

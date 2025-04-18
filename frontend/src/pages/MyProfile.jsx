import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    const updateUserProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            formData.append('removeImage', !image && !userData.image ? 'true' : 'false');

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return userData ? (
        <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>

            {isEdit ? (
  <div className='inline-block relative'>
    <div className='w-24 h-24 bg-gray-100 rounded-md overflow-hidden border border-gray-300 shadow-sm flex items-center justify-center relative'>
      {(image || userData.image) ? (
        <>
          <img
            className='w-full h-full object-cover'
            src={image ? URL.createObjectURL(image) : userData.image}
            alt="Profile"
          />

          <div
            onClick={() => document.getElementById('imageUploadInput').click()}
            className='absolute bottom-1 right-1 bg-blue-500 p-1.5 rounded-full shadow-md cursor-pointer'
          >
            <img className='w-5 h-5' src={assets.upload_icon} alt="Upload Icon" />
          </div>
        </>
      ) : (
        <>
          <img
            className='w-full h-full object-cover'
            src={assets.upload_area}
            alt="Upload Placeholder"
          />

          <div
            onClick={() => document.getElementById('imageUploadInput').click()}
            className='absolute inset-0 flex items-center justify-center cursor-pointer'
          >
            <div className='bg-blue-500 p-2 rounded-full shadow-md'>
              <img className='w-6 h-6' src={assets.upload_icon} alt="Upload Icon" />
            </div>
          </div>
        </>
      )}
    </div>

    {/* Hidden File Input */}
    <input
      type="file"
      id="imageUploadInput"
      hidden
      onChange={(e) => setImage(e.target.files[0])}
    />

    {(image || userData.image) && (
      <div
        onClick={(e) => {
          e.preventDefault();
          setImage(null);
          setUserData((prev) => ({ ...prev, image: '' }));
        }}
        className='text-sm text-red-500 mt-2 underline cursor-pointer'>Remove Image</div>
    )}
  </div>
) : (
  <div className='w-24 h-24 bg-gray-100 rounded-md overflow-hidden border border-gray-300 shadow-sm flex items-center justify-center'>
    <img
      className='w-full h-full object-cover'
      src={userData.image || assets.upload_area}
      alt="Profile"
    />
  </div>
)}




            {isEdit
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
                : <p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
            }

            <hr className='bg-[#ADADAD] h-[1px] border-none' />

            <div>
                <p className='text-gray-700 underline mt-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{userData.email}</p>
                    <p className='font-medium'>Phone:</p>

                    {isEdit
                        ? <input className='bg-gray-50 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                        : <p className='text-blue-500'>{userData.phone}</p>
                    }

                    <p className='font-medium'>Address:</p>

                    {isEdit
                        ? <p>
                            <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                            <br />
                            <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
                        : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }

                </div>
            </div>
            <div>
                <p className='text-gray-700 underline mt-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
                    <p className='font-medium'>Gender:</p>

                    {isEdit
                        ? <select className='max-w-20 bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-500'>{userData.gender}</p>
                    }

                    <p className='font-medium'>Birthday:</p>

                    {isEdit
                        ? <input className='max-w-28 bg-gray-50' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                        : <p className='text-gray-500'>{userData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-10'>

                {isEdit
                    ? <button onClick={updateUserProfileData} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
                    : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
                }

            </div>
        </div>
    ) : null
}

export default MyProfile

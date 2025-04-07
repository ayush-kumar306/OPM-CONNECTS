import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Om Shankar Singh',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Om has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 100,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Priya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 120,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Ayush Kumar',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Ayush has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 100,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Raj',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Raj has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 80,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Gazal',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gazal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 120,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Vishu',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vishu has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Ajay Kumar',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ajay has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Yash',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Yash has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 100,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Gevi Sharma',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Gevi has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Anurag Singh',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Anurag has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Gauri Sharma',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gauri has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 80,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Yug Kapoor',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Yug has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 100,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Garima',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Garima has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 80,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Rahul Singh',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rahul has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 90,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Muskan Singh',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Muskan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 120,
        address: {
            line1: 'Plot No. 306, Krishna Tower',
            line2: 'Chira Chas, Bokaro Steel City, Jharkhand'
        }
    },
]
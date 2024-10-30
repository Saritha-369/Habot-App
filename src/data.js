import signupIcon from './assets/img/signup.png'; 
import RequirementIcon from './assets/img/req.png'; 
import Review from './assets/img/review.png'; 
import Suppliers from './assets/img/suppliers.png';
import Contact from './assets/img/contact.png';
import Feedback from './assets/img/feedback.png'; 

export const steps = [
  {
    id: 1,
    icon: signupIcon,
    title: 'Select Your Role and Sign Up',
    bgColor: 'rgba(232, 251, 255, 1)',
  },
  {
    id: 2,
    icon: RequirementIcon,
    title: 'Buyers Post Your Requirements',
    bgColor: 'white', 
  },
  {
    id: 3,
    icon: Review,
    title: 'Review, Select, and Contact the Best Suppliers',
    bgColor: 'rgba(232, 251, 255, 1)', 
  },
  {
    id: 4,
    icon: Suppliers,
    title: 'Suppliers Complete Your Profile and Get Notified for Opportunities',
    bgColor: 'white', 
  },
  {
    id: 5,
    icon: Contact,
    title: 'Contact to Buyers and Share Your Quote for the Service',
    bgColor: 'rgba(232, 251, 255, 1)', 
  },
  {
    id: 6,
    icon: Feedback,
    title: 'Both Parties Can Connect and Make Business Leave Feedback',
    bgColor: 'white', 
  },
];

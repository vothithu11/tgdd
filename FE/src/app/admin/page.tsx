'use client'
import Form from '../../components/auth/Form';
interface IFormData{
  title: string;
  desc: string;
  salePrice: number;
  main_image:string,
}
const AdminPage = () => {

  const createProduct = async (formData:IFormData) => {
    try {
   
      if (!formData) return; 

      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),  
      });

      if (response.ok) {
        console.log('ok') 
      }
    } catch (error) {
      console.error(error); 
    }
  };

  return <Form handleProduct={createProduct} />;
};

export default AdminPage;
